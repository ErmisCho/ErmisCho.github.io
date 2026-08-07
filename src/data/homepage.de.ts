import agenticRagPreview from '../../assets/images/projects/agentic-rag-graph.png';
import aiInterviewCoachPreview from '../../assets/images/projects/ai-interview-coach.webp';
import chatdeckPreview from '../../assets/images/projects/chatdeck.webp';
import crmBenchmarkPreview from '../../assets/images/projects/crm-benchmark.png';
import luxJournalPreview from '../../assets/images/projects/lux-journal.webp';
import smsSpamPreview from '../../assets/images/projects/sms-spam-demo.gif';

export const lang: string = 'de';

export const strings = {
  profileTitle: 'Profil',
  experienceTitle: 'Berufserfahrung',
  projectsTitle: 'Ausgewählte Projekte & eigenständige Arbeit',
  honourableTitle: 'Weitere Projekte',
  skillsTitle: 'Technische Fähigkeiten',
  educationTitle: 'Ausbildung',
  languagesTitle: 'Sprachen',
  caseStudyLabel: 'Fallstudie lesen',
  privateRepoLabel: 'Privates Repository, Quellcode auf Anfrage',
  liveAppLabel: 'Live-App',
  githubLabel: 'GitHub',
  alternateLabelFallback: 'Alternative Version',
};

export const siteMeta = {
  title: 'Ermis Chorinopoulos | Senior Software & AI Engineer, Wien',
  description:
    'Senior Software Engineer in Wien für zuverlässige Python-, FastAPI-, Backend-, Such- und KI-Systeme in Enterprise-Umgebungen und durchgängig verantworteten Produktprojekten.',
};

export const navigation = [
  { href: '#profile', label: 'Profil' },
  { href: '#experience', label: 'Erfahrung' },
  { href: '#projects', label: 'Projekte' },
  { href: '#skills', label: 'Fähigkeiten' },
  { href: '#education', label: 'Ausbildung & Sprachen' },
  { href: '/', label: 'English' },
];

export const hero = {
  name: ['Ermis', 'Chorinopoulos'],
  role: 'Senior Software Engineer | KI-, Backend- & Suchsysteme',
  techStack: 'Python • FastAPI • Django • RAG/Search • Zuverlässige Bereitstellung',
  imageAlt: 'Ermis Chorinopoulos',
  contacts: [
    {
      label: 'Lebenslauf (Deutsch)',
      href: 'https://github.com/ErmisCho/ErmisCho.github.io/releases/download/cv/Ermis-Chorinopoulos-CV-AI-Engineer-Deutsch.pdf',
      icon: 'fas fa-file-pdf',
      className: 'action-btn',
      ariaLabel: 'Deutschen Lebenslauf herunterladen',
      external: true,
    },
    {
      label: 'CV (English)',
      href: 'https://github.com/ErmisCho/ErmisCho.github.io/releases/download/cv/Ermis-Chorinopoulos-CV-AI-Engineer-English.pdf',
      icon: 'fas fa-file-pdf',
      className: 'action-btn',
      ariaLabel: 'Englischen Lebenslauf herunterladen',
      external: true,
    },
    {
      label: 'ermis.chorinopoulos@gmail.com',
      href: 'mailto:ermis.chorinopoulos@gmail.com',
      icon: 'fas fa-envelope',
      ariaLabel: 'E-Mail',
    },
    {
      label: 'Wien, Österreich',
      icon: 'fas fa-map-marker-alt',
      disabled: true,
    },
    {
      label: 'EU-Bürger, keine Arbeitsgenehmigung erforderlich',
      icon: 'fas fa-passport',
      disabled: true,
    },
    {
      label: '+43 660 383 9028',
      href: 'tel:+436603839028',
      icon: 'fas fa-phone',
      ariaLabel: 'Telefon',
    },
    {
      label: 'linkedin.com/in/ermischo',
      href: 'https://linkedin.com/in/ermischo',
      icon: 'fab fa-linkedin',
      ariaLabel: 'LinkedIn',
      external: true,
    },
    {
      label: 'github.com/ErmisCho',
      href: 'https://github.com/ErmisCho',
      icon: 'fab fa-github',
      ariaLabel: 'GitHub',
      external: true,
    },
  ],
};

