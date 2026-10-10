// Globale variabelen voor taal en huidige tool
let currentLang = localStorage.getItem('everyToolLang') || 'nl';
let currentTool = 'home';

// Vertaalwoordenboek per taal (inclusief uitgebreide SEO-uitlegteksten per tool)
const translations = {
  nl: {
    menuHeader: "Kies een Tool",
    menuHome: "🏠 Overzicht / Home",
    menuTimer: "⏱️ Speech & Presentatie",
    menuChecker: "✍️ Grammatica Bot",
    menuAi: "🤖 AI-Tekst Detector",
    menuTts: "🔊 Tekst-naar-Spraak",
    menuTranslate: "🌍 Vertaal Tool",
    menuQr: "📱 QR Code Generator",
    menuConverter: "🔄 Universele Converter",
    menuStudy: "🧠 AI Study Hub",
    menuBlog: "📰 Blog",
    darkModeBtn: "🌙 Dark Mode",
    shareBtn: "🔗 Deel",

    heroTag: "Meet Every-Tool",
    homeHeading: "Slimme tools voor al je tekst en spraak",
    homeSub: "Optimaliseer je presentaties, controleer op spelfouten of analyseer zinsstructuren in een handomdraai. Snel, veilig en betrouwbaar.",
    homeSearchInputPlaceholder: "Typ om een tool te zoeken...",
    homeSearchBtn: "Zoek 🔍",
    aboutTitle: "💡 Over Every-Tool & Onze Functionaliteiten",
    aboutText: "Alle berekeningen vinden direct plaats in je eigen webbrowser (client-side), wat maximale privacy garandeert. Geen van je teksten wordt opgeslagen op externe servers.",
    faqTitle: "❓ Veelgestelde Vragen (FAQ)",
    faq1Q: "Hoe werkt de Speech Timer?",
    faq1A: "Plak je presentatietekst in de tool om direct je spreektijd te berekenen op basis van verschillende snelheden.",
    faq2Q: "Worden mijn teksten opgeslagen?",
    faq2A: "Nee, alle verwerking gebeurt lokaal in je browser via LocalStorage.",
    faq3Q: "Is het gebruik van Every-Tool gratis?",
    faq3A: "Ja, alle tools op dit platform zijn volledig gratis te gebruiken.",
    faq4Q: "Hoe betrouwbaar is de AI-Tekst Detector?",
    faq4A: "De detector kijkt naar statistische kenmerken en geeft een indicatie, maar geen 100% sluitend bewijs.",
    faq5Q: "Kan ik de gegenereerde audio downloaden?",
    faq5A: "Ja, je kunt direct het audiobestand (.WAV) opslaan op je apparaat.",
    faq6Q: "Moet ik software installeren om deze tools te gebruiken?",
    faq6A: "Nee, Every-Tool werkt volledig web-based in elke moderne browser.",
    faq7Q: "Hoe werkt de Grammatica Bot?",
    faq7A: "De bot scant automatisch je tekst op spelfouten en stijlfouten.",

    t1Title: "Speech & Presentatie Timer",
    t1Sub: "Bereken direct hoe lang jouw tekst duurt om voor te lezen.",
    slow: "🐢 Langzaam",
    norm: "🚶 Normaal",
    fast: "🐇 Snel",
    practice: "Oefen je speech live:",
    startBtn: "Start",
    resetBtn: "Reset",
    toolExplanationTitle: "💡 Uitgebreide Gids: Hoe werkt de Speech & Presentatie Timer?",
    toolExplanationText1: "Wanneer je een presentatie, pitch of speech voorbereidt, is het cruciaal om te weten hoe lang je spreektijd zal zijn. Te lang doorpraten kan ervoor zorgen dat je publiek de aandacht verliest, terwijl te kort praten betekent dat je waardevolle informatie mist. Goede timing is de sleutel tot een succesvolle overtuigende presentatie.",
    toolExplanationText2: "Onze tool analyseert direct je geschreven tekst en berekent de precieze leestijd op basis van verschillende leessnelheden (langzaam, normaal en snel). Zo kun je je presentatie lokaal perfect timen, oefenen met de live stopwatch en kom je nooit meer voor ongewenste verrassingen te staan op het podium!",

    aiTitle: "AI-Tekst Detector",
    aiSub: "Analyseer direct of een tekst kenmerken heeft van kunstmatige intelligentie.",
    aiScanBtn: "🤖 Analyseer Tekst",
    aiResultPlaceholder: "Resultaat van de analyse verschijnt hier...",
    aiExplanationTitle: "💡 Uitgebreide Gids: Hoe werkt de AI-Tekst Detector?",
    aiExplanationText1: "AI-modellen schrijven vaak met gelijkmatige zinslengtes en terugkerende standaardformuleringen, terwijl mensen meer variatie, ritme en eigenzinnige keuzes laten zien in hun schrijfstijl.",
    aiExplanationText2: "Onze detector kijkt lokaal naar statistische kenmerken zoals zinslengtevariatie en AI-woorden. Het resultaat is een betrouwbare schatting, maar geen 100% sluitend bewijs. Alles gebeurt direct in je eigen webbrowser.",

    checkerTitle: "Grammatica Bot",
    checkerSub: "Controleer je tekst automatisch op spelfouten en stijlfouten.",
    checkerScanBtn: "✍️ Controleer Grammatica",
    checkerResultPlaceholder: "Resultaten en suggesties verschijnen hier...",
    checkerExplanationTitle: "💡 Uitgebreide Gids: Hoe werkt de Grammatica Bot?",
    checkerExplanationText1: "Een foutje in je spelling, dubbele woorden of kromme zinnen zijn snel gemaakt, maar kunnen erg afleiden van je inhoudelijke boodschap. Onze Grammatica Bot scant je tekst grondig lokaal op taalfouten en stijlonvolkomenheden.",
    checkerExplanationText2: "Of je nu een belangrijke e-mail, een verslag voor school of een zakelijk document schrijft: met deze tool zorg je ervoor dat je teksten er altijd professioneel, verzorgd en foutloos uitzien.",

    qrTitle: "QR Code Generator",
    qrSub: "Voer een URL in om direct een QR-code te genereren.",
    qrClearBtn: "🗑 Wis",
    qrGenBtn: "Genereer",
    qrPlaceholder: "Vul een URL in...",
    qrExplanationTitle: "💡 Uitgebreide Gids: Hoe werkt de QR Code Generator?",
    qrExplanationText1: "QR-codes bieden een snelle en eenvoudige manier om fysieke dragers (zoals posters, flyers of presentaties) te verbinden met online content. Mensen hoeven alleen maar hun smartphonecamera te gebruiken om direct naar de juiste website te gaan.",
    qrExplanationText2: "Met onze QR Code Generator typ of plak je eenvoudig een webadres, waarna de code zich direct voor je ogen vormt. Zo maak je in een handomdraai professionele en direct bruikbare QR-codes voor al je projecten.",

    ttsTitle: "Tekst-naar-Spraak",
    ttsSub: "Laat je tekst direct voorlezen of download de audio als bestand.",
    ttsLabelLang: "Spraak Taal:",
    speakBtn: "🔊 Lees Hardop",
    downloadAudioBtn: "📥 Download Audio (.WAV)",
    stopSpeechBtn: "⏹️ Stop",
    ttsStatusPlaceholder: "Status: Klaar om voor te lezen of te downloaden...",
    ttsExplanationTitle: "💡 Uitgebreide Gids: Hoe werkt de Tekst-naar-Spraak tool?",
    ttsExplanationText1: "Het omzetten van geschreven tekst naar gesproken woorden is ideaal om je eigen teksten te controleren op spelfouten, om luistervaardigheid te oefenen in een vreemde taal, of om documenten handsfree te beluisteren.",
    ttsExplanationText2: "Plak simpelweg je tekst in het invoerveld, kies de gewenste taal en klik op voorlezen. Zo breng je geschreven content in een handomdraai tot leven via je browser!",

    translateTitle: "Vertaal Tool",
    translateSub: "Vertaal snel en eenvoudig teksten naar verschillende talen.",
    translateLabelLang: "Doelstaal:",
    translateBtn: "🌍 Vertaal Tekst",
    translateResultPlaceholder: "De vertaling verschijnt hier...",
    translateExplanationTitle: "💡 Uitgebreide Gids: Hoe werkt de Vertaal Tool?",
    translateExplanationText1: "Of je nu communiceert met internationale partners, tekst leest in een vreemde taal of studeert voor een taalvak: snel en accuraat kunnen vertalen is onmisbaar in een verbonden wereld. Taalbarrières worden zo in een handomdraai weggenomen.",
    translateExplanationText2: "Met onze Vertaal Tool typ of plak je eenvoudig je tekst, selecteer je de gewenste doelstaal en zie je direct de live vertaling via beveiligde API-koppelingen. Zo overbrug je elk taalverschil direct online!",

    converterTitle: "Universele Converter",
    converterSub: "Converteer bestanden en afbeeldingen veilig en snel.",
    converterInstructions: "Upload je bestand of afbeelding hieronder om te converteren naar het gewenste formaat.",
    convertBtn: "🔄 Converteer Bestand",
    converterResultPlaceholder: "Het geconverteerde bestand verschijnt hier...",
    converterExplanationTitle: "💡 Uitgebreide Gids: Hoe werkt de Universele Converter?",
    converterExplanationText1: "Het omzetten van bestanden naar een ander formaat (zoals het converteren van PNG naar JPEG of documenten naar platte tekst) is vaak noodzakelijk wanneer software een specifiek bestandstype niet ondersteunt, of wanneer je bestanden wilt verkleinen voor gebruik op een website.",
    converterExplanationText2: "Met onze online Universele Converter upload je eenvoudig je bestand, selecteer je het gewenste doelformaat en wordt de conversie direct lokaal in je eigen webbrowser uitgevoerd via geavanceerde client-side technologie."
  },

  en: {
    menuHeader: "Choose a Tool",
    menuHome: "🏠 Overview / Home",
    menuTimer: "⏱️ Speech & Presentation",
    menuChecker: "✍️ Grammar Bot",
    menuAi: "🤖 AI Text Detector",
    menuTts: "🔊 Text-to-Speech",
    menuTranslate: "🌍 Translation Tool",
    menuQr: "📱 QR Code Generator",
    menuConverter: "🔄 Universal Converter",
    menuStudy: "🧠 AI Study Hub",
    menuBlog: "📰 Blog",
    darkModeBtn: "🌙 Dark Mode",
    shareBtn: "🔗 Share",

    heroTag: "Meet Every-Tool",
    homeHeading: "Smart tools for all your text and speech",
    homeSub: "Optimize your presentations, check for spelling errors, or analyze sentence structures in a flash. Fast, secure, and reliable.",
    homeSearchInputPlaceholder: "Type to search a tool...",
    homeSearchBtn: "Search 🔍",
    aboutTitle: "💡 About Every-Tool & Our Features",
    aboutText: "All calculations take place directly in your own web browser (client-side), guaranteeing maximum privacy. None of your texts are stored on external servers.",
    faqTitle: "❓ Frequently Asked Questions (FAQ)",
    faq1Q: "How does the Speech Timer work?",
    faq1A: "Paste your presentation text into the tool to instantly calculate your speaking time based on different speeds.",
    faq2Q: "Are my texts stored?",
    faq2A: "No, all processing happens locally in your browser via LocalStorage.",
    faq3Q: "Is using Every-Tool free?",
    faq3A: "Yes, all tools on this platform are completely free to use.",
    faq4Q: "How reliable is the AI Text Detector?",
    faq4A: "The detector looks at statistical features and gives an indication, but not 100% conclusive proof.",
    faq5Q: "Can I download the generated audio?",
    faq5A: "Yes, you can save the audio file (.WAV) directly to your device.",
    faq6Q: "Do I need to install software to use these tools?",
    faq6A: "No, Every-Tool works entirely web-based in any modern browser.",
    faq7Q: "How does the Grammar Bot work?",
    faq7A: "The bot automatically scans your text for spelling and style errors.",

    t1Title: "Speech & Presentation Timer",
    t1Sub: "Instantly calculate how long your text takes to read out loud.",
    slow: "🐢 Slow",
    norm: "🚶 Normal",
    fast: "🐇 Fast",
    practice: "Practice your speech live:",
    startBtn: "Start",
    resetBtn: "Reset",
    toolExplanationTitle: "💡 Comprehensive Guide: How does the Speech Timer work?",
    toolExplanationText1: "When preparing a presentation, pitch, or speech, knowing your exact speaking time is crucial. Talking too long can cause your audience to lose focus, while finishing too early means missing key information.",
    toolExplanationText2: "Our tool instantly analyzes your written text and calculates the precise reading duration based on different speeds, allowing you to time your speech perfectly.",

    aiTitle: "AI Text Detector",
    aiSub: "Instantly analyze if a text has characteristics of artificial intelligence.",
    aiScanBtn: "🤖 Analyze Text",
    aiResultPlaceholder: "Analysis results will appear here...",
    aiExplanationTitle: "💡 Comprehensive Guide: How does the AI Text Detector work?",
    aiExplanationText1: "AI models often write with even sentence lengths and recurring stock phrases, while people show more variation and rhythm.",
    aiExplanationText2: "Our detector looks at statistical features locally in your browser to give a reliable estimate without storing data.",

    checkerTitle: "Grammar Bot",
    checkerSub: "Automatically check your text for spelling and stylistic errors.",
    checkerScanBtn: "✍️ Check Grammar",
    checkerResultPlaceholder: "Results and suggestions will appear here...",
    checkerExplanationTitle: "💡 Comprehensive Guide: How does the Grammar Bot work?",
    checkerExplanationText1: "A spelling mistake, grammar slip, or awkward sentence can distract from your message. Our Grammar Bot thoroughly scans your text for errors.",
    checkerExplanationText2: "Ensure your emails, reports, and documents always look professional and error-free.",

    qrTitle: "QR Code Generator",
    qrSub: "Enter a URL to generate a QR code instantly.",
    qrClearBtn: "🗑 Clear",
    qrGenBtn: "Generate",
    qrPlaceholder: "Enter a URL...",
    qrExplanationTitle: "💡 Comprehensive Guide: How does the QR Code Generator work?",
    qrExplanationText1: "QR codes provide a quick way to connect physical media to online content using a smartphone camera.",
    qrExplanationText2: "Type or paste a web address to instantly form a professional QR code.",

    ttsTitle: "Text-to-Speech",
    ttsSub: "Have your text read out loud instantly or download the audio file.",
    ttsLabelLang: "Speech Language:",
    speakBtn: "🔊 Read Aloud",
    downloadAudioBtn: "📥 Download Audio (.WAV)",
    stopSpeechBtn: "⏹️ Stop",
    ttsStatusPlaceholder: "Status: Ready to read or download...",
    ttsExplanationTitle: "💡 Comprehensive Guide: How does the Text-to-Speech tool work?",
    ttsExplanationText1: "Converting written text to spoken words is ideal for checking spelling or practicing listening skills in a foreign language.",
    ttsExplanationText2: "Paste your text, choose the language, and bring content to life instantly.",

    translateTitle: "Translation Tool",
    translateSub: "Quickly and easily translate texts into different languages.",
    translateLabelLang: "Target Language:",
    translateBtn: "🌍 Translate Text",
    translateResultPlaceholder: "The translation will appear here...",
    translateExplanationTitle: "💡 Comprehensive Guide: How does the Translation Tool work?",
    translateExplanationText1: "Whether communicating internationally or studying a foreign language, accurate translation is indispensable.",
    translateExplanationText2: "Type or paste your text, select your target language, and bridge any language gap instantly.",

    converterTitle: "Universal Converter",
    converterSub: "Convert files and images safely and quickly.",
    converterInstructions: "Upload your file or image below to convert it to the desired format.",
    convertBtn: "🔄 Convert File",
    converterResultPlaceholder: "The converted file will appear here...",
    converterExplanationTitle: "💡 Comprehensive Guide: How does the Universal Converter work?",
    converterExplanationText1: "Converting files to different formats is necessary when specific programs do not support a file type.",
    converterExplanationText2: "Upload your file and convert it safely right inside your browser."
  },

  de: {
    menuHeader: "Tool auswählen",
    menuHome: "🏠 Übersicht / Startseite",
    menuTimer: "⏱️ Rede & Präsentation",
    menuChecker: "✍️ Grammatik-Bot",
    menuAi: "🤖 KI-Text-Detektor",
    menuTts: "🔊 Text-zu-Sprache",
    menuTranslate: "🌍 Übersetzungstool",
    menuQr: "📱 QR-Code-Generator",
    menuConverter: "🔄 Universal-Konverter",
    menuStudy: "🧠 AI Study Hub",
    menuBlog: "📰 Blog",
    darkModeBtn: "🌙 Dunkelmodus",
    shareBtn: "🔗 Teilen",

    heroTag: "Meet Every-Tool",
    homeHeading: "Intelligente Tools für all Ihre Texte und Sprache",
    homeSub: "Optimieren Sie Ihre Präsentationen, prüfen Sie Rechtschreibfehler oder analysieren Sie Satzstrukturen im Handumdrehen.",
    homeSearchInputPlaceholder: "Tippen, um ein Tool zu suchen...",
    homeSearchBtn: "Suchen 🔍",
    aboutTitle: "💡 Über Every-Tool & Unsere Funktionen",
    aboutText: "Alle Berechnungen finden direkt in Ihrem eigenen Webbrowser (clientseitig) statt, was maximale Privatsphäre garantiert.",
    faqTitle: "❓ Häufig gestellte Fragen (FAQ)",
    faq1Q: "Wie funktioniert der Redetimer?",
    faq1A: "Fügen Sie Ihren Präsentationstext ein, um Ihre Sprechzeit zu berechnen.",
    faq2Q: "Werden meine Texte gespeichert?",
    faq2A: "Nein, die Verarbeitung erfolgt lokal in Ihrem Browser.",
    faq3Q: "Ist die Nutzung kostenlos?",
    faq3A: "Ja, alle Tools sind völlig kostenlos.",
    faq4Q: "Wie zuverlässig ist der Detektor?",
    faq4A: "Er gibt eine statistische Indikation.",
    faq5Q: "Kann ich Audio herunterladen?",
    faq5A: "Ja, direkt auf Ihr Gerät.",
    faq6Q: "Muss ich Software installieren?",
    faq6A: "Nein, alles läuft webbasiert.",
    faq7Q: "Wie funktioniert der Grammatik-Bot?",
    faq7A: "Er scannt Ihren Text auf Fehler.",

    t1Title: "Rede- & Präsentationstimer",
    t1Sub: "Berechnen Sie sofort, wie lange das Vorlesen dauert.",
    slow: "🐢 Langsam",
    norm: "🚶 Normal",
    fast: "🐇 Schnell",
    practice: "Üben Sie live:",
    startBtn: "Start",
    resetBtn: "Zurücksetzen",
    toolExplanationTitle: "💡 Umfassender Leitfaden: Wie funktioniert der Redetimer?",
    toolExplanationText1: "Wichtige Reden erfordern eine präzise Zeiteinteilung, um das Publikum zu fesseln.",
    toolExplanationText2: "Unser Tool berechnet die Lesedauer basierend auf verschiedenen Geschwindigkeiten.",

    aiTitle: "KI-Text-Detektor",
    aiSub: "Analysieren Sie sofort, ob ein Text von KI stammt.",
    aiScanBtn: "🤖 Text analysieren",
    aiResultPlaceholder: "Ergebnis erscheint hier...",
    aiExplanationTitle: "💡 Umfassender Leitfaden: Wie funktioniert der KI-Detektor?",
    aiExplanationText1: "KI-Modelle schreiben oft gleichmäßig, während Menschen mehr Varianz zeigen.",
    aiExplanationText2: "Der Detektor prüft dies lokal in Ihrem Browser.",

    checkerTitle: "Grammatik-Bot",
    checkerSub: "Überprüfen Sie Ihren Text automatisch.",
    checkerScanBtn: "✍️ Grammatik prüfen",
    checkerResultPlaceholder: "Ergebnisse erscheinen hier...",
    checkerExplanationTitle: "💡 Umfassender Leitfaden: Wie funktioniert der Grammatik-Bot?",
    checkerExplanationText1: "Fehler lassen sich schnell vermeiden mit einer gründlichen Textprüfung.",
    checkerExplanationText2: "Schreiben Sie stets professionell und fehlerfrei.",

    qrTitle: "QR-Code-Generator",
    qrSub: "Geben Sie eine URL ein.",
    qrClearBtn: "🗑 Löschen",
    qrGenBtn: "Generieren",
    qrPlaceholder: "URL eingeben...",
    qrExplanationTitle: "💡 Umfassender Leitfaden: Wie funktioniert der QR-Generator?",
    qrExplanationText1: "Verknüpfen Sie physische Medien schnell mit Online-Inhalten.",
    qrExplanationText2: "Erstellen Sie professionelle QR-Codes im Handumdrehen.",

    ttsTitle: "Text-zu-Sprache",
    ttsSub: "Lassen Sie sich Text vorlesen.",
    ttsLabelLang: "Sprachausgabe:",
    speakBtn: "🔊 Vorlesen",
    downloadAudioBtn: "📥 Audio herunterladen",
    stopSpeechBtn: "⏹️ Stopp",
    ttsStatusPlaceholder: "Status: Bereit...",
    ttsExplanationTitle: "💡 Umfassender Leitfaden: Wie funktioniert Text-zu-Sprache?",
    ttsExplanationText1: "Ideal zur Selbstkontrolle oder zum Anhören von Dokumenten.",
    ttsExplanationText2: "Erwecken Sie geschriebene Inhalte zum Leben.",

    translateTitle: "Übersetzungstool",
    translateSub: "Übersetzen Sie Texte in verschiedene Sprachen.",
    translateLabelLang: "Zielsprache:",
    translateBtn: "🌍 Text übersetzen",
    translateResultPlaceholder: "Übersetzung erscheint hier...",
    translateExplanationTitle: "💡 Umfassender Leitfaden: Wie funktioniert das Übersetzungstool?",
    translateExplanationText1: "Schnelle und genaue Übersetzungen für internationale Kommunikation.",
    translateExplanationText2: "Überwinden Sie Sprachbarrieren im Nu.",

    converterTitle: "Universal-Konverter",
    converterSub: "Konvertieren Sie Dateien sicher.",
    converterInstructions: "Datei hochladen:",
    convertBtn: "🔄 Konvertieren",
    converterResultPlaceholder: "Ergebnis erscheint hier...",
    converterExplanationTitle: "💡 Umfassender Leitfaden: Wie funktioniert der Konverter?",
    converterExplanationText1: "Wandeln Sie Formate unkompliziert um.",
    converterExplanationText2: "Alles läuft sicher lokal in Ihrem Browser ab."
  },

  fr: {
    menuHeader: "Choisir un outil",
    menuHome: "🏠 Accueil / Aperçu",
    menuTimer: "⏱️ Chrono Discours",
    menuChecker: "✍️ Bot Grammaire",
    menuAi: "🤖 Détecteur de texte IA",
    menuTts: "🔊 Synthèse vocale",
    menuTranslate: "🌍 Outil de Traduction",
    menuQr: "📱 Générateur QR Code",
    menuConverter: "🔄 Convertisseur Universel",
    menuStudy: "🧠 AI Study Hub",
    menuBlog: "📰 Blog",
    darkModeBtn: "🌙 Mode Sombre",
    shareBtn: "🔗 Partager",

    heroTag: "Meet Every-Tool",
    homeHeading: "Des outils intelligents pour tous vos textes",
    homeSub: "Optimisez vos présentations et vérifiez vos textes en un instant.",
    homeSearchInputPlaceholder: "Rechercher un outil...",
    homeSearchBtn: "Rechercher 🔍",
    aboutTitle: "💡 À propos d'Every-Tool",
    aboutText: "Tous les calculs s'effectuent directement dans votre navigateur.",
    faqTitle: "❓ Foire Aux Questions",
    faq1Q: "Comment fonctionne le minuteur ?",
    faq1A: "Collez votre texte pour calculer le temps.",
    faq2Q: "Mes textes sont-ils enregistrés ?",
    faq2A: "Non, tout est local.",
    faq3Q: "Est-ce gratuit ?",
    faq3A: "Oui, entièrement gratuit.",
    faq4Q: "Fiabilité du détecteur IA ?",
    faq4A: "Donne une indication statistique.",
    faq5Q: "Télécharger l'audio ?",
    faq5A: "Oui, sur votre appareil.",
    faq6Q: "Installer un logiciel ?",
    faq6A: "Non, 100% web.",
    faq7Q: "Fonctionnement du bot grammaire ?",
    faq7A: "Analyse les erreurs.",

    t1Title: "Chrono Discours & Présentation",
    t1Sub: "Calculez la durée de lecture de votre texte.",
    slow: "🐢 Lent",
    norm: "🚶 Normal",
    fast: "🐇 Rapide",
    practice: "Entraînez-vous en direct :",
    startBtn: "Démarrer",
    resetBtn: "Réinitialiser",
    toolExplanationTitle: "💡 Guide complet : Comment fonctionne le Chrono ?",
    toolExplanationText1: "Connaître son temps de parole est crucial pour une présentation réussie.",
    toolExplanationText2: "Notre outil analyse votre texte selon différentes vitesses de lecture.",

    aiTitle: "Détecteur de texte IA",
    aiSub: "Analysez si un texte provient d'une IA.",
    aiScanBtn: "🤖 Analyser",
    aiResultPlaceholder: "Résultat ici...",
    aiExplanationTitle: "💡 Guide complet : Comment fonctionne le Détecteur IA ?",
    aiExplanationText1: "L'IA écrit de manière régulière, contrairement aux humains.",
    aiExplanationText2: "Analyse locale et sécurisée dans votre navigateur.",

    checkerTitle: "Bot Grammaire",
    checkerSub: "Vérifiez votre texte automatiquement.",
    checkerScanBtn: "✍️ Vérifier",
    checkerResultPlaceholder: "Résultats ici...",
    checkerExplanationTitle: "💡 Guide complet : Comment fonctionne le Bot Grammaire ?",
    checkerExplanationText1: "Évitez les fautes d'orthographe et de style.",
    checkerExplanationText2: "Rendez vos documents impeccables.",

    qrTitle: "Générateur de QR Code",
    qrSub: "Entrez une URL.",
    qrClearBtn: "🗑 Effacer",
    qrGenBtn: "Générer",
    qrPlaceholder: "Entrer une URL...",
    qrExplanationTitle: "💡 Guide complet : Comment fonctionne le Générateur QR ?",
    qrExplanationText1: "Connectez le monde physique au web en un clin d'œil.",
    qrExplanationText2: "Créez des codes QR professionnels instantanément.",

    ttsTitle: "Synthèse vocale",
    ttsSub: "Écoutez votre texte lu à haute voix.",
    ttsLabelLang: "Langue :",
    speakBtn: "🔊 Lire",
    downloadAudioBtn: "📥 Télécharger",
    stopSpeechBtn: "⏹️ Arrêter",
    ttsStatusPlaceholder: "Statut : Prêt...",
    ttsExplanationTitle: "💡 Guide complet : Comment fonctionne la Synthèse Vocale ?",
    ttsExplanationText1: "Idéal pour vérifier ses textes ou pratiquer une langue.",
    ttsExplanationText2: "Donnez vie à vos écrits.",

    translateTitle: "Outil de Traduction",
    translateSub: "Traduisez vos textes facilement.",
    translateLabelLang: "Langue cible :",
    translateBtn: "🌍 Traduire",
    translateResultPlaceholder: "Traduction ici...",
    translateExplanationTitle: "💡 Guide complet : Comment fonctionne l'Outil de Traduction ?",
    translateExplanationText1: "Communiquez sans barrière linguistique dans le monde entier.",
    translateExplanationText2: "Traduction rapide et précise.",

    converterTitle: "Convertisseur Universel",
    converterSub: "Convertissez vos fichiers en toute sécurité.",
    converterInstructions: "Uploader votre fichier :",
    convertBtn: "🔄 Convertir",
    converterResultPlaceholder: "Résultat ici...",
    converterExplanationTitle: "💡 Guide complet : Comment fonctionne le Convertisseur ?",
    converterExplanationText1: "Changez de format de fichier facilement.",
    converterExplanationText2: "Traitement 100% local et sécurisé."
  },

  es: {
    menuHeader: "Elegir una herramienta",
    menuHome: "🏠 Resumen / Inicio",
    menuTimer: "⏱️ Temporizador de Discurso",
    menuChecker: "✍️ Bot de Gramática",
    menuAi: "🤖 Detector de Texto IA",
    menuTts: "🔊 Texto a Voz",
    menuTranslate: "🌍 Herramienta de Traducción",
    menuQr: "📱 Generador de Códigos QR",
    menuConverter: "🔄 Convertidor Universal",
    menuStudy: "🧠 AI Study Hub",
    menuBlog: "📰 Blog",
    darkModeBtn: "🌙 Modo Oscuro",
    shareBtn: "🔗 Compartir",

    heroTag: "Meet Every-Tool",
    homeHeading: "Herramientas inteligentes para tu texto y voz",
    homeSub: "Optimiza tus presentaciones y comprueba errores al instante.",
    homeSearchInputPlaceholder: "Buscar herramienta...",
    homeSearchBtn: "Buscar 🔍",
    aboutTitle: "💡 Sobre Every-Tool",
    aboutText: "Todos los cálculos se realizan directamente en tu navegador.",
    faqTitle: "❓ Preguntas Frecuentes",
    faq1Q: "¿Cómo funciona el temporizador?",
    faq1A: "Pega tu texto para calcular het tiempo.",
    faq2Q: "¿Se guardan mis textos?",
    faq2A: "No, todo es local.",
    faq3Q: "¿Es gratuito?",
    faq3A: "Sí, completamente gratis.",
    faq4Q: "¿Confiabilidad de la IA?",
    faq4A: "Muestra una estimación estadística.",
    faq5Q: "¿Descargar audio?",
    faq5A: "Sí, directamente a tu dispositivo.",
    faq6Q: "¿Instalar software?",
    faq6A: "No, 100% web.",
    faq7Q: "¿Cómo funciona el bot de gramática?",
    faq7A: "Escanea errores en el texto.",

    t1Title: "Temporizador de Discurso y Presentación",
    t1Sub: "Calcula el tiempo de lectura de tu texto.",
    slow: "🐢 Lento",
    norm: "🚶 Normal",
    fast: "🐇 Rápido",
    practice: "Practica en vivo:",
    startBtn: "Iniciar",
    resetBtn: "Reiniciar",
    toolExplanationTitle: "💡 Guía completa: ¿Cómo funciona het Temporizador?",
    toolExplanationText1: "Saber tu tiempo exacto de intervención is crucial para una gran presentación.",
    toolExplanationText2: "Calcula la duración precisa según diferentes velocidades.",

    aiTitle: "Detector de Texto IA",
    aiSub: "Analiza si un texto tiene características de IA.",
    aiScanBtn: "🤖 Analizar texto",
    aiResultPlaceholder: "Resultado aquí...",
    aiExplanationTitle: "💡 Guía completa: ¿Cómo funciona het Detector IA?",
    aiExplanationText1: "La IA escribe con frases uniformes, a diferencia de los humanos.",
    aiExplanationText2: "Análisis local y privado en tu navegador.",

    checkerTitle: "Bot de Gramática",
    checkerSub: "Comprueba tu texto automáticamente.",
    checkerScanBtn: "✍️ Comprobar",
    checkerResultPlaceholder: "Resultados aquí...",
    checkerExplanationTitle: "💡 Guía completa: ¿Cómo funciona het Bot de Gramática?",
    checkerExplanationText1: "Evita faltas de ortografía y mejora tu estilo.",
    checkerExplanationText2: "Asegura documentos profesionales y sin errores.",

    qrTitle: "Generador de Códigos QR",
    qrSub: "Introduce una URL.",
    qrClearBtn: "🗑 Borrar",
    qrGenBtn: "Generar",
    qrPlaceholder: "Introducir URL...",
    qrExplanationTitle: "💡 Guía completa: ¿Cómo funciona het Generador QR?",
    qrExplanationText1: "Conecta medios físicos con contenido online fácilmente.",
    qrExplanationText2: "Crea códigos QR profesionales al instante.",

    ttsTitle: "Texto a Voz",
    ttsSub: "Haz que tu texto se lea en voz alta.",
    ttsLabelLang: "Idioma:",
    speakBtn: "🔊 Leer",
    downloadAudioBtn: "📥 Descargar",
    stopSpeechBtn: "⏹️ Detener",
    ttsStatusPlaceholder: "Status: Listo...",
    ttsExplanationTitle: "💡 Guía completa: ¿Cómo funciona Texto a Voz?",
    ttsExplanationText1: "Ideal para comprobar ortografía o practicar idiomas.",
    ttsExplanationText2: "Da vida al contenido escrito al instante.",

    translateTitle: "Herramienta de Traducción",
    translateSub: "Traduce textos fácilmente.",
    translateLabelLang: "Idioma de destino:",
    translateBtn: "🌍 Traducir",
    translateResultPlaceholder: "Tradución aquí...",
    translateExplanationTitle: "💡 Guía completa: ¿Cómo funciona la Traducción?",
    translateExplanationText1: "Comunica sin barreras en todo el mundo.",
    translateExplanationText2: "Traducción rápida y precisa online.",

    converterTitle: "Universal-Konverter",
    converterSub: "Convierte archivos de forma segura.",
    converterInstructions: "Sube tu archivo:",
    convertBtn: "🔄 Convertir",
    converterResultPlaceholder: "Resultado aquí...",
    converterExplanationTitle: "💡 Guía completa: ¿Cómo funciona el Convertidor?",
    converterExplanationText1: "Modifica formatos de archivos de forma sencilla.",
    converterExplanationText2: "Procesamiento local y seguro en tu navegador."
  }
};

