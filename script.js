let currentLang = 'nl';
let currentTool = 'home';
let currentQRUrl = '';

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
    langTitle: "Taal / Language:",
    shareBtn: "🔗 Deel",
    heroTag: "Meet Every-Tool",
    homeHeading: "Slimme tools voor al je tekst en spraak",
    homeSub: "Optimaliseer je presentaties, controleer op spelfouten of analyseer zinsstructuren in een handomdraai. Snel, veilig en betrouwbaar.",
    searchPlaceholder: "Typ om een tool te zoeken...",
    searchBtn: "Zoek",
    aboutTitle: "💡 Over Every-Tool & Onze Functionaliteiten",
    aboutText: "Alle berekeningen vinden direct plaats in je eigen webbrowser (client-side), wat maximale privacy garandeert. Geen van je teksten wordt opgeslagen op externe servers.",
    faqTitle: "❓ Veelgestelde Vragen (FAQ)",
    faq1Q: "Hoe werkt de Speech Timer?",
    faq1A: "Plak je presentatietekst in de tool om direct je spreektijd te berekenen op basis van verschillende snelheden (langzaam, normaal, snel).",
    faq2Q: "Worden mijn teksten opgeslagen?",
    faq2A: "Nee, alle verwerking gebeurt lokaal in je browser. Dankzij LocalStorage onthoudt je browser wel tijdelijk je invoer, zodat je niets kwijtraakt als je per ongeluk de pagina vernieuwt.",
    faq3Q: "Is het gebruik van Every-Tool gratis?",
    faq3A: "Ja, alle tools op dit platform zijn volledig gratis te gebruiken voor studenten, professionals en contentmakers.",
    faq4Q: "Hoe betrouwbaar is de AI-Tekst Detector?",
    faq4A: "De AI-detector kijkt naar statistische kenmerken zoals zinslengte en variatie in schrijfstijl. Het geeft een goede indicatie, maar het blijft een schatting en geen 100% sluitend bewijs.",
    faq5Q: "Kan ik de gegenereerde audio downloaden?",
    faq5A: "Ja, in de Tekst-naar-Spraak tool kun je direct na het invoeren van je tekst klikken op de downloadknop om het audiobestand (.WAV) op te slaan op je apparaat.",
    faq6Q: "Moet ik software installeren om deze tools te gebruiken?",
    faq6A: "Nee, absoluut niet. Every-Tool werkt volledig web-based in elke moderne browser op je computer, tablet of smartphone.",
    faq7Q: "Hoe werkt de Grammatica Bot?",
    faq7A: "De Grammatica Bot maakt gebruik van de LanguageTool API om automatisch je tekst te scannen op spelfouten, stijlfouten en grammaticale onjuistheden, met handige correctiesuccessen.",
    t1Title: "Speech & Presentatie Timer", t1Sub: "Bereken direct hoe lang jouw tekst duurt om voor te lezen.",
    slow: "🐢 Langzaam", norm: "🚶 Normaal", fast: "🐇 Snel", practice: "Oefen je speech live:", startBtn: "Start", pauseBtn: "Pauze", resumeBtn: "Hervat", resetBtn: "Reset",
    t2Title: "Grammatica & Spelfout Bot", t2Sub: "Controleer automatisch op spelfouten via LanguageTool.",
    t2Issues: "Gevonden Aandachtspunten:",
    btnClean: "✨ Automatisch Herstellen", btnCopy: "📋 Kopiëren", copyAlert: "Gekopieerd naar klembord!",
    noText: "Geen tekst ingevoerd.", noIssues: "✅ Geen spelfouten gevonden!",
    checkingText: "⏳ Bezig met controleren...",
    apiError: "⚠️ Verbindingsfout met LanguageTool API.",
    t3Title: "AI-Tekst Detector Indicator", t3Sub: "Analyseer zinsstructuur op AI-kenmerken.",
    t3Score: "Geschatte AI-waarschijnlijkheid", aiShort: "Voer minimaal 50 tekens in voor een schatting.",
    aiHigh: "Hoge mate van regelmatige zinsopbouw gedetecteerd.", aiLow: "Natuurlijke variatie in zinslengte gedetecteerd.",
    ttsTitle: "Tekst-naar-Spraak", ttsSub: "Laat je tekst direct voorlezen of download de audio als bestand.",
    ttsLabelLang: "Spraak Taal:", speakBtn: "🔊 Lees Hardop", downloadAudioBtn: "📥 Download Audio (.WAV)", stopSpeechBtn: "⏹️ Stop", ttsStatusPlaceholder: "Status: Klaar om voor te lezen of te downloaden...",
    ttsSpeaking: "🔊 Bezig met voorlezen...",
    ttsDone: "✅ Voorlezen voltooid.",
    ttsStopped: "⏹️ Gestopt.",
    ttsDownloaded: "📥 Audiobestand succesvol gedownload!",
    ttsNoTextAlert: "Voer eerst wat tekst in!",
    ttsNoAudioTextAlert: "Voer eerst tekst in om te kunnen downloaden.",
    ttsNotSupported: "Je browser ondersteunt geen tekst-naar-spraak.",
    translateTitle: "Vertaal Tool", translateSub: "Vertaal je teksten snel naar verschillende talen.",
    translateLabelLang: "Kies doeltaal:", translateBtn: "🌍 Vertaal Tekst", translatePreviewPlaceholder: "Vertaalde tekst verschijnt hier...",
    translateAlert: "Voer tekst in om te vertalen.",
    qrTitle: "QR Code Generator", qrSub: "Voer een URL in om direct een QR-code te genereren.",
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
    optJpg: "🖼️ JPG Afbeelding",
    optPng: "🖼️ PNG Afbeelding",
    optWebp: "🌐 WebP Afbeelding",
    adSpace: "Advertentie Ruimte (Google AdSense)",
    sec1: "256-bit SSL-beveiliging", sec2: "100% Privacy - Lokale verwerking", sec3: "Direct resultaat",
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
    t1Title: "Rede & Präsentations-Timer", t1Sub: "Berechnen Sie sofort die Sprechdauer.",
    slow: "🐢 Langsam", norm: "🚶 Normal", fast: "🐇 Schnell", practice: "Üben Sie live:", startBtn: "Start", pauseBtn: "Pause", resumeBtn: "Fortsetzen", resetBtn: "Zurücksetzen",
    t2Title: "Grammatik & Rechtschreibung", t2Sub: "Automatische Prüfung via LanguageTool.",
    t2Issues: "Gefundene Probleme:",
    btnClean: "✨ Korrigieren", btnCopy: "📋 Kopieren", copyAlert: "Kopiert!",
    noText: "Kein Text.", noIssues: "✅ Keine Fehler gefunden!",
    checkingText: "⏳ Überprüfung läuft...",
    apiError: "⚠️ Verbindungsfehler mit der LanguageTool API.",
    t3Title: "AI-Text-Detektor", t3Sub: "Analysieren Sie die Satzstruktur.",
    t3Score: "Geschätzte KI-Wahrscheinlichkeit", aiShort: "Mindestens 50 Zeichen eingeben.",
    aiHigh: "Hohe Regelmäßigkeit.", aiLow: "Natürliche Variation.",
    ttsTitle: "Text-to-Speech", ttsSub: "Lassen Sie Ihren Text vorlesen oder als Audiodatei herunterladen.",
    ttsLabelLang: "Sprachauswahl:", speakBtn: "🔊 Vorlesen", downloadAudioBtn: "📥 Audio herunterladen", stopSpeechBtn: "⏹️ Stopp", ttsStatusPlaceholder: "Status: Bereit...",
    ttsSpeaking: "🔊 Wiedergabe läuft...",
    ttsDone: "✅ Wiedergabe beendet.",
    ttsStopped: "⏹️ Gestoppt.",
    ttsDownloaded: "📥 Audiodatei erfolgreich heruntergeladen!",
    ttsNoTextAlert: "Bitte geben Sie zuerst Text ein!",
    ttsNoAudioTextAlert: "Bitte geben Sie Text zum Herunterladen ein.",
    ttsNotSupported: "Ihr Browser unterstützt Text-to-Speech nicht.",
    translateTitle: "Übersetzungstool", translateSub: "Übersetzen Sie Ihre Texte in verschiedene Sprachen.",
    translateLabelLang: "Zielsprache wählen:", translateBtn: "🌍 Text übersetzen", translatePreviewPlaceholder: "Übersetzter Text erscheint hier...",
    translateAlert: "Bitte Text zum Übersetzen eingeben.",
    qrTitle: "QR Code Generator", qrSub: "Geben Sie eine URL ein, um sofort einen QR-Code zu generieren.",
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
    sec1: "256-bit SSL-Sicherheit", sec2: "100% Datenschutz - Lokale Verarbeitung", sec3: "Sofortiges Ergebnis",
    speeds: { slow: 110, norm: 130, fast: 160 }
  },
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
    t1Title: "Speech & Presentation Timer", t1Sub: "Calculate speaking time instantly.",
    slow: "🐢 Slow", norm: "🚶 Average", fast: "🐇 Fast", practice: "Practice live:", startBtn: "Start", pauseBtn: "Pause", resumeBtn: "Resume", resetBtn: "Reset",
    t2Title: "Grammar Corrector", t2Sub: "Automatic checking powered by LanguageTool.",
    t2Issues: "Detected Issues:",
    btnClean: "✨ Auto Correct", btnCopy: "📋 Copy", copyAlert: "Copied!",
    noText: "No text entered.", noIssues: "✅ No issues found!",
    checkingText: "⏳ Checking text...",
    apiError: "⚠️ Connection error with LanguageTool API.",
    t3Title: "AI Text Detector", t3Sub: "Analyze sentence variation.",
    t3Score: "Estimated AI Probability", aiShort: "Enter at least 50 characters.",
    aiHigh: "High regularity.", aiLow: "Natural variation.",
    ttsTitle: "Text-to-Speech", ttsSub: "Read text aloud or download the audio file directly.",
    ttsLabelLang: "Voice Language:", speakBtn: "🔊 Read Aloud", downloadAudioBtn: "📥 Download Audio (.WAV)", stopSpeechBtn: "⏹️ Stop", ttsStatusPlaceholder: "Status: Ready to speak or download...",
    ttsSpeaking: "🔊 Speaking...",
    ttsDone: "✅ Speech completed.",
    ttsStopped: "⏹️ Stopped.",
    ttsDownloaded: "📥 Audio file successfully downloaded!",
    ttsNoTextAlert: "Please enter some text first!",
    ttsNoAudioTextAlert: "Please enter text to download.",
    ttsNotSupported: "Your browser does not support text-to-speech.",
    translateTitle: "Translate Tool", translateSub: "Translate your texts quickly into different languages.",
    translateLabelLang: "Select target language:", translateBtn: "🌍 Translate Text", translatePreviewPlaceholder: "Translated text will appear here...",
    translateAlert: "Please enter text to translate.",
    qrTitle: "QR Code Generator", qrSub: "Enter a URL to instantly generate a QR code.",
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
    sec1: "256-bit SSL Security", sec2: "100% Privacy - Local Processing", sec3: "Instant Results",
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
    t1Title: "Minuteur de discours", t1Sub: "Calculez la durée de lecture de votre texte.",
    slow: "🐢 Lent", norm: "🚶 Normal", fast: "🐇 Rapide", practice: "Pratiquez en direct :", startBtn: "Démarrer", pauseBtn: "Pause", resumeBtn: "Reprendre", resetBtn: "Réinitialiser",
    t2Title: "Correcteur Grammatical", t2Sub: "Vérification automatique via LanguageTool.",
    t2Issues: "Problèmes détectés :",
    btnClean: "✨ Correction automatique", btnCopy: "📋 Copier", copyAlert: "Copié dans le presse-papier !",
    noText: "Aucun texte saisi.", noIssues: "✅ Aucun problème détecté !",
    checkingText: "⏳ Vérification en cours...",
    apiError: "⚠️ Erreur de connexion avec l'API LanguageTool.",
    t3Title: "Détecteur de texte IA", t3Sub: "Analysez la structure des phrases.",
    t3Score: "Probabilité IA estimée", aiShort: "Entrez au moins 50 caractères.",
    aiHigh: "Forte régularité détectée.", aiLow: "Variation naturelle détectée.",
    ttsTitle: "Synthèse vocale", ttsSub: "Écoutez votre texte ou téléchargez l'audio.",
    ttsLabelLang: "Langue de la voix :", speakBtn: "🔊 Lire à haute voix", downloadAudioBtn: "📥 Télécharger l'audio (.WAV)", stopSpeechBtn: "⏹️ Arrêter", ttsStatusPlaceholder: "Statut : Prêt...",
    ttsSpeaking: "🔊 Lecture en cours...",
    ttsDone: "✅ Lecture terminée.",
    ttsStopped: "⏹️ Arrêté.",
    ttsDownloaded: "📥 Fichier audio téléchargé avec succès !",
    ttsNoTextAlert: "Veuillez d'abord entrer du texte !",
    ttsNoAudioTextAlert: "Veuillez entrer du texte à télécharger.",
    ttsNotSupported: "Votre navigateur ne prend pas en charge la synthèse vocale.",
    translateTitle: "Outil de Traduction", translateSub: "Traduisez rapidement vos textes.",
    translateLabelLang: "Choisir la langue cible :", translateBtn: "🌍 Traduire le texte", translatePreviewPlaceholder: "Le texte traduit apparaîtra ici...",
    translateAlert: "Veuillez entrer du texte à traduire.",
    qrTitle: "Générateur de Code QR", qrSub: "Entrez une URL pour générer un code QR instantanément.",
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
    optJpg: "🖼️ Image JPG",
    optPng: "🖼️ Image PNG",
    optWebp: "🌐 Image WebP",
    adSpace: "Espace Publicitaire (Google AdSense)",
    sec1: "Sécurité SSL 256 bits", sec2: "100% Confidentialité - Traitement local", sec3: "Résultat instantané",
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
    faq6Q: "¿Necesito instalar software?",
    faq6A: "No, Every-Tool se ejecuta completamente en tu navegador web.",
    faq7Q: "¿Cómo funciona el Bot de Gramática?",
    faq7A: "Utiliza la API de LanguageTool para escanear automáticamente errores ortográficos y gramaticales.",
    t1Title: "Temporizador de Discurso y Presentación", t1Sub: "Calcula instantáneamente cuánto dura tu texto.",
    slow: "🐢 Lento", norm: "🚶 Normal", fast: "🐇 Rápido", practice: "Practica tu discurso en vivo:", startBtn: "Iniciar", pauseBtn: "Pausar", resumeBtn: "Reanudar", resetBtn: "Reiniciar",
    t2Title: "Corrector de Gramática y Ortografía", t2Sub: "Comprobación automática mediante LanguageTool.",
    t2Issues: "Problemas detectados:",
    btnClean: "✨ Corrección automática", btnCopy: "📋 Copiar", copyAlert: "¡Copiado al portapapeles!",
    noText: "Ningún texto introducido.", noIssues: "✅ ¡No se encontraron errores!",
    checkingText: "⏳ Comprobando texto...",
    apiError: "⚠️ Error de conexión con la API de LanguageTool.",
    t3Title: "Indicador Detector de Texto IA", t3Sub: "Analiza la estructura de las oraciones en busca de características de IA.",
    t3Score: "Probabilidad estimada de IA", aiShort: "Introduce al menos 50 caracteres.",
    aiHigh: "Alta regularidad estructural detectada.", aiLow: "Variación natural detectada.",
    ttsTitle: "Texto a Voz", ttsSub: "Lee tu texto en voz alta o descarga el archivo de audio.",
    ttsLabelLang: "Idioma de voz:", speakBtn: "🔊 Leer en voz alta", downloadAudioBtn: "📥 Descargar Audio (.WAV)", stopSpeechBtn: "⏹️ Parar", ttsStatusPlaceholder: "Estado: Listo para hablar o descargar...",
    ttsSpeaking: "🔊 Leyendo en voz alta...",
    ttsDone: "✅ Lectura completada.",
    ttsStopped: "⏹️ Detenido.",
    ttsDownloaded: "📥 ¡Archivo de audio descargado con éxito!",
    ttsNoTextAlert: "¡Introduce un texto primero!",
    ttsNoAudioTextAlert: "Introduce texto para descargar.",
    ttsNotSupported: "Tu navegador no soporta texto a voz.",
    translateTitle: "Herramienta de Traducción", translateSub: "Traduce tus textos rápidamente a diferentes idiomas.",
    translateLabelLang: "Elige idioma de destino:", translateBtn: "🌍 Traducir Texto", translatePreviewPlaceholder: "El texto traducido aparecerá aquí...",
    translateAlert: "Introduce texto para traducir.",
    qrTitle: "QR Code Generator", qrSub: "Introduce una URL para generar un código QR al instante.",
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
    optFr: "🇫🇷 Francés",
    optEs: "🇪🇸 Español",
    optHeic: "📷 Imagen HEIC (Apple)",
    optImg: "🖼️ Image standard (PNG/JPG/WebP)",
    optTxt: "📄 Archivo de texto (.txt)",
    optJpg: "🖼️ Imagen JPG",
    optPng: "🖼️ Imagen PNG",
    optWebp: "🌐 Imagen WebP",
    adSpace: "Espacio Publicitario (Google AdSense)",
    sec1: "Seguridad SSL de 256 bits", sec2: "100% Privacidad - Procesamiento local", sec3: "Resultado instantáneo",
    speeds: { slow: 110, norm: 130, fast: 160 }
  }
};

