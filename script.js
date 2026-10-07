// Globale variabelen voor taal en actieve tool
let currentTool = 'home';
let currentLang = localStorage.getItem('everyToolLang') || 'nl';

// Functie om van tool en/of taal te wisselen
function selectTool(toolId, lang = currentLang, pushHistory = true) {
  currentTool = toolId;
  currentLang = lang;
  localStorage.setItem('everyToolLang', lang);

  if (pushHistory) {
    const newHash = toolId === 'home' ? '#' : `#${toolId}`;
    window.history.pushState({ tool: toolId }, '', newHash);
  }

  // Wissel actieve tabbladen
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  const targetTab = document.getElementById('tab-' + toolId);
  if (targetTab) targetTab.classList.add('active');

  // Blog weergave resetten indien nodig
  if (toolId !== 'blog') {
    const fullContent = document.getElementById('blogFullContent');
    const listContainer = document.getElementById('blogListContainer');
    if (fullContent && listContainer) {
      fullContent.classList.remove('active');
      listContainer.style.display = 'block';
    }
  }

  closeSidebar();
  document.querySelectorAll('.lang-dropdown').forEach(d => d.classList.remove('show'));
  document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('open'));
  document.querySelectorAll('.lang-switcher-top button').forEach(b => b.classList.remove('active'));

  const langCap = lang.charAt(0).toUpperCase() + lang.slice(1);
  const langBtn = document.getElementById(`langBtn${langCap}`);
  if (langBtn) langBtn.classList.add('active');

  const t = translations[lang] || translations['nl'];

  // Paginatitel bijwerken
  if (t.pageTitles && t.pageTitles[toolId]) {
    document.title = t.pageTitles[toolId];
  } else {
    document.title = "Every-Tool | Gratis Online Handige Tools";
  }

  // 1. Vertaal alle elementen met een data-i18n attribuut
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerText = t[key];
    }
  });

  // 2. Vertaal placeholders met data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  // 3. Vertaal op basis van ID (voor elementen die direct gekoppeld zijn)
  document.querySelectorAll('[id]').forEach(el => {
    const id = el.id;
    if (t[id] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[id];
      } else {
        el.innerText = t[id];
      }
    }
  });

  // Specifieke knoppen en statussen bijwerken
  document.querySelectorAll('.clear-btn').forEach(btn => {
    btn.innerText = t.clearText;
  });

  const searchBtn = document.getElementById('homeSearchBtn');
  if (searchBtn) searchBtn.innerHTML = `<span>${t.searchBtn}</span> 🔍`;
  
  const convStatus = document.getElementById('converterStatusText');
  if (convStatus && !convStatus.dataset.converted) {
    convStatus.innerText = t.convStatus;
  }

  // Tool-specifieke updates uitvoeren indien nodig
  if (toolId === 'timer') calcTimer();
  if (toolId === 'checker') updateCheckerStats();
  if (toolId === 'ai') checkAI();
}

// Hulpfunctie om de sidebar te sluiten
function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.classList.remove('open');
  }
}

// Initialisatie bij het laden van de pagina
document.addEventListener('DOMContentLoaded', () => {
  // Controleer of er een hash in de URL staat (bijv. #checker)
  const hash = window.location.hash.replace('#', '');
  const initialTool = hash && document.getElementById('tab-' + hash) ? hash : 'home';
  
  selectTool(initialTool, currentLang, false);

  // Luister naar knoppen voor taalwissel
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      selectTool(currentTool, selectedLang, true);
    });
  });

  // Luister naar browser navigatie (terug/vooruit knop)
  window.addEventListener('popstate', (event) => {
    const tool = event.state && event.state.tool ? event.state.tool : 'home';
    selectTool(tool, currentLang, false);
  });
});