// Functie om de taal in te stellen en direct de UI bij te werken
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('everyToolLang', lang);
  document.documentElement.lang = lang;

  ['En', 'Nl', 'De', 'Fr', 'Es'].forEach(l => {
    const btn = document.getElementById('langBtn' + l);
    if (btn) {
      if (l.toLowerCase() === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
  });

  const dict = translations[lang];
  for (const key in dict) {
    const element = document.getElementById(key);
    if (element) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        if (key.includes('Placeholder')) {
          element.placeholder = dict[key];
        }
      } else {
        element.innerHTML = dict[key];
      }
    }
  }
}

function setInitialLanguage(lang) {
  setLanguage(lang);
  const overlay = document.getElementById('languageOverlay');
  if (overlay) overlay.style.display = 'none';
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  if (sidebar && overlay) {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
  }
}

function toggleDarkMode() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('everyToolTheme', newTheme);
}

function clearTextArea(id) {
  const el = document.getElementById(id);
  if (el) {
    el.value = '';
    localStorage.removeItem(id);
    if (id === 'text-timer') handleTimerInput();
    if (id === 'qrUrlInput') generateQRFromInput();
  }
}

function saveToLocal(id, value) {
  localStorage.setItem(id, value);
}

function shareSite() {
  if (navigator.share) {
    navigator.share({
      title: 'Every-Tool',
      text: 'Bekijk deze handige online tools!',
      url: window.location.href
    }).catch(console.error);
  } else {
    alert('URL gekopieerd naar klembord!');
    navigator.clipboard.writeText(window.location.href);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('everyToolTheme') || 'light';
  document.body.setAttribute('data-theme', savedTheme);

  if (localStorage.getItem('everyToolLang')) {
    setLanguage(localStorage.getItem('everyToolLang'));
  } else {
    setLanguage('nl');
  }

  renderNotebookSources();
  const scholarToggle = document.getElementById('scholarToggle');
  if (scholarToggle) {
    scholarToggle.checked = localStorage.getItem('everyToolScholar') !== 'false';
  }

  ['text-timer', 'text-ai', 'text-checker', 'qrUrlInput', 'text-tts', 'text-translate'].forEach(id => {
    const el = document.getElementById(id);
    const savedVal = localStorage.getItem(id);
    if (el && savedVal) {
      el.value = savedVal;
      if (id === 'text-timer') handleTimerInput();
      if (id === 'qrUrlInput') generateQRFromInput();
    }
  });
});