export const profile =
  'Senior Software Engineer in Wien mit Enterprise-Erfahrung in der Leitung technischer Umsetzung und der Entwicklung zuverlässiger Backend-, KI- und Datensysteme. Ich arbeite mit Python, FastAPI, Django, Search/RAG, PostgreSQL, Tests, CI/CD und Cloud-Deployment und verantworte aktuell Produkte durchgängig von der Architektur bis zu Stakeholder-Demonstrationen.';

export const experience = [
  {
    title: 'Senior Software Engineer (Unabhängige Projekte)',
    organization: 'Unabhängige Software- und KI-Projekte',
    date: 'Okt 2025 - heute',
    location: 'Wien, Österreich',
    highlights: [
      'Entwickelte und deployte eine laufende private Multi-Service-Logistikplattform mit TypeScript, PostgreSQL, Django/FastAPI, Docker und Azure und demonstrierte potenziellen Kunden erste Workflows.',
      'Verantwortete die Plattformarchitektur durchgängig, einschließlich mandantenfähiger Zugriffskontrolle, automatisierter Tests, CI/CD und abgesicherter KI-Services.',
      'Entwickelte eigenständige Software- und KI-Systeme, darunter einen individuellen Django-Webshop und ein Wagtail-CMS für einen externen Kontakt, mit Verantwortung für Architektur, Implementierung, Tests und Deployment-Vorbereitung.',
      'Konzipierte und deployte weitere Backend- und KI-Projekte mit Python, FastAPI, Django, React, PostgreSQL, Docker und Azure und übernahm Verantwortung für technische Entscheidungen und zuverlässige Bereitstellung.',
    ],
  },
  {
    title: 'Software Engineer (AI/Search)',
    organization: 'RISE (KI-Suchplattform)',
    date: 'Mai 2025 - Sep 2025',
    location: 'Wien, Österreich',
    highlights: [
      'Übernahm die Hauptverantwortung für die Weiterentwicklung bestehender Python- und FastAPI-Services für Dokumentenintegration, Indexierung und RAG-gestützte Suche, arbeitete sich weitgehend selbstständig in die Codebasis ein und stimmte Reviews mit dem bisherigen Verantwortlichen ab.',
      'Ersetzte einzelne Embedding-Aufrufe durch konfigurierbare Batch-Verarbeitung, reduzierte dadurch den Request-Overhead und machte die Indexierung großer Dokumentmengen planbarer.',
      'Implementierte Retry- und Fehlerisolationsmechanismen, sodass einzelne Dokumentfehler nicht mehr zum Abbruch vollständiger Crawls führten und das Risiko fehlgeschlagener Indexierungen vor Kundendemos sank.',
      'Begrenzte Token-Nutzung und LLM-Verarbeitungsschritte, um Fehler und Verzögerungen durch übergroße Anfragen zu vermeiden und die Zuverlässigkeit sowie Antwortzeit für Nutzer zu verbessern.',
      'Entwickelte interne FastAPI- und Streamlit-Tools für Abfragetests und Ergebnisanalyse, wodurch Retrieval-Verhalten und Antwortqualität leichter bewertet werden konnten.',
      'Dokumentierte und vermittelte Architektur sowie Implementierungsänderungen, reduzierte dadurch Wissenskonzentration und ermöglichte anderen Engineers eine effektive Mitarbeit.',
    ],
    caseStudy: '/case-studies/de/rag-platform-at-rise',
  },
  {
    title: 'Berufliche Weiterbildung',
    organization: 'Deutsch-Intensivprogramm (Vollzeit)',
    date: 'Apr 2024 - Apr 2025',
    location: 'Wien, Österreich',
    highlights: [
      'Absolvierte ein intensives Deutschprogramm von B1 bis zum Goethe-Zertifikat B2 und erreichte berufliche Sprachkompetenz für den österreichischen Arbeitsmarkt.',
      'Entwickelte parallel eigenständige Django- und Data-Engineering-Übungsprojekte, um die technischen Fähigkeiten aktuell zu halten.',
    ],
  },
  {
    title: 'Software Engineer',
    organization: 'Kapsch TrafficCom AG',
    date: 'Sep 2023 - Mär 2024',
    location: 'Wien, Österreich',
    highlights: [
      'Automatisierte rund 15 von 20 Validierungsverfahren zur Prüfung von Systemwerten und erwartetem Plattformverhalten und verkürzte den Durchführungszyklus von zwei bis drei Wochen auf ein bis zwei Tage.',
      'Erstellte klare, schrittweise Dokumentation, durch die auch die verbleibenden Prüfungen reproduzierbar wurden und weniger von individuellem Prozesswissen abhingen.',
      'Entwickelte Python-Tools zur Erfassung und Analyse von CPU- und Speicherverhalten und unterstützte dadurch die schnellere Untersuchung von Performance- und Stabilitätsproblemen.',
      'Arbeitete mit Entwicklungsteams zusammen, um Fehlerbehebungen zu validieren und sicherzustellen, dass Plattformänderungen die erwarteten funktionalen und qualitativen Anforderungen erfüllten.',
    ],
  },
  {
    title: 'Software Engineer',
    organization: 'Huawei',
    date: 'Aug 2021 - Aug 2023',
    location: 'Budapest, Ungarn',
    highlights: [
      'Leitete das Engineering-Team, koordinierte Prioritäten, überprüfte Implementierungen und stimmte die Umsetzung mit den Anforderungen der Stakeholder ab.',
      'Konzipierte und entwickelte einen kompatibilitätsorientierten Entwicklungsprozess, der Engineers während der Einführung einer neuen Security-Plattform effizientes Weiterarbeiten ermöglichte.',
      'Reduzierte plattformspezifische Speicher-, Kompilierungs- und Integrationsprobleme, bevor der Code in die Zielumgebung übertragen wurde, verringerte dadurch Nacharbeit und trug dazu bei, die Lieferzeit von ungefähr zwei bis drei Monaten wieder auf ein bis zwei Wochen zu verkürzen.',
      'Traf Architekturentscheidungen zu APIs, Datenmodellen, Integrationen und der Migration von Backend-Services von Windows auf Linux.',
    ],
  },
  {
    title: 'Software Engineer',
    organization: 'Citibank',
    date: 'Jan 2019 - Aug 2021',
    location: 'Budapest, Ungarn',
    highlights: [
      'Entwickelte und betreute Python- und Java-basierte Anwendungen zur Unterstützung interner Sprach- und Kommunikationssysteme sowie weiterer Enterprise-Workflows.',
      'Entwickelte Proofs of Concept zur Überprüfung gemeldeter Sicherheitslücken, analysierte den betroffenen Code und setzte notwendige Korrekturen um.',
      'Modernisierte mehrere Anwendungen durch Java-Versions-Upgrades und implementierte sowie überprüfte Verschlüsselungsmechanismen.',
      'Konzipierte SQL-basierte Datenverarbeitungsprozesse und unterstützte Migration, Härtung, Deployment und Konfiguration Linux-basierter Anwendungen mit Ansible und Bash.',
    ],
  },
];

