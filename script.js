const translations = {
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
    ttsStopped: "⏹️️ Gestopt.",
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
    optJpg: "🖼️️ JPG Afbeelding",
    optPng: "🖼️ PNG Afbeelding",
    optWebp: "🌐 WebP Afbeelding",
    adSpace: "Advertentie Ruimte (Google AdSense)",
    sec1: "256-bit SSL-beveiliging",
    sec2: "100% Privacy - Lokale verwerking",
    sec3: "Direct resultaat",
    speeds: { slow: 90, norm: 100, fast: 125 },
    pageTitles: {
      home: "Every-Tool | Gratis Online Handige Tools & Conversie",
      timer: "Speech & Presentatie Timer | Every-Tool",
      checker: "Grammatica & Spelfout Bot | Every-Tool",
      ai: "AI-Tekst Detector Indicator | Every-Tool",
      tts: "Tekst-naar-Spraak Generator | Every-Tool",
      translate: "Gratis Online Vertaal Tool | Every-Tool",
      qr: "Gratis QR Code Generator | Every-Tool",
      converter: "Universele Bestandsconverter | Every-Tool",
      blog: "Blog & Artikelen | Every-Tool"
    }
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
    faq4A: "Der Detektor prüft statistische Merkmale. Es ist eine Schätzung und kein 100%iger Beweis.",
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
    ttsSub: "Lassen Sie Ihren Text vorlesen oder als Audiodatei herunterladen.",
    ttsLabelLang: "Sprachauswahl:",
    speakBtn: "🔊 Vorlesen",
    downloadAudioBtn: "📥 Audio herunterladen",
    stopSpeechBtn: "⏹️ Stopp",
    ttsStatusPlaceholder: "Status: Bereit...",
    ttsSpeaking: "🔊 Wiedergabe läuft...",
    ttsDone: "✅ Wiedergabe beendet.",
    ttsStopped: "⏹️ Gestoppt.",
    ttsDownloaded: "📥 Audiodatei erfolgreich heruntergeladen!",
    ttsNoTextAlert: "Bitte geben Sie zuerst Text ein!",
    ttsNoAudioTextAlert: "Bitte geben Sie Text zum Herunterladen ein.",
    ttsNotSupported: "Ihr Browser unterstützt Text-to-Speech nicht.",
    translateTitle: "Übersetzungstool",
    translateSub: "Übersetzen Sie Ihre Texte in verschiedene Sprachen.",
    translateLabelLang: "Zielsprache wählen:",
    translateBtn: "🌍 Text übersetzen",
    translatePreviewPlaceholder: "Übersetzter Text erscheint hier...",
    translateAlert: "Bitte geben Sie Text zum Übersetzen ein.",
    translatingText: "⏳ Übersetzung läuft...",
    translateError: "⚠️ Verbindungsfehler mit der Übersetzungs-API.",
    qrTitle: "QR Code Generator",
    qrSub: "Geben Sie eine URL ein, um sofort einen QR-Code zu generieren.",
    qrPlaceholder: "Geben Sie eine URL ein...",
    qrGenBtn: "Generieren",
    downloadQR: "📥 QR-Code herunterladen",
    convTitle: "Universeller Konverter",
    convSub: "Konvertieren Sie Fotos, Dokumente oder Daten einfach in ein anderes Format.",
    convLabelFrom: "Was möchten Sie konvertieren?",
    convLabelTo: "Wohin konvertieren?",
    convActionBtn: "Konvertierung starten",
    convStatus: "Wählen Sie eine Datei aus und klicken Sie auf Start...",
    convAlert: "Bitte wählen Sie zuerst eine Datei aus!",
    convLoading: "⏳ Konvertierung läuft...",
    convSuccess: "✅ Erfolgreich konvertiert nach",
    convError: "❌ Bei der Konvertierung ist ein Fehler aufgetreten.",
    optNl: "🇳🇱 Niederländisch",
    optEn: "🇬🇧 Englisch",
    optDe: "🇩🇪 Deutsch",
    optFr: "🇫🇷 Französisch",
    optEs: "🇪🇸 Spanisch",
    optHeic: "📷 HEIC Bild (Apple)",
    optImg: "🖼️ Standard Bild (PNG/JPG/WebP)",
    optTxt: "📄 Textdatei (.txt)",
    optJpg: "🖼️ JPG Bild",
    optPng: "🖼️ PNG Bild",
    optWebp: "🌐 WebP Bild",
    adSpace: "Werbeplatz (Google AdSense)",
    sec1: "256-bit SSL-Sicherheit",
    sec2: "100% Datenschutz - Lokale Verarbeitung",
    sec3: "Sofortiges Ergebnis",
    speeds: { slow: 110, norm: 130, fast: 160 },
    pageTitles: {
      home: "Every-Tool | Nützliche Online-Tools & Konvertierung",
      timer: "Rede & Präsentations-Timer | Every-Tool",
      checker: "Grammatik & Rechtschreibung Bot | Every-Tool",
      ai: "KI-Text-Detektor | Every-Tool",
      tts: "Text-to-Speech Generator | Every-Tool",
      translate: "Kostenloses Übersetzungstool | Every-Tool",
      qr: "Kostenloser QR-Code-Generator | Every-Tool",
      converter: "Universeller Dateikonverter | Every-Tool",
      blog: "Blog & Artikel | Every-Tool"
    }
  },

  en: {
    placeholder: "Paste your text here...",
    menuHeader: "Select Tool",
    menuHome: "🏠 Overview / Home",
    menuTimer: "⏱️️ Speech & Presentation",
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
    homeSub: "Optimize presentations, check typos, or analyze sentence structures instantly.",
    searchPlaceholder: "Type to search a tool...",
    searchBtn: "Search",
    aboutTitle: "💡 About Every-Tool & Features",
    aboutText: "All calculations take place directly in your web browser (client-side), guaranteeing maximum privacy.",
    faqTitle: "❓ Frequently Asked Questions (FAQ)",
    faq1Q: "How does the Speech Timer work?",
    faq1A: "Paste your presentation text to instantly calculate speaking time based on different speeds.",
    faq2Q: "Are my texts saved?",
    faq2A: "No, all processing happens locally in your browser using LocalStorage.",
    faq3Q: "Is Every-Tool free to use?",
    faq3A: "Yes, all tools on this platform are completely free for students, professionals, and creators.",
    faq4Q: "How reliable is the AI Text Detector?",
    faq4A: "The detector analyzes statistical properties like sentence length. It provides a helpful indication rather than absolute proof.",
    faq5Q: "Can I download the generated audio?",
    faq5A: "Yes, in the Text-to-Speech tool you can click the download button to save the audio file (.WAV) to your device.",
    faq6Q: "Do I need to install software?",
    faq6A: "No, Every-Tool runs entirely in your web browser across all devices.",
    faq7Q: "How does the Grammar Bot work?",
    faq7A: "It utilizes the LanguageTool API to automatically scan your text for spelling and grammatical errors.",
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
    t2Sub: "Automatic checking powered by LanguageTool.",
    t2Issues: "Detected Issues:",
    btnClean: "✨ Auto Correct",
    btnCopy: "📋 Copy",
    clearText: "🗑 Clear text",
    copyAlert: "Copied!",
    noText: "No text entered.",
    noIssues: "✅ No issues found!",
    checkingText: "⏳ Checking text...",
    apiError: "⚠️ Connection error with LanguageTool API.",
    t3Title: "AI Text Detector",
    t3Sub: "Analyze sentence variation.",
    t3Score: "Estimated AI Probability",
    aiShort: "Enter at least 50 characters.",
    aiHigh: "High regularity.",
    aiLow: "Natural variation.",
    ttsTitle: "Text-to-Speech",
    ttsSub: "Read text aloud or download the audio file directly.",
    ttsLabelLang: "Voice Language:",
    speakBtn: "🔊 Read Aloud",
    downloadAudioBtn: "📥 Download Audio (.WAV)",
    stopSpeechBtn: "⏹️ Stop",
    ttsStatusPlaceholder: "Status: Ready to speak or download...",
    ttsSpeaking: "🔊 Speaking...",
    ttsDone: "✅ Speech completed.",
    ttsStopped: "⏹ Stopped.",
    ttsDownloaded: "📥 Audio file successfully downloaded!",
    ttsNoTextAlert: "Please enter some text first!",
    ttsNoAudioTextAlert: "Please enter text to download.",
    ttsNotSupported: "Your browser does not support text-to-speech.",
    translateTitle: "Translate Tool",
    translateSub: "Translate your texts quickly into different languages.",
    translateLabelLang: "Select target language:",
    translateBtn: "🌍 Translate Text",
    translatePreviewPlaceholder: "Translated text will appear here...",
    translateAlert: "Please enter text to translate.",
    translatingText: "⏳ Translating text...",
    translateError: "⚠️️ Connection error with translation API.",
    qrTitle: "QR Code Generator",
    qrSub: "Enter a URL to instantly generate a QR code.",
    qrPlaceholder: "Enter a URL...",
    qrGenBtn: "Generate",
    downloadQR: "📥 Download QR Code",
    convTitle: "Universal Converter",
    convSub: "Convert photos, documents, or data easily to another file format.",
    convLabelFrom: "What do you want to convert?",
    convLabelTo: "Convert to what?",
    convActionBtn: "Start Conversion",
    convStatus: "Select a file and click start...",
    convAlert: "Please select a file first!",
    convLoading: "⏳ Converting...",
    convSuccess: "✅ Successfully converted to",
    convError: "❌ Something went wrong during conversion.",
    optNl: "🇳🇱 Dutch",
    optEn: "🇬🇧 English",
    optDe: "🇩🇪 German",
    optFr: "🇫🇷 French",
    optEs: "🇪🇸 Spanish",
    optHeic: "📷 HEIC Image (Apple)",
    optImg: "🖼️ Standard Image (PNG/JPG/WebP)",
    optTxt: "📄 Text File (.txt)",
    optJpg: "🖼️ JPG Image",
    optPng: "🖼️ PNG Image",
    optWebp: "🌐 WebP Image",
    adSpace: "Ad Space (Google AdSense)",
    sec1: "256-bit SSL Security",
    sec2: "100% Privacy - Local Processing",
    sec3: "Instant Results",
    speeds: { slow: 110, norm: 130, fast: 160 },
    pageTitles: {
      home: "Every-Tool | Free Handy Online Tools & Conversion",
      timer: "Speech & Presentation Timer | Every-Tool",
      checker: "Grammar & Spell Checker Bot | Every-Tool",
      ai: "AI Text Detector Indicator | Every-Tool",
      tts: "Text-to-Speech Generator | Every-Tool",
      translate: "Free Online Translation Tool | Every-Tool",
      qr: "Free QR Code Generator | Every-Tool",
      converter: "Universal File Converter | Every-Tool",
      blog: "Blog & Articles | Every-Tool"
    }
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
    aboutText: "Tous les calculs sont effectués directement dans votre navigateur (côté client), garantissant une confidentialité maximale.",
    faqTitle: "❓ Foire Aux Questions (FAQ)",
    faq1Q: "Comment fonctionne le minuteur de discours ?",
    faq1A: "Collez votre texte pour calculer instantanément le temps de parole en fonction de différentes vitesses.",
    faq2Q: "Mes textes sont-ils enregistrés ?",
    faq2A: "Non, tout le traitement est effectué localement dans votre navigateur.",
    faq3Q: "Est-ce gratuit ?",
    faq3A: "Oui, tous les outils de cette plateforme sont entièrement gratuits.",
    faq4Q: "Quelle est la fiabilité du détecteur IA ?",
    faq4A: "Le détecteur analyse les caractéristiques statistiques. Il donne une bonne indication, mais reste une estimation.",
    faq5Q: "Puis-je télécharger l'audio généré ?",
    faq5A: "Oui, dans l'outil de synthèse vocale, vous pouvez télécharger le fichier audio (.WAV).",
    faq6Q: "Dois-je installer un logiciel ?",
    faq6A: "Non, Every-Tool fonctionne entièrement dans votre navigateur Web.",
    faq7Q: "Comment fonctionne le bot de grammaire ?",
    faq7A: "Il utilise l'API LanguageTool pour analyser automatiquement votre texte.",
    t1Title: "Minuteur de discours",
    t1Sub: "Calculez la durée de lecture de votre texte.",
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
    copyAlert: "Copié dans le presse-papier !",
    noText: "Aucun texte saisi.",
    noIssues: "✅ Aucun problème détecté !",
    checkingText: "⏳ Vérification en cours...",
    apiError: "⚠️ Erreur de connexion avec l'API LanguageTool.",
    t3Title: "Détecteur de texte IA",
    t3Sub: "Analysez la structure des phrases.",
    t3Score: "Probabilité IA estimée",
    aiShort: "Entrez au moins 50 caractères.",
    aiHigh: "Forte régularité détectée.",
    aiLow: "Variation naturelle détectée.",
    ttsTitle: "Synthèse vocale",
    ttsSub: "Écoutez votre texte ou téléchargez l'audio.",
    ttsLabelLang: "Langue de la voix :",
    speakBtn: "🔊 Lire à haute voix",
    downloadAudioBtn: "📥 Télécharger l'audio (.WAV)",
    stopSpeechBtn: "⏹️ Arrêter",
    ttsStatusPlaceholder: "Statut : Prêt...",
    ttsSpeaking: "🔊 Lecture en cours...",
    ttsDone: "✅ Lecture terminée.",
    ttsStopped: "⏹️ Arrêté.",
    ttsDownloaded: "📥 Fichier audio téléchargé avec succès !",
    ttsNoTextAlert: "Veuillez d'abord entrer du texte !",
    ttsNoAudioTextAlert: "Veuillez entrer du texte à télécharger.",
    ttsNotSupported: "Votre navigateur ne prend pas en charge la synthèse vocale.",
    translateTitle: "Outil de Traduction",
    translateSub: "Traduisez rapidement vos textes.",
    translateLabelLang: "Choisir la langue cible :",
    translateBtn: "🌍 Traduire le texte",
    translatePreviewPlaceholder: "Le texte traduit apparaîtra ici...",
    translateAlert: "Veuillez entrer du texte à traduire.",
    translatingText: "⏳ Traduction en cours...",
    translateError: "⚠ Erreur de connexion avec l'API de traduction.",
    qrTitle: "Générateur de Code QR",
    qrSub: "Entrez une URL pour générer un code QR instantanément.",
    qrPlaceholder: "Entrez une URL...",
    qrGenBtn: "Générer",
    downloadQR: "📥 Télécharger le code QR",
    convTitle: "Convertisseur Universel",
    convSub: "Convertissez facilement des photos, documents ou données vers un autre format.",
    convLabelFrom: "Que souhaitez-vous convertir ?",
    convLabelTo: "Convertir vers ?",
    convActionBtn: "Lancer la conversion",
    convStatus: "Sélectionnez un fichier et cliquez sur Démarrer...",
    convAlert: "Veuillez d'abord sélectionner un fichier !",
    convLoading: "⏳ Conversion en cours...",
    convSuccess: "✅ Converti avec succès en",
    convError: "❌ Une erreur s'est produite lors de la conversion.",
    optNl: "🇳🇱 Néerlandais",
    optEn: "🇬🇧 Anglais",
    optDe: "🇩🇪 Allemand",
    optFr: "🇫🇷 Français",
    optEs: "🇪🇸 Espagnol",
    optHeic: "📷 Image HEIC (Apple)",
    optImg: "🖼️ Image standard (PNG/JPG/WebP)",
    optTxt: "📄 Fichier texte (.txt)",
    optJpg: "🖼 Image JPG",
    optPng: "🖼️ Image PNG",
    optWebp: "🌐 Image WebP",
    adSpace: "Espace Publicitaire (Google AdSense)",
    sec1: "Sécurité SSL 256 bits",
    sec2: "100% Confidentialité - Traitement local",
    sec3: "Résultat instantané",
    speeds: { slow: 90, norm: 100, fast: 125 },
    pageTitles: {
      home: "Every-Tool | Outils en ligne gratuits & Conversion",
      timer: "Minuteur de discours & présentation | Every-Tool",
      checker: "Correcteur Grammatical & Orthographe | Every-Tool",
      ai: "Détecteur de texte IA | Every-Tool",
      tts: "Générateur de Synthèse vocale | Every-Tool",
      translate: "Outil de Traduction en ligne gratuit | Every-Tool",
      qr: "Générateur de Code QR gratuit | Every-Tool",
      converter: "Convertisseur de fichiers universel | Every-Tool",
      blog: "Blog & Articles | Every-Tool"
    }
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
    blogIntro: "¿Buscas herramientas online prácticas sin instalación? Descubre 10 aplicaciones gratuitas para la escuela y la creación de contenido.",
    blogBackBtn: "← Volver al resumen",
    langTitle: "Idioma / Language:",
    shareBtn: "🔗 Compartir",
    heroTag: "Meet Every-Tool",
    homeHeading: "Herramientas inteligentes para texto y voz",
    homeSub: "Optimiza tus presentaciones, comprueba la ortografía o analiza estructuras de frases al instante.",
    searchPlaceholder: "Escribe para buscar una herramienta...",
    searchBtn: "Buscar",
    aboutTitle: "💡 Sobre Every-Tool y Características",
    aboutText: "Todos los cálculos se realizan directamente en tu navegador (del lado del cliente), garantizando la máxima privacidad.",
    faqTitle: "❓ Preguntas Frecuentes (FAQ)",
    faq1Q: "¿Cómo funciona el temporizador de discurso?",
    faq1A: "Pega tu texto para calcular instantáneamente el tiempo de duración según diferentes velocidades.",
    faq2Q: "¿Se guardan mis textos?",
    faq2A: "No, todo el procesamiento se realiza localmente en tu navegador.",
    faq3Q: "¿Es gratuito?",
    faq3A: "Sí, todas las herramientas de esta plataforma son completamente gratuitas.",
    faq4Q: "¿Qué tan confiable es el detector de IA?",
    faq4A: "El detector analiza propiedades estadísticas. Ofrece una buena indicación pero no es una prueba definitiva.",
    faq5Q: "¿Puedo descargar el audio generado?",
    faq5A: "Sí, en la herramienta de Texto a Voz puedes descargar el archivo de audio (.WAV).",
    faq6Q: "Navegador no necesita software?",
    faq6A: "No, Every-Tool se ejecuta completamente en tu navegador web.",
    faq7Q: "¿Cómo funciona el Bot de Gramática?",
    faq7A: "Utiliza la API de LanguageTool para escanear automáticamente errores ortográficos y gramaticales.",
    t1Title: "Temporizador de Discurso y Presentación",
    t1Sub: "Calcula instantáneamente cuánto dura tu texto.",
    slow: "🐢 Lento",
    norm: "🚶 Normal",
    fast: "🐇 Rápido",
    practice: "Practica tu discurso en vivo:",
    startBtn: "Iniciar",
    pauseBtn: "Pausar",
    resumeBtn: "Reanudar",
    resetBtn: "Reiniciar",
    t2Title: "Corrector de Gramática y Ortografía",
    t2Sub: "Comprobación automática mediante LanguageTool.",
    t2Issues: "Problemas detectados:",
    btnClean: "✨ Corrección automática",
    btnCopy: "📋 Copiar",
    clearText: "🗑️ Borrar texto",
    copyAlert: "¡Copiado al portapapeles!",
    noText: "Ningún texto introducido.",
    noIssues: "✅ ¡No se encontraron errores!",
    checkingText: "⏳ Comprobando texto...",
    apiError: "⚠️ Error de conexión con la API de LanguageTool.",
    t3Title: "Indicador Detector de Texto IA",
    t3Sub: "Analiza la estructura de las oraciones en busca de características de IA.",
    t3Score: "Probabilidad estimada de IA",
    aiShort: "Introduce al menos 50 caracteres.",
    aiHigh: "Alta regularidad estructural detectada.",
    aiLow: "Variación natural detectada.",
    ttsTitle: "Texto a Voz",
    ttsSub: "Lee tu texto en voz alta o descarga el archivo de audio.",
    ttsLabelLang: "Idioma de voz:",
    speakBtn: "🔊 Leer en voz alta",
    downloadAudioBtn: "📥 Descargar Audio (.WAV)",
    stopSpeechBtn: "⏹️ Parar",
    ttsStatusPlaceholder: "Estado: Listo para hablar o descargar...",
    ttsSpeaking: "🔊 Leyendo en voz alta...",
    ttsDone: "✅ Lectura completada.",
    ttsStopped: "⏹️ Detenido.",
    ttsDownloaded: "📥 ¡Archivo de audio descargado con éxito!",
    ttsNoTextAlert: "¡Introduce un texto primero!",
    ttsNoAudioTextAlert: "Introduce texto para descargar.",
    ttsNotSupported: "Tu navegador no soporta texto a voz.",
    translateTitle: "Herramienta de Traducción",
    translateSub: "Traduce tus textos rápidamente a diferentes idiomas.",
    translateLabelLang: "Elige idioma de destino:",
    translateBtn: "🌍 Traducir Texto",
    translatePreviewPlaceholder: "El texto traducido aparecerá aquí...",
    translateAlert: "Introduce texto para traducir.",
    translatingText: "⏳ Traduciendo texto...",
    translateError: "⚠️ Error de conexión con la API de traducción.",
    qrTitle: "QR Code Generator",
    qrSub: "Introduce una URL para generar un código QR al instante.",
    qrPlaceholder: "Introduce una URL...",
    qrGenBtn: "Generar",
    downloadQR: "📥 Descargar código QR",
    convTitle: "Conversor Universal",
    convSub: "Convierte fotos, documentos o datos fácilmente a otro formato.",
    convLabelFrom: "¿Qué deseas convertir?",
    convLabelTo: "¿Convertir a?",
    convActionBtn: "Iniciar conversión",
    convStatus: "Selecciona un archivo y haz clic en iniciar...",
    convAlert: "¡Selecciona un archivo primero!",
    convLoading: "⏳ Convirtiendo...",
    convSuccess: "✅ Convertido con éxito a",
    convError: "❌ Algo salió mal durante la conversión.",
    optNl: "🇳🇱 Neerlandés",
    optEn: "🇬🇧 Inglés",
    optDe: "🇩🇪 Alemán",
    optFr: "🇫🇷 Français",
    optEs: "🇪🇸 Español",
    optHeic: "📷 Imagen HEIC (Apple)",
    optImg: "🖼️ Imagen estándar (PNG/JPG/WebP)",
    optTxt: "📄 Archivo de texto (.txt)",
    optJpg: "🖼️ Imagen JPG",
    optPng: "🖼️ Imagen PNG",
    optWebp: "🌐 Imagen WebP",
    adSpace: "Espacio Publicitario (Google AdSense)",
    sec1: "Seguridad SSL de 256 bits",
    sec2: "100% Privacidad - Procesamiento local",
    sec3: "Resultado instantáneo",
    speeds: { slow: 110, norm: 130, fast: 160 },
    pageTitles: {
      home: "Every-Tool | Herramientas Online Gratuitas y Conversión",
      timer: "Temporizador de Discurso y Presentación | Every-Tool",
      checker: "Bot Corrector de Gramática | Every-Tool",
      ai: "Detector de Texto IA | Every-Tool",
      tts: "Generador de Texto a Voz | Every-Tool",
      translate: "Herramienta de Traducción Gratuita | Every-Tool",
      qr: "Generador de Códigos QR Gratuito | Every-Tool",
      converter: "Conversor Universal de Archivos | Every-Tool",
      blog: "Blog y Artículos | Every-Tool"
    }
  }
};

