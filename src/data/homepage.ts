export const siteMeta = {
  title: 'Python Backend / AI Engineer',
  description:
    'Backend / AI Engineer specializing in Python backend systems, retrieval and search platforms, RAG pipelines, asynchronous processing, and production-grade backend services. Based in Vienna.',
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
  role: 'Backend / AI Engineer',
  techStack:
    'Python • FastAPI • Retrieval & Search Systems • Async Processing • Docker • Kubernetes • Elasticsearch / OpenSearch',
  imageAlt: 'Ermis Chorinopoulos',
  contacts: [
    {
      label: 'AI Engineer CV',
      href: 'https://github.com/ErmisCho/ErmisCho.github.io/releases/latest/download/Ermis-Chorinopoulos-CV-AI-Engineer-English.pdf',
      icon: 'fas fa-file-pdf',
      className: 'action-btn',
      ariaLabel: 'Download English CV (Backend / AI Engineer)',
      external: true,
    },
    {
      label: 'AI Engineer Lebenslauf',
      href: 'https://github.com/ErmisCho/ErmisCho.github.io/releases/latest/download/Ermis-Chorinopoulos-CV-AI-Engineer-Deutsch.pdf',
      icon: 'fas fa-file-pdf',
      className: 'action-btn',
      ariaLabel: 'Download German CV (Backend / AI Engineer)',
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
  'Backend / AI engineer focused on Python services and production-grade backend systems with AI functionality. Experience building retrieval and search systems, asynchronous processing workflows, and FastAPI-based services with clear system boundaries, emphasizing reliability, maintainability, and containerized deployments with Docker and Kubernetes.';

export const experience = [
  {
    title: 'Software Engineer (Python)',
    organization: 'Independent AI & Backend Engineering (Projects & Freelance Work)',
    date: 'Oct 2025 – Present',
    location: 'Vienna, Austria',
    highlights: [
      'Built production-grade backend systems for document processing, semantic search, and retrieval-based workflows.',
      'Developed FastAPI services for file upload, processing orchestration, retrieval, and job status handling.',
      'Used queue-based architectures with RabbitMQ and Redis to support background processing and improve service reliability.',
    ],
  },
  {
    title: 'Software Engineer (AI/Search)',
    organization: 'RISE (AI Search Platform)',
    date: 'May 2025 – Sep 2025',
    location: 'Vienna, Austria',
    highlights: [
      'Designed and operated backend services and ingestion pipelines for RAG-based document search and semantic retrieval across large document collections.',
    ],
  },
  {
    title: 'Software Engineer',
    organization: 'Kapsch (Backend Reliability)',
    date: 'Sep 2023 – Mar 2024',
    location: 'Vienna, Austria',
    highlights: [
      'Improved observability and performance diagnostics of production backend systems through automated monitoring, structured testing, and CPU/memory profiling.',
    ],
  },
  {
    title: 'Software Engineer',
    organization: 'Huawei (Platform Engineering)',
    date: 'Aug 2021 – Aug 2023',
    location: 'Budapest, Hungary',
    highlights: [
      'Built and scaled Python and Java backend services integrating internal enterprise systems, designing APIs and data models for data-driven workflows.',
    ],
  },
  {
    title: 'Software Engineer',
    organization: 'Citibank (Security Data Systems)',
    date: 'Jan 2019 – Aug 2021',
    location: 'Budapest, Hungary',
    highlights: [
      'Developed data processing systems and workflows in Python, Java, and SQL to support vulnerability analysis and enterprise risk reporting.',
    ],
  },
];

export const projects = [
  {
    title: 'Agentic RAG System',
    tags: ['Python', 'LangGraph', 'Elasticsearch'],
    highlights: [
      'Designed an agentic Python architecture with explicit control flow and intelligent routing between vector search and web fallback.',
      'Implemented evaluation layers, retries, and data guardrails to ensure answer reliability and operational predictability.',
    ],
    href: 'https://github.com/ErmisCho/agentic-rag',
  },
  {
    title: 'End-to-End RAG Pipeline',
    tags: ['Python', 'FastAPI', 'Pinecone'],
    highlights: [
      'Built an asynchronous ingestion pipeline using FastAPI, RabbitMQ, and Redis for web crawling, recursive chunking, batch embeddings, and vector indexing.',
      'Deployed a conversational interface featuring semantic reranking, citations, detailed logging, and evidence-based guardrails.',
    ],
    href: 'https://github.com/ErmisCho/rag-pipeline',
  },
  {
    title: 'Backend Optimization Project',
    tags: ['Django', 'PostgreSQL', 'Rest Framework'],
    highlights: [
      'Optimized a Django/PostgreSQL API by resolving N+1 query bottlenecks, introducing tailored indexes, and using bulk operations.',
      'Reduced API latency by up to 21% and improved maintainability through targeted query optimization, automated tests, and clearer technical documentation.',
    ],
    href: 'https://github.com/ErmisCho/crm-backend-optimization',
  },
  {
    title: 'E-commerce Platform for Swiss Startup',
    tags: ['Python', 'Django', 'PostgreSQL'],
    highlights: [
      'Developed a Django-based e-commerce backend for a small business preparing to launch in Switzerland. Implemented product catalog management, shopping cart workflows, administrative functionality, and backend configuration for order handling.',
    ],
    href: 'https://github.com/ErmisCho/webshop',
  },
  {
    title: 'Content Platform / Blog CMS',
    tags: ['Python', 'Django', 'PostgreSQL'],
    highlights: [
      'Built a Django-based content management platform using Wagtail to support editorial content and marketing pages. Implemented structured content models, article publishing, rich text editing, media handling, and administrative configuration.',
    ],
    href: 'https://github.com/ErmisCho/lux-journal-cms',
  },
];

export const skills = [
  {
    title: 'AI & Search',
    icon: 'fas fa-brain',
    items: ['Retrieval-Augmented Generation (RAG)', 'Semantic Search', 'LangChain', 'LangGraph'],
  },
  {
    title: 'Backend',
    icon: 'fas fa-server',
    items: ['Python', 'Java', 'FastAPI', 'Django', 'RabbitMQ', 'Redis', 'REST APIs'],
  },
  {
    title: 'Data & Retrieval',
    icon: 'fas fa-database',
    items: ['Elasticsearch / OpenSearch', 'Embeddings', 'Chunking', 'SQL'],
  },
  {
    title: 'Cloud & Ops',
    icon: 'fas fa-cloud',
    items: ['Docker', 'Kubernetes', 'AWS', 'Linux', 'Git'],
  },
];

export const education = {
  title: 'BSc in Applied Information Technology',
  organization: 'University of Macedonia',
  date: '2014 – 2018',
  location: 'Thessaloniki, Greece',
};

export const languages = [
  { name: 'German', level: 'Professional (B2, C1 in progress)', progress: 80 },
  { name: 'English', level: 'Full Professional / Daily Working', progress: 100 },
  { name: 'Greek', level: 'Native', progress: 100 },
  { name: 'Chinese', level: 'Upper-intermediate', progress: 60 },
];
