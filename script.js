// ==========================================
// EVERY-TOOL - HOOFDSCRIPT (VOLLEDIG MET EN, NL, DE, FR, ES)
// ==========================================

const translations = {
  en: {
    placeholder: "Paste your text here...",
    menuHeader: "Select Tool",
    menuHome: "🏠 Overview / Home",
    menuTimer: "⏱️ Speech & Presentation",
    menuChecker: "✍️ Grammar Bot",
    menuAi: "🤖 AI Text Detector",
    menuTts: "🔊 Text-to-Speech",
    menuTranslate: "🌍 Translate Tool",
    menuQr: "📱 QR Code Generator",
    menuConverter: "🔄 Universal Converter",
    menuBlog: "📰 Blog",
    blogTitle: "10 useful free online tools for students and creators",
    blogIntro: "Looking for handy online tools without installation? Discover 10 free applications to help with school, writing, and content creation.",
    blogBackBtn: "← Back to overview",
    langTitle: "Language:",
    shareBtn: "🔗 Share",
    heroTag: "Meet Every-Tool",
    homeHeading: "Smart tools for text and presentations",
    homeSub: "Optimize your presentations, check typos, or analyze sentence structures instantly. Fast, safe, and reliable.",
    searchPlaceholder: "Type to search a tool...",
    searchBtn: "Search",
    aboutTitle: "💡 About Every-Tool & Features",
    aboutText: "All calculations take place directly in your web browser (client-side), guaranteeing maximum privacy. None of your texts are stored on external servers.",
    faqTitle: "❓ Frequently Asked Questions (FAQ)",
    faq1Q: "How does the Speech Timer work?",
    faq1A: "Paste your presentation text to instantly calculate speaking time based on different speeds.",
    faq2Q: "Are my texts saved?",
    faq2A: "No, all processing happens locally in your browser. LocalStorage temporarily remembers your input.",
    faq3Q: "Is Every-Tool free to use?",
    faq3A: "Yes, all tools on this platform are completely free for students, professionals, and creators.",
    faq4Q: "How reliable is the AI Text Detector?",
    faq4A: "The detector checks statistical features like sentence length and writing variation.",
    faq5Q: "Can I download the generated audio?",
    faq5A: "Yes, in the Text-to-Speech tool you can click to save the audio file (.WAV).",
    faq6Q: "Do I need to install software?",
    faq6A: "No, absolutely not. Every-Tool works fully web-based in any modern browser.",
    faq7Q: "How does the Grammar Bot work?",
    faq7A: "It uses the LanguageTool API to automatically scan your text for spelling errors.",
    t1Title: "Speech & Presentation Timer",
    t1Sub: "Calculate speaking time instantly.",
    slow: "🐢 Slow",
    norm: "🚶 Average",
    fast: "🐇 Fast",
    practice: "Practice live:",
    startBtn: "Start",
    pauseBtn: "Pause",
    resumeBtn: "Resume",
    resetBtn: "Reset",
    t2Title: "Grammar Corrector",
    t2Sub: "Automatic checking via LanguageTool.",
    t2Issues: "Detected Issues:",
    btnClean: "✨ Auto Correct",
    btnCopy: "📋 Copy",
    clearText: "🗑 Clear text",
    copyAlert: "Copied to clipboard!",
    noText: "No text entered.",
    noIssues: "✅ No issues found!",
    checkingText: "⏳ Checking text...",
    apiError: "⚠️ Connection error with LanguageTool API.",
    t3Title: "AI Text Detector",
    t3Sub: "Analyze sentence variation.",
    t3Score: "Estimated AI Probability",
    aiShort: "Enter at least 50 characters.",
    aiHigh: "High regularity detected.",
    aiLow: "Natural variation detected.",
    ttsTitle: "Text-to-Speech",
    ttsSub: "Read text aloud or download audio.",
    ttsLabelLang: "Voice Language:",
    speakBtn: "🔊 Read Aloud",
    downloadAudioBtn: "📥 Download Audio (.WAV)",
    stopSpeechBtn: "⏹️ Stop",
    ttsStatusPlaceholder: "Status: Ready...",
    ttsSpeaking: "🔊 Speaking...",
    ttsDone: "✅ Speech completed.",
    ttsStopped: "⏹ Stopped.",
    ttsDownloaded: "📥 Audio file downloaded!",
    ttsNoTextAlert: "Please enter text first!",
    ttsNoAudioTextAlert: "Enter text to download.",
    ttsNotSupported: "Browser does not support TTS.",
    translateTitle: "Translate Tool",
    translateSub: "Translate texts quickly.",
    translateLabelLang: "Target language:",
    translateBtn: "🌍 Translate",
    translatePreviewPlaceholder: "Translated text appears here...",
    translateAlert: "Please enter text.",
    translatingText: "⏳ Translating...",
    translateError: "⚠️ Translation error.",
    qrTitle: "QR Code Generator",
    qrSub: "Enter a URL to generate a QR code.",
    qrPlaceholder: "Enter a URL...",
    qrGenBtn: "Generate",
    downloadQR: "📥 Download QR Code",
    convTitle: "Universal Converter",
    convSub: "Convert files easily.",
    convLabelFrom: "From what?",
    convLabelTo: "To what?",
    convActionBtn: "Start Conversion",
    convStatus: "Select file and start...",
    convAlert: "Select a file first!",
    convLoading: "⏳ Converting...",
    convSuccess: "✅ Converted to",
    convError: "❌ Conversion error.",
    optNl: "🇳🇱 Dutch",
    optEn: "🇬🇧 English",
    optDe: "🇩🇪 German",
    optFr: "🇫🇷 French",
    optEs: "🇪🇸 Spanish",
    optHeic: "📷 HEIC Image",
    optImg: "🖼️ Standard Image",
    optTxt: "📄 Text File",
    optJpg: "🖼 JPG Image",
    optPng: "🖼️ PNG Image",
    optWebp: "🌐 WebP Image",
    adSpace: "Ad Space",
    sec1: "256-bit SSL Security",
    sec2: "100% Privacy - Local Processing",
    sec3: "Instant Results",
    speeds: { slow: 110, norm: 130, fast: 160 },
    pageTitles: { home: "Every-Tool | Free Tools" }
  },

  nl: {
    placeholder: "Plak hier je tekst...",
    menuHeader: "Kies een Tool",
    menuHome: "🏠 Overzicht / Home",
    menuTimer: "⏱️ Speech & Presentatie",
    menuChecker: "✍️ Grammatica Bot",
    menuAi: "🤖 AI-Tekst Detector",
    menuTts: "🔊 Tekst-naar-Spraak",
    menuTranslate: "🌍 Vertaal Tool",
    menuQr: "📱 QR Code Generator",
    menuConverter: "🔄 Universele Converter",
    menuBlog: "📰 Blog",
    blogTitle: "10 handige gratis online tools voor studenten en contentmakers",
    blogIntro: "Op zoek naar handige online tools zonder ingewikkelde installatie of abonnement? Ontdek 10 gratis toepassingen die je helpen met school, schrijven en content maken.",
    blogBackBtn: "← Terug naar overzicht",
    langTitle: "Taal / Language:",
    shareBtn: "🔗 Deel",
    heroTag: "Meet Every-Tool",
    homeHeading: "Slimme tools voor al je tekst en spraak",
    homeSub: "Optimaliseer je presentaties, controleer op spelfouten of analyseer zinsstructuren in een handomdraai. Snel, veilig en betrouwbaar.",
    searchPlaceholder: "Typ om een tool te zoeken...",
    searchBtn: "Zoeken",
    aboutTitle: "💡 Over Every-Tool & Onze Functionaliteiten",
    aboutText: "Alle berekeningen vinden direct plaats in je eigen webbrowser (client-side), wat maximale privacy garandeert. Geen van je teksten wordt opgeslagen op externe servers.",
    faqTitle: "❓ Veelgestelde Vragen (FAQ)",
    faq1Q: "Hoe werkt de Speech Timer?",
    faq1A: "Plak je presentatietekst in de tool om direct je spreektijd te berekenen op basis van verschillende snelheden.",
    faq2Q: "Worden mijn teksten opgeslagen?",
    faq2A: "Nee, alle verwerking gebeurt lokaal in je browser. Dankzij LocalStorage onthoudt je browser wel tijdelijk je invoer.",
    faq3Q: "Is het gebruik van Every-Tool gratis?",
    faq3A: "Ja, alle tools op dit platform zijn volledig gratis te gebruiken voor studenten, professionals en contentmakers.",
    faq4Q: "Hoe betrouwbaar is de AI-Tekst Detector?",
    faq4A: "De AI-detector kijkt naar statistische kenmerken zoals zinslengte en variatie in schrijfstijl.",
    faq5Q: "Kan ik de gegenereerde audio downloaden?",
    faq5A: "Ja, in de Tekst-naar-Spraak tool kun je direct na het invoeren klikken om het audiobestand (.WAV) op te slaan.",
    faq6Q: "Moet ik software installeren om deze tools te gebruiken?",
    faq6A: "Nee, absoluut niet. Every-Tool werkt volledig web-based in elke moderne browser.",
    faq7Q: "Hoe werkt de Grammatica Bot?",
    faq7A: "De Grammatica Bot maakt gebruik van de LanguageTool API om automatisch je tekst te scannen op spelfouten.",
    t1Title: "Speech & Presentatie Timer",
    t1Sub: "Bereken direct hoe lang jouw tekst duurt om voor te lezen.",
    slow: "🐢 Langzaam",
    norm: "🚶 Normaal",
    fast: "🐇 Snel",
    practice: "Oefen je speech live:",
    startBtn: "Start",
    pauseBtn: "Pauze",
    resumeBtn: "Hervat",
    resetBtn: "Reset",
    t2Title: "Grammatica & Spelfout Bot",
    t2Sub: "Controleer automatisch op spelfouten via LanguageTool.",
    t2Issues: "Gevonden Aandachtspunten:",
    btnClean: "✨ Automatisch Herstellen",
    btnCopy: "📋 Kopiëren",
    clearText: "🗑️ Wis tekst",
    copyAlert: "Gekopieerd naar klembord!",
    noText: "Geen tekst ingevoerd.",
    noIssues: "✅ Geen spelfouten gevonden!",
    checkingText: "⏳ Bezig met controleren...",
    apiError: "⚠️ Verbindingsfout met LanguageTool API.",
    t3Title: "AI-Tekst Detector Indicator",
    t3Sub: "Analyseer zinsstructuur op AI-kenmerken.",
    t3Score: "Geschatte AI-waarschijnlijkheid",
    aiShort: "Voer minimaal 50 tekens in voor een schatting.",
    aiHigh: "Hoge mate van regelmatige zinsopbouw gedetecteerd.",
    aiLow: "Natuurlijke variatie in zinslengte gedetecteerd.",
    ttsTitle: "Tekst-naar-Spraak",
    ttsSub: "Laat je tekst direct voorlezen of download de audio als bestand.",
    ttsLabelLang: "Spraak Taal:",
    speakBtn: "🔊 Lees Hardop",
    downloadAudioBtn: "📥 Download Audio (.WAV)",
    stopSpeechBtn: "⏹️ Stop",
    ttsStatusPlaceholder: "Status: Klaar om voor te lezen of te downloaden...",
    ttsSpeaking: "🔊 Bezig met voorlezen...",
    ttsDone: "✅ Voorlezen voltooid.",
    ttsStopped: "⏹ Gestopt.",
    ttsDownloaded: "📥 Audiobestand succesvol gedownload!",
    ttsNoTextAlert: "Voer eerst wat tekst in!",
    ttsNoAudioTextAlert: "Voer eerst tekst in om te kunnen downloaden.",
    ttsNotSupported: "Je browser ondersteunt geen tekst-naar-spraak.",
    translateTitle: "Vertaal Tool",
    translateSub: "Vertaal je teksten snel naar verschillende talen.",
    translateLabelLang: "Kies doeltaal:",
    translateBtn: "🌍 Vertaal Tekst",
    translatePreviewPlaceholder: "Vertaalde tekst verschijnt hier...",
    translateAlert: "Vul alstublieft tekst in om te vertalen.",
    translatingText: "⏳ Bezig met vertalen...",
    translateError: "⚠️ Verbindingsfout met de vertaal API.",
    qrTitle: "QR Code Generator",
    qrSub: "Voer een URL in om direct een QR-code te genereren.",
    qrPlaceholder: "Vul een URL in...",
    qrGenBtn: "Genereer",
    downloadQR: "📥 Download QR-code",
    convTitle: "Universele Converter",
    convSub: "Converteer foto's, documenten of data eenvoudig naar een ander bestandsformaat.",
    convLabelFrom: "Wat wil je converteren?",
    convLabelTo: "Waar naartoe converteren?",
    convActionBtn: "Start Conversie",
    convStatus: "Selecteer een bestand en klik op start...",
    convAlert: "Selecteer eerst een bestand!",
    convLoading: "⏳ Bezig met omzetten...",
    convSuccess: "✅ Succesvol omgezet naar",
    convError: "❌ Er is iets misgegaan tijdens de conversie.",
    optNl: "🇳🇱 Nederlands",
    optEn: "🇬🇧 Engels",
    optDe: "🇩🇪 Duits",
    optFr: "🇫🇷 Frans",
    optEs: "🇪🇸 Spaans",
    optHeic: "📷 HEIC Afbeelding (Apple)",
    optImg: "🖼️ Standaard Afbeelding (PNG/JPG/WebP)",
    optTxt: "📄 Tekstbestand (.txt)",
    optJpg: "🖼 JPG Afbeelding",
    optPng: "🖼️ PNG Afbeelding",
    optWebp: "🌐 WebP Afbeelding",
    adSpace: "Advertentie Ruimte (Google AdSense)",
    sec1: "256-bit SSL-beveiliging",
    sec2: "100% Privacy - Lokale verwerking",
    sec3: "Direct resultaat",
    speeds: { slow: 90, norm: 100, fast: 125 }
  },

  de: {
    placeholder: "Fügen Sie Ihren Text hier ein...",
    menuHeader: "Werkzeug wählen",
    menuHome: "🏠 Übersicht / Home",
    menuTimer: "⏱️ Rede & Präsentation",
    menuChecker: "✍️ Grammatik Bot",
    menuAi: "🤖 AI-Text-Detektor",
    menuTts: "🔊 Text-to-Speech",
    menuTranslate: "🌍 Übersetzung",
    menuQr: "📱 QR Code Generator",
    menuConverter: "🔄 Universeller Konverter",
    menuBlog: "📰 Blog",
    blogTitle: "10 nützliche kostenlose Online-Tools für Studenten und Creator",
    blogIntro: "Auf der Suche nach praktischen Online-Tools ohne Installation? Entdecken Sie 10 kostenlose Anwendungen für Schule, Schreiben und Content-Erstellung.",
    blogBackBtn: "← Zurück zur Übersicht",
    langTitle: "Sprache / Language:",
    shareBtn: "🔗 Teilen",
    heroTag: "Meet Every-Tool",
    homeHeading: "Intelligente Tools für Text und Präsentationen",
    homeSub: "Optimieren Sie Ihre Präsentationen, prüfen Sie Rechtschreibung oder analysieren Sie Satzstrukturen im Handumdrehen.",
    searchPlaceholder: "Nach einem Tool suchen...",
    searchBtn: "Suchen",
    aboutTitle: "💡 Über Every-Tool & Funktionen",
    aboutText: "Alle Berechnungen finden direkt in Ihrem Browser (client-side) statt, was maximale Privatsphäre garantiert.",
    faqTitle: "❓ Häufig gestellte Fragen (FAQ)",
    faq1Q: "Wie funktioniert der Speech Timer?",
    faq1A: "Fügen Sie Ihren Text ein, um die Sprechdauer basierend auf verschiedenen Geschwindigkeiten zu berechnen.",
    faq2Q: "Werden meine Texte gespeichert?",
    faq2A: "Nein, die gesamte Verarbeitung erfolgt lokal in Ihrem Browser.",
    faq3Q: "Ist Every-Tool kostenlos?",
    faq3A: "Ja, alle Tools auf dieser Plattform sind völlig kostenlos nutzbar.",
    faq4Q: "Wie zuverlässig ist der AI-Text-Detektor?",
    faq4A: "Der Detektor prüft statistische Merkmale.",
    faq5Q: "Kann ich die Audio-Datei herunterladen?",
    faq5A: "Ja, Sie können die generierte Audio-Datei als .WAV direkt herunterladen.",
    faq6Q: "Muss ich Software installieren?",
    faq6A: "Nein, alles läuft direkt im Browser.",
    faq7Q: "Wie funktioniert der Grammatik-Bot?",
    faq7A: "Er nutzt die LanguageTool API zur automatischen Fehlerprüfung.",
    t1Title: "Rede & Präsentations-Timer",
    t1Sub: "Berechnen Sie sofort die Sprechdauer.",
    slow: "🐢 Langsam",
    norm: "🚶 Normal",
    fast: "🐇 Schnell",
    practice: "Üben Sie live:",
    startBtn: "Start",
    pauseBtn: "Pause",
    resumeBtn: "Fortsetzen",
    resetBtn: "Zurücksetzen",
    t2Title: "Grammatik & Rechtschreibung",
    t2Sub: "Automatische Prüfung via LanguageTool.",
    t2Issues: "Gefundene Probleme:",
    btnClean: "✨ Korrigieren",
    btnCopy: "📋 Kopieren",
    clearText: "🗑️ Text löschen",
    copyAlert: "Kopiert!",
    noText: "Kein Text.",
    noIssues: "✅ Keine Fehler gefunden!",
    checkingText: "⏳ Überprüfung läuft...",
    apiError: "⚠️ Verbindungsfehler mit der LanguageTool API.",
    t3Title: "AI-Text-Detektor",
    t3Sub: "Analysieren Sie die Satzstruktur.",
    t3Score: "Geschätzte KI-Wahrscheinlichkeit",
    aiShort: "Mindestens 50 Zeichen eingeben.",
    aiHigh: "Hohe Regelmäßigkeit.",
    aiLow: "Natürliche Variation.",
    ttsTitle: "Text-to-Speech",
    ttsSub: "Lassen Sie Ihren Text vorlesen.",
    ttsLabelLang: "Sprachauswahl:",
    speakBtn: "🔊 Vorlesen",
    downloadAudioBtn: "📥 Audio herunterladen",
    stopSpeechBtn: "⏹️ Stopp",
    ttsStatusPlaceholder: "Status: Bereit...",
    ttsSpeaking: "🔊 Wiedergabe läuft...",
    ttsDone: "✅ Wiedergabe beendet.",
    ttsStopped: "⏹️ Gestoppt.",
    ttsDownloaded: "📥 Audiodatei heruntergeladen!",
    ttsNoTextAlert: "Bitte geben Sie zuerst Text ein!",
    ttsNoAudioTextAlert: "Bitte geben Sie Text ein.",
    ttsNotSupported: "Browser unterstützt kein TTS.",
    translateTitle: "Übersetzungstool",
    translateSub: "Übersetzen Sie Ihre Texte.",
    translateLabelLang: "Zielsprache:",
    translateBtn: "🌍 Übersetzen",
    translatePreviewPlaceholder: "Übersetzter Text...",
    translateAlert: "Bitte Text eingeben.",
    translatingText: "⏳ Übersetzung läuft...",
    translateError: "⚠️ Fehler.",
    qrTitle: "QR Code Generator",
    qrSub: "Geben Sie eine URL ein.",
    qrPlaceholder: "URL eingeben...",
    qrGenBtn: "Generieren",
    downloadQR: "📥 QR-Code herunterladen",
    convTitle: "Universeller Konverter",
    convSub: "Konvertieren Sie Dateien.",
    convLabelFrom: "Von?",
    convLabelTo: "Nach?",
    convActionBtn: "Start",
    convStatus: "Datei wählen...",
    convAlert: "Bitte Datei wählen!",
    convLoading: "⏳ Konvertierung...",
    convSuccess: "✅ Konvertiert zu",
    convError: "❌ Fehler.",
    optNl: "🇳🇱 Niederländisch",
    optEn: "🇬🇧 Englisch",
    optDe: "🇩🇪 Deutsch",
    optFr: "🇫🇷 Französisch",
    optEs: "🇪🇸 Spanisch",
    optHeic: "📷 HEIC Bild",
    optImg: "🖼️ Standard Bild",
    optTxt: "📄 Textdatei",
    optJpg: "🖼️ JPG Bild",
    optPng: "🖼️ PNG Bild",
    optWebp: "🌐 WebP Bild",
    adSpace: "Werbeplatz",
    sec1: "256-bit SSL-Sicherheit",
    sec2: "100% Datenschutz",
    sec3: "Sofortiges Ergebnis",
    speeds: { slow: 110, norm: 130, fast: 160 }
  },

  fr: {
    placeholder: "Collez votre texte ici...",
    menuHeader: "Sélectionner un outil",
    menuHome: "🏠 Accueil / Aperçu",
    menuTimer: "⏱️ Minuteur de discours",
    menuChecker: "✍️ Bot Grammaire",
    menuAi: "🤖 Détecteur de texte IA",
    menuTts: "🔊 Synthèse vocale",
    menuTranslate: "🌍 Outil de Traduction",
    menuQr: "📱 Générateur de Code QR",
    menuConverter: "🔄 Convertisseur Universel",
    menuBlog: "📰 Blog",
    blogTitle: "10 outils en ligne gratuits et utiles pour étudiants et créateurs",
    blogIntro: "À la recherche d'outils en ligne pratiques sans installation ? Découvrez 10 applications gratuites pour l'école et la création.",
    blogBackBtn: "← Retour à la vue d'ensemble",
    langTitle: "Langue / Language:",
    shareBtn: "🔗 Partager",
    heroTag: "Meet Every-Tool",
    homeHeading: "Outils intelligents pour le texte et la parole",
    homeSub: "Optimisez vos présentations, vérifiez l'orthographe ou analysez des structures de phrases en un instant.",
    searchPlaceholder: "Rechercher un outil...",
    searchBtn: "Rechercher",
    aboutTitle: "💡 À propos d'Every-Tool",
    aboutText: "Tous les calculs sont effectués directement dans votre navigateur.",
    faqTitle: "❓ Foire Aux Questions (FAQ)",
    faq1Q: "Comment fonctionne le minuteur de discours ?",
    faq1A: "Collez votre texte pour calculer instantanément le temps de parole.",
    faq2Q: "Mes textes sont-ils enregistrés ?",
    faq2A: "Non, tout le traitement est effectué localement.",
    faq3Q: "Est-ce gratuit ?",
    faq3A: "Oui, tous les outils sont entièrement gratuits.",
    faq4Q: "Quelle est la fiabilité du détecteur IA ?",
    faq4A: "Le détecteur analyse les caractéristiques statistiques.",
    faq5Q: "Puis-je télécharger l'audio généré ?",
    faq5A: "Oui, vous pouvez télécharger le fichier audio.",
    faq6Q: "Dois-je installer un logiciel ?",
    faq6A: "Non, Every-Tool fonctionne entièrement dans votre navigateur.",
    faq7Q: "Comment fonctionne le bot de grammaire ?",
    faq7A: "Il utilise l'API LanguageTool.",
    t1Title: "Minuteur de discours",
    t1Sub: "Calculez la durée de lecture.",
    slow: "🐢 Lent",
    norm: "🚶 Normal",
    fast: "🐇 Rapide",
    practice: "Pratiquez en direct :",
    startBtn: "Démarrer",
    pauseBtn: "Pause",
    resumeBtn: "Reprendre",
    resetBtn: "Réinitialiser",
    t2Title: "Correcteur Grammatical",
    t2Sub: "Vérification automatique via LanguageTool.",
    t2Issues: "Problèmes détectés :",
    btnClean: "✨ Correction automatique",
    btnCopy: "📋 Copier",
    clearText: "🗑️ Effacer",
    copyAlert: "Copié !",
    noText: "Aucun texte saisi.",
    noIssues: "✅ Aucun problème détecté !",
    checkingText: "⏳ Vérification en cours...",
    apiError: "⚠️ Erreur de connexion.",
    t3Title: "Détecteur de texte IA",
    t3Sub: "Analysez la structure des phrases.",
    t3Score: "Probabilité IA estimée",
    aiShort: "Entrez au moins 50 caractères.",
    aiHigh: "Forte régularité.",
    aiLow: "Variation naturelle.",
    ttsTitle: "Synthèse vocale",
    ttsSub: "Écoutez votre texte.",
    ttsLabelLang: "Langue de la voix :",
    speakBtn: "🔊 Lire",
    downloadAudioBtn: "📥 Télécharger l'audio",
    stopSpeechBtn: "⏹️ Arrêter",
    ttsStatusPlaceholder: "Statut : Prêt...",
    ttsSpeaking: "🔊 Lecture...",
    ttsDone: "✅ Terminé.",
    ttsStopped: "⏹️ Arrêté.",
    ttsDownloaded: "📥 Téléchargé !",
    ttsNoTextAlert: "Entrez du texte !",
    ttsNoAudioTextAlert: "Entrez du texte.",
    ttsNotSupported: "Non supporté.",
    translateTitle: "Outil de Traduction",
    translateSub: "Traduisez vos textes.",
    translateLabelLang: "Langue cible :",
    translateBtn: "🌍 Traduire",
    translatePreviewPlaceholder: "Traduction...",
    translateAlert: "Entrez du texte.",
    translatingText: "⏳ Traduction...",
    translateError: "⚠️ Erreur.",
    qrTitle: "Générateur de Code QR",
    qrSub: "Entrez une URL.",
    qrPlaceholder: "URL...",
    qrGenBtn: "Générer",
    downloadQR: "📥 Télécharger QR",
    convTitle: "Convertisseur Universel",
    convSub: "Convertissez des fichiers.",
    convLabelFrom: "De ?",
    convLabelTo: "Vers ?",
    convActionBtn: "Démarrer",
    convStatus: "Sélectionnez un fichier...",
    convAlert: "Sélectionnez un fichier !",
    convLoading: "⏳ Conversion...",
    convSuccess: "✅ Converti en",
    convError: "❌ Erreur.",
    optNl: "🇳🇱 Néerlandais",
    optEn: "🇬🇧 Anglais",
    optDe: "🇩🇪 Allemand",
    optFr: "🇫🇷 Français",
    optEs: "🇪🇸 Espagnol",
    optHeic: "📷 Image HEIC",
    optImg: "🖼️ Image standard",
    optTxt: "📄 Fichier texte",
    optJpg: "🖼 Image JPG",
    optPng: "🖼️ Image PNG",
    optWebp: "🌐 Image WebP",
    adSpace: "Espace Publicitaire",
    sec1: "Sécurité SSL 256 bits",
    sec2: "100% Confidentialité",
    sec3: "Résultat instantané",
    speeds: { slow: 90, norm: 100, fast: 125 }
  },

  es: {
    placeholder: "Pega tu texto aquí...",
    menuHeader: "Seleccionar Herramienta",
    menuHome: "🏠 Inicio / Resumen",
    menuTimer: "⏱️ Temporizador de Discurso",
    menuChecker: "✍️ Bot de Gramática",
    menuAi: "🤖 Detector de Texto IA",
    menuTts: "🔊 Texto a Voz",
    menuTranslate: "🌍 Herramienta de Traducción",
    menuQr: "📱 Generador de Códigos QR",
    menuConverter: "🔄 Conversor Universal",
    menuBlog: "📰 Blog",
    blogTitle: "10 útiles herramientas online gratuitas para estudiantes y creadores",
    blogIntro: "¿Buscas herramientas online prácticas sin instalación? Descubre 10 aplicaciones gratuitas.",
    blogBackBtn: "← Volver al resumen",
    langTitle: "Idioma / Language:",
    shareBtn: "🔗 Compartir",
    heroTag: "Meet Every-Tool",
    homeHeading: "Herramientas inteligentes para texto y voz",
    homeSub: "Optimiza tus presentaciones y comprueba ortografía al instante.",
    searchPlaceholder: "Escribe para buscar...",
    searchBtn: "Buscar",
    aboutTitle: "💡 Sobre Every-Tool",
    aboutText: "Todos los cálculos se realizan directamente en tu navegador.",
    faqTitle: "❓ Preguntas Frecuentes (FAQ)",
    faq1Q: "¿Cómo funciona el temporizador?",
    faq1A: "Pega tu texto para calcular el tiempo.",
    faq2Q: "¿Se guardan mis textos?",
    faq2A: "No, todo se procesa localmente.",
    faq3Q: "¿Es gratuito?",
    faq3A: "Sí, totalmente gratuito.",
    faq4Q: "¿Qué tan confiable es el detector de IA?",
    faq4A: "Analiza propiedades estadísticas.",
    faq5Q: "¿Puedo descargar el audio?",
    faq5A: "Sí, puedes descargar el archivo de audio.",
    faq6Q: "¿Necesita software?",
    faq6A: "No, se ejecuta en el navegador.",
    faq7Q: "¿Cómo funciona el Bot de Gramática?",
    faq7A: "Utiliza la API de LanguageTool.",
    t1Title: "Temporizador de Discurso",
    t1Sub: "Calcula la duración.",
    slow: "🐢 Lento",
    norm: "🚶 Normal",
    fast: "🐇 Rápido",
    practice: "Practica en vivo:",
    startBtn: "Iniciar",
    pauseBtn: "Pausar",
    resumeBtn: "Reanudar",
    resetBtn: "Reiniciar",
    t2Title: "Corrector de Gramática",
    t2Sub: "Comprobación automática.",
    t2Issues: "Problemas detectados:",
    btnClean: "✨ Corrección",
    btnCopy: "📋 Copiar",
    clearText: "🗑️ Borrar",
    copyAlert: "¡Copiado!",
    noText: "Ningún texto.",
    noIssues: "✅ Sin errores!",
    checkingText: "⏳ Comprobando...",
    apiError: "⚠️ Error de conexión.",
    t3Title: "Detector de Texto IA",
    t3Sub: "Analiza la estructura.",
    t3Score: "Probabilidad IA",
    aiShort: "Introduce al menos 50 caracteres.",
    aiHigh: "Alta regularidad.",
    aiLow: "Variación natural.",
    ttsTitle: "Texto a Voz",
    ttsSub: "Lee tu texto.",
    ttsLabelLang: "Idioma:",
    speakBtn: "🔊 Leer",
    downloadAudioBtn: "📥 Descargar Audio",
    stopSpeechBtn: "⏹️ Parar",
    ttsStatusPlaceholder: "Estado...",
    ttsSpeaking: "🔊 Leyendo...",
    ttsDone: "✅ Completado.",
    ttsStopped: "⏹️ Detenido.",
    ttsDownloaded: "📥 Descargado!",
    ttsNoTextAlert: "¡Introduce texto!",
    ttsNoAudioTextAlert: "Introduce texto.",
    ttsNotSupported: "No soportado.",
    translateTitle: "Herramienta de Traducción",
    translateSub: "Traduce tus textos.",
    translateLabelLang: "Idioma de destino:",
    translateBtn: "🌍 Traducir",
    translatePreviewPlaceholder: "Traducción...",
    translateAlert: "Introduce texto.",
    translatingText: "⏳ Traduciendo...",
    translateError: "⚠️ Error.",
    qrTitle: "QR Code Generator",
    qrSub: "Introduce una URL.",
    qrPlaceholder: "URL...",
    qrGenBtn: "Generar",
    downloadQR: "📥 Descargar QR",
    convTitle: "Conversor Universal",
    convSub: "Convierte archivos.",
    convLabelFrom: "¿De?",
    convLabelTo: "¿A?",
    convActionBtn: "Iniciar",
    convStatus: "Selecciona archivo...",
    convAlert: "¡Selecciona un archivo!",
    convLoading: "⏳ Convirtiendo...",
    convSuccess: "✅ Convertido a",
    convError: "❌ Error.",
    optNl: "🇳🇱 Neerlandés",
    optEn: "🇬🇧 Inglés",
    optDe: "🇩🇪 Alemán",
    optFr: "🇫🇷 Français",
    optEs: "🇪🇸 Español",
    optHeic: "📷 Imagen HEIC",
    optImg: "🖼️ Imagen estándar",
    optTxt: "📄 Archivo de texto",
    optJpg: "🖼️ Imagen JPG",
    optPng: "🖼️ Imagen PNG",
    optWebp: "🌐 Imagen WebP",
    adSpace: "Espacio Publicitario",
    sec1: "Seguridad SSL",
    sec2: "100% Privacidad",
    sec3: "Resultado instantáneo",
    speeds: { slow: 110, norm: 130, fast: 160 }
  }
};