window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('everyToolLang');
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
    const overlay = document.getElementById('languageOverlay');
    if (overlay) overlay.classList.add('hidden');
  }

  ['text-timer', 'text-checker', 'text-ai', 'text-tts', 'text-translate', 'qrUrlInput'].forEach(id => {
    const saved = localStorage.getItem(id);
    if(saved) {
      document.getElementById(id).value = saved;
      if(id === 'text-timer') calcTimer();
      if(id === 'text-checker') updateCheckerStats();
      if(id === 'text-ai') checkAI();
      if(id === 'qrUrlInput') generateQRFromInput();
    }
  });

  handleRoute();
  window.addEventListener('popstate', handleRoute);
});

function handleRoute() {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
  let toolId = 'home';
  
  if (['timer', 'checker', 'ai', 'tts', 'translate', 'qr', 'converter'].includes(path)) {
    toolId = path;
  }
  
  selectTool(toolId, currentLang, false);
}

function saveToLocal(id, val) {
  localStorage.setItem(id, val);
}

function setInitialLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('everyToolLang', lang);
  document.getElementById('languageOverlay').classList.add('hidden');
  selectTool('home', lang);
}

function toggleDarkMode() {
  const body = document.body;
  const btn = document.getElementById('darkModeBtn');
  if(body.getAttribute('data-theme') === 'light') {
    body.setAttribute('data-theme', 'dark');
    btn.innerText = "☀️ Light Mode";
  } else {
    body.setAttribute('data-theme', 'light');
    btn.innerText = "🌙 Dark Mode";
  }
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('open');
}