// --- SPECIFIEKE TOOL LOGICA ---

// 1. Speech Timer Logica
function handleTimerInput() {
  const textEl = document.getElementById('text-timer');
  if (!textEl) return;
  const text = textEl.value.trim();
  saveToLocal('text-timer', text);

  const words = text === '' ? 0 : text.split(/\s+/).length;
  const chars = text.length;

  const statsEl = document.getElementById('stats-timer-text');
  if (statsEl) {
    statsEl.innerHTML = `Woorden: ${words} | Tekens: ${chars}`;
  }

  const timeSlow = words / 110;
  const timeNorm = words / 130;
  const timeFast = words / 160;

  document.getElementById('timeSlow').innerText = formatMinutes(timeSlow);
  document.getElementById('timeNorm').innerText = formatMinutes(timeNorm);
  document.getElementById('timeFast').innerText = formatMinutes(timeFast);
}

function formatMinutes(decimalMinutes) {
  if (isNaN(decimalMinutes) || decimalMinutes === 0) return '00:00';
  const totalSeconds = Math.round(decimalMinutes * 60);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

let stopwatchInterval = null;
let stopwatchSeconds = 0;

function startTimer() {
  const display = document.getElementById('stopwatch');
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(() => {
      stopwatchSeconds++;
      const m = Math.floor(stopwatchSeconds / 60);
      const s = stopwatchSeconds % 60;
      if (display) {
        display.innerText = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  stopwatchSeconds = 0;
  const display = document.getElementById('stopwatch');
  if (display) display.innerText = '00:00';
}

// 2. AI-Tekst Detector
const AI_STOCK_PHRASES = [
  'bovendien', 'daarnaast', 'kortom', 'al met al', 'het is belangrijk om', 'het is van belang',
  'het is essentieel', 'in de huidige digitale wereld', 'in de snel veranderende', 'een cruciale rol',
  'een breed scala', 'dit zorgt ervoor dat', 'in conclusie', 'samenvattend', 'tot slot', 'duiken we',
  'moreover', 'furthermore', 'in conclusion', 'in summary', 'it is important to', "it's important to",
  'it is worth noting', "it's worth noting", "in today's", 'ever-evolving', 'a crucial role', 'delve',
  'tapestry', 'in the realm of', 'a wide range of', 'additionally,', 'overall,', 'testament to'
];

function analyzeAiText(text) {
  const clean = text.replace(/\s+/g, ' ').trim();
  const lower = clean.toLowerCase();
  const words = lower.match(/[\p{L}\p{N}'’-]+/gu) || [];
  const wordCount = words.length;

  const sentences = (text.match(/[^.!?…\n]+[.!?…]*/g) || [])
    .map(s => s.trim())
    .filter(s => s.split(/\s+/).length >= 3);

  const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
  const signals = {};

  if (sentences.length >= 6) {
    const lens = sentences.map(s => s.split(/\s+/).length);
    const mean = lens.reduce((a, b) => a + b, 0) / lens.length;
    const variance = lens.reduce((a, b) => a + (b - mean) ** 2, 0) / lens.length;
    const cv = Math.sqrt(variance) / mean;
    signals.burst = clamp((0.65 - cv) / 0.35, 0, 1);
  }

  let phraseHits = 0;
  for (const p of AI_STOCK_PHRASES) {
    phraseHits += lower.split(p).length - 1;
  }
  signals.phrases = clamp((phraseHits / wordCount) * 100 / 2, 0, 1);

  const dashes = (text.match(/—|\s–\s/g) || []).length;
  signals.dash = clamp((dashes / wordCount) * 100 / 0.8, 0, 1);

  const weights = { burst: 0.45, phrases: 0.40, dash: 0.15 };
  let total = 0, weightSum = 0;
  for (const key in signals) {
    total += signals[key] * weights[key];
    weightSum += weights[key];
  }
  let score = (total / weightSum) * 100;

  return { score: Math.round(clamp(score, 0, 100)), signals, wordCount };
}

function runAiDetection() {
  const box = document.getElementById('aiResultBox');
  const input = document.getElementById('text-ai');
  if (!box) return;

  const text = input ? input.value.trim() : '';
  if (!text) {
    box.innerHTML = `<p style="color: var(--text-muted);">Plak eerst een tekst om te analyseren.</p>`;
    return;
  }

  const result = analyzeAiText(text);
  if (result.wordCount < 40) {
    box.innerHTML = `<p style="color: var(--text-muted);">Je tekst is te kort (${result.wordCount} woorden). Plak minimaal 40 woorden.</p>`;
    return;
  }

  box.innerHTML = `<p style="color: var(--primary); font-weight: 600;">🤖 AI-score: ${result.score}/100</p>`;
}

// 3. Grammatica Bot (Echte client-side logica)
function runGrammarCheck() {
  const input = document.getElementById('text-checker');
  const box = document.getElementById('checkerResultBox');
  if (!box || !input) return;

  const text = input.value.trim();
  if (!text) {
    box.innerHTML = `<p style="color: var(--text-muted);">Typ of plak eerst een tekst om te controleren.</p>`;
    return;
  }

  const words = text.match(/[\p{L}\p{N}'’-]+/gu) || [];
  const wordCount = words.length;
  const sentences = (text.match(/[^.!?…\n]+[.!?…]*/g) || []).map(s => s.trim()).filter(Boolean);

  let issues = [];

  const doubleWords = text.match(/\b(\p{L}+)\s+\1\b/gi);
  if (doubleWords) {
    issues.push(`⚠️ Dubbel woord gevonden: <strong>${doubleWords.join(', ')}</strong>`);
  }

  sentences.forEach((s, index) => {
    const sWords = s.split(/\s+/).length;
    if (sWords > 30) {
      issues.push(`💡 Zin ${index + 1} is erg lang (${sWords} woorden). Overweeg deze op te splitsen.`);
    }
  });

  sentences.forEach((s) => {
    const firstChar = s.charAt(0);
    if (firstChar && firstChar !== firstChar.toUpperCase() && /[\p{L}]/u.test(firstChar)) {
      issues.push(`✍️ Een zin begint mogelijk met een kleine letter: "${s.substring(0, 20)}..."`);
    }
  });

  if (issues.length === 0) {
    box.innerHTML = `<p style="color: green; font-weight: 600;">✨ Geen opvallende spelfouten of stijlfouten gevonden! (${wordCount} woorden)</p>`;
  } else {
    let html = `<p style="color: var(--primary); font-weight: 600; margin-bottom: 8px;">📝 Suggesties (${issues.length}):</p><ul style="margin: 0; padding-left: 20px;">`;
    issues.forEach(issue => { html += `<li style="margin-bottom: 4px;">${issue}</li>`; });
    html += `</ul>`;
    box.innerHTML = html;
  }
}

// 4. QR Code Generator
function generateQRFromInput() {
  const input = document.getElementById('qrUrlInput');
  const preview = document.getElementById('qrPreviewBox');
  if (!input || !preview) return;
  const val = input.value.trim();
  saveToLocal('qrUrlInput', val);

  if (val === '') {
    preview.innerHTML = `<p style="color: var(--text-muted);">Vul een URL in...</p>`;
    return;
  }

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(val)}`;
  preview.innerHTML = `<img src="${qrUrl}" alt="QR Code" style="border-radius: 8px;"/><br><a href="${qrUrl}" download="qrcode.png" class="btn" style="margin-top: 12px; display: inline-block; text-decoration:none;">📥 Download QR</a>`;
}

// 5. Tekst-naar-Spraak
function speakText() {
  const textEl = document.getElementById('text-tts');
  if (!textEl || !textEl.value.trim()) return;
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(textEl.value.trim()));
  }
}

function stopSpeech() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}

function downloadAudioFile() {
  alert('Audio download functionaliteit maakt gebruik van de lokale browser-synthese.');
}

// 6. Vertaal Tool (Echte API-integratie via MyMemory)
async function runTranslation() {
  const textEl = document.getElementById('text-translate');
  const langEl = document.getElementById('targetLangSelect') || { value: 'en' };
  const box = document.getElementById('translateResultBox');
  if (!textEl || !box) return;

  const val = textEl.value.trim();
  if (!val) {
    box.innerHTML = `<p style="color: var(--text-muted);">Voer eerst tekst in om te vertalen.</p>`;
    return;
  }

  box.innerHTML = `<p style="color: var(--text-muted);">Bezig met vertalen...</p>`;
  const targetLang = langEl.value || 'en';

  try {
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(val)}&langpair=nl|${targetLang}`);
    const data = await res.json();
    if (data && data.responseData) {
      box.innerHTML = `<p style="font-weight: 600; color: var(--primary);">🌍 Vertaalde tekst:</p><p style="margin-top: 8px; line-height: 1.6;">${data.responseData.translatedText}</p>`;
    } else {
      box.innerHTML = `<p style="color: red;">⚠️ Vertaalfout opgetreden.</p>`;
    }
  } catch (err) {
    box.innerHTML = `<p style="color: red;">⚠️ Kan geen verbinding maken met de vertaalservice.</p>`;
  }
}

// 7. Universele Converter (Afbeeldingen + Tekstbestanden)
function runConversion() {
  const fileInput = document.getElementById('fileInput');
  const targetFormatSelect = document.getElementById('targetFormat');
  const box = document.getElementById('converterResultBox');
  
  if (!fileInput || !box || !targetFormatSelect) return;
  
  if (fileInput.files.length === 0) {
    alert('Selecteer eerst een bestand om te converteren.');
    return;
  }

  const file = fileInput.files[0];
  const targetFormat = targetFormatSelect.value;
  box.innerHTML = `<p style="color: var(--text-muted);">Bezig met converteren...</p>`;

  if (file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const img = new Image();
      img.onload = function() {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        
        if (targetFormat === 'image/jpeg') {
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        ctx.drawImage(img, 0, 0);

        canvas.toBlob(function(blob) {
          const url = URL.createObjectURL(blob);
          const extension = targetFormat === 'image/jpeg' ? 'jpg' : 'png';
          const baseName = file.name.substring(0, file.name.lastIndexOf('.')) || 'geconverteerd';
          const newFileName = `${baseName}.${extension}`;

          box.innerHTML = `
            <p style="color: green; font-weight: 600; margin-bottom: 10px;">✅ Bestand succesvol geconverteerd!</p>
            <a href="${url}" download="${newFileName}" class="btn" style="display: inline-block; text-decoration: none;">📥 Download Geconverteerd Bestand</a>
          `;
        }, targetFormat, 0.9);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  } else if (file.type.startsWith('text/') || targetFormat === 'text/plain') {
    const reader = new FileReader();
    reader.onload = function(event) {
      const textContent = event.target.result;
      const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const baseName = file.name.includes('.') ? file.name.substring(0, file.name.lastIndexOf('.')) : file.name;
      const newFileName = `${baseName}.txt`;

      box.innerHTML = `
        <p style="color: green; font-weight: 600; margin-bottom: 10px;">✅ Bestand succesvol omgezet naar tekst!</p>
        <a href="${url}" download="${newFileName}" class="btn" style="display: inline-block; text-decoration: none;">📥 Download .TXT Bestand</a>
      `;
    };
    reader.readAsText(file);
  } else {
    box.innerHTML = `<p style="color: #d9534f; font-weight: 600;">⚠️ Selecteer een afbeelding (.png/.jpg) of tekstbestand (.txt).</p>`;
  }
}

// 8. AI Study Hub (echte AI via Netlify Functions: /api/chat en /api/fetch-url)
let studySources = [];
try { studySources = (JSON.parse(localStorage.getItem('everyToolStudySources')) || []).filter(s => s && s.text); } catch (e) { studySources = []; }
let chatHistory = [];
let isVoiceActive = false;
let isSpeaking = false;
let isThinking = false;
let recognition = null;
let currentUtterance = null;
const MAX_FILE_BYTES = 3 * 1024 * 1024;
const SPEECH_LANGS = { nl: 'nl-NL', en: 'en-US', de: 'de-DE', fr: 'fr-FR', es: 'es-ES' };

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function persistSources() {
  // Alleen tekstbronnen worden bewaard; PDF's en afbeeldingen blijven in het geheugen (localStorage is te klein)
  try {
    localStorage.setItem('everyToolStudySources', JSON.stringify(studySources.filter(s => s.text).map(s => ({ kind: s.kind, name: s.name, text: s.text.slice(0, 60000) }))));
  } catch (e) { /* opslag vol: bronnen blijven wel in dit venster beschikbaar */ }
}

function saveStudySettings() {
  const scholarToggle = document.getElementById('scholarToggle');
  if (scholarToggle) localStorage.setItem('everyToolScholar', scholarToggle.checked);
}

async function addUrlSource() {
  const input = document.getElementById('sourceUrlInput');
  if (!input) return;
  const val = input.value.trim();
  if (!val) { alert('Voeg een geldige URL in.'); return; }
  if (/youtube\.com|youtu\.be/i.test(val)) {
    appendChatMessage('YouTube-video\'s kan ik nog niet automatisch lezen. Upload het transcript als .txt-bestand via "Upload Bestand".', 'ai');
    return;
  }
  appendChatMessage('Pagina ophalen...', 'ai');
  try {
    const res = await fetch('/api/fetch-url', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url: val }) });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Ophalen mislukt');
    studySources.push({ kind: 'url', name: data.title || val, text: data.text });
    persistSources();
    input.value = '';
    renderNotebookSources();
    appendChatMessage(`Website "${data.title || val}" toegevoegd als bron.`, 'ai');
  } catch (e) {
    appendChatMessage('⚠️ ' + e.message, 'ai');
  }
}

function addFileAsSource(file) {
  if (!file) return;
  if (file.size > MAX_FILE_BYTES) { appendChatMessage('⚠️ Dit bestand is groter dan 3 MB. Kies een kleiner bestand.', 'ai'); return; }
  const reader = new FileReader();
  const isPdf = file.type === 'application/pdf';
  const isImage = /^image\/(png|jpeg|gif|webp)$/.test(file.type);
  reader.onload = e => {
    if (isPdf || isImage) {
      studySources.push({ kind: isPdf ? 'pdf' : 'image', name: file.name, mediaType: file.type, base64: String(e.target.result).split(',')[1] });
      appendChatMessage(`"${file.name}" toegevoegd. Let op: PDF's en afbeeldingen blijven alleen bewaard zolang dit venster open is.`, 'ai');
    } else {
      studySources.push({ kind: 'text', name: file.name, text: String(e.target.result) });
      appendChatMessage(`"${file.name}" toegevoegd als bron.`, 'ai');
    }
    persistSources();
    renderNotebookSources();
  };
  if (isPdf || isImage) reader.readAsDataURL(file);
  else if (/\.(txt|md)$/i.test(file.name) || file.type.startsWith('text/')) reader.readAsText(file);
  else appendChatMessage('⚠️ Dit bestandstype wordt niet ondersteund. Gebruik .txt, PDF of een afbeelding.', 'ai');
}

function handleNotebookFile(input) {
  if (input.files && input.files[0]) addFileAsSource(input.files[0]);
  input.value = '';
}

function handleChatFile(input) {
  if (input.files && input.files[0]) addFileAsSource(input.files[0]);
  input.value = '';
}

function renderNotebookSources() {
  const container = document.getElementById('sourcesListContainer');
  if (!container) return;
  if (studySources.length === 0) {
    container.innerHTML = '<div style="font-size: 12px; color: var(--text-muted);">Nog geen bronnen...</div>';
    return;
  }
  const icons = { url: '🌐', pdf: '📄', image: '🖼️', text: '📝' };
  container.innerHTML = studySources.map((src, index) => `
    <div class="source-item">
      <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 210px;" title="${escapeHtml(src.name)}">${icons[src.kind] || '📎'} ${escapeHtml(src.name)}</span>
      <button onclick="removeNotebookSource(${index})" aria-label="Verwijder bron" style="background: none; border: none; color: #ef4444; cursor: pointer; font-weight: bold;">✕</button>
    </div>
  `).join('');
}

function removeNotebookSource(index) {
  studySources.splice(index, 1);
  persistSources();
  renderNotebookSources();
}

function sendUserMessage() {
  const input = document.getElementById('chatInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text || isThinking) return;
  appendChatMessage(text, 'user');
  input.value = '';
  processStudyQuery(text);
}

function appendChatMessage(text, sender) {
  const chatArea = document.getElementById('chatMessages');
  if (!chatArea) return null;
  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${sender}`;
  bubble.style.whiteSpace = 'pre-wrap';
  bubble.textContent = text; // textContent: voorkomt dat tekst als HTML wordt uitgevoerd
  chatArea.appendChild(bubble);
  chatArea.scrollTop = chatArea.scrollHeight;
  return bubble;
}

// Zoekt (gratis, zonder sleutel) wetenschappelijke publicaties via OpenAlex; alleen titels als tip
async function searchLiterature(query) {
  try {
    const res = await fetch('https://api.openalex.org/works?search=' + encodeURIComponent(query.slice(0, 200)) + '&per_page=3&select=title,publication_year,doi');
    if (!res.ok) return '';
    const data = await res.json();
    return (data.results || []).map(w => `- ${w.title} (${w.publication_year})${w.doi ? ' ' + w.doi : ''}`).join('\n');
  } catch (e) { return ''; }
}

async function processStudyQuery(query) {
  if (isThinking) return;
  isThinking = true;
  chatHistory.push({ role: 'user', content: query });
  const bubble = appendChatMessage('…', 'ai');
  try {
    const useScholar = document.getElementById('scholarToggle')?.checked ?? true;
    const literature = useScholar ? await searchLiterature(query) : '';
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: chatHistory.slice(-12),
        sources: studySources.map(s => ({ name: s.name, text: s.text, base64: s.base64, mediaType: s.mediaType })),
        literature,
        voice: isVoiceActive
      })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'Er ging iets mis. Probeer het opnieuw.');
    bubble.textContent = data.reply;
    chatHistory.push({ role: 'assistant', content: data.reply });
    if (isVoiceActive) speakOutLoud(data.reply);
  } catch (e) {
    chatHistory.pop();
    if (bubble) bubble.textContent = '⚠️ ' + e.message;
    if (isVoiceActive) resumeListening();
  } finally {
    isThinking = false;
  }
}

function speakOutLoud(text) {
  if (!('speechSynthesis' in window)) { if (isVoiceActive) resumeListening(); return; }
  window.speechSynthesis.cancel();
  const lang = SPEECH_LANGS[currentLang] || 'nl-NL';
  const u = new SpeechSynthesisUtterance(String(text).replace(/[*_#`>~]/g, ''));
  u.lang = lang; u.rate = 0.95; u.pitch = 1.05;
  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find(v => v.lang === lang && /Google|Natural|Online/i.test(v.name)) || voices.find(v => v.lang === lang);
  if (voice) u.voice = voice;
  currentUtterance = u;
  isSpeaking = true;
  try { if (recognition) recognition.stop(); } catch (e) {}   // niet naar jezelf luisteren
  u.onend = u.onerror = () => {
    if (currentUtterance !== u) return;
    isSpeaking = false;
    if (isVoiceActive) resumeListening();
  };
  window.speechSynthesis.speak(u);
}

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => { window.speechSynthesis.getVoices(); };
}

function toggleVoiceCall() {
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    alert('Jouw browser ondersteunt geen spraakherkenning. Gebruik Google Chrome.');
    return;
  }
  isVoiceActive = !isVoiceActive;
  if (isVoiceActive) {
    document.getElementById('callBtn').classList.add('active');
    document.getElementById('callText').innerText = 'Verbreken';
    document.getElementById('callIcon').innerText = '📴';
    appendChatMessage('🎙️ Spraakgesprek gestart. Spreek je vraag in...', 'ai');
    setupRecognition();
    speakOutLoud('Gesprek gestart. Zeg gerust wat je wilt weten.');
  } else {
    stopVoiceCall();
  }
}