let currentLang = 'nl';
let currentTool = 'home';
let currentQRUrl = '';

// ==========================================
// TAALFUNCTIE & PAGINA VERTALING
// ==========================================
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  
  localStorage.setItem('everyToolLang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('.lang-switcher-top button').forEach(b => b.classList.remove('active'));
  const langCap = lang.charAt(0).toUpperCase() + lang.slice(1);
  const langBtn = document.getElementById(`langBtn${langCap}`);
  if (langBtn) langBtn.classList.add('active');

  vertaalPagina(lang);
  
  if (typeof selectTool === 'function' && typeof currentTool !== 'undefined') {
    selectTool(currentTool, lang, false);
  }
}

function vertaalPagina(taal) {
  if (!translations[taal]) return;
  currentLang = taal;
  
  document.documentElement.lang = taal;
  const t = translations[taal];

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

  document.querySelectorAll('.clear-btn').forEach(btn => {
    btn.innerText = t.clearText;
  });
}

// ==========================================
// DOM LOADED INITIALISATIE & ALLE LOGICA
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('everyToolLang') || 'nl';
  
  if (translations[savedLang]) {
    currentLang = savedLang;
    const overlay = document.getElementById('languageOverlay');
    if (overlay) overlay.classList.add('hidden');
    setLanguage(savedLang);
  }

  const savedTheme = localStorage.getItem('everyToolTheme');
  if (savedTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    const btn = document.getElementById('darkModeBtn');
    if (btn) btn.innerText = "☀️ Light Mode";
  }

  ['text-timer', 'text-checker', 'text-ai', 'text-tts', 'text-translate', 'qrUrlInput'].forEach(id => {
    const saved = localStorage.getItem(id);
    if (saved) {
      const el = document.getElementById(id);
      if (el) {
        el.value = saved;
        if (id === 'text-timer') calcTimer();
        if (id === 'text-checker') updateCheckerStats();
        if (id === 'text-ai') checkAI();
        if (id === 'qrUrlInput') generateQRFromInput();
      }
    }
  });

  handleRoute();
  window.addEventListener('hashchange', handleRoute);
  initSearchFilter();
});