export const projects = [
  {
    title: 'SMS Spam Detection NLP',
    tags: ['Python', 'scikit-learn', 'FastAPI', 'React', 'Docker', 'Azure'],
    highlights: [
      'Entwickelte einen End-to-End-SMS-Klassifikationsdienst mit duplikatsicherer Evaluierung und erreichte 94,16 % SPAM-F1 ohne exakte Textüberschneidungen zwischen Trainings- und Testdaten auf dem UCI-Datensatz.',
      'Stellte den Dienst als React/TypeScript-Oberfläche über FastAPI mit Docker-Packaging, CI/CD und Scale-to-zero-Deployment auf Azure bereit; die gehostete Demo verwendet ein synthetisches Modell.',
    ],
    href: 'https://github.com/ErmisCho/sms-spam-detection-nlp',
    caseStudy: '/case-studies/de/duplicate-safe-evaluation',
    preview: smsSpamPreview,
    previewAlt: 'Animierte Demo der MessageGuard-Oberfläche bei der Klassifikation einer SMS',
  },
  {
    title: 'End-to-End RAG Pipeline',
    tags: ['Python', 'FastAPI', 'RabbitMQ', 'Redis', 'Pinecone', 'Docker'],
    highlights: [
      'Entwickelte ein asynchrones RAG-System mit FastAPI, RabbitMQ-Workern, Redis-Jobstatus und Pinecone-Retrieval, das aufwändiges Crawling und Indexieren aus dem Request-Pfad heraushält.',
      'Ergänzte quellengestützte Antworten mit Evidenzprüfung, abfragbarem Job-Status, Retry- und Dead-Letter-Verarbeitung, wählbaren Ollama-/Gemini-Providern sowie Unit- und Integrationstests.',
    ],
    href: 'https://github.com/ErmisCho/rag-pipeline',
    caseStudy: '/case-studies/de/async-rag-ingestion',
    previewVideo: '/previews/rag-pipeline-demo.mp4',
    previewWidth: 1280,
    previewHeight: 660,
    previewAlt: 'Bildschirmaufnahme des Documentation Helper beim Einlesen einer Website und Antworten mit Quellenangaben',
  },
  {
    title: 'DACHApply: KI-gestützte Bewerbungsplattform',
    tags: [
      'Django REST Framework',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Azure',
      'Docker',
    ],
    highlights: [
      'Entwickelte und deployte eine authentifizierte Job-Intelligence-Plattform mit Django REST Framework, React, TypeScript und PostgreSQL für einladungsbasierte Lead-Erfassung und Bewerbungsverfolgung.',
      'Entwickelte einen gehosteten, promptbasierten Job-Fit-Workflow mit schemavalidiertem, transaktionalem JSON-Import (ohne kostenpflichtige LLM-API) sowie einen klar getrennten lokalen Modus zur Erstellung zugeschnittener Lebensläufe und Motivationsschreiben.',
    ],
    href: 'https://dachapply.livelysea-3461ad21.westeurope.azurecontainerapps.io',
    repository: 'https://github.com/ErmisCho/dachapply',
    previewVideo: '/previews/dachapply-demo.mp4',
    previewWidth: 1280,
    previewHeight: 720,
    previewAlt: 'Bildschirmaufnahme von DACHApply beim Hinzufügen eines Joblinks, Import der ChatGPT-Analyse und Vorbereitung der lokalen CV-Erstellung',
    previewCaption: 'Job hinzufügen → Passung analysieren → Bewerbung erstellen',
  },
  {
    title: 'Kundengesteuerter Django-Webshop',
    tags: ['Django', 'PayPal Sandbox', 'PythonAnywhere', 'JavaScript'],
    highlights: [
      'Entwickelte und deployte einen Django-Webshop für ein Schmuckunternehmen mit Benutzerkonten, Produktvarianten, Warenkorb, Bestellungen, Bewertungen, Django-Admin-Katalogverwaltung und getestetem PayPal-Sandbox-Checkout.',
      'Lieferte eine zweite Luxus-Storefront, die den Direktkauf auf verkäufergestützte Anfragen umstellte, als sich die Vertriebsstrategie des Kunden änderte.',
    ],
    href: 'https://ermis.pythonanywhere.com/',
    alternateHref: 'https://ermis.pythonanywhere.com/lux/',
    alternateLabel: 'Luxusversion',
    repository: 'https://github.com/ErmisCho/webshop',
    previewVideo: '/previews/django-webshop-demo.mp4',
    previewWidth: 1280,
    previewHeight: 720,
    previewAlt: 'Kurzer Vergleich des transaktionalen Django-Webshops mit der kundengesteuerten Luxusversion für beratungsgestützten Verkauf',
    previewCaption: 'Transaktionaler Webshop → Kundengesteuerter beratungsgestützter Verkauf',
  },
  {
    title: 'CRM Backend Optimization',
    tags: ['Django', 'PostgreSQL', 'Django REST Framework'],
    highlights: [
      'Optimierte eine Django-/PostgreSQL-CRM-API auf 3 Millionen synthetischen Kundendatensätzen mit select_related, gezielten Indizes, Feldprojektion und COPY-basierter Datengenerierung.',
      'Reduzierte die durchschnittliche Latenz um 12 bis 21 % in vier dokumentierten Benchmark-Szenarien (Baseline vs. optimierte Variante) und bewahrte die Rohergebnisse als Nachweis auf.',
    ],
    href: 'https://github.com/ErmisCho/crm-backend-optimization',
    preview: crmBenchmarkPreview,
    previewAlt: 'Benchmark-Diagramm zum Vergleich der Baseline- und optimierten Django-CRM-API-Latenz bei drei Millionen synthetischen Datensätzen',
  },
  {
    title: 'Campaign Event Analytics Pipeline',
    tags: ['Python', 'Parquet', 'DuckDB', 'FastAPI'],
    highlights: [
      'Entwickelte eine getestete Batch-Pipeline, die Werbe-Events validiert, fehlerhafte Datensätze in Quarantäne verschiebt und deterministische Deduplizierung sowie idempotente Late-Event-Merges durchführt.',
      'Speicherte datumspartitionierte Parquet-Daten, fragte Aggregate mit DuckDB ab, stellte typisierte FastAPI-Analytics-Endpunkte bereit und verifizierte den Ablauf mit 29 pytest-Tests in GitHub Actions.',
    ],
    href: 'https://github.com/ErmisCho/campaign-event-analytics-pipeline',
    previewVideo: '/previews/campaign-analytics-demo.mp4',
    previewWidth: 1280,
    previewHeight: 720,
    previewAlt: 'Bildschirmaufnahme der OpenAPI-Oberfläche der Campaign Event Analytics Pipeline mit Zusammenfassungs- und gefilterten Entitätsmetriken',
    previewCaption: 'OpenAPI → Zusammenfassungsmetriken → Gefilterte Entitätsanalysen',
  },
];

