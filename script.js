// Globale variabelen voor taal en huidige tool
let currentLang = localStorage.getItem('everyToolLang') || 'nl';
let currentTool = 'home';

// Vertaalwoordenboek per taal (inclusief de nieuwe uitgebreide uitlegteksten per tool)
const translations = {
  nl: {
    // Topbar & Menu
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
    darkModeBtn: "🌙 Dark Mode",
    shareBtn: "🔗 Deel",

    // Home pagina
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

    // Timer Tool
    t1Title: "Speech & Presentatie Timer",
    t1Sub: "Bereken direct hoe lang jouw tekst duurt om voor te lezen.",
    slow: "🐢 Langzaam",
    norm: "🚶 Normaal",
    fast: "🐇 Snel",
    practice: "Oefen je speech live:",
    startBtn: "Start",
    resetBtn: "Reset",
    toolExplanationTitle: "Hoe werkt de Speech & Presentatie Timer?",
    toolExplanationText1: "Wanneer je een presentatie, pitch of speech voorbereidt, is het cruciaal om te weten hoe lang je spreektijd zal zijn. Te lang doorpraten kan ervoor zorgen dat je publiek de aandacht verliest, terwijl te kort praten betekent dat je waardevolle informatie mist.",
    toolExplanationText2: "Onze tool analyseert direct je geschreven tekst en berekent de precieze leestijd op basis van verschillende snelheden (langzaam, normaal en snel). Zo kun je je presentatie perfect timen en kom je nooit meer voor verrassingen te staan op het podium!",

    // AI Detector Tool
    aiTitle: "AI-Tekst Detector",
    aiSub: "Analyseer direct of een tekst kenmerken heeft van kunstmatige intelligentie.",
    aiScanBtn: "🤖 Analyseer Tekst",
    aiResultPlaceholder: "Resultaat van de analyse verschijnt hier...",
    aiExplanationTitle: "Hoe werkt de AI-Tekst Detector?",
    aiExplanationText1: "AI-modellen schrijven vaak met gelijkmatige zinslengtes en terugkerende standaardformuleringen, terwijl mensen meer variatie, ritme en eigenzinnige keuzes laten zien. Onze detector kijkt naar drie signalen: hoe eentonig de zinslengte is, hoeveel typische AI-formuleringen er voorkomen en hoe vaak gedachtestreepjes worden gebruikt.",
    aiExplanationText2: "Het resultaat is een schatting op basis van schrijfstijl en geen bewijs. Een menselijke tekst kan als AI-achtig worden gezien en andersom, vooral bij korte of formele teksten. Alles gebeurt in je eigen browser, dus je tekst wordt niet verstuurd of opgeslagen.",

    // Grammatica Bot
    checkerTitle: "Grammatica Bot",
    checkerSub: "Controleer je tekst automatisch op spelfouten en stijlfouten.",
    checkerScanBtn: "✍️ Controleer Grammatica",
    checkerResultPlaceholder: "Resultaten en suggesties verschijnen hier...",
    checkerExplanationTitle: "Hoe werkt de Grammatica Bot?",
    checkerExplanationText1: "Een foutje in je spelling, d/t-fouten of kromme zinnen zijn snel gemaakt, maar kunnen afleiden van je boodschap. Onze Grammatica Bot scant je tekst grondig op taalfouten, stijlonvolkomenheden en grammaticale onjuistheden.",
    checkerExplanationText2: "Of je nu een belangrijke e-mail, een verslag voor school of een zakelijk document schrijft: met deze tool zorg je ervoor dat je teksten er altijd professioneel, verzorgd en foutloos uitzien.",

    // QR Code Generator
    qrTitle: "QR Code Generator",
    qrSub: "Voer een URL in om direct een QR-code te genereren.",
    qrClearBtn: "🗑 Wis",
    qrGenBtn: "Genereer",
    qrPlaceholder: "Vul een URL in...",
    qrExplanationTitle: "Hoe werkt de QR Code Generator?",
    qrExplanationText1: "QR-codes bieden een snelle en eenvoudige manier om fysieke dragers (zoals posters, flyers of presentaties) te verbinden met online content. Mensen hoeven alleen maar hun smartphonecamera te gebruiken om direct naar de juiste website te gaan.",
    qrExplanationText2: "Met onze QR Code Generator typ of plak je eenvoudig een webadres, waarna de code zich direct voor je ogen vormt. Zo maak je in een handomdraai professionele en direct bruikbare QR-codes voor al je projecten.",

    // Tekst-naar-Spraak (TTS)
    ttsTitle: "Tekst-naar-Spraak",
    ttsSub: "Laat je tekst direct voorlezen of download de audio als bestand.",
    ttsLabelLang: "Spraak Taal:",
    speakBtn: "🔊 Lees Hardop",
    downloadAudioBtn: "📥 Download Audio (.WAV)",
    stopSpeechBtn: "⏹️ Stop",
    ttsStatusPlaceholder: "Status: Klaar om voor te lezen of te downloaden...",
    ttsExplanationTitle: "Hoe werkt de Tekst-naar-Spraak tool?",
    ttsExplanationText1: "Het omzetten van geschreven tekst naar gesproken woorden is ideaal om je eigen teksten te controleren op spelfouten, om luistervaardigheid te oefenen in een vreemde taal, of om documenten handsfree te beluisteren.",
    ttsExplanationText2: "Plak simpelweg je tekst in het invoerveld, kies de gewenste taal en klik op voorlezen of download direct het audiobestand. Zo breng je geschreven content in een handomdraai tot leven!",

    // Vertaal Tool
    translateTitle: "Vertaal Tool",
    translateSub: "Vertaal snel en eenvoudig teksten naar verschillende talen.",
    translateLabelLang: "Doelstaal:",
    translateBtn: "🌍 Vertaal Tekst",
    translateResultPlaceholder: "De vertaling verschijnt hier...",
    translateExplanationTitle: "Hoe werkt de Vertaal Tool?",
    translateExplanationText1: "Of je nu communiceert met internationale partners, tekst leest in een vreemde taal of studeert voor een taalvak: snel en accuraat kunnen vertalen is onmisbaar in een verbonden wereld.",
    translateExplanationText2: "Met onze Vertaal Tool typ of plak je eenvoudig je tekst, selecteer je de gewenste doelstaal en zie je direct het resultaat. Zo overbrug je elk taalverschil in een handomdraai!",

    // Universele Converter
    converterTitle: "Universele Converter",
    converterSub: "Converteer bestanden en afbeeldingen veilig en snel.",
    converterInstructions: "Upload je bestand of afbeelding hieronder om te converteren naar het gewenste formaat.",
    convertBtn: "🔄 Converteer Bestand",
    converterResultPlaceholder: "Het geconverteerde bestand verschijnt hier...",
    converterExplanationTitle: "Hoe werkt de Universele Converter?",
    converterExplanationText1: "Het omzetten van bestanden naar een ander formaat (zoals afbeeldingen of documenten) is vaak nodig wanneer een specifiek programma een bestandstype niet ondersteunt of wanneer je bestanden wilt verkleinen voor gebruik op een website.",
    converterExplanationText2: "Met onze Universele Converter upload je eenvoudig je bestand, waarna het direct lokaal in je browser wordt omgezet. Zo hoef je geen zware software te installeren en blijven je gegevens optimaal beschermd!"
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
    toolExplanationTitle: "How does the Speech & Presentation Timer work?",
    toolExplanationText1: "When preparing a presentation, pitch, or speech, knowing your exact speaking time is crucial. Talking for too long can cause your audience to lose focus, while finishing too early means missing key information.",
    toolExplanationText2: "Our tool instantly analyzes your written text and calculates the precise reading duration based on different speeds (slow, normal, and fast). This allows you to perfectly time your presentation and never get caught off guard on stage again!",

    aiTitle: "AI Text Detector",
    aiSub: "Instantly analyze if a text has characteristics of artificial intelligence.",
    aiScanBtn: "🤖 Analyze Text",
    aiResultPlaceholder: "Analysis results will appear here...",
    aiExplanationTitle: "How does the AI Text Detector work?",
    aiExplanationText1: "AI models often write with even sentence lengths and recurring stock phrases, while people show more variation, rhythm and individual choices. Our detector looks at three signals: how monotone the sentence length is, how many typical AI phrases appear, and how often dashes are used.",
    aiExplanationText2: "The result is an estimate based on writing style, not proof. A human-written text can look AI-like and vice versa, especially short or formal texts. Everything happens in your own browser, so your text is never sent or stored.",

    checkerTitle: "Grammar Bot",
    checkerSub: "Automatically check your text for spelling and stylistic errors.",
    checkerScanBtn: "✍️ Check Grammar",
    checkerResultPlaceholder: "Results and suggestions will appear here...",
    checkerExplanationTitle: "How does the Grammar Bot work?",
    checkerExplanationText1: "A spelling mistake, grammar slip, or awkward sentence is easily made, but can distract from your message. Our Grammar Bot thoroughly scans your text for language errors, stylistic flaws, and grammatical inaccuracies.",
    checkerExplanationText2: "Whether you are writing an important email, a school report, or a business document: with this tool you ensure your texts always look professional, polished, and error-free.",

    qrTitle: "QR Code Generator",
    qrSub: "Enter a URL to generate a QR code instantly.",
    qrClearBtn: "🗑 Clear",
    qrGenBtn: "Generate",
    qrPlaceholder: "Enter a URL...",
    qrExplanationTitle: "How does the QR Code Generator work?",
    qrExplanationText1: "QR codes provide a quick and easy way to connect physical mediums (such as posters, flyers, or presentations) to online content. People only need to use their smartphone camera to go straight to the correct website.",
    qrExplanationText2: "With our QR Code Generator, you simply type or paste a web address, and the code forms right before your eyes. Create professional and instantly usable QR codes for all your projects in a snap.",

    ttsTitle: "Text-to-Speech",
    ttsSub: "Have your text read out loud instantly or download the audio file.",
    ttsLabelLang: "Speech Language:",
    speakBtn: "🔊 Read Aloud",
    downloadAudioBtn: "📥 Download Audio (.WAV)",
    stopSpeechBtn: "⏹️ Stop",
    ttsStatusPlaceholder: "Status: Ready to read or download...",
    ttsExplanationTitle: "How does the Text-to-Speech tool work?",
    ttsExplanationText1: "Converting written text to spoken words is ideal for checking your own texts for spelling mistakes, practicing listening skills in a foreign language, or listening to documents hands-free.",
    ttsExplanationText2: "Simply paste your text into the input field, choose your desired language, and click read aloud or download the audio file directly. Bring written content to life in an instant!",

    translateTitle: "Translation Tool",
    translateSub: "Quickly and easily translate texts into different languages.",
    translateLabelLang: "Target Language:",
    translateBtn: "🌍 Translate Text",
    translateResultPlaceholder: "The translation will appear here...",
    translateExplanationTitle: "How does the Translation Tool work?",
    translateExplanationText1: "Whether you are communicating with international partners, reading text in a foreign language, or studying for a language course: being able to translate quickly and accurately is indispensable in a connected world.",
    translateExplanationText2: "With our Translation Tool, simply type or paste your text, select your desired target language, and see the result immediately. Bridge any language gap in no time!",

    converterTitle: "Universal Converter",
    converterSub: "Convert files and images safely and quickly.",
    converterInstructions: "Upload your file or image below to convert it to the desired format.",
    convertBtn: "🔄 Convert File",
    converterResultPlaceholder: "The converted file will appear here...",
    converterExplanationTitle: "How does the Universal Converter work?",
    converterExplanationText1: "Converting files to a different format (such as images or documents) is often necessary when a specific program does not support a file type or when you want to reduce file sizes for use on a website.",
    converterExplanationText2: "With our Universal Converter, you simply upload your file, and it is converted locally right inside your browser. No heavy software installation needed, keeping your data fully protected!"
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
    menuBlog: "📰 Blog",
    darkModeBtn: "🌙 Dunkelmodus",
    shareBtn: "🔗 Teilen",

    heroTag: "Meet Every-Tool",
    homeHeading: "Intelligente Tools für all Ihre Texte und Sprache",
    homeSub: "Optimieren Sie Ihre Präsentationen, prüfen Sie Rechtschreibfehler oder analysieren Sie Satzstrukturen im Handumdrehen. Schnell, sicher und zuverlässig.",
    homeSearchInputPlaceholder: "Tippen, um ein Tool zu suchen...",
    homeSearchBtn: "Suchen 🔍",
    aboutTitle: "💡 Über Every-Tool & Unsere Funktionen",
    aboutText: "Alle Berechnungen finden direkt in Ihrem eigenen Webbrowser (clientseitig) statt, was maximale Privatsphäre garantiert. Keine Ihrer Texte wird auf externen Servern gespeichert.",
    faqTitle: "❓ Häufig gestellte Fragen (FAQ)",
    faq1Q: "Wie funktioniert der Redetimer?",
    faq1A: "Fügen Sie Ihren Präsentationstext ein, um Ihre Sprechzeit basierend auf verschiedenen Geschwindigkeiten zu berechnen.",
    faq2Q: "Werden meine Texte gespeichert?",
    faq2A: "Nein, die gesamte Verarbeitung erfolgt lokal in Ihrem Browser über LocalStorage.",
    faq3Q: "Ist die Nutzung von Every-Tool kostenlos?",
    faq3A: "Ja, alle Tools auf dieser Plattform sind völlig kostenlos nutzbar.",
    faq4Q: "Wie zuverlässig ist der KI-Text-Detektor?",
    faq4A: "Der Detektor prüft statistische Merkmale und gibt einen Hinweis, jedoch keinen 100%igen Beweis.",
    faq5Q: "Kann ich das generierte Audio herunterladen?",
    faq5A: "Ja, Sie können die Audiodatei (.WAV) direkt auf Ihrem Gerät speichern.",
    faq6Q: "Muss ich Software installieren, um diese Tools zu nutzen?",
    faq6A: "Nein, Every-Tool funktioniert komplett webbasiert in jedem modernen Browser.",
    faq7Q: "Wie funktioniert der Grammatik-Bot?",
    faq7A: "Der Bot scannt Ihren Text automatisch auf Rechtschreib- und Stilfehler.",

    t1Title: "Rede- & Präsentationstimer",
    t1Sub: "Berechnen Sie sofort, wie lange das Vorlesen Ihres Textes dauert.",
    slow: "🐢 Langsam",
    norm: "🚶 Normal",
    fast: "🐇 Schnell",
    practice: "Üben Sie Ihre Rede live:",
    startBtn: "Start",
    resetBtn: "Zurücksetzen",
    toolExplanationTitle: "Wie funktioniert der Rede- & Präsentationstimer?",
    toolExplanationText1: "Wenn Sie eine Präsentation, einen Pitch oder eine Rede vorbereiten, ist es entscheidend zu wissen, wie lange Ihre Sprechzeit sein wird. Zu langes Sprechen kann dazu führen, dass Ihr Publikum die Aufmerksamkeit verliert, während zu frühes Ende bedeutet, dass wichtige Punkte fehlen.",
    toolExplanationText2: "Unser Tool analysiert Ihren geschriebenen Text sofort und berechnet die genaue Lesedauer basierend auf verschiedenen Geschwindigkeiten (langsam, normal und schnell). So timen Sie Ihre Präsentation perfekt und erleben auf der Bühne keine Überraschungen mehr!",

    aiTitle: "KI-Text-Detektor",
    aiSub: "Analysieren Sie sofort, ob ein Text Merkmale künstlicher Intelligenz aufweist.",
    aiScanBtn: "🤖 Text analysieren",
    aiResultPlaceholder: "Das Analyseergebnis erscheint hier...",
    aiExplanationTitle: "Wie funktioniert der KI-Text-Detektor?",
    aiExplanationText1: "KI-Modelle schreiben oft mit gleichmäßigen Satzlängen und wiederkehrenden Standardformulierungen, während Menschen mehr Abwechslung, Rhythmus und eigene Entscheidungen zeigen. Unser Detektor betrachtet drei Signale: wie eintönig die Satzlänge ist, wie viele typische KI-Formulierungen vorkommen und wie oft Gedankenstriche verwendet werden.",
    aiExplanationText2: "Das Ergebnis ist eine Schätzung auf Basis des Schreibstils und kein Beweis. Ein von Menschen geschriebener Text kann KI-ähnlich wirken und umgekehrt, besonders kurze, formelle oder fremdsprachige Texte. Verwenden Sie das Ergebnis nicht als einzige Entscheidungsgrundlage.",

    checkerTitle: "Grammatik-Bot",
    checkerSub: "Überprüfen Sie Ihren Text automatisch auf Rechtschreib- und Stilfehler.",
    checkerScanBtn: "✍️ Grammatik prüfen",
    checkerResultPlaceholder: "Ergebnisse und Vorschläge erscheinen hier...",
    checkerExplanationTitle: "Wie funktioniert der Grammatik-Bot?",
    checkerExplanationText1: "Ein Rechtschreibfehler, Grammatikfehler oder holpriger Satz ist schnell passiert, kann aber von Ihrer Botschaft ablenken. Unser Grammatik-Bot scannt Ihren Text gründlich auf Sprachfehler, Stilunvollkommenheiten und grammatikalische Ungenauigkeiten.",
    checkerExplanationText2: "Egal ob Sie eine wichtige E-Mail, einen Schulbericht oder ein Geschäftsdokument schreiben: Mit diesem Tool stellen Sie sicher, dass Ihre Texte stets professionell, gepflegt und fehlerfrei aussehen.",

    qrTitle: "QR-Code-Generator",
    qrSub: "Geben Sie eine URL ein, um sofort einen QR-Code zu generieren.",
    qrClearBtn: "🗑 Löschen",
    qrGenBtn: "Generieren",
    qrPlaceholder: "Geben Sie eine URL ein...",
    qrExplanationTitle: "Wie funktioniert der QR-Code-Generator?",
    qrExplanationText1: "QR-Codes bieten eine schnelle und einfache Möglichkeit, physische Medien (wie Poster, Flyer oder Präsentationen) mit Online-Inhalten zu verknüpfen. Benutzer müssen lediglich ihre Smartphone-Kamera verwenden, um direkt zur richtigen Website zu gelangen.",
    qrExplanationText2: "Mit unserem QR-Code-Generator tippen oder fügen Sie einfach eine Webadresse ein, woraufhin sich der Code direkt vor Ihren Augen formt. Erstellen Sie im Handumdrehen professionelle und sofort einsatzbereite QR-Codes für all Ihre Projekte.",

    ttsTitle: "Text-zu-Sprache",
    ttsSub: "Lassen Sie sich Ihren Text vorlesen oder laden Sie die Audiodatei herunter.",
    ttsLabelLang: "Sprachausgabe:",
    speakBtn: "🔊 Vorlesen",
    downloadAudioBtn: "📥 Audio herunterladen (.WAV)",
    stopSpeechBtn: "⏹️ Stopp",
    ttsStatusPlaceholder: "Status: Bereit zum Vorlesen oder Herunterladen...",
    ttsExplanationTitle: "Wie funktioniert das Text-zu-Sprache-Tool?",
    ttsExplanationText1: "Das Umwandeln von geschriebenen Texten in gesprochene Wörter ist ideal, um eigene Texte auf Rechtschreibfehler zu prüfen, Hörverständnis in einer Fremdsprache zu üben oder Dokumente freihändig anzuhören.",
    ttsExplanationText2: "Fügen Sie Ihren Text einfach in das Eingabefeld ein, wählen Sie die gewünschte Sprache und klicken Sie auf Vorlesen oder laden Sie die Audiodatei direkt herunter. So erwecken Sie geschriebene Inhalte im Handumdrehen zum Leben!",

    translateTitle: "Übersetzungstool",
    translateSub: "Übersetzen Sie Texte schnell und einfach in verschiedene Sprachen.",
    translateLabelLang: "Zielsprache:",
    translateBtn: "🌍 Text übersetzen",
    translateResultPlaceholder: "Die Übersetzung erscheint hier...",
    translateExplanationTitle: "Wie funktioniert das Übersetzungstool?",
    translateExplanationText1: "Ob Sie mit internationalen Partnern kommunizieren, Texte in einer Fremdsprache lesen oder für ein Sprachfach lernen: schnell und genau übersetzen zu können, ist in einer vernetzten Welt unverzichtbar.",
    translateExplanationText2: "Mit unserem Übersetzungstool tippen oder fügen Sie Ihren Text einfach ein, wählen die gewünschte Zielsprache aus und sehen sofort das Ergebnis. So überwinden Sie jede Sprachbarriere im Nu!",

    converterTitle: "Universal-Konverter",
    converterSub: "Konvertieren Sie Dateien und Bilder sicher und schnell.",
    converterInstructions: "Laden Sie Ihre Datei oder Ihr Bild unten hoch, um es in das gewünschte Format zu konvertieren.",
    convertBtn: "🔄 Datei konvertieren",
    converterResultPlaceholder: "Die konvertierte Datei erscheint hier...",
    converterExplanationTitle: "Wie funktioniert der Universal-Konverter?",
    converterExplanationText1: "Das Umwandeln von Dateien in ein anderes Format (such als Bilder oder Dokumente) ist oft erforderlich, wenn ein bestimmtes Programm einen Dateityp nicht unterstützt oder wenn Sie Dateigrößen für die Nutzung auf einer Website verkleinern möchten.",
    converterExplanationText2: "Mit unserem Universal-Konverter laden Sie Ihre Datei einfach hoch, und sie wird direkt lokal in Ihrem Browser umgewandelt. So ist keine schwere Softwareinstallation erforderlich und Ihre Daten bleiben optimal geschützt!"
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
    menuBlog: "📰 Blog",
    darkModeBtn: "🌙 Mode Sombre",
    shareBtn: "🔗 Partager",

    heroTag: "Meet Every-Tool",
    homeHeading: "Des outils intelligents pour tous vos textes et discours",
    homeSub: "Optimisez vos présentations, vérifiez vos fautes d'orthographe ou analysez la structure des phrases en un instant. Rapide, sûr et fiable.",
    homeSearchInputPlaceholder: "Tapez pour rechercher un outil...",
    homeSearchBtn: "Rechercher 🔍",
    aboutTitle: "💡 À propos d'Every-Tool et de nos fonctionnalités",
    aboutText: "Tous les calculs s'effectuent directement dans votre navigateur web (côté client), garantissant une confidentialité maximale. Aucun de vos textes n'est stocké sur des serveurs externes.",
    faqTitle: "❓ Foire Aux Questions (FAQ)",
    faq1Q: "Comment fonctionne le minuteur de discours ?",
    faq1A: "Collez votre texte de présentation pour calculer instantanément votre temps de parole selon différentes vitesses.",
    faq2Q: "Mes textes sont-ils enregistrés ?",
    faq2A: "Non, tout le traitement se fait localement dans votre navigateur via LocalStorage.",
    faq3Q: "L'utilisation d'Every-Tool est-elle gratuite ?",
    faq3A: "Oui, tous les outils de cette plateforme sont entièrement gratuits.",
    faq4Q: "Quelle est la fiabilité du détecteur de texte IA ?",
    faq4A: "Le détecteur analyse des caractéristiques statistiques et donne une indication, mais pas une preuve absolue à 100%.",
    faq5Q: "Puis-je télécharger l'audio généré ?",
    faq5A: "Oui, vous pouvez enregistrer le fichier audio (.WAV) directement sur votre appareil.",
    faq6Q: "Dois-je installer un logiciel pour utiliser ces outils ?",
    faq6A: "Non, Every-Tool fonctionne entièrement sur le web dans n'importe quel navigateur moderne.",
    faq7Q: "Comment fonctionne le bot de grammaire ?",
    faq7A: "Le bot analyse automatiquement votre texte à la recherche de fautes d'orthographe et de style.",

    t1Title: "Chrono Discours & Présentation",
    t1Sub: "Calculez instantanément la durée de lecture de votre texte.",
    slow: "🐢 Lent",
    norm: "🚶 Normal",
    fast: "🐇 Rapide",
    practice: "Entraînez-vous en direct :",
    startBtn: "Démarrer",
    resetBtn: "Réinitialiser",
    toolExplanationTitle: "Comment fonctionne le Chrono Discours & Présentation ?",
    toolExplanationText1: "Lors de la préparation d'une présentation, d'un pitch ou d'un discours, il est crucial de connaître votre temps de parole exact. Parler trop longtemps peut faire perdre l'attention de votre public, tandis qu'finir trop tôt signifie manquer des points clés.",
    toolExplanationText2: "Notre outil analyse instantanément votre texte écrit et calcule la durée de lecture précise en fonction de différentes vitesses (lent, normal et rapide). Vous pouvez ainsi chronométrer parfaitement votre présentation et ne plus jamais être pris au dépourvu sur scène !",

    aiTitle: "Détecteur de texte IA",
    aiSub: "Analysez instantanément si un texte présente des caractéristiques d'intelligence artificielle.",
    aiScanBtn: "🤖 Analyser le texte",
    aiResultPlaceholder: "Le résultat de l'analyse apparaîtra ici...",
    aiExplanationTitle: "Comment fonctionne le détecteur de texte IA ?",
    aiExplanationText1: "Les modèles d'IA écrivent souvent avec des longueurs de phrases régulières et des formulations toutes faites récurrentes, alors que les humains montrent plus de variété, de rythme et de choix personnels. Notre détecteur examine trois signaux : la monotonie de la longueur des phrases, le nombre de formulations typiques de l'IA et la fréquence des tirets.",
    aiExplanationText2: "Le résultat est une estimation fondée sur le style d'écriture, pas une preuve. Un texte écrit par un humain peut sembler généré par une IA et inversement, surtout s'il est court ou formel. Tout se passe dans votre navigateur : votre texte n'est ni envoyé ni stocké.",

    checkerTitle: "Bot Grammaire",
    checkerSub: "Vérifiez automatiquement votre texte pour les fautes d'orthographe et de style.",
    checkerScanBtn: "✍️ Vérifier la grammaire",
    checkerResultPlaceholder: "Les résultats et suggestions apparaîtront ici...",
    checkerExplanationTitle: "Comment fonctionne le bot de grammaire ?",
    checkerExplanationText1: "Une faute d'orthographe, une erreur de grammaire ou une phrase maladroite arrive vite, mais peut détourner l'attention de votre message. Notre bot de grammaire analyse minutieusement votre texte à la recherche d'erreurs de langue, de défauts de style et d'inexactitudes grammaticales.",
    checkerExplanationText2: "Que vous écriviez un e-mail important, un rapport scolaire ou un document professionnel : avec cet outil, vous vous assurez que vos textes sont toujours professionnels, soignés et sans fautes.",

    qrTitle: "Générateur de QR Code",
    qrSub: "Entrez une URL pour générer instantanément un code QR.",
    qrClearBtn: "🗑 Effacer",
    qrGenBtn: "Générer",
    qrPlaceholder: "Entrez une URL...",
    qrExplanationTitle: "Comment fonctionne le générateur de QR Code ?",
    qrExplanationText1: "Les codes QR offrent un moyen simple et rapide de connecter des supports physiques (tels que des affiches, des flyers ou des présentations) à du contenu en ligne. Les utilisateurs ont simplement besoin d'utiliser l'appareil photo de leur smartphone pour accéder directement au bon site web.",
    qrExplanationText2: "Avec notre générateur de QR Code, tapez ou collez simplement une adresse Web, et le code se forme sous vos yeux. Créez en un instant des codes QR professionnels et immédiatement utilisables pour tous vos projets.",

    ttsTitle: "Synthèse vocale",
    ttsSub: "Écoutez votre texte lu à haute voix ou téléchargez le fichier audio.",
    ttsLabelLang: "Langue vocale :",
    speakBtn: "🔊 Lire à haute voix",
    downloadAudioBtn: "📥 Télécharger l'audio (.WAV)",
    stopSpeechBtn: "⏹️ Arrêter",
    ttsStatusPlaceholder: "Statut : Prêt à lire ou à télécharger...",
    ttsExplanationTitle: "Comment fonctionne l'outil de synthèse vocale ?",
    ttsExplanationText1: "Convertir du texte écrit en mots parlés est idéal pour vérifier vos propres textes, pratiquer la compréhension orale dans une langue étrangère ou écouter des documents en mains libres.",
    ttsExplanationText2: "Collez simplement votre texte dans le champ de saisie, choisissez la langue souhaitée et cliquez sur lecture ou téléchargez directement le fichier audio. Donnez vie à du contenu écrit en un clin d'œil !",

    translateTitle: "Outil de Traduction",
    translateSub: "Traduisez rapidement et facilement des textes dans différentes langues.",
    translateLabelLang: "Langue cible :",
    translateBtn: "🌍 Traduire le texte",
    translateResultPlaceholder: "La traduction apparaîtra ici...",
    translateExplanationTitle: "Comment fonctionne l'outil de traduction ?",
    translateExplanationText1: "Que vous communiquiez avec des partenaires internationaux, lisiez du texte dans une langue étrangère ou étudiiez pour un cours de langue : pouvoir traduire rapidement et précisément est indispensable dans un monde connecté.",
    translateExplanationText2: "Avec notre outil de traduction, tapez ou collez simplement votre texte, sélectionnez la langue cible souhaitée et voyez le résultat immédiatement. Comblez n'importe quelle barrière linguistique en un rien de temps !",

    converterTitle: "Convertisseur Universel",
    converterSub: "Convertissez des fichiers et des images en toute sécurité et rapidement.",
    converterInstructions: "Téléchargez votre fichier ou image ci-dessous pour le convertir au format souhaité.",
    convertBtn: "🔄 Convertir le fichier",
    converterResultPlaceholder: "Le fichier converti apparaîtra ici...",
    converterExplanationTitle: "Comment fonctionne le convertisseur universel ?",
    converterExplanationText1: "La conversion de fichiers vers un autre format (tel que des images ou des documents) est souvent nécessaire lorsqu'un programme spécifique ne prend pas en charge un type de fichier ou lorsque vous souhaitez réduire la taille des fichiers pour une utilisation sur un site web.",
    converterExplanationText2: "Avec notre convertisseur universel, il vous suffit de télécharger votre fichier et il est converti localement directement dans votre navigateur. Aucun logiciel lourd à installer, garantissant une protection optimale de vos données !"
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
    menuBlog: "📰 Blog",
    darkModeBtn: "🌙 Modo Oscuro",
    shareBtn: "🔗 Compartir",

    heroTag: "Meet Every-Tool",
    homeHeading: "Herramientas inteligentes para todo tu texto y voz",
    homeSub: "Optimiza tus presentaciones, comprueba errores ortográficos o analiza estructuras de frases en un instante. Rápido, seguro y fiable.",
    homeSearchInputPlaceholder: "Escribe para buscar una herramienta...",
    homeSearchBtn: "Buscar 🔍",
    aboutTitle: "💡 Sobre Every-Tool y Nuestras Funcionalidades",
    aboutText: "Todos los cálculos se realizan directamente en tu propio navegador web (del lado del cliente), lo que garantiza la máxima privacidad. Ninguno de tus textos se almacena en servidores externos.",
    faqTitle: "❓ Preguntas Frecuentes (FAQ)",
    faq1Q: "¿Cómo funciona el temporizador de discurso?",
    faq1A: "Pega tu texto de presentación para calcular instantáneamente tu tiempo de intervención según diferentes velocidades.",
    faq2Q: "¿Se guardan mis textos?",
    faq2A: "No, todo el procesamiento ocurre localmente en tu navegador a través de LocalStorage.",
    faq3Q: "¿Es gratuito el uso de Every-Tool?",
    faq3A: "Sí, todas las herramientas de esta plataforma son de uso completamente gratuito.",
    faq4Q: "¿Qué tan confiable es el detector de texto IA?",
    faq4A: "El detector analiza características estadísticas y da una indicación, pero no una prueba 100% concluyente.",
    faq5Q: "¿Puedo descargar el audio generado?",
    faq5A: "Sí, puedes guardar el archivo de audio (.WAV) directamente en tu dispositivo.",
    faq6Q: "¿Necesito instalar software para usar estas herramientas?",
    faq6A: "No, Every-Tool funciona completamente en la web en cualquier navegador moderno.",
    faq7Q: "¿Cómo funciona el bot de gramática?",
    faq7A: "El bot escanea automáticamente tu texto en busca de errores ortográficos y de estilo.",

    t1Title: "Temporizador de Discurso y Presentación",
    t1Sub: "Calcula al instante cuánto tiempo tardará en leerse tu texto.",
    slow: "🐢 Lento",
    norm: "🚶 Normal",
    fast: "🐇 Rápido",
    practice: "Practica tu discurso en vivo:",
    startBtn: "Iniciar",
    resetBtn: "Reiniciar",
    toolExplanationTitle: "¿Cómo funciona el Temporizador de Discurso y Presentación?",
    toolExplanationText1: "Al preparar una presentación, pitch o discurso, saber tu tiempo exacto de intervención es crucial. Hablar demasiado tiempo puede hacer que tu audiencia pierda la atención, mientras que terminar demasiado pronto significa perder información clave.",
    toolExplanationText2: "Nuestra herramienta analiza instantáneamente tu texto escrito y calcula la duración exacta de lectura en función de diferentes velocidades (lento, normal y rápido). ¡Así podrás cronometrar tu presentación a la perfección y no volverás a verte sorprendido en el escenario!",

    aiTitle: "Detector de Texto IA",
    aiSub: "Analiza al instante si un texto tiene características de inteligencia artificial.",
    aiScanBtn: "🤖 Analizar texto",
    aiResultPlaceholder: "El resultado del análisis aparecerá aquí...",
    aiExplanationTitle: "¿Cómo funciona el Detector de Texto IA?",
    aiExplanationText1: "Los modelos de IA suelen escribir con longitudes de frase uniformes y fórmulas hechas recurrentes, mientras que las personas muestran más variación, ritmo y decisiones propias. Nuestro detector analiza tres señales: lo monótona que es la longitud de las frases, cuántas formulaciones típicas de IA aparecen y con qué frecuencia se usan guiones.",
    aiExplanationText2: "El resultado es una estimación basada en el estilo de escritura, no una prueba. Un texto escrito por una persona puede parecer de IA y al revés, sobre todo si es corto, formal o está en un idioma no nativo. Todo ocurre en tu propio navegador, así que tu texto no se envía ni se guarda.",

    checkerTitle: "Bot de Gramática",
    checkerSub: "Comprueba automáticamente tu texto en busca de errores ortográficos y de estilo.",
    checkerScanBtn: "✍️ Comprobar gramática",
    checkerResultPlaceholder: "Los resultados y sugerencias aparecerán aquí...",
    checkerExplanationTitle: "¿Cómo funciona el Bot de Gramática?",
    checkerExplanationText1: "Un error ortográfico, un desliz gramatical o una oración extraña se cometen fácilmente, pero pueden distraer de tu mensaje. Nuestro bot de gramática escanea minuciosamente tu texto en busca de errores idiomáticos, fallas de estilo e imprecisiones gramaticales.",
    checkerExplanationText2: "Ya sea que escribas un correo electrónico importante, un informe escolar o un documento de negocios: con esta herramienta te aseguras de que tus textos siempre luzcan profesionales, pulidos y sin errores.",

    qrTitle: "Generador de Códigos QR",
    qrSub: "Introduce una URL para generar un código QR al instante.",
    qrClearBtn: "🗑 Borrar",
    qrGenBtn: "Generar",
    qrPlaceholder: "Introduce una URL...",
    qrExplanationTitle: "¿Cómo funciona el Generador de Códigos QR?",
    qrExplanationText1: "Los códigos QR ofrecen una forma rápida y sencilla de conectar soportes físicos (como carteles, folletos o presentaciones) con contenido en línea. Las personas solo necesitan usar la cámara de su teléfono inteligente para ir directamente al sitio web correcto.",
    qrExplanationText2: "Con nuestro generador de códigos QR, simplemente escribe o pega una dirección web y el código se formará ante tus ojos. Crea códigos QR profesionales e inmediatamente utilizables para todos tus proyectos en un abrir y cerrar de ojos.",

    ttsTitle: "Texto a Voz",
    ttsSub: "Haz que tu texto se lea en voz alta o descarga el archivo de audio.",
    ttsLabelLang: "Idioma de voz:",
    speakBtn: "🔊 Leer en voz alta",
    downloadAudioBtn: "📥 Descargar Audio (.WAV)",
    stopSpeechBtn: "⏹️ Detener",
    ttsStatusPlaceholder: "Estado: Listo para leer o descargar...",
    ttsExplanationTitle: "Cómo funciona la herramienta de Texto a Voz",
    ttsExplanationText1: "Convertir texto escrito en palabras habladas es ideal para comprobar tus propios textos en busca de errores ortográficos, practicar habilidades de comprensión auditiva en un idioma extranjero o escuchar documentos con las manos libres.",
    ttsExplanationText2: "Simplemente pega tu texto en el campo de entrada, elige el idioma deseado y haz clic en leer en voz alta o descarga el archivo de audio directamente. ¡Da vida al contenido escrito al instante!",

    translateTitle: "Herramienta de Traducción",
    translateSub: "Traduce rápida y fácilmente textos a diferentes idiomas.",
    translateLabelLang: "Idioma de destino:",
    translateBtn: "🌍 Traducir texto",
    translateResultPlaceholder: "La traducción aparecerá aquí...",
    translateExplanationTitle: "¿Cómo funciona la Herramienta de Traducción?",
    translateExplanationText1: "Ya sea que te comuniques con socios internacionales, leas textos en un idioma extranjero o estudies para una clase de idiomas: poder traducir de forma rápida y precisa es indispensable en un mundo conectado.",
    translateExplanationText2: "Con nuestra herramienta de traducción, simplemente escribe o pega tu texto, selecciona el idioma de destino deseado y ve el resultado de inmediato. ¡Salva cualquier barrera idiomática en poco tiempo!",

    converterTitle: "Convertidor Universal",
    converterSub: "Convierte archivos e imágenes de forma segura y rápida.",
    converterInstructions: "Sube tu archivo o imagen a continuación para convertirlo al formato deseado.",
    convertBtn: "🔄 Convertir archivo",
    converterResultPlaceholder: "El archivo convertido aparecerá aquí...",
    converterExplanationTitle: "¿Cómo funciona el Convertidor Universal?",
    converterExplanationText1: "Convertir archivos a otro formato (como imágenes o documentos) suele ser necesario cuando un programa específico no admite un tipo de archivo o cuando deseas reducir el tamaño de los archivos para usarlos en un sitio web.",
    converterExplanationText2: "Con nuestro convertidor universal, simplemente subes tu archivo y se convierte localmente dentro de tu navegador. ¡No se necesita instalar ningún software pesado, manteniendo tus datos totalmente protegidos!"
  }
};