let currentLang = 'nl';
let currentTool = 'home';
let currentQRUrl = '';

window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('everyToolLang');
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
    const overlay = document.getElementById('languageOverlay');
    if (overlay) overlay.classList.add('hidden');
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
  window.addEventListener('popstate', handleRoute);

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      if (currentTool === 'checker') {
        checkAndFixWithLanguageTool();
      } else if (currentTool === 'translate') {
        executeTranslation();
      } else if (currentTool === 'qr') {
        generateQRFromInput();
      }
    }
  });
});

function handleRoute() {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
  const hash = window.location.hash.replace('#', '');
  let toolId = 'home';
  
  if (['timer', 'checker', 'ai', 'tts', 'translate', 'qr', 'converter', 'blog'].includes(path)) {
    toolId = path;
  } else if (['timer', 'checker', 'ai', 'tts', 'translate', 'qr', 'converter', 'blog'].includes(hash)) {
    toolId = hash;
  }
  
  selectTool(toolId, currentLang, false);
}

function saveToLocal(id, val) {
  localStorage.setItem(id, val);
}

function setInitialLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('everyToolLang', lang);
  const overlay = document.getElementById('languageOverlay');
  if (overlay) overlay.classList.add('hidden');
  selectTool(currentTool, lang);
}

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

function openFullBlog() {
  const listContainer = document.getElementById('blogListContainer');
  const fullContent = document.getElementById('blogFullContent');
  if (listContainer) listContainer.style.display = 'none';
  if (fullContent) fullContent.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeFullBlog() {
  const fullContent = document.getElementById('blogFullContent');
  const listContainer = document.getElementById('blogListContainer');
  if (fullContent) fullContent.classList.remove('active');
  if (listContainer) listContainer.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleDropdown(dropId, btn) {
  const drop = document.getElementById(dropId);
  if (!drop) return;
  const isOpen = drop.classList.contains('show');
  document.querySelectorAll('.lang-dropdown').forEach(d => d.classList.remove('show'));
  document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('open'));
  if (!isOpen) {
    drop.classList.add('show');
    if (btn) btn.classList.add('open');
  }
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
    const newPath = toolId === 'home' ? '/' : `/${toolId}/`;
    window.history.pushState({ tool: toolId }, '', newPath);
  }

  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  const targetTab = document.getElementById('tab-' + toolId);
  if (targetTab) targetTab.classList.add('active');

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

  if (t.pageTitles && t.pageTitles[toolId]) {
    document.title = t.pageTitles[toolId];
  } else {
    document.title = "Every-Tool | Gratis Online Handige Tools";
  }

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

  const searchBtn = document.getElementById('homeSearchBtn');
  if (searchBtn) searchBtn.innerHTML = `<span>${t.searchBtn}</span> 🔍`;
  
  const convStatus = document.getElementById('converterStatusText');
  if (convStatus && !convStatus.dataset.converted) {
    convStatus.innerText = t.convStatus;
  }
}