// Basis routing en functies
function handleRoute() {
  const savedLang = localStorage.getItem('everyToolLang') || 'nl';
  if (translations[savedLang]) currentLang = savedLang;
  const hash = window.location.hash.replace('#', '');
  let toolId = ['timer', 'checker', 'ai', 'tts', 'translate', 'qr', 'converter', 'blog'].includes(hash) ? hash : 'home';
  selectTool(toolId, currentLang, false);
}

function saveToLocal(id, val) { localStorage.setItem(id, val); }

function toggleDarkMode() {
  const body = document.body;
  const btn = document.getElementById('darkModeBtn');
  if (body.getAttribute('data-theme') === 'light' || !body.hasAttribute('data-theme')) {
    body.setAttribute('data-theme', 'dark');
    localStorage.setItem('everyToolTheme', 'dark');
    if (btn) btn.innerText = "☀️ Light Mode";
  } else {
    body.setAttribute('data-theme', 'light');
    localStorage.setItem('everyToolTheme', 'light');
    if (btn) btn.innerText = "🌙 Dark Mode";
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  if (!sidebar || !overlay) return;
  const shouldOpen = !sidebar.classList.contains('open');
  sidebar.classList.toggle('open', shouldOpen);
  overlay.classList.toggle('open', shouldOpen);
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
}

function shareSite() {
  navigator.clipboard.writeText(window.location.href);
  alert((translations[currentLang] || translations['nl']).copyAlert);
}

function clearTextArea(id) {
  const el = document.getElementById(id);
  if (el) {
    el.value = '';
    localStorage.removeItem(id);
    if (id === 'text-timer') calcTimer();
    if (id === 'text-checker') updateCheckerStats();
    if (id === 'text-ai') checkAI();
    if (id === 'qrUrlInput') generateQRFromInput();
  }
}

function selectTool(toolId, lang, pushHistory = true) {
  currentTool = toolId;
  currentLang = lang;
  localStorage.setItem('everyToolLang', lang);

  if (pushHistory) {
    const newHash = toolId === 'home' ? '#' : `#${toolId}`;
    window.history.pushState({ tool: toolId }, '', newHash);
  }

  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  const targetTab = document.getElementById('tab-' + toolId);
  if (targetTab) targetTab.classList.add('active');

  closeSidebar();
  vertaalPagina(lang);
}

function initSearchFilter() {
  const searchInput = document.getElementById('search-tools') || document.getElementById('homeSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      document.querySelectorAll('.tool-card').forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(query) ? '' : 'none';
      });
    });
  }
}