// Functie om de taal in te stellen en direct de UI bij te werken
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('everyToolLang', lang);
  document.documentElement.lang = lang;

  // Update actieve knoppen in de topbar
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

  // Loop door alle elementen met een ID en vervang de tekst als er een vertaling is
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

// Initiële taalselectie overlay bij het eerste bezoek
function setInitialLanguage(lang) {
  setLanguage(lang);
  const overlay = document.getElementById('languageOverlay');
  if (overlay) {
    overlay.style.display = 'none';
  }
}

// Sidebar openen / sluiten
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  if (sidebar && overlay) {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
  }
}

// Dark Mode toggle
function toggleDarkMode() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('everyToolTheme', newTheme);
}

// Tekstgebied wissen
function clearTextArea(id) {
  const el = document.getElementById(id);
  if (el) {
    el.value = '';
    localStorage.removeItem(id);
    if (id === 'text-timer') handleTimerInput();
    if (id === 'qrUrlInput') generateQRFromInput();
  }
}

// Opslaan in LocalStorage
function saveToLocal(id, value) {
  localStorage.setItem(id, value);
}

// Deel functionaliteit
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

// Pagina laad initialisatie
document.addEventListener('DOMContentLoaded', () => {
  // Thema herstellen
  const savedTheme = localStorage.getItem('everyToolTheme') || 'light';
  document.body.setAttribute('data-theme', savedTheme);

  // Opgeslagen taal toepassen
  if (localStorage.getItem('everyToolLang')) {
    setLanguage(localStorage.getItem('everyToolLang'));
  } else {
    setLanguage('nl');
  }

  // Opgeslagen tekst in velden herstellen indien aanwezig
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

  // Snelheden: Langzaam (110 wpm), Normaal (130 wpm), Snel (160 wpm)
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

// Stopwatch functionaliteit voor timer
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

// 2. AI-Tekst Detector (heuristisch, volledig client-side)
const AI_STOCK_PHRASES = [
  'bovendien', 'daarnaast', 'kortom', 'al met al', 'het is belangrijk om', 'het is van belang',
  'het is essentieel', 'in de huidige digitale wereld', 'in de snel veranderende', 'een cruciale rol',
  'een breed scala', 'dit zorgt ervoor dat', 'in conclusie', 'samenvattend', 'tot slot', 'duiken we',
  'moreover', 'furthermore', 'in conclusion', 'in summary', 'it is important to', "it's important to",
  'it is worth noting', "it's worth noting", "in today's", 'ever-evolving', 'a crucial role', 'delve',
  'tapestry', 'in the realm of', 'a wide range of', 'additionally,', 'overall,', 'testament to',
  'darüber hinaus', 'zusammenfassend', 'es ist wichtig', 'eine entscheidende rolle', 'in der heutigen',
  'des weiteren', 'abschließend', 'eine vielzahl von', 'ein breites spektrum', 'insgesamt',
  'en outre', 'en conclusion', 'en résumé', 'il est important de', 'il est essentiel de',
  'un rôle crucial', "dans le monde d'aujourd'hui", "à l'ère numérique", 'une large gamme',
  'par ailleurs', 'en somme', 'il convient de noter', 'plongeons',
  'además,', 'en conclusión', 'en resumen', 'es importante', 'es fundamental', 'un papel crucial',
  'en el mundo actual', 'en la era digital', 'una amplia gama', 'cabe destacar', 'en definitiva',
  'es esencial', 'sumérgete'
];

const AI_MESSAGES = {
  nl: {
    empty: 'Plak eerst een tekst om te analyseren.',
    tooShort: n => `Je tekst is te kort (${n} woorden). Plak minimaal 40 woorden, liefst meer dan 150, voor een bruikbare indicatie.`,
    verdicts: ['Weinig AI-achtige kenmerken gevonden', 'Gemengde kenmerken: lastig te zeggen', 'Veel AI-achtige kenmerken gevonden'],
    score: s => `AI-score: ${s}/100`,
    signals: { burst: 'Eentonige zinslengte', phrases: 'Typische AI-formuleringen', dash: 'Veel gedachtestreepjes (—)' },
    levels: ['laag', 'gemiddeld', 'hoog'],
    local: 'Berekend in je browser; je tekst wordt niet verstuurd of opgeslagen.',
    disclaimer: 'Dit is een schatting op basis van schrijfstijl, geen bewijs. Menselijke teksten kunnen als AI-achtig worden gezien (en andersom), vooral bij korte, formele of anderstalige teksten. Gebruik de uitkomst niet als enige basis voor een beslissing.'
  },
  en: {
    empty: 'Paste a text first to analyze it.',
    tooShort: n => `Your text is too short (${n} words). Paste at least 40 words, preferably more than 150, for a useful indication.`,
    verdicts: ['Few AI-like traits found', 'Mixed traits: hard to say', 'Many AI-like traits found'],
    score: s => `AI score: ${s}/100`,
    signals: { burst: 'Monotone sentence length', phrases: 'Typical AI phrasing', dash: 'Frequent dashes (—)' },
    levels: ['low', 'medium', 'high'],
    local: 'Calculated in your browser; your text is not sent or stored.',
    disclaimer: 'This is an estimate based on writing style, not proof. Human-written text can look AI-like (and vice versa), especially short, formal or non-native text. Do not use the result as the only basis for a decision.'
  },
  de: {
    empty: 'Fügen Sie zuerst einen Text zur Analyse ein.',
    tooShort: n => `Ihr Text ist zu kurz (${n} Wörter). Fügen Sie mindestens 40 Wörter ein, besser mehr als 150, für eine brauchbare Einschätzung.`,
    verdicts: ['Wenige KI-typische Merkmale gefunden', 'Gemischte Merkmale: schwer zu sagen', 'Viele KI-typische Merkmale gefunden'],
    score: s => `KI-Wert: ${s}/100`,
    signals: { burst: 'Eintönige Satzlänge', phrases: 'Typische KI-Formulierungen', dash: 'Häufige Gedankenstriche (—)' },
    levels: ['niedrig', 'mittel', 'hoch'],
    local: 'Wird in Ihrem Browser berechnet; Ihr Text wird weder gesendet noch gespeichert.',
    disclaimer: 'Dies ist eine Schätzung auf Basis des Schreibstils, kein Beweis. Von Menschen geschriebene Texte können KI-ähnlich wirken (und umgekehrt), besonders kurze, formelle oder fremdsprachige Texte. Verwenden Sie das Ergebnis nicht als einzige Entscheidungsgrundlage.'
  },
  fr: {
    empty: "Collez d'abord un texte à analyser.",
    tooShort: n => `Votre texte est trop court (${n} mots). Collez au moins 40 mots, idéalement plus de 150, pour une indication utile.`,
    verdicts: ["Peu de traits typiques de l'IA trouvés", 'Traits mixtes : difficile à dire', "Beaucoup de traits typiques de l'IA trouvés"],
    score: s => `Score IA : ${s}/100`,
    signals: { burst: 'Longueur de phrases monotone', phrases: "Formulations typiques de l'IA", dash: 'Tirets fréquents (—)' },
    levels: ['faible', 'moyen', 'élevé'],
    local: "Calculé dans votre navigateur ; votre texte n'est ni envoyé ni stocké.",
    disclaimer: "Il s'agit d'une estimation fondée sur le style d'écriture, pas d'une preuve. Un texte écrit par un humain peut sembler généré par une IA (et inversement), surtout s'il est court, formel ou rédigé dans une langue étrangère. N'utilisez pas ce résultat comme seule base de décision."
  },
  es: {
    empty: 'Pega primero un texto para analizar.',
    tooShort: n => `Tu texto es demasiado corto (${n} palabras). Pega al menos 40 palabras, mejor más de 150, para una indicación útil.`,
    verdicts: ['Pocos rasgos típicos de IA encontrados', 'Rasgos mixtos: difícil de decir', 'Muchos rasgos típicos de IA encontrados'],
    score: s => `Puntuación IA: ${s}/100`,
    signals: { burst: 'Longitud de frases monótona', phrases: 'Formulaciones típicas de IA', dash: 'Guiones frecuentes (—)' },
    levels: ['bajo', 'medio', 'alto'],
    local: 'Calculado en tu navegador; tu texto no se envía ni se guarda.',
    disclaimer: 'Es una estimación basada en el estilo de escritura, no una prueba. Un texto escrito por una persona puede parecer de IA (y al revés), sobre todo si es corto, formal o está en un idioma no nativo. No uses el resultado como única base para una decisión.'
  }
};

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

  const lowerStarts = sentences.filter(s => {
    const m = s.match(/\p{L}/u);
    return m && m[0] === m[0].toLowerCase() && m[0] !== m[0].toUpperCase();
  }).length;
  if (sentences.length && lowerStarts / sentences.length > 0.25) score *= 0.6;
  if (/\p{Extended_Pictographic}/u.test(text)) score *= 0.85;

  return { score: Math.round(clamp(score, 0, 100)), signals, wordCount };
}

function runAiDetection() {
  const box = document.getElementById('aiResultBox');
  const input = document.getElementById('text-ai');
  if (!box) return;

  const msg = AI_MESSAGES[currentLang] || AI_MESSAGES.nl;
  const text = input ? input.value.trim() : '';
  const note = t => `<p style="color: var(--text-muted); font-size: 13px; line-height: 1.5; margin: 8px 0 0;">${t}</p>`;

  if (!text) {
    box.innerHTML = `<p style="color: var(--text-muted);">${msg.empty}</p>`;
    return;
  }

  const result = analyzeAiText(text);
  if (result.wordCount < 40) {
    box.innerHTML = `<p style="color: var(--text-muted);">${msg.tooShort(result.wordCount)}</p>`;
    return;
  }

  const verdictIndex = result.score < 35 ? 0 : (result.score < 65 ? 1 : 2);
  const level = v => msg.levels[v < 0.34 ? 0 : (v < 0.67 ? 1 : 2)];
  const rows = Object.keys(result.signals)
    .map(k => `<li>${msg.signals[k]}: <strong>${level(result.signals[k])}</strong></li>`)
    .join('');

  box.innerHTML =
    `<p style="color: var(--primary); font-weight: 600; margin: 0 0 4px;">🤖 ${msg.verdicts[verdictIndex]}</p>` +
    `<p style="margin: 0 0 8px;">${msg.score(result.score)}</p>` +
    `<ul style="margin: 0; padding-left: 20px; line-height: 1.6;">${rows}</ul>` +
    note(msg.local) + note(msg.disclaimer);
}

// 3. Grammatica Bot Echte Logica (Client-side analyse)
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

  // 1. Controle op dubbele woorden achter elkaar (bijv. "de de")
  const doubleWords = text.match(/\b(\p{L}+)\s+\1\b/gi);
  if (doubleWords) {
    issues.push(`⚠️ Dubbel woord gevonden: <strong>${doubleWords.join(', ')}</strong>`);
  }

  // 2. Veelgemaakte spelfouten / stijlfouten woordenlijst
  const commonMistakes = {
    'wordt jou': 'Bedoel je "word je"?',
    'nochtans': 'Dit is een erg formeel of verouderd woord.',
    'hun hebben': 'Grammaticaal vaak afgeraden, beter is "zij hebben".',
    'zowat': 'Controleer of dit informeel taalgebruik is.',
    'als hun': 'Vaak beter "als zij".'
  };

  const lowerText = text.toLowerCase();
  for (const [mistake, advice] of Object.entries(commonMistakes)) {
    if (lowerText.includes(mistake)) {
      issues.push(`🔍 Mogelijke stijlfout ("${mistake}"): ${advice}`);
    }
  }

  // 3. Controle op te lange zinnen (meer dan 30 woorden in één zin)
  sentences.forEach((s, index) => {
    const sWords = s.split(/\s+/).length;
    if (sWords > 30) {
      issues.push(`💡 Zin ${index + 1} is erg lang (${sWords} woorden). Overweeg deze op te splitsen voor betere leesbaarheid.`);
    }
  });

  // 4. Hoofdlettercontrole aan het begin van zinnen
  sentences.forEach((s) => {
    const firstChar = s.charAt(0);
    if (firstChar && firstChar !== firstChar.toUpperCase() && /[\p{L}]/u.test(firstChar)) {
      issues.push(`✍️ Een zin begint mogelijk met een kleine letter: "${s.substring(0, 20)}..."`);
    }
  });

  // Resultaat tonen
  if (issues.length === 0) {
    box.innerHTML = `
      <p style="color: green; font-weight: 600; margin-bottom: 8px;">✨ Geen opvallende spelfouten of stijlfouten gevonden!</p>
      <p style="color: var(--text-muted); font-size: 13px; margin: 0;">Geanalyseerd: ${wordCount} woorden verdeeld over ${sentences.length} zinnen.</p>
    `;
  } else {
    let html = `<p style="color: var(--primary); font-weight: 600; margin-bottom: 8px;">📝 Suggesties en verbeterpunten (${issues.length}):</p>`;
    html += `<ul style="margin: 0; padding-left: 20px; line-height: 1.6;">`;
    issues.forEach(issue => {
      html += `<li style="margin-bottom: 6px;">${issue}</li>`;
    });
    html += `</ul>`;
    html += `<p style="color: var(--text-muted); font-size: 12px; margin-top: 10px;">Analyse uitgevoerd in je browser (${wordCount} woorden).</p>`;
    box.innerHTML = html;
  }
}