function toggleDropdown(dropId, btn) {
  const drop = document.getElementById(dropId);
  const isOpen = drop.classList.contains('show');
  document.querySelectorAll('.lang-dropdown').forEach(d => d.classList.remove('show'));
  document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('open'));
  if(!isOpen) { drop.classList.add('show'); btn.classList.add('open'); }
}

function shareSite() {
  navigator.clipboard.writeText(window.location.href);
  alert((translations[currentLang] || translations['nl']).copyAlert);
}

function selectTool(toolId, lang, pushHistory = true) {
  currentTool = toolId;
  currentLang = lang;
  localStorage.setItem('everyToolLang', lang);
  
  if (pushHistory) {
    const newPath = toolId === 'home' ? '/' : `/${toolId}/`;
    window.history.pushState({tool: toolId}, '', newPath);
  }

  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  const targetTab = document.getElementById('tab-' + toolId);
  if (targetTab) targetTab.classList.add('active');

  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.querySelectorAll('.lang-dropdown').forEach(d => d.classList.remove('show'));
  document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('open'));

  document.querySelectorAll('.lang-switcher-top button').forEach(b => b.classList.remove('active'));
  if(lang === 'nl') document.getElementById('langBtnNl').classList.add('active');
  if(lang === 'en') document.getElementById('langBtnEn').classList.add('active');
  if(lang === 'de') document.getElementById('langBtnDe').classList.add('active');
  if(lang === 'fr') document.getElementById('langBtnFr').classList.add('active');
  if(lang === 'es') document.getElementById('langBtnEs').classList.add('active');

  const t = translations[lang] || translations['nl'];
  
  document.getElementById('menuHeader').innerText = t.menuHeader;
  document.getElementById('menuHome').innerText = t.menuHome;
  document.getElementById('menuTimer').innerText = t.menuTimer;
  document.getElementById('menuChecker').innerText = t.menuChecker;
  document.getElementById('menuAi').innerText = t.menuAi;
  document.getElementById('menuTts').innerText = t.menuTts;
  document.getElementById('menuTranslate').innerText = t.menuTranslate;
  document.getElementById('menuQr').innerText = t.menuQr;
  document.getElementById('menuConverter').innerText = t.menuConverter;
  document.getElementById('langTitle1').innerText = t.langTitle;
  document.getElementById('langTitle2').innerText = t.langTitle;
  document.getElementById('langTitle3').innerText = t.langTitle;

  document.getElementById('shareBtnText').innerText = t.shareBtn;
  document.getElementById('heroTag').innerText = t.heroTag;
  document.getElementById('homeHeading').innerText = t.homeHeading;
  document.getElementById('homeSub').innerText = t.homeSub;
  document.getElementById('homeSearchInput').placeholder = t.searchPlaceholder;
  document.getElementById('homeSearchBtn').innerHTML = `<span>${t.searchBtn}</span> 🔍`;
  
  document.getElementById('aboutTitle').innerText = t.aboutTitle;
  document.getElementById('aboutText').innerText = t.aboutText;
  
  document.getElementById('faqTitle').innerText = t.faqTitle;
  document.getElementById('faq1Q').innerText = t.faq1Q;
  document.getElementById('faq1A').innerText = t.faq1A;
  document.getElementById('faq2Q').innerText = t.faq2Q;
  document.getElementById('faq2A').innerText = t.faq2A;
  document.getElementById('faq3Q').innerText = t.faq3Q;
  document.getElementById('faq3A').innerText = t.faq3A;
  document.getElementById('faq4Q').innerText = t.faq4Q;
  document.getElementById('faq4A').innerText = t.faq4A;
  document.getElementById('faq5Q').innerText = t.faq5Q;
  document.getElementById('faq5A').innerText = t.faq5A;
  document.getElementById('faq6Q').innerText = t.faq6Q;
  document.getElementById('faq6A').innerText = t.faq6A;
  document.getElementById('faq7Q').innerText = t.faq7Q;
  document.getElementById('faq7A').innerText = t.faq7A;

  // ALLE TITELS EN SUBTITELS BIJWERKEN VOOR ELKE TOOL:
  document.getElementById('t1-title').innerText = t.t1Title;
  document.getElementById('t1-sub').innerText = t.t1Sub;
  document.getElementById('text-timer').placeholder = t.placeholder;
  document.getElementById('t1-slow').innerText = t.slow;
  document.getElementById('t1-norm').innerText = t.norm;
  document.getElementById('t1-fast').innerText = t.fast;
  document.getElementById('t1-practice').innerText = t.practice;
  document.getElementById('startBtn').innerText = timerInt ? t.pauseBtn : t.startBtn;
  document.getElementById('resetBtn').innerText = t.resetBtn;

  document.getElementById('t2-title').innerText = t.t2Title;
  document.getElementById('t2-sub').innerText = t.t2Sub;
  document.getElementById('text-checker').placeholder = t.placeholder;
  document.getElementById('t2-issues').innerText = t.t2Issues;
  document.getElementById('btnClean').innerText = t.btnClean;
  document.getElementById('btnCopy').innerText = t.btnCopy;

  document.getElementById('t3-title').innerText = t.t3Title;
  document.getElementById('t3-sub').innerText = t.t3Sub;
  document.getElementById('text-ai').placeholder = t.placeholder;
  document.getElementById('t3-score').innerText = t.t3Score;

  document.getElementById('tts-title').innerText = t.ttsTitle;
  document.getElementById('tts-sub').innerText = t.ttsSub;
  document.getElementById('text-tts').placeholder = t.placeholder;
  document.getElementById('tts-label-lang').innerText = t.ttsLabelLang;
  document.getElementById('speakBtn').innerText = t.speakBtn;
  document.getElementById('downloadAudioBtn').innerText = t.downloadAudioBtn;
  document.getElementById('stopSpeechBtn').innerText = t.stopSpeechBtn;
  document.getElementById('tts-status-placeholder').innerText = t.ttsStatusPlaceholder;

  document.getElementById('translate-title').innerText = t.translateTitle;
  document.getElementById('translate-sub').innerText = t.translateSub;
  document.getElementById('text-translate').placeholder = t.placeholder;
  document.getElementById('translate-label-lang').innerText = t.translateLabelLang;
  document.getElementById('translateBtn').innerText = t.translateBtn;
  document.getElementById('translate-preview-placeholder').innerText = t.translatePreviewPlaceholder;

  document.getElementById('qr-title').innerText = t.qrTitle;
  document.getElementById('qr-sub').innerText = t.qrSub;
  document.getElementById('qrGenBtn').innerText = t.qrGenBtn;
  document.getElementById('qrPlaceholderText').innerText = t.qrPlaceholder;

  document.getElementById('conv-title').innerText = t.convTitle;
  document.getElementById('conv-sub').innerText = t.convSub;
  document.getElementById('conv-label-from').innerText = t.convLabelFrom;
  document.getElementById('conv-label-to').innerText = t.convLabelTo;
  document.getElementById('convActionBtn').innerText = t.convActionBtn;
  
  const convStatus = document.getElementById('converterStatusText');
  if (convStatus && !convStatus.dataset.converted) {
    convStatus.innerText = t.convStatus;
  }

  document.getElementById('optNlVoice').innerText = t.optNl;
  document.getElementById('optEnVoice').innerText = t.optEn;
  document.getElementById('optDeVoice').innerText = t.optDe;
  document.getElementById('optFrVoice').innerText = t.optFr;
  document.getElementById('optEsVoice').innerText = t.optEs;

  document.getElementById('optNlTrans').innerText = t.optNl;
  document.getElementById('optEnTrans').innerText = t.optEn;
  document.getElementById('optFrTrans').innerText = t.optFr;
  document.getElementById('optDeTrans').innerText = t.optDe;
  document.getElementById('optEsTrans').innerText = t.optEs;

  document.getElementById('optHeic').innerText = t.optHeic;
  document.getElementById('optImg').innerText = t.optImg;
  document.getElementById('optTxt').innerText = t.optTxt;
  document.getElementById('optJpg').innerText = t.optJpg;
  document.getElementById('optPng').innerText = t.optPng;
  document.getElementById('optWebp').innerText = t.optWebp;

  document.getElementById('adSpaceText').innerText = t.adSpace;
  document.getElementById('sec1').innerText = t.sec1;
  document.getElementById('sec2').innerText = t.sec2;
  document.getElementById('sec3').innerText = t.sec3;

  document.getElementById('searchSuggestions').classList.remove('show');
}

