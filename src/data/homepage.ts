export const siteMeta = {
  title: 'Python AI Engineer',
  description:
    'Python AI Engineer specializing in RAG, semantic search, FastAPI services, asynchronous ingestion pipelines, and reliable AI-backed backend systems. Based in Vienna.',
};

export const navigation = [
  { href: '#profile', label: 'Profile' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education & Languages' },
];

export const hero = {
  name: ['Ermis', 'Chorinopoulos'],
  role: 'Python AI Engineer',
  techStack: 'Python • FastAPI • RAG • Async Processing',
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
  'Python-focused AI engineer based in Vienna with strong backend foundations and hands-on experience building RAG, semantic search, and AI-backed document search systems. Experienced in FastAPI services, asynchronous ingestion pipelines, retrieval workflows, and data processing components, with a strong focus on reliability, maintainability, and clear service boundaries.';

export const experience = [
  {
    title: 'Python AI Engineer (Project-Based)',
    organization: 'Independent AI & Backend Engineering',
    date: 'Oct 2025 – Present',
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
    date: 'May 2025 – Sep 2025',
    location: 'Vienna, Austria',
    highlights: [
      'Owned and improved a RAG-based document search platform, balancing retrieval quality, ingestion reliability, performance, and operational complexity.',
      'Improved document ingestion and indexing pipelines and integrated Elasticsearch/OpenSearch into the retrieval stack for AI-search workloads.',
    ],
  },
  {
    title: 'Software Engineer',
    organization: 'Kapsch TrafficCom AG',
    date: 'Sep 2023 – Mar 2024',
    location: 'Vienna, Austria',
    highlights: [
      'Improved reliability of backend systems through Python-based automation, performance measurement, structured testing, and CPU/memory analysis.',
    ],
  },
  {
    title: 'Software Engineer',
    organization: 'Huawei',
    date: 'Aug 2021 – Aug 2023',
    location: 'Budapest, Hungary',
    highlights: [
      'Owned internal automation tools integrating Python and Java services via APIs, reducing manual operational effort across teams.',
      'Supported platform migration and schema changes through adaptable API and data-model integrations.',
    ],
  },
  {
    title: 'Software Engineer',
    organization: 'Citibank',
    date: 'Jan 2019 – Aug 2021',
    location: 'Budapest, Hungary',
    highlights: [
      'Built backend tools in Python, Java, and SQL for CVE analysis, vulnerability threat management, and security-relevant enterprise workflows.',
      'Developed PostgreSQL/MySQL-backed applications and SQL workflows supporting vulnerability, configuration, and risk analysis.',
    ],
  },
];

export const projects = [
  {
    title: 'End-to-End RAG Pipeline',
    tags: ['Python', 'FastAPI', 'RabbitMQ', 'Redis', 'Pinecone'],
    highlights: [
      'Built an asynchronous RAG pipeline using FastAPI, RabbitMQ, and Redis for crawling, chunking, embedding, indexing, and job tracking.',
      'Decoupled ingestion from retrieval APIs so expensive crawl and indexing work does not block user-facing search and Q&A requests.',
    ],
    href: 'https://github.com/ErmisCho/rag-pipeline',
  },
  {
    title: 'Agentic RAG System',
    tags: ['Python', 'LangGraph', 'LangChain'],
    highlights: [
      'Designed an agentic Python architecture with explicit control flow and tool routing to make retrieval and answer-generation steps more predictable.',
      'Implemented evaluation layers, retries, and data guardrails to ensure answer reliability and operational predictability.',
    ],
    href: 'https://github.com/ErmisCho/agentic-rag',
  },
  {
    title: 'Backend Optimization Project',
    tags: ['Django', 'PostgreSQL', 'Django REST Framework'],
    highlights: [
      'Optimized a Django/PostgreSQL API by resolving N+1 query bottlenecks, introducing tailored indexes, and using bulk operations.',
      'Improved maintainability through targeted query optimization, automated tests, and clearer technical documentation.',
    ],
    href: 'https://github.com/ErmisCho/crm-backend-optimization',
  },
  {
    title: 'E-commerce Platform for Swiss Startup',
    tags: ['Python', 'Django', 'PostgreSQL'],
    highlights: [
      'Developed a Django-based e-commerce backend for a small business preparing to launch in Switzerland, covering product catalog management, shopping cart workflows, admin functionality, and order-handling configuration.',
    ],
    href: 'https://github.com/ErmisCho/webshop',
  },
  {
    title: 'Content Platform / Blog CMS',
    tags: ['Python', 'Django', 'PostgreSQL'],
    highlights: [
      'Built a Wagtail-based Django content platform for editorial and marketing pages, including structured content models, article publishing, rich text editing, media handling, and admin configuration.',
    ],
    href: 'https://github.com/ErmisCho/lux-journal-cms',
  },
  {
    title: 'Population Data Pipeline',
    tags: ['Python', 'ETL', 'Pandas', 'API'],
    highlights: [
      'Built a Python data pipeline that downloads World Bank GDP and population data, calculates GDP per capita and year-over-year changes, and uploads processed results through an external API.',
      'Added configuration-based execution and logging to make the pipeline easier to run, inspect, and adapt.',
    ],
    href: 'https://github.com/ErmisCho/population-data-pipeline',
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
    title: 'Cloud & Ops',
    icon: 'fas fa-cloud',
    items: ['Docker', 'Kubernetes environments', 'AWS basics', 'Linux', 'Git'],
  },
];

export const education = {
  title: 'BSc in Applied Information Technology',
  organization: 'University of Macedonia',
  date: '2014 – 2018',
  location: 'Thessaloniki, Greece',
};

export const languages = [
  { name: 'German', level: 'Professional working proficiency (B2 course completed, C1 course in progress)', progress: 80 },
  { name: 'English', level: 'C2 certified, full professional proficiency', progress: 100 },
  { name: 'Greek', level: 'Native', progress: 100 },
  { name: 'Chinese', level: 'Intermediate, used in professional context', progress: 60 },
];
