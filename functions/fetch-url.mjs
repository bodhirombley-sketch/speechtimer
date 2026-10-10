// Netlify Function: haalt de tekst van een webpagina op (de browser kan dat niet door CORS).
import { lookup } from 'node:dns/promises';
export const config = { path: '/api/fetch-url' };

const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || 'https://every-tool.netlify.app').split(',').map(s => s.trim());
const MAX_BYTES = 1_500_000;
const MAX_CHARS = 40000;
const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json' } });

function isPrivateIp(ip) {
  if (ip.includes(':')) {
    const l = ip.toLowerCase();
    if (l.startsWith('::ffff:')) return isPrivateIp(l.slice(7));
    return l === '::1' || l === '::' || l.startsWith('fc') || l.startsWith('fd') || l.startsWith('fe80');
  }
  const [a, b] = ip.split('.').map(Number);
  return a === 0 || a === 10 || a === 127 || a >= 224 || (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) || (a === 100 && b >= 64 && b <= 127);
}

async function assertPublicUrl(u) {
  if (!['http:', 'https:'].includes(u.protocol)) throw new Error('Alleen http(s)-links zijn toegestaan.');
  const host = u.hostname.toLowerCase();
  if (host === 'localhost' || host.endsWith('.local') || host.endsWith('.internal') || host.endsWith('.localhost')) {
    throw new Error('Deze link is niet toegestaan.');
  }
  if (/youtube\.com$|youtu\.be$/.test(host)) {
    throw new Error('YouTube-video\'s kan ik nog niet automatisch lezen. Plak het transcript als .txt-bestand.');
  }
  const addrs = await lookup(host, { all: true });
  if (!addrs.length || addrs.some(a => isPrivateIp(a.address))) throw new Error('Deze link is niet toegestaan.');
}

function extract(html) {
  const title = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '';
  const text = html
    .replace(/<(script|style|noscript|svg|head)[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<\/(p|div|li|h[1-6]|tr|br|section|article)>|<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/[ \t]+/g, ' ').replace(/\n\s*\n+/g, '\n').trim();
  return { title: title.replace(/\s+/g, ' ').trim().slice(0, 150), text: text.slice(0, MAX_CHARS) };
}

export default async (request) => {
  if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);
  const origin = request.headers.get('origin');
  if (origin && !ALLOWED_ORIGINS.includes(origin)) return json({ error: 'Niet toegestaan' }, 403);

  let input;
  try { input = String((await request.json()).url || '').trim(); } catch { return json({ error: 'Ongeldige invoer' }, 400); }
  if (!input) return json({ error: 'Geen link ontvangen' }, 400);
  if (!/^https?:\/\//i.test(input)) input = 'https://' + input;

  try {
    let url = new URL(input);
    let res;
    for (let hop = 0; hop < 4; hop++) {           // redirects handmatig volgen en elke stap controleren
      await assertPublicUrl(url);
      res = await fetch(url, {
        redirect: 'manual',
        signal: AbortSignal.timeout(8000),
        headers: { 'User-Agent': 'EveryToolStudyHub/1.0', 'Accept': 'text/html,text/plain' }
      });
      if (res.status >= 300 && res.status < 400 && res.headers.get('location')) {
        url = new URL(res.headers.get('location'), url);
        continue;
      }
      break;
    }
    if (!res.ok) throw new Error('De pagina gaf een foutmelding (' + res.status + ').');
    const type = res.headers.get('content-type') || '';
    if (!/text\/(html|plain)/i.test(type)) throw new Error('Alleen webpagina\'s en tekst worden ondersteund (geen PDF of afbeelding via link).');

    const reader = res.body.getReader();
    const chunks = []; let total = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value); total += value.length;
      if (total > MAX_BYTES) { await reader.cancel(); break; }
    }
    const raw = new TextDecoder().decode(Buffer.concat(chunks));
    const { title, text } = /html/i.test(type) ? extract(raw) : { title: '', text: raw.slice(0, MAX_CHARS) };
    if (text.length < 50) throw new Error('Er is te weinig leesbare tekst gevonden op deze pagina.');
    return json({ title: title || url.hostname, text });
  } catch (e) {
    return json({ error: e.message || 'Ophalen mislukt' }, 422);
  }
};