export const honourableProjects = [
  {
    title: 'Agentic RAG System',
    tags: ['Python', 'LangGraph', 'LangChain', 'Ollama'],
    highlights: [
      'Implementierte einen LangGraph-Workflow, der Fragen zwischen Vektorsuche und Websuche routet und sowohl die gefundene Evidenz als auch die generierte Antwort bewertet.',
      'Wählte eine explizite, nachvollziehbare Zustandsmaschine mit begrenzten Retries und Fallbacks statt einer offenen Agentenschleife, lauffähig mit Gemini oder lokalem Ollama.',
    ],
    href: 'https://github.com/ErmisCho/agentic-rag',
    preview: agenticRagPreview,
    previewAlt: 'LangGraph-Workflow-Diagramm mit Routing zwischen Vektorsuche und Websuche',
  },
  {
    title: 'Chatdeck: ChatGPT Multi-Tab',
    tags: ['Rust', 'Tauri', 'WebView2', 'Windows'],
    highlights: [
      'Entwickelte eine Windows-Desktop-Shell für bis zu acht gleichzeitige ChatGPT-WebView2-Sitzungen mit gemeinsamer Anmeldung und Tastaturnavigation.',
      'Ergänzte persistente Tab-Gruppen, verschieb- und größenveränderbare Split-Panes und portables Packaging ohne Nutzung oder Umgehung der OpenAI-API.',
    ],
    href: 'https://github.com/ErmisCho/chatdeck',
    private: true,
    preview: chatdeckPreview,
    previewAlt: 'Chatdeck-Desktopfenster mit zwei nebeneinanderliegenden ChatGPT-WebView-Bereichen für Recherche und Bewerbungen',
  },
  {
    title: 'AI Interview Coach DACH',
    tags: ['FastAPI', 'Next.js', 'SQLite', 'Ollama'],
    highlights: [
      'Entwickelte eine zweisprachige lokale App für Interviewtraining mit strukturierter Bewertung, konkretem Verbesserungsfeedback und Fortschrittsverlauf.',
      'Unterstützte deterministische Heuristiken und lokale Modell-Evaluatoren mit explizitem Fallback-Verhalten.',
    ],
    href: 'https://github.com/ErmisCho/ai-interview-coach-dach',
    preview: aiInterviewCoachPreview,
    previewAlt: 'AI Interview Coach DACH bewertet eine synthetische deutsche Interviewantwort mit deterministischem Feedback',
  },
  {
    title: 'Lux Journal CMS',
    tags: ['Python', 'Django', 'Wagtail'],
    highlights: [
      'Entwickelte ein redaktionelles CMS für konfigurierbare Luxusmarken-Landingpages, Gründergeschichten, strukturierte Journal-Inhalte, Suche, Galerien und Shop-Verweise.',
    ],
    href: 'https://github.com/ErmisCho/lux-journal-cms',
    preview: luxJournalPreview,
    previewAlt: 'Lux-Journal-CMS-Landingpage mit redaktioneller Gründergeschichte und Schmuck-Feature',
  },
];