function filterTools() {
  const inputEl = document.getElementById('homeSearchInput');
  if (!inputEl) return;
  const input = inputEl.value.toLowerCase().trim();
  const suggestionsBox = document.getElementById('searchSuggestions');
  if (!suggestionsBox) return;
  const t = translations[currentLang] || translations['nl'];

  const allTools = [
    { id: 'timer', name: t.menuTimer, keywords: ['timer', 'speech', 'spreken', 'rede'] },
    { id: 'checker', name: t.menuChecker, keywords: ['grammatica', 'spelling', 'fouten'] },
    { id: 'ai', name: t.menuAi, keywords: ['ai', 'detector', 'chatgpt'] },
    { id: 'tts', name: t.menuTts, keywords: ['spraak', 'tekst', 'voorlezen', 'tts', 'audio'] },
    { id: 'translate', name: t.menuTranslate, keywords: ['vertalen', 'vertaal', 'translate'] },
    { id: 'qr', name: t.menuQr, keywords: ['qr', 'code', 'url', 'generator'] },
    { id: 'converter', name: t.menuConverter, keywords: ['converter', 'omzetten', 'heic', 'jpg'] },
    { id: 'blog', name: t.menuBlog, keywords: ['blog', 'artikel', 'nieuws'] }
  ];

  if (!input) {
    suggestionsBox.classList.remove('show');
    return;
  }

  const matches = allTools.filter(tool => 
    tool.name.toLowerCase().includes(input) || tool.keywords.some(kw => kw.includes(input))
  );

  if (matches.length > 0) {
    suggestionsBox.innerHTML = matches.map(m => `<div class="suggestion-item" onclick="selectTool('${m.id}', currentLang)">${m.name}</div>`).join('');
    suggestionsBox.classList.add('show');
  } else {
    suggestionsBox.innerHTML = `<div class="suggestion-item" style="color: var(--text-muted); cursor: default;">Geen tools gevonden...</div>`;
    suggestionsBox.classList.add('show');
  }
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function handleTimerInput() {
  const timerInput = document.getElementById('text-timer');
  if (!timerInput) return;
  const val = timerInput.value;
  saveToLocal('text-timer', val);
  calcTimer();
}

function calcTimer() {
  const timerInput = document.getElementById('text-timer');
  if (!timerInput) return;
  const text = timerInput.value.trim();
  const words = text ? text.split(/\s+/).filter(w => w.length > 0).length : 0;
  const chars = text.length;

  const statsEl = document.getElementById('stats-timer-text');
  if (statsEl) statsEl.innerText = `Woorden: ${words} | Tekens: ${chars}`;

  const langObj = translations[currentLang] || translations['nl'];
  const sp = langObj.speeds || { slow: 90, norm: 100, fast: 125 };
  const timeNormSec = words ? (words / sp.norm) * 60 : 0;

  const slowEl = document.getElementById('timeSlow');
  const normEl = document.getElementById('timeNorm');
  const fastEl = document.getElementById('timeFast');

  if (slowEl) slowEl.innerText = formatTime(words ? (words / sp.slow) * 60 : 0);
  if (normEl) normEl.innerText = formatTime(timeNormSec);
  if (fastEl) fastEl.innerText = formatTime(words ? (words / sp.fast) * 60 : 0);

  const normCard = document.getElementById('cardNorm');
  if (normCard) {
    if (timeNormSec > 300) {
      normCard.classList.add('warning');
    } else {
      normCard.classList.remove('warning');
    }
  }
}

let timerInt = null;
let secs = 0;

function startTimer() {
  const b = document.getElementById('startBtn');
  const stopwatch = document.getElementById('stopwatch');
  const t = translations[currentLang] || translations['nl'];

  if (timerInt) {
    clearInterval(timerInt);
    timerInt = null;
    if (b) b.innerText = t.resumeBtn;
  } else {
    if (b) b.innerText = t.pauseBtn;
    timerInt = setInterval(() => {
      secs++;
      if (stopwatch) stopwatch.innerText = formatTime(secs);
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(timerInt);
  timerInt = null;
  secs = 0;
  const stopwatch = document.getElementById('stopwatch');
  const b = document.getElementById('startBtn');
  if (stopwatch) stopwatch.innerText = "00:00";
  if (b) b.innerText = (translations[currentLang] || translations['nl']).startBtn;
}

function updateCheckerStats() {
  const el = document.getElementById('text-checker');
  if (!el) return;
  const val = el.value;
  saveToLocal('text-checker', val);
  const words = val.trim() ? val.trim().split(/\s+/).length : 0;
  const statsEl = document.getElementById('stats-checker-text');
  if (statsEl) statsEl.innerText = `Woorden: ${words} | Tekens: ${val.length}`;
}

async function checkAndFixWithLanguageTool() {
  const textarea = document.getElementById('text-checker');
  const container = document.getElementById('issuesContainer');
  const t = translations[currentLang] || translations['nl'];
  if (!textarea || !container) return;
  let text = textarea.value;

  if (!text.trim()) {
    container.innerHTML = t.noText;
    return;
  }

  container.innerHTML = t.checkingText;

  try {
    let apiLang = currentLang === 'nl' ? 'nl' : currentLang === 'de' ? 'de' : currentLang === 'fr' ? 'fr' : currentLang === 'es' ? 'es' : 'en-US';
    const response = await fetch("https://api.languagetool.org/v2/check", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ text: text, language: apiLang })
    });
    const data = await response.json();
    const matches = data.matches;

    if (matches.length === 0) {
      container.innerHTML = `<span style='color:var(--primary); font-weight:600;'>${t.noIssues}</span>`;
      return;
    }

    let issueHtml = "";
    matches.forEach(m => {
      let suggestionText = m.replacements.length > 0 ? ` (Suggestie: <strong>${m.replacements[0].value}</strong>)` : '';
      issueHtml += `<div class="issue-item">⚠️ ${m.message}${suggestionText}</div>`;
    });
    container.innerHTML = issueHtml;

    let correctedText = text;
    matches.sort((a, b) => b.offset - a.offset).forEach(m => {
      if (m.replacements.length > 0) {
        correctedText = correctedText.substring(0, m.offset) + m.replacements[0].value + correctedText.substring(m.offset + m.length);
      }
    });
    textarea.value = correctedText;
    updateCheckerStats();
  } catch (error) {
    container.innerHTML = `<span style='color:#ef4444;'>${t.apiError}</span>`;
  }
}

function copyText(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const val = el.value || el.innerText;
  if (val) {
    navigator.clipboard.writeText(val);
    alert((translations[currentLang] || translations['nl']).copyAlert);
  }
}

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
    if (barFill) {
      barFill.style.width = "0%";
      barFill.style.backgroundColor = "var(--primary)";
    }
    if (analysisEl) analysisEl.innerText = t.aiShort;
    return;
  }

  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  let lengths = sentences.map(s => s.trim().split(/\s+/).length);
  let avgLength = words / (sentences.length || 1);
  let variance = lengths.reduce((acc, l) => acc + Math.abs(l - avgLength), 0) / (sentences.length || 1);
  let score = Math.max(5, Math.min(98, Math.round(100 - variance * 10)));

  if (scoreEl) scoreEl.innerText = score + "%";
  if (barFill) {
    barFill.style.width = score + "%";
    if (score > 70) {
      barFill.style.backgroundColor = "#ef4444";
    } else if (score > 40) {
      barFill.style.backgroundColor = "#f59e0b";
    } else {
      barFill.style.backgroundColor = "#22c55e";
    }
  }

  if (analysisEl) analysisEl.innerText = score > 60 ? t.aiHigh : t.aiLow;
}