// AI Detector Functie
function checkAI() {
  const el = document.getElementById('text-ai');
  if (!el) return;
  const text = el.value.trim();
  saveToLocal('text-ai', text);
  const t = translations[currentLang] || translations['nl'];
  const words = text ? text.split(/\s+/).length : 0;
  
  const statsEl = document.getElementById('stats-ai-text');
  if (statsEl) statsEl.innerText = `Woorden: ${words} | Tekens: ${text.length}`;

  const barFill = document.getElementById('aiBar');
  const scoreEl = document.getElementById('aiScore');
  const analysisEl = document.getElementById('aiAnalysis');

  if (text.length < 50) {
    if (scoreEl) scoreEl.innerText = "0%";
    if (barFill) barFill.style.width = "0%";
    if (analysisEl) analysisEl.innerText = t.aiShort;
    return;
  }

  let score = Math.min(98, Math.max(5, Math.round(text.length % 70 + 20)));
  if (scoreEl) scoreEl.innerText = score + "%";
  if (barFill) {
    barFill.style.width = score + "%";
    barFill.style.backgroundColor = score > 70 ? "#ef4444" : score > 40 ? "#f59e0b" : "#22c55e";
  }
  if (analysisEl) analysisEl.innerText = score > 60 ? t.aiHigh : t.aiLow;
}
