import agenticRagPreview from '../../assets/images/projects/agentic-rag-graph.png';
import smsSpamPreview from '../../assets/images/projects/sms-spam-demo.gif';

export const siteMeta = {
  title: 'Ermis Chorinopoulos | Senior AI Software Engineer, Vienna',
  description:
    'Senior AI Software Engineer in Vienna building reliable Python, FastAPI, backend, search, and AI-backed systems with a focus on maintainability, explicit technical trade-offs, and dependable delivery.',
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
  role: 'Senior AI Software Engineer',
  techStack: 'Python • FastAPI • AI & Search Systems • Reliable Backend Engineering',
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
  'Senior software engineer based in Vienna with experience building backend and platform systems in enterprise environments, complemented by hands-on work on AI-backed applications and search systems. I develop Python and FastAPI services, asynchronous data-processing workflows, and SQL-backed systems with a focus on explicit technical trade-offs, operational clarity, maintainability, and reliable delivery. My work addresses practical failure modes such as unreliable ingestion, weak retrieval evidence, unbounded AI requests, silent background-job failures, and misleading evaluation.';

export const experience = [
  {
    title: 'Senior Software Engineer (Independent Projects)',
    organization: 'Independent Software & AI Projects',
    date: 'Oct 2025 - Present',
    location: 'Vienna, Austria',
    highlights: [
      'Built and deployed independent backend, data, and AI-backed systems using Python, FastAPI, Django, React, PostgreSQL, Docker, and Azure, owning architecture, implementation, testing, and technical delivery.',
      'Developed a custom Django webshop and Wagtail CMS from external stakeholder requirements, translating functional needs into maintainable application architecture and deployment-ready implementations.',
      'Implemented reliability-focused systems including asynchronous ingestion, background-job tracking, validation, retry handling, guarded AI workflows, and reproducible evaluation.',
    ],
  },
  {
    title: 'Software Engineer (AI/Search)',
    organization: 'RISE (AI Search Platform)',
    date: 'May 2025 - Sep 2025',
    location: 'Vienna, Austria',
    highlights: [
      'Took primary responsibility for extending existing Python and FastAPI services for document ingestion, indexing, and RAG-backed search, independently building a detailed understanding of the codebase while coordinating reviews with the previous maintainer.',
      'Replaced per-item embedding calls with configurable batch processing, reducing request overhead and making large-document indexing more predictable.',
      'Added retry and failure-isolation logic so individual document failures no longer stopped complete crawls, reducing the risk of failed indexing before client demonstrations.',
      'Introduced token limits and bounded LLM-processing steps to prevent oversized requests from failing or delaying responses, improving response reliability and user-facing latency.',
      'Built internal FastAPI and Streamlit tools for query testing and result inspection, making retrieval behaviour and answer quality easier to evaluate.',
      'Documented and communicated the architecture and implementation changes, reducing knowledge concentration and enabling other engineers to contribute effectively.',
    ],
    caseStudy: '/case-studies/rag-platform-at-rise',
  },
  {
    title: 'Software Engineer',
    organization: 'Kapsch TrafficCom AG',
    date: 'Sep 2023 - Mar 2024',
    location: 'Vienna, Austria',
    highlights: [
      'Automated approximately 15 of 20 validation procedures used to verify system values and expected platform behaviour, reducing the execution cycle from two to three weeks to one to two days.',
      'Created clear, step-by-step documentation that made the remaining checks reproducible and reduced dependence on individual process knowledge.',
      'Built Python tooling to collect and analyse CPU and memory behaviour, supporting faster diagnosis of performance and stability issues.',
      'Worked with development teams to validate fixes and confirm that platform changes met expected functional and reliability requirements.',
    ],
  },
  {
    title: 'Software Engineer',
    organization: 'Huawei',
    date: 'Aug 2021 - Aug 2023',
    location: 'Budapest, Hungary',
    highlights: [
      'Led the engineering team, coordinating priorities, reviewing implementations, and aligning delivery with stakeholder requirements.',
      'Designed and built a compatibility-focused development workflow that allowed engineers to continue working efficiently during the transition to a new security platform.',
      'Reduced platform-specific save, compilation, and integration issues before code reached the target environment, limiting rework and helping restore delivery timelines from approximately two to three months to one to two weeks.',
      'Made architectural decisions around APIs, data models, integrations, and the migration of backend services from Windows to Linux.',
    ],
  },
  {
    title: 'Software Engineer',
    organization: 'Citibank',
    date: 'Jan 2019 - Aug 2021',
    location: 'Budapest, Hungary',
    highlights: [
      'Built and maintained Python- and Java-based applications supporting internal voice and communication systems and related enterprise workflows.',
      'Created proof-of-concept implementations to validate reported security vulnerabilities, reviewed affected code, and implemented corrective changes.',
      'Modernized multiple applications by upgrading their Java versions and implementing and verifying encryption controls.',
      'Designed SQL-based data-processing workflows and supported the migration, hardening, deployment, and configuration of Linux-based applications using Ansible and Bash.',
    ],
  },
];

export const projects = [
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
];

export const honourableProjects = [
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
    title: 'AI & Search Systems',
    icon: 'fas fa-brain',
    items: [
      'RAG',
      'Semantic Search',
      'LangChain',
      'LangGraph',
      'LLM Integration',
      'Evaluation',
      'Guardrails',
    ],
  },
  {
    title: 'Backend Engineering',
    icon: 'fas fa-server',
    items: [
      'Python',
      'Java',
      'FastAPI',
      'Django',
      'RabbitMQ',
      'Redis',
      'REST APIs',
    ],
  },
  {
    title: 'Data & Retrieval',
    icon: 'fas fa-database',
    items: [
      'Elasticsearch / OpenSearch',
      'Pinecone',
      'PostgreSQL',
      'SQL',
      'Vector Search',
      'Embeddings',
      'Chunking',
    ],
  },
  {
    title: 'Cloud & Delivery',
    icon: 'fas fa-cloud',
    items: [
      'Docker',
      'Azure Container Apps',
      'AWS',
      'GitHub Actions CI/CD',
      'Bicep',
      'Kubernetes environments',
      'Linux',
      'Git',
    ],
  },
];

export const education = {
  title: 'BSc in Applied Information Technology',
  organization: 'University of Macedonia',
  date: '2014 - 2018',
  location: 'Thessaloniki, Greece',
};

export const languages = [
  {
    name: 'German',
    level: 'Professional working proficiency, B2 completed, C1 in progress',
    progress: 80,
  },
  {
    name: 'English',
    level: 'C2, full professional proficiency',
    progress: 100,
  },
  {
    name: 'Greek',
    level: 'Native',
    progress: 100,
  },
  {
    name: 'Chinese',
    level: 'Upper-intermediate, used in professional context',
    progress: 60,
  },
];
