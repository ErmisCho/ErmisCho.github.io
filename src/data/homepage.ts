import agenticRagPreview from '../../assets/images/projects/agentic-rag-graph.png';
import smsSpamPreview from '../../assets/images/projects/sms-spam-demo.gif';

export const siteMeta = {
  title: 'Ermis Chorinopoulos | Senior AI Engineer, Vienna',
  description:
    'Senior AI engineer in Vienna building retrieval-augmented generation, semantic search, and asynchronous FastAPI services. Six years across AI, backend, and platform engineering.',
};

export const navigation = [
  { href: '#profile', label: 'Profile' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education & Languages' },
  { href: '/de', label: 'Deutsch' },
];

export const hero = {
  name: ['Ermis', 'Chorinopoulos'],
  role: 'Senior AI Engineer',
  techStack: 'Python • FastAPI • RAG & Retrieval • Async Distributed Systems',
  imageAlt: 'Ermis Chorinopoulos',
  contacts: [
    {
      label: 'CV (English)',
      href: 'https://github.com/ErmisCho/ErmisCho.github.io/releases/download/cv/Ermis-Chorinopoulos-CV-AI-Engineer-English.pdf',
      icon: 'fas fa-file-pdf',
      className: 'action-btn',
      ariaLabel: 'Download English CV',
      external: true,
    },
    {
      label: 'Lebenslauf (Deutsch)',
      href: 'https://github.com/ErmisCho/ErmisCho.github.io/releases/download/cv/Ermis-Chorinopoulos-CV-AI-Engineer-Deutsch.pdf',
      icon: 'fas fa-file-pdf',
      className: 'action-btn',
      ariaLabel: 'Download German CV',
      external: true,
    },
    {
      label: 'ermis.chorinopoulos@gmail.com',
      href: 'mailto:ermis.chorinopoulos@gmail.com',
      icon: 'fas fa-envelope',
      ariaLabel: 'Email',
    },
    {
      label: 'Vienna, Austria',
      icon: 'fas fa-map-marker-alt',
      disabled: true,
    },
    {
      label: 'EU citizen, no work permit required',
      icon: 'fas fa-passport',
      disabled: true,
    },
    {
      label: '+43 660 383 9028',
      href: 'tel:+436603839028',
      icon: 'fas fa-phone',
      ariaLabel: 'Phone',
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
  'Software engineer with over six years across enterprise backend, platform, and AI systems, around two of them focused on retrieval-augmented generation and AI-backed search. At RISE I owned a RAG document-search platform, trading retrieval quality against ingestion reliability, performance, and operational complexity; earlier I built backend, data, and automation systems at Kapsch TrafficCom, Huawei, and Citibank. My work targets where AI systems actually fail: weak retrieval evidence, ingestion that blocks the request path, background jobs that fail silently, and evaluation that flatters itself. I keep the reasoning behind each trade-off documented, not just the result.';

export const experience = [
  {
    title: 'Python AI Engineer (Project-Based)',
    organization: 'Independent AI & Backend Engineering',
    date: 'Oct 2025 - Present',
    location: 'Vienna, Austria',
    highlights: [
      'Designed FastAPI-based services for RAG, retrieval workflows, and data pipelines, separating API responsibilities from background processing.',
      'Built asynchronous ingestion workflows with RabbitMQ and Redis, enabling background processing, job tracking, retries, and failure isolation.',
      'Developed ingestion pipelines covering crawling, transformation, chunking, embedding, and indexing for AI-search workloads.',
    ],
  },
  {
    title: 'Software Engineer (AI/Search)',
    organization: 'RISE (AI Search Platform)',
    date: 'May 2025 - Sep 2025',
    location: 'Vienna, Austria',
    highlights: [
      'Owned and improved a RAG-based document search platform, balancing retrieval quality, ingestion reliability, performance, and operational complexity.',
      'Fixed an embedding-indexing path that could not finish on large document sets, so any website could be indexed to completion regardless of how many documents the crawl found.',
      'Built document-processing pipelines covering parsing, chunking, metadata handling, indexing, and validation, and improved how indexed content was queried through the existing Elasticsearch/OpenSearch retrieval stack.',
      'Disabled telemetry in AI and search components and verified that unintended data sharing had stopped, reducing external data exposure risk.',
      'Built internal FastAPI and Streamlit tooling for query testing and result inspection, giving the team a way to evaluate retrieval behavior and AI-search quality.',
      'Supported another engineer through ramp-up by walking through code behavior, system flows, and implementation details.',
    ],
    caseStudy: '/case-studies/rag-platform-at-rise',
  },
  {
    title: 'AI Specialization & Independent Project Work',
    organization: 'Self-directed, between contracts',
    date: 'Apr 2024 - Apr 2025',
    location: 'Vienna, Austria',
    highlights: [
      'Used the period between contracts to move from enterprise backend engineering toward applied AI, retrieval systems, and RAG architecture.',
      'Continued German study toward C1 alongside the self-directed technical work.',
    ],
  },
  {
    title: 'Software Engineer',
    organization: 'Kapsch TrafficCom AG',
    date: 'Sep 2023 - Mar 2024',
    location: 'Vienna, Austria',
    highlights: [
      'Automated or documented 15 of roughly 20 manual test procedures so any engineer could run them without being their owner, cutting a test cycle from 2-3 weeks of coordinated effort across several people to 1-2 days.',
      'Improved reliability of backend systems through Python-based automation, performance measurement, structured testing, and CPU/memory analysis.',
    ],
  },
  {
    title: 'Software Engineer',
    organization: 'Huawei',
    date: 'Aug 2021 - Aug 2023',
    location: 'Budapest, Hungary',
    highlights: [
      'Built tooling that let my team and other development teams write, run, and debug code outside a mandated platform-as-code environment where a single save took 2-5 minutes, moving delivery on that work from 2-3 months to 1-2 weeks.',
      'Owned internal automation tools integrating Python and Java services via APIs, reducing manual operational effort across teams.',
      'Supported platform migration and schema changes through adaptable API and data-model integrations.',
    ],
  },
  {
    title: 'Software Engineer',
    organization: 'Citibank',
    date: 'Jan 2019 - Aug 2021',
    location: 'Budapest, Hungary',
    highlights: [
      'Built backend tools in Python, Java, and SQL for CVE analysis, vulnerability threat management, and security-relevant enterprise workflows, supporting an ongoing load of roughly 50-100 CVEs for the voice department.',
      'Developed PostgreSQL/MySQL-backed applications and SQL workflows supporting vulnerability, configuration, and risk analysis.',
    ],
  },
];

export const projects = [
  {
    title: 'End-to-End RAG Pipeline',
    tags: ['Python', 'FastAPI', 'RabbitMQ', 'Redis', 'Pinecone', 'Docker'],
    highlights: [
      'Built an asynchronous RAG system with FastAPI, RabbitMQ workers, Redis job state, and Pinecone retrieval, keeping expensive crawl and indexing work off the request path.',
      'Added citation-backed answers with evidence rejection, pollable job status, retry and dead-letter handling, selectable Ollama/Gemini providers, and unit and integration tests.',
    ],
    href: 'https://github.com/ErmisCho/rag-pipeline',
    caseStudy: '/case-studies/async-rag-ingestion',
    previewVideo: '/previews/rag-pipeline-demo.mp4',
    previewAlt: 'Screen recording of the Documentation Helper ingesting a site and answering with citations',
  },
  {
    title: 'Agentic RAG System',
    tags: ['Python', 'LangGraph', 'LangChain', 'Ollama'],
    highlights: [
      'Implemented a LangGraph workflow that routes questions between vector retrieval and web search, grading both the retrieved evidence and the generated answer.',
      'Chose an explicit, inspectable state machine with bounded retry and fallback control over an open-ended agent loop, running on Gemini or local Ollama.',
    ],
    href: 'https://github.com/ErmisCho/agentic-rag',
    preview: agenticRagPreview,
    previewAlt: 'LangGraph workflow diagram showing routing between vector retrieval and web search',
  },
  {
    title: 'CRM Backend Optimization',
    tags: ['Django', 'PostgreSQL', 'Django REST Framework'],
    highlights: [
      'Optimized a Django/PostgreSQL CRM API over 3 million synthetic customer records using select_related, targeted indexes, field projection, and COPY-based data generation.',
      'Reduced average latency by 12-21% across four documented baseline-versus-optimized benchmark scenarios, keeping the raw results as evidence.',
    ],
    href: 'https://github.com/ErmisCho/crm-backend-optimization',
  },
  {
    title: 'Campaign Event Analytics Pipeline',
    tags: ['Python', 'Parquet', 'DuckDB', 'FastAPI'],
    highlights: [
      'Built a tested batch pipeline that validates advertising events, quarantines malformed rows, and performs deterministic deduplication and idempotent late-event merges.',
      'Stored date-partitioned Parquet data, queried aggregates with DuckDB, exposed typed FastAPI analytics endpoints, and verified the flow with 29 pytest tests in GitHub Actions.',
    ],
    href: 'https://github.com/ErmisCho/campaign-event-analytics-pipeline',
  },
  {
    title: 'DACHApply: AI-Assisted Job Application Platform',
    tags: [
      'Django REST Framework',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Azure',
      'Docker',
    ],
    highlights: [
      'Built and deployed an authenticated job-intelligence platform with Django REST Framework, React, TypeScript, and PostgreSQL for invite-based lead intake and application tracking.',
      'Implemented AI-assisted evaluation from generated prompts plus schema-validated, transactional import of externally produced model output, with portable user data and Azure Container Apps delivery.',
    ],
    href: 'https://dachapply.livelysea-3461ad21.westeurope.azurecontainerapps.io',
    repository: 'https://github.com/ErmisCho/dachapply',
  },
  {
    title: 'SMS Spam Detection NLP',
    tags: ['Python', 'scikit-learn', 'FastAPI', 'React', 'Docker', 'Azure'],
    highlights: [
      'Built an end-to-end SMS classification service with duplicate-safe evaluation, reaching 94.16% SPAM F1 with zero exact train/test text overlap on the UCI dataset.',
      'Shipped it as a React/TypeScript UI over FastAPI with Docker packaging, CI/CD, and a scale-to-zero Azure deployment; the hosted demo runs a synthetic model.',
    ],
    href: 'https://github.com/ErmisCho/sms-spam-detection-nlp',
    caseStudy: '/case-studies/duplicate-safe-evaluation',
    preview: smsSpamPreview,
    previewAlt: 'Animated demo of the MessageGuard interface classifying an SMS message',
  },
];

export const honourableProjects = [
  {
    title: 'Route AI Sync',
    tags: ['TypeScript', 'Python', 'PostgreSQL', 'Azure'],
    highlights: [
      'Built and deployed a freight operations platform for planning, quotations, haulier coordination, tracking, and email workflows.',
      'Separated the customer-facing TypeScript product from guarded Python AI services deployed on Azure Container Apps.',
    ],
    href: 'https://github.com/ErmisCho/route-ai-sync',
    private: true,
  },
  {
    title: 'Chatdeck: ChatGPT Multi-Tab',
    tags: ['Rust', 'Tauri', 'WebView2', 'Windows'],
    highlights: [
      'Built a Windows desktop shell for up to eight simultaneous ChatGPT WebView2 sessions with shared login and keyboard navigation.',
      'Added persistent tab groups, draggable and resizable split panes, and portable packaging without using or bypassing the OpenAI API.',
    ],
    href: 'https://github.com/ErmisCho/chatdeck',
    private: true,
  },
  {
    title: 'AI Interview Coach DACH',
    tags: ['FastAPI', 'Next.js', 'SQLite', 'Ollama'],
    highlights: [
      'Built a bilingual local interview-practice app with structured scoring, stronger-answer feedback, and progress history.',
      'Supports deterministic heuristics and local-model evaluators with explicit fallback behavior.',
    ],
    href: 'https://github.com/ErmisCho/ai-interview-coach-dach',
  },
  {
    title: 'Lux Journal CMS',
    tags: ['Python', 'Django', 'Wagtail'],
    highlights: [
      'Built an editorial CMS for configurable luxury-brand landing pages, founder storytelling, structured journal content, search, galleries, and shop calls to action.',
    ],
    href: 'https://github.com/ErmisCho/lux-journal-cms',
  },
];

export const skills = [
  {
    title: 'Python AI Engineering',
    icon: 'fas fa-brain',
    items: ['RAG', 'Semantic Search', 'LangChain', 'LangGraph', 'LLM Integration', 'Evaluation', 'Guardrails'],
  },
  {
    title: 'Backend',
    icon: 'fas fa-server',
    items: ['Python', 'Java', 'FastAPI', 'Django', 'RabbitMQ', 'Redis', 'REST APIs'],
  },
  {
    title: 'Data & Retrieval',
    icon: 'fas fa-database',
    items: ['Elasticsearch / OpenSearch', 'Pinecone', 'PostgreSQL', 'SQL', 'Vector Search', 'Embeddings', 'Chunking'],
  },
  {
    title: 'Cloud & Delivery',
    icon: 'fas fa-cloud',
    items: ['Docker', 'Azure Container Apps', 'AWS EC2', 'GitHub Actions CI/CD', 'Bicep', 'Kubernetes environments', 'Linux', 'Git'],
  },
];

export const education = {
  title: 'BSc in Applied Information Technology',
  organization: 'University of Macedonia',
  date: '2014 - 2018',
  location: 'Thessaloniki, Greece',
};

export const languages = [
  { name: 'German', level: 'Professional working proficiency (B2 course completed, C1 course in progress)', progress: 80 },
  { name: 'English', level: 'C2 certified, full professional proficiency', progress: 100 },
  { name: 'Greek', level: 'Native', progress: 100 },
  { name: 'Chinese', level: 'Intermediate, used in professional context', progress: 60 },
];