export const skills = [
  {
    title: 'KI- & Suchsysteme',
    icon: 'fas fa-brain',
    items: [
      'RAG',
      'Semantische Suche',
      'LangChain',
      'LangGraph',
      'LLM-Integration',
      'Evaluierung',
      'Guardrails',
    ],
  },
  {
    title: 'Backend-Entwicklung',
    icon: 'fas fa-server',
    items: [
      'Python',
      'Java',
      'FastAPI',
      'Django',
      'RabbitMQ',
      'Redis',
      'REST-APIs',
    ],
  },
  {
    title: 'Daten & Retrieval',
    icon: 'fas fa-database',
    items: [
      'Elasticsearch / OpenSearch',
      'Pinecone',
      'PostgreSQL',
      'SQL',
      'Vektorsuche',
      'Embeddings',
      'Chunking',
    ],
  },
  {
    title: 'Cloud & Bereitstellung',
    icon: 'fas fa-cloud',
    items: [
      'Docker',
      'Azure Container Apps',
      'GitHub Actions CI/CD',
      'Linux',
      'pytest',
      'Strukturierte Logs',
      'Retry-/Fehlerbehandlung',
      'Git',
    ],
  },
];

export const education = {
  title: 'BSc in Angewandter Informatik',
  organization: 'University of Macedonia',
  date: '2014 - 2018',
  location: 'Thessaloniki, Griechenland',
};

export const languages = [
  {
    name: 'Deutsch',
    level: 'Beruflich einsetzbar, Goethe-Zertifikat B2, C1-Kurs laufend',
    progress: 80,
  },
  {
    name: 'Englisch',
    level: 'C2, verhandlungssicher',
    progress: 100,
  },
  {
    name: 'Griechisch',
    level: 'Muttersprache',
    progress: 100,
  },
  {
    name: 'Chinesisch',
    level: 'Mittelstufe, beruflich genutzt',
    progress: 60,
  },
];