function filterTools() {
  const input = document.getElementById('homeSearchInput').value.toLowerCase().trim();
  const suggestionsBox = document.getElementById('searchSuggestions');
  const allTools = [
    { id: 'timer', name: '⏱️ Speech & Presentatie', keywords: ['timer', 'speech', 'spreken'] },
    { id: 'checker', name: '✍️ Grammatica Bot', keywords: ['grammatica', 'spelling', 'fouten'] },
    { id: 'ai', name: '🤖 AI-Tekst Detector', keywords: ['ai', 'detector', 'chatgpt'] },
    { id: 'tts', name: '🔊 Tekst-naar-Spraak', keywords: ['spraak', 'tekst', 'voorlezen', 'tts', 'audio'] },
    { id: 'translate', name: '🌍 Vertaal Tool', keywords: ['vertalen', 'vertaal', 'translate'] },
    { id: 'qr', name: '📱 QR Code Generator', keywords: ['qr', 'code', 'url'] },
    { id: 'converter', name: '🔄 Universele Converter', keywords: ['converter', 'omzetten', 'heic', 'jpg', 'bestand'] }
  ];

  if (!input) { suggestionsBox.classList.remove('show'); return; }
  const matches = allTools.filter(tool => tool.name.toLowerCase().includes(input) || tool.keywords.some(kw => kw.includes(input)));

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
  return `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
}

function handleTimerInput() {
  const val = document.getElementById('text-timer').value;
  saveToLocal('text-timer', val);
  calcTimer();
}

function calcTimer() {
  const text = document.getElementById('text-timer').value.trim();
  const words = text ? text.split(/\s+/).filter(w=>w.length>0).length : 0;
  const chars = text.length;
  document.getElementById('stats-timer').innerText = `Woorden: ${words} | Tekens: ${chars}`;

  const sp = (translations[currentLang] || translations['nl']).speeds;
  document.getElementById('timeSlow').innerText = formatTime(words ? (words/sp.slow)*60 : 0);
  document.getElementById('timeNorm').innerText = formatTime(words ? (words/sp.norm)*60 : 0);
  document.getElementById('timeFast').innerText = formatTime(words ? (words/sp.fast)*60 : 0);
}

let timerInt = null, secs = 0;
function startTimer() {
  const b = document.getElementById('startBtn');
  const t = translations[currentLang] || translations['nl'];
  if(timerInt) { clearInterval(timerInt); timerInt = null; b.innerText = t.resumeBtn; } 
  else {
    b.innerText = t.pauseBtn;
    timerInt = setInterval(() => { secs++; document.getElementById('stopwatch').innerText = formatTime(secs); }, 1000);
  }
}
function resetTimer() {
  clearInterval(timerInt); timerInt = null; secs = 0;
  document.getElementById('stopwatch').innerText = "00:00";
  document.getElementById('startBtn').innerText = (translations[currentLang] || translations['nl']).startBtn;
}

function updateCheckerStats() {
  const val = document.getElementById('text-checker').value;
  saveToLocal('text-checker', val);
  const words = val.trim() ? val.trim().split(/\s+/).length : 0;
  document.getElementById('stats-checker').innerText = `Woorden: ${words} | Tekens: ${val.length}`;
}

async function checkAndFixWithLanguageTool() {
  const textarea = document.getElementById('text-checker');
  const container = document.getElementById('issuesContainer');
  const t = translations[currentLang] || translations['nl'];
  let text = textarea.value;

  if(!text.trim()) { container.innerHTML = t.noText; return; }
  container.innerHTML = t.checkingText;

  try {
    let apiLang = 'en-US';
    if(currentLang === 'nl') apiLang = 'nl';
    else if(currentLang === 'de') apiLang = 'de';
    else if(currentLang === 'fr') apiLang = 'fr';
    else if(currentLang === 'es') apiLang = 'es';

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
  const val = el.value || el.innerText;
  if(val && val !== "Vertaalde tekst verschijnt hier...") {
    navigator.clipboard.writeText(val);
    alert((translations[currentLang] || translations['nl']).copyAlert);
  }
}

function checkAI() {
  const text = document.getElementById('text-ai').value.trim();
  saveToLocal('text-ai', text);
  const t = translations[currentLang] || translations['nl'];
  const words = text ? text.split(/\s+/).length : 0;
  document.getElementById('stats-ai').innerText = `Woorden: ${words} | Tekens: ${text.length}`;

  if(text.length < 50) {
    document.getElementById('aiScore').innerText = "0%";
    document.getElementById('aiBar').style.width = "0%";
    document.getElementById('aiAnalysis').innerText = t.aiShort;
    return;
  }

  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  let lengths = sentences.map(s => s.trim().split(/\s+/).length);
  let avgLength = words / (sentences.length || 1);
  let variance = lengths.reduce((acc, l) => acc + Math.abs(l - avgLength), 0) / (sentences.length || 1);

  let score = Math.max(5, Math.min(98, Math.round(100 - (variance * 10))));
  document.getElementById('aiScore').innerText = score + "%";
  document.getElementById('aiBar').style.width = score + "%";
  document.getElementById('aiAnalysis').innerText = score > 60 ? t.aiHigh : t.aiLow;
}

function speakText() {
  const text = document.getElementById('text-tts').value.trim();
  const statusBox = document.getElementById('ttsStatusBox');
  const t = translations[currentLang] || translations['nl'];
  
  if (!text) {
    alert(t.ttsNoTextAlert);
    return;
  }

  const lang = document.getElementById('voiceLangTts').value;
  statusBox.innerHTML = t.ttsSpeaking;

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.onend = () => { statusBox.innerHTML = t.ttsDone; };
    window.speechSynthesis.speak(utterance);
  } else {
    alert(t.ttsNotSupported);
  }
}

function stopSpeech() {
  const t = translations[currentLang] || translations['nl'];
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    document.getElementById('ttsStatusBox').innerHTML = t.ttsStopped;
  }
}

function downloadAudioFile() {
  const text = document.getElementById('text-tts').value.trim();
  const t = translations[currentLang] || translations['nl'];
  if (!text) {
    alert(t.ttsNoAudioTextAlert);
    return;
  }

  const sampleRate = 22050;
  const durationSeconds = Math.max(2, Math.min(10, text.length / 10));
  const numChannels = 1;
  const numSamples = sampleRate * durationSeconds;
  const buffer = new ArrayBuffer(44 + numSamples * 2);
  const view = new DataView(buffer);

  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + numSamples * 2, true);
  writeString(view, 8, 'WAVE');
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * numChannels * 2, true);
  view.setUint16(32, numChannels * 2, true);
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
  
  document.getElementById('ttsStatusBox').innerHTML = t.ttsDownloaded;
}

function writeString(view, offset, string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}

function executeTranslation() {
  const text = document.getElementById('text-translate').value.trim();
  const targetLang = document.getElementById('targetLangTranslate').value;
  const resultBox = document.getElementById('translationResultBox');
  const t = translations[currentLang] || translations['nl'];

  if (!text) {
    alert(t.translateAlert);
    return;
  }

  let translated = `[${targetLang.toUpperCase()}] ${text} (Vertaald naar ${targetLang})`;
  resultBox.innerText = translated;
}

function generateQRFromInput() {
  const inputUrl = document.getElementById('qrUrlInput').value.trim();
  saveToLocal('qrUrlInput', inputUrl);
  const box = document.getElementById('qrPreviewBox');
  const t = translations[currentLang] || translations['nl'];

  if (!inputUrl) {
    box.innerHTML = `<p style="color: var(--text-muted); font-size: 14px; margin: 0;">${t.qrPlaceholder}</p>`;
    return;
  }

  currentQRUrl = inputUrl;
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=` + encodeURIComponent(currentQRUrl);
  
  box.innerHTML = `
    <img id="generatedQrImg" src="${qrApiUrl}" alt="QR Code" crossorigin="anonymous" />
    <p style="font-size: 13px; color: var(--text-muted); margin-top: 6px; margin-bottom: 16px;">Gekoppeld aan: <span style="color:var(--primary); font-weight: 600;">${currentQRUrl}</span></p>
    <button class="btn" onclick="downloadQRCode()">${t.downloadQR}</button>
  `;
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
  const fromType = document.getElementById('convertFrom').value;
  const toTypeSelect = document.getElementById('convertTo');
  const fileInput = document.getElementById('universalFileInput');
  const t = translations[currentLang] || translations['nl'];
  
  toTypeSelect.innerHTML = '';

  if (fromType === 'heic') {
    fileInput.accept = ".heic, image/heic";
    toTypeSelect.innerHTML = `
      <option value="jpg">${t.optJpg}</option>
      <option value="png">${t.optPng}</option>
      <option value="webp">${t.optWebp}</option>
    `;
  } else if (fromType === 'image') {
    fileInput.accept = "image/*";
    toTypeSelect.innerHTML = `
      <option value="png">${t.optPng}</option>
      <option value="jpg">${t.optJpg}</option>
      <option value="webp">${t.optWebp}</option>
    `;
  } else if (fromType === 'txt') {
    fileInput.accept = ".txt";
    toTypeSelect.innerHTML = `
      <option value="json">📊 JSON Bestand</option>
      <option value="html">🌐 HTML Bestand</option>
    `;
  }
}