function setupRecognition() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SR();
  recognition.lang = SPEECH_LANGS[currentLang] || 'nl-NL';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.onresult = event => {
    const speechText = event.results[0][0].transcript;
    if (isThinking || isSpeaking) return;
    appendChatMessage(speechText, 'user');
    processStudyQuery(speechText);
  };
  recognition.onerror = event => {
    if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
      appendChatMessage('⚠️ Microfoon geblokkeerd. Geef toestemming in je browser en probeer opnieuw.', 'ai');
      stopVoiceCall();
    }
  };
  recognition.onend = () => { if (isVoiceActive && !isSpeaking && !isThinking) resumeListening(); };
}

function resumeListening() {
  if (!isVoiceActive || !recognition || isSpeaking) return;
  try { recognition.start(); } catch (e) { /* luistert al */ }
}

function stopVoiceCall() {
  isVoiceActive = false;
  isSpeaking = false;
  currentUtterance = null;
  if (recognition) { try { recognition.stop(); } catch (e) {} }
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  const callBtn = document.getElementById('callBtn');
  if (callBtn) callBtn.classList.remove('active');
  const callText = document.getElementById('callText');
  if (callText) callText.innerText = 'Bel AI';
  const callIcon = document.getElementById('callIcon');
  if (callIcon) callIcon.innerText = '📞';
  appendChatMessage('📴 Spraakgesprek beëindigd.', 'ai');
}