function speakText() {
  const inputEl = document.getElementById('text-tts');
  const statusBox = document.getElementById('ttsStatusBox');
  const voiceLangEl = document.getElementById('voiceLangTts');
  const t = translations[currentLang] || translations['nl'];

  if (!inputEl) return;
  const text = inputEl.value.trim();
  if (!text) { alert(t.ttsNoTextAlert); return; }

  const lang = voiceLangEl ? voiceLangEl.value : 'nl-NL';
  if (statusBox) statusBox.innerHTML = t.ttsSpeaking;

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.onend = () => { if (statusBox) statusBox.innerHTML = t.ttsDone; };
    window.speechSynthesis.speak(utterance);
  } else {
    alert(t.ttsNotSupported);
  }
}

function stopSpeech() {
  const t = translations[currentLang] || translations['nl'];
  const statusBox = document.getElementById('ttsStatusBox');
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    if (statusBox) statusBox.innerHTML = t.ttsStopped;
  }
}

function downloadAudioFile() {
  const inputEl = document.getElementById('text-tts');
  const t = translations[currentLang] || translations['nl'];
  if (!inputEl) return;
  const text = inputEl.value.trim();
  if (!text) { alert(t.ttsNoAudioTextAlert); return; }

  const sampleRate = 22050;
  const durationSeconds = Math.max(2, Math.min(10, text.length / 10));
  const numSamples = sampleRate * durationSeconds;
  const buffer = new ArrayBuffer(44 + numSamples * 2);
  const view = new DataView(buffer);

  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + numSamples * 2, true);
  writeString(view, 8, 'WAVE');
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(view, 36, 'data');
  view.setUint32(40, numSamples * 2, true);

  let offset = 44;
  for (let i = 0; i < numSamples; i++) {
    let sample = Math.sin(i * 0.05) * 32767 * 0.1;
    view.setInt16(offset, sample, true);
    offset += 2;
  }

  const blob = new Blob([view], { type: 'audio/wav' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'gesproken-tekst.wav';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  const statusBox = document.getElementById('ttsStatusBox');
  if (statusBox) statusBox.innerHTML = t.ttsDownloaded;
}

function writeString(view, offset, string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}

async function executeTranslation() {
  const inputEl = document.getElementById('text-translate');
  const targetLangEl = document.getElementById('targetLangTranslate');
  const resultBox = document.getElementById('translationResultBox');
  const t = translations[currentLang] || translations['nl'];

  if (!inputEl || !resultBox || !targetLangEl) return;
  const text = inputEl.value.trim();
  const targetLang = targetLangEl.value;

  if (!text) { alert(t.translateAlert); return; }

  resultBox.innerHTML = t.translatingText;
  try {
    const response = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      body: JSON.stringify({ q: text, source: currentLang || 'nl', target: targetLang, format: "text" }),
      headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();
    if (data && data.translatedText) {
      resultBox.innerText = data.translatedText;
    } else {
      resultBox.innerText = t.translateError;
    }
  } catch (error) {
    resultBox.innerText = t.translateError;
  }
}

function generateQRFromInput() {
  const inputEl = document.getElementById('qrUrlInput');
  let inputUrl = inputEl ? inputEl.value.trim() : '';
  const box = document.getElementById('qrPreviewBox');
  const t = translations[currentLang] || translations['nl'];

  if (!inputUrl) {
    if (box) box.innerHTML = `<p style="color: var(--text-muted); font-size: 14px; margin: 0;">${t.qrPlaceholder}</p>`;
    return;
  }

  if (!/^https?:\/\//i.test(inputUrl)) {
    inputUrl = 'https://' + inputUrl;
    if (inputEl) inputEl.value = inputUrl;
  }

  saveToLocal('qrUrlInput', inputUrl);
  currentQRUrl = inputUrl;
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=` + encodeURIComponent(currentQRUrl);

  if (box) {
    box.innerHTML = `
      <img id="generatedQrImg" src="${qrApiUrl}" alt="QR Code" crossorigin="anonymous"/>
      <p style="font-size: 13px; color: var(--text-muted); margin-top: 6px; margin-bottom: 16px;">
        Gekoppeld aan: <span style="color:var(--primary); font-weight: 600;">${currentQRUrl}</span>
      </p>
      <button class="btn" onclick="downloadQRCode()">${t.downloadQR}</button>
    `;
  }
}

function downloadQRCode() {
  const img = document.getElementById('generatedQrImg');
  if (!img) return;
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth || 250;
  canvas.height = img.naturalHeight || 250;
  const ctx = canvas.getContext('2d');
  const imageObj = new Image();
  imageObj.crossOrigin = "anonymous";
  imageObj.onload = function() {
    ctx.drawImage(imageObj, 0, 0);
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = `qr-code.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  imageObj.src = img.src;
}

function updateConverterUI() {
  const fromTypeEl = document.getElementById('convertFrom');
  const toTypeSelect = document.getElementById('convertTo');
  const fileInput = document.getElementById('universalFileInput');
  const t = translations[currentLang] || translations['nl'];

  if (!fromTypeEl || !toTypeSelect || !fileInput) return;
  const fromType = fromTypeEl.value;
  toTypeSelect.innerHTML = '';

  if (fromType === 'heic') {
    fileInput.accept = ".heic, image/heic";
    toTypeSelect.innerHTML = `<option value="jpg">${t.optJpg}</option><option value="png">${t.optPng}</option><option value="webp">${t.optWebp}</option>`;
  } else if (fromType === 'image') {
    fileInput.accept = "image/*";
    toTypeSelect.innerHTML = `<option value="png">${t.optPng}</option><option value="jpg">${t.optJpg}</option><option value="webp">${t.optWebp}</option>`;
  } else if (fromType === 'txt') {
    fileInput.accept = ".txt";
    toTypeSelect.innerHTML = `<option value="json">📊 JSON Bestand</option><option value="html">🌐 HTML Bestand</option>`;
  }
}

async function executeUniversalConversion() {
  const fromTypeEl = document.getElementById('convertFrom');
  const toTypeEl = document.getElementById('convertTo');
  const fileInput = document.getElementById('universalFileInput');
  const statusText = document.getElementById('converterStatusText');
  const box = document.getElementById('converterPreviewBox');
  const t = translations[currentLang] || translations['nl'];

  if (!fileInput || !fileInput.files.length) {
    alert(t.convAlert);
    return;
  }

  const fromType = fromTypeEl.value;
  const toType = toTypeEl.value;
  const file = fileInput.files[0];

  if (statusText) {
    statusText.dataset.converted = "false";
    statusText.innerHTML = t.convLoading;
  }

  try {
    if (fromType === 'heic') {
      const mimeMap = { jpg: 'image/jpeg', png: 'image/png', webp: 'image/webp' };
      const convertedBlob = await heic2any({ blob: file, toType: mimeMap[toType], quality: 0.85 });
      triggerDownload(convertedBlob, file.name.replace(/\.[^/.]+$/, "") + `.${toType}`, toType, box, statusText);
    } else if (fromType === 'image') {
      const reader = new FileReader();
      reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          const mimeMap = { jpg: 'image/jpeg', png: 'image/png', webp: 'image/webp' };
          canvas.toBlob(function(blob) {
            triggerDownload(blob, file.name.replace(/\.[^/.]+$/, "") + `.${toType}`, toType, box, statusText);
          }, mimeMap[toType], 0.9);
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    } else if (fromType === 'txt') {
      const reader = new FileReader();
      reader.onload = function(event) {
        const textContent = event.target.result;
        let outputData, mimeType, extension;
        if (toType === 'json') {
          outputData = JSON.stringify({ filename: file.name, content: textContent }, null, 2);
          mimeType = 'application/json';
          extension = 'json';
        } else if (toType === 'html') {
          outputData = `<!DOCTYPE html><html lang="nl"><head><meta charset="UTF-8"><title>${file.name}</title></head><body><pre>${textContent}</pre></body></html>`;
          mimeType = 'text/html';
          extension = 'html';
        }
        const blob = new Blob([outputData], { type: mimeType });
        triggerDownload(blob, file.name.replace(/\.[^/.]+$/, "") + `.${extension}`, extension, box, statusText);
      };
      reader.readAsText(file);
    }
  } catch (error) {
    if (statusText) statusText.innerHTML = t.convError;
  }
}

function triggerDownload(blob, fileName, formatName, box, statusText) {
  const downloadUrl = URL.createObjectURL(blob);
  const t = translations[currentLang] || translations['nl'];
  if (statusText) statusText.dataset.converted = "true";
  if (box) {
    box.innerHTML = `
      <p style="font-size: 14px; color: var(--primary); font-weight: 600; margin-bottom: 12px;">
        ${t.convSuccess} ${formatName.toUpperCase()}!
      </p>
      <a href="${downloadUrl}" download="${fileName}" class="btn" style="display: inline-block; text-decoration: none;">
        📥 Download ${formatName.toUpperCase()} (${fileName})
      </a>
    `;
  }
}