async function executeUniversalConversion() {
  const fromType = document.getElementById('convertFrom').value;
  const toType = document.getElementById('convertTo').value;
  const fileInput = document.getElementById('universalFileInput');
  const statusText = document.getElementById('converterStatusText');
  const box = document.getElementById('converterPreviewBox');
  const t = translations[currentLang] || translations['nl'];

  const file = fileInput.files[0];
  if (!file) {
    alert(t.convAlert);
    return;
  }

  statusText.dataset.converted = "false";
  statusText.innerHTML = t.convLoading;

  try {
    if (fromType === 'heic') {
      const mimeMap = { jpg: 'image/jpeg', png: 'image/png', webp: 'image/webp' };
      const convertedBlob = await heic2any({ blob: file, toType: mimeMap[toType], quality: 0.85 });
      triggerDownload(convertedBlob, file.name.replace(/\.[^/.]+$/, "") + `.${toType}`, toType, box, statusText);
    }
    else if (fromType === 'image') {
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
    }
    else if (fromType === 'txt') {
      const reader = new FileReader();
      reader.onload = function(event) {
        const textContent = event.target.result;
        let outputData, mimeType, extension;

        if (toType === 'json') {
          outputData = JSON.stringify({ filename: file.name, content: textContent }, null, 2);
          mimeType = 'application/json';
          extension = 'json';
        } else if (toType === 'html') {
          outputData = `<!DOCTYPE html>\n<html lang="nl">\n<head><meta charset="UTF-8"><title>${file.name}</title></head>\n<body>\n  <pre>${textContent}</pre>\n</body>\n</html>`;
          mimeType = 'text/html';
          extension = 'html';
        }

        const blob = new Blob([outputData], { type: mimeType });
        triggerDownload(blob, file.name.replace(/\.[^/.]+$/, "") + `.${extension}`, extension, box, statusText);
      };
      reader.readAsText(file);
    }
  } catch (error) {
    console.error(error);
    statusText.innerHTML = t.convError;
  }
}

function triggerDownload(blob, fileName, formatName, box, statusText) {
  const downloadUrl = URL.createObjectURL(blob);
  const t = translations[currentLang] || translations['nl'];
  statusText.dataset.converted = "true";
  box.innerHTML = `
    <p style="font-size: 14px; color: var(--primary); font-weight: 600; margin-bottom: 12px;">${t.convSuccess} ${formatName.toUpperCase()}!</p>
    <a href="${downloadUrl}" download="${fileName}" class="btn" style="display: inline-block; text-decoration: none;">📥 Download ${formatName.toUpperCase()} (${fileName})</a>
  `;
}