// Verbeterde Zoekfunctionaliteit
function filterTools() {
  const input = document.getElementById('homeSearchInput');
  const suggestions = document.getElementById('searchSuggestions');
  if (!input || !suggestions) return;
  const query = input.value.toLowerCase().trim();

  if (query === '') {
    suggestions.style.display = 'none';
    suggestions.classList.remove('show');
    return;
  }

  const tools = [
    { name: 'Speech & Presentatie Timer', alt: ['timer', 'speech', 'presentatie', 'tijd'], url: 'timer/' },
    { name: 'Grammatica Bot', alt: ['grammatica', 'spelling', 'checker', 'fouten'], url: 'checker/' },
    { name: 'AI-Tekst Detector', alt: ['ai', 'detector', 'kunstmatige intelligentie', 'tekst'], url: 'ai/' },
    { name: 'Tekst-naar-Spraak', alt: ['tts', 'spraak', 'voorlezen', 'audio'], url: 'tts/' },
    { name: 'Vertaal Tool', alt: ['vertaal', 'translate', 'taal', 'engels'], url: 'translate/' },
    { name: 'QR Code Generator', alt: ['qr', 'code', 'generator', 'url'], url: 'qr/' },
    { name: 'Universele Converter', alt: ['converter', 'converteren', 'bestanden', 'afbeelding'], url: 'converter/' },
    { name: 'AI Study Hub', alt: ['study', 'studeren', 'scholar', 'flashcards', 'quiz', 'voice', 'video'], url: 'study/' },
    { name: 'Blog', alt: ['blog', 'nieuws', 'artikelen'], url: 'blog/' }
  ];

  const matches = tools.filter(t => 
    t.name.toLowerCase().includes(query) || t.alt.some(keyword => keyword.includes(query))
  );

  suggestions.style.display = 'block';
  suggestions.classList.add('show');

  if (matches.length > 0) {
    suggestions.innerHTML = matches.map(m => `
      <div class="suggestion-item" onclick="location.href='${m.url}'">
        🔍 <span>${m.name}</span>
      </div>
    `).join('');
  } else {
    suggestions.innerHTML = `<div style="padding: 14px 20px; color: var(--text-muted); font-size: 14px;">Geen tools gevonden voor "${query}"</div>`;
  }
}

// Sluit suggesties als je ergens anders op de pagina klikt
document.addEventListener('click', (e) => {
  const searchBox = document.querySelector('.hero-search-wrapper');
  const suggestions = document.getElementById('searchSuggestions');
  if (searchBox && suggestions && !searchBox.contains(e.target)) {
    suggestions.style.display = 'none';
    suggestions.classList.remove('show');
  }
});