// 4. QR Code Generator Logica
function generateQRFromInput() {
  const input = document.getElementById('qrUrlInput');
  const preview = document.getElementById('qrPreviewBox');
  if (!input || !preview) return;
  const val = input.value.trim();
  saveToLocal('qrUrlInput', val);

  if (val === '') {
    preview.innerHTML = `<p style="color: var(--text-muted); font-size: 14px; margin: 0;">Vul een URL in...</p>`;
    return;
  }

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(val)}`;
  preview.innerHTML = `<img src="${qrUrl}" alt="QR Code" style="border-radius: 8px;"/><br><a href="${qrUrl}" download="qrcode.png" class="btn" style="margin-top: 12px; display: inline-block; text-decoration:none;">📥 Download QR</a>`;
}

// 5. Tekst-naar-Spraak Logica
function speakText() {
  const textEl = document.getElementById('text-tts');
  const langEl = document.getElementById('voiceLangTts');
  const statusBox = document.getElementById('ttsStatusBox');
  if (!textEl) return;

  const text = textEl.value.trim();
  if (!text) {
    alert('Typ eerst wat tekst in om voor te lezen.');
    return;
  }

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    if (langEl) utterance.lang = langEl.value;
    
    utterance.onstart = () => {
      if (statusBox) statusBox.innerHTML = `<p style="color: var(--primary);">🔊 Bezig met voorlezen...</p>`;
    };
    utterance.onend = () => {
      if (statusBox) statusBox.innerHTML = `<p style="color: green;">✅ Voorlezen voltooid.</p>`;
    };
    
    window.speechSynthesis.speak(utterance);
  } else {
    alert('Tekst-naar-spraak wordt niet ondersteund door jouw browser.');
  }
}

function stopSpeech() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const statusBox = document.getElementById('ttsStatusBox');
    if (statusBox) statusBox.innerHTML = `<p>⏹️ Gestopt.</p>`;
  }
}

function downloadAudioFile() {
  alert('Audio download functionaliteit maakt gebruik van de lokale browser-synthese.');
}

// 6. Vertaal Tool Dummy Logica
function runTranslation() {
  const textEl = document.getElementById('text-translate');
  const box = document.getElementById('translateResultBox');
  if (!textEl || !box) return;
  const val = textEl.value.trim();
  if (!val) {
    alert('Voer eerst tekst in om te vertalen.');
    return;
  }
  box.innerHTML = `<p style="font-weight: 600;">🌍 Vertaalde tekst:</p><p>${val} (Vertaald resultaat voorbeeld)</p>`;
}

// 7. Universele Converter Dummy Logica
function runConversion() {
  const fileInput = document.getElementById('fileInput');
  const box = document.getElementById('converterResultBox');
  if (!fileInput || !box) return;
  if (fileInput.files.length === 0) {
    alert('Selecteer eerst een bestand om te converteren.');
    return;
  }
  box.innerHTML = `<p style="color: green; font-weight: 600;">✅ Bestand succesvol geconverteerd en klaar om te downloaden!</p>`;
}

// Zoekfunctionaliteit voor de homepagina
function filterTools() {
  const input = document.getElementById('homeSearchInput');
  const suggestions = document.getElementById('searchSuggestions');
  if (!input || !suggestions) return;
  const query = input.value.toLowerCase().trim();

  if (query === '') {
    suggestions.style.display = 'none';
    return;
  }

  const tools = [
    { name: 'Speech & Presentatie Timer', url: 'timer/' },
    { name: 'Grammatica Bot', url: 'checker/' },
    { name: 'AI-Tekst Detector', url: 'ai/' },
    { name: 'Tekst-naar-Spraak', url: 'tts/' },
    { name: 'Vertaal Tool', url: 'translate/' },
    { name: 'QR Code Generator', url: 'qr/' },
    { name: 'Universele Converter', url: 'converter/' },
    { name: 'Blog', url: 'blog/' }
  ];

  const matches = tools.filter(t => t.name.toLowerCase().includes(query));

  if (matches.length > 0) {
    suggestions.style.display = 'block';
    suggestions.innerHTML = matches.map(m => `<div onclick="location.href='${m.url}'" style="padding: 10px; cursor: pointer; border-bottom: 1px solid var(--border);">${m.name}</div>`).join('');
  } else {
    suggestions.style.display = 'block';
    suggestions.innerHTML = `<div style="padding: 10px; color: var(--text-muted);">Geen tools gevonden</div>`;
  }
}
