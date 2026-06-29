export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Hobbies', href: '#hobbies' },
  { label: 'MUN', href: '#mun' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_ROLES = [
  'Full Stack Engineer',
  'ML Practitioner',
  'MERN Stack Developer',
  'AI/ML Builder',
  'Hackathon Winner',
  'MUN Chair & Delegate',
];

export const ABOUT_STATS = [
  { value: 10, suffix: '+', label: 'MUN Awards' },
  { value: 1, suffix: '+ yr', label: 'Experience' },
  { value: 8, suffix: '+', label: 'Projects Shipped' },
  { value: 4, suffix: '', label: 'Hackathon Wins' },
];

export const ABOUT_TECH = [
  'React / Next.js',
  'Node.js / Express',
  'Python / FastAPI',
  'MongoDB / PostgreSQL',
  'TensorFlow / XGBoost',
  'Docker / AWS',
  'TypeScript',
  'Figma / UI Design',
];

export const EXPERIENCES = [
  {
    title: 'Software Engineer Intern',
    company: 'PeopleSense.AI',
    flag: '🇺🇸',
    location: 'United States',
    period: 'May 2025 – Apr 2026',
    duration: '1 yr',
    bullets: [
      'Architected Glocal — real-time crowd analytics platform (React SPA + Node.js/Express + MongoDB) for live sensor-data ingestion across distributed environments',
      'JWT-based auth, RBAC, responsive dashboards with live occupancy heatmaps and crowd-density KPIs for enterprise clients',
      'Optimized MongoDB aggregation pipelines + WebSocket handlers → sub-200ms latency under high concurrent load in production',
      'Deployed live crowd detection at BITSAA Global Meet 2026 — first student-led campus deployment, awarded Student Achievement Award by Director, BITS Pilani',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSockets', 'JWT', 'RBAC', 'TypeScript'],
  },
  {
    title: 'Tech & Research Intern',
    company: 'Samvardhan Greenfields',
    flag: '🇮🇳',
    location: '',
    period: 'May 2025 – Jul 2025',
    duration: '3 mo',
    bullets: [
      'Built Python (Pandas/NumPy) pipelines to process and clean large-scale agricultural sensor datasets',
      'Evaluated third-party APIs and IoT integration frameworks for architecture decisions',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'IoT', 'Data Pipelines'],
  },
];

export const EDUCATION = [
  {
    icon: '🎓',
    institution: 'BITS Pilani, Hyderabad Campus',
    degree: 'B.Tech — Electrical and Electronics Engineering',
    period: '2023 – 2028 (Expected)',
    note: null,
    highlight: null,
  },
  {
    icon: '📚',
    institution: 'GN National Public School',
    degree: 'Class XII — Science (CBSE)',
    period: '2022',
    note: 'Percentage: 93.2%',
    highlight: null,
  },
  {
    icon: '📖',
    institution: 'St. Thomas Inter College',
    degree: 'Class X — ICSE',
    period: '2020',
    note: 'Percentage: 95.8%',
    highlight: '🏅 School Head Boy',
  },
];

export const FEATURED_PROJECTS = [
  {
    title: 'Glocal — Real-Time Crowd Analytics',
    badge: '🔴 Live · Enterprise',
    badgeType: 'live',
    github: 'https://github.com/ssojha0911',
    description:
      'Architected at PeopleSense.AI. Real-time crowd analytics for transit agencies and enterprise clients across the US. Live occupancy heatmaps, crowd-density KPIs, sub-200ms WebSocket latency. Deployed live at BITSAA Global Meet 2026.',
    tech: ['React SPA', 'Node.js', 'Express', 'MongoDB', 'WebSockets', 'JWT', 'RBAC'],
  },
  {
    title: 'TradePass — AI SME Export Gateway',
    badge: '🥈 DP World Hackathon · Semi-Finalist',
    badgeType: 'silver',
    github: 'https://github.com/ssojha0911',
    description:
      "Led Team StackStorm at DP World National Hackathon, BITS Pilani. AI export compliance for India's 750,000+ SME exporters. NLP HS code classification (92% confidence), 4-corridor trade compliance, GLEC carbon scoring, auto-generated invoices + Scope 3 ESG reports.",
    stats: ['96/100 customs confidence', '₹1.8L savings/shipment', '4 trade corridors'],
    tech: ['React.js', 'FastAPI', 'Gemini API', 'GLEC Framework', 'Python'],
  },
];

export const PROJECTS = [
  {
    title: 'PlacementOS — AI Campus Placement',
    badge: null,
    description:
      'End-to-end AI-orchestrated campus placement automation using UiPath Maestro BPMN + LangChain + Groq (Llama 3). AI resume screening (0–100 vs JD), 3 RPA bots, human-in-the-loop approvals. Reduced 2-week placement drive to 48 hours.',
    tech: ['UiPath Maestro', 'LangChain', 'Groq', 'FastAPI', 'RPA'],
    live: null,
    github: 'https://github.com/ssojha0911',
    date: 'Jun 2026',
  },
  {
    title: 'Origo — AI Social Platform',
    badge: '🏆 SEEP 3.0 · 1st of 150+ startups',
    description:
      'MERN + Python ML microservice for cosine-similarity friend-matching. Real-time feed via Socket.io. Won 1st prize at SEEP 3.0.',
    tech: ['MERN', 'Python ML', 'Socket.io', 'Vector Embeddings'],
    live: null,
    github: 'https://github.com/ssojha0911',
    date: 'Sep 2025',
  },
  {
    title: 'DhanMitr — Credit Scoring Platform',
    badge: null,
    description:
      'Fintech ML pipeline with XGBoost + Logistic Regression for creditworthiness assessment of low-income beneficiaries. 89% AUC, 60% reduction in manual evaluation time. Flask REST API with versioned endpoints.',
    tech: ['XGBoost', 'Logistic Regression', 'Flask', 'FastAPI', 'REST API'],
    live: null,
    github: 'https://github.com/ssojha0911',
    date: 'Nov 2025',
  },
  {
    title: 'Library Live Occupancy Dashboard',
    badge: null,
    description:
      'Real-time campus library occupancy tracking for BITS Pilani Hyderabad. TypeScript + WebSockets + live sensor data. Area-wise availability heatmaps with sub-second update latency. Deployed during BITSAA Global Meet 2026.',
    tech: ['TypeScript', 'React', 'WebSockets', 'Computer Vision'],
    live: null,
    github: 'https://github.com/ssojha0911',
    date: 'Jan 2026',
  },
  {
    title: 'CyberBeat — Cyber Intelligence Platform',
    badge: '🥇 AUTOwn\'26 — 1st Place',
    description:
      'Real-time breach detection + threat monitoring. Award presented by Dean, BITS Pilani Hyderabad.',
    tech: ['Real-time', 'Threat Detection', 'Cyber Intelligence'],
    live: null,
    github: 'https://github.com/ssojha0911',
    date: 'Feb 2026',
  },
  {
    title: 'pI Predictor — ML Chemistry Tool',
    badge: null,
    description:
      'ML isoelectric point predictor. 7,500+ experimental sequences. Titration curve visualization.',
    tech: ['FastAPI', 'React', 'scikit-learn', 'Random Forest', 'Recharts'],
    live: 'https://isoelectronic-point.netlify.app',
    github: 'https://github.com/ssojha0911',
    date: null,
  },
];

export const SKILL_CATEGORIES = [
  {
    group: 'Languages',
    filter: 'All',
    skills: ['C', 'Java', 'Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    group: 'Frontend',
    filter: 'Frontend',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'Bootstrap'],
  },
  {
    group: 'Backend',
    filter: 'Backend',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'REST APIs', 'WebSockets', 'Socket.io'],
  },
  {
    group: 'Databases',
    filter: 'Backend',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'AWS'],
  },
  {
    group: 'ML / AI',
    filter: 'ML/AI',
    skills: ['TensorFlow', 'scikit-learn', 'PyTorch', 'XGBoost', 'LangChain', 'Pandas', 'NumPy', 'LLM APIs'],
  },
  {
    group: 'Design & Tools',
    filter: 'Design',
    skills: ['Figma', 'UI/UX Design', 'Responsive Design', 'Git', 'GitHub', 'Docker', 'VS Code', 'Postman'],
  },
  {
    group: 'Interpersonal',
    filter: 'Interpersonal',
    skills: [
      'Public Speaking',
      'Active Listening',
      'Cross-cultural Communication',
      'Negotiation & Diplomacy',
      'Leadership',
      'Team Collaboration',
      'Conflict Resolution',
      'Critical Thinking',
    ],
  },
];

export const MUN_DELEGATE = [
  { award: 'Outstanding Delegate', conference: 'Asia Youth International MUN', date: 'Aug 2023', committee: 'UNESCO Committee', country: 'Austria', level: 'outstanding' },
  { award: 'Special Mention', conference: 'International MUN 111.0', date: '', committee: 'UNW Committee', country: '', level: 'special' },
  { award: 'Special Mention', conference: 'International MUN 113.0', date: '', committee: 'WHO Committee', country: '', level: 'special' },
  { award: 'Honourable Mention', conference: 'International MUN 114.0', date: '', committee: 'UNGA Committee', country: '', level: 'honourable' },
  { award: 'Best Delegate', conference: 'Change Social Mindset MUN 2.0', date: '', committee: 'WHO Committee', country: '', level: 'best' },
  { award: 'Honourable Mention', conference: 'Friwtre World MUN 3.0', date: '', committee: 'UNESCO Committee', country: '', level: 'honourable' },
  { award: 'Outstanding Delegate', conference: 'MYI Korea 1.0', date: '', committee: 'UNODC Committee', country: '', level: 'outstanding' },
  { award: 'Special Mention', conference: 'IMUN 123.0', date: '', committee: 'WHO Committee', country: '', level: 'special' },
  { award: 'Outstanding Delegate', conference: 'Diplomatic Youth International MUN', date: '', committee: 'UNESCO Committee', country: '', level: 'outstanding' },
  { award: 'Best Delegate', conference: 'KRIDZ World MUN', date: '', committee: 'UNICEF Committee', country: '', level: 'best' },
];

export const MUN_CHAIR = [
  { role: 'Head Chair', conference: 'SUMUNC 22, Malaysia', committee: 'UNICEF Committee', icon: '👨‍⚖️' },
  { role: 'Co-Chair', conference: 'Prosper Youth MUN', committee: 'UNHCR Committee', icon: '👨‍⚖️' },
  { role: 'Chairperson', conference: 'Manila MUN', committee: 'OAS Committee', icon: '👨‍⚖️' },
  { role: 'Deputy Under-Secretary-General', conference: 'FRIWMUN', committee: 'Event Team', icon: '🎭' },
  { role: 'Deputy Secretary-General', conference: 'AJPMUN (Aug 2023)', committee: '', icon: '⭐' },
];

export const AWARDS = [
  {
    icon: '🏆',
    title: 'Student Achievement Award',
    issuer: 'Director Prof. D. Sriram, BITS Pilani Hyderabad',
    date: 'Apr 2026',
    desc: 'First student-led live crowd analytics at BITSAA Global Meet 2026 with PeopleSense.AI (US, founded by Dr. Harsh Verma, BITS 1980)',
    level: 'gold',
  },
  {
    icon: '🥇',
    title: "AUTOwn'26 — 1st Place, CyberBeat",
    issuer: 'Dean, BITS Pilani Hyderabad',
    date: 'Feb 2026',
    desc: 'Real-time cyber intelligence for breach detection & threat monitoring',
    level: 'gold',
  },
  {
    icon: '🥇',
    title: 'SEEP 3.0 — 1st Place',
    issuer: '1st of 150+ startups',
    date: 'Oct 2025',
    desc: 'Origo — AI-driven social platform with intelligent friend-matching',
    level: 'gold',
  },
  {
    icon: '🥈',
    title: 'DP World National Hackathon — Semi-Finalist',
    issuer: 'Team StackStorm · BITS Pilani Hyderabad',
    date: 'Jan 2026',
    desc: 'TradePass — AI export compliance gateway for India\'s SME exporters',
    level: 'silver',
  },
  {
    icon: '🥈',
    title: 'Greener Cleaner — Second Prize',
    issuer: 'Eco Business Forum',
    date: 'Aug 2024',
    desc: 'Plastic Buster AI — sustainability & circular economy',
    level: 'silver',
  },
  {
    icon: '🥈',
    title: 'Global Business Competition — Second Prize',
    issuer: 'International competition',
    date: 'Jul 2024',
    desc: 'AI healthcare chatbot',
    level: 'silver',
  },
  {
    icon: '🌱',
    title: 'Climate Founder Certification',
    issuer: 'Certificate of Appreciation',
    date: '',
    desc: '',
    level: 'cert',
  },
  {
    icon: '🏫',
    title: 'Head Boy — St. Thomas Inter College',
    issuer: 'School Leader',
    date: '',
    desc: '',
    level: 'violet',
  },
];

export const LEADERSHIP = [
  {
    icon: '⚡',
    title: 'Tech & Operations Lead — ATMOS Tech Fest, BITS Pilani',
    desc: "One of India's largest college tech fests. Leading cross-functional teams in end-to-end event management and technical execution.",
  },
  {
    icon: '🎙',
    title: 'Operations Lead — TEDx BITS Pilani Hyderabad',
    desc: 'Smooth execution and logistics for high-profile intellectual events.',
  },
  {
    icon: '🎓',
    title: 'Tech Lead — AUGSD, BITS Pilani Hyderabad',
    desc: 'Leading the technical wing of the central academic guidance body for all first-degree students.',
  },
  {
    icon: '💡',
    title: 'Senior Associate — E-Cell, BITS Pilani',
    desc: "Ground Reality Lead at Launchpad'25. Building entrepreneurship ecosystem on campus.",
  },
  {
    icon: '💻',
    title: 'Web Dev Lead — Mental Health Support Group, BITS Pilani',
    desc: 'Platforms promoting student mental well-being and community support.',
  },
  {
    icon: '🎨',
    title: 'Web Dev Team — Department of Technical Arts, BITS Pilani',
    desc: 'Websites for college fests and large-scale campus events. Designed in Figma.',
  },
];

export const HOBBIES = [
  {
    icon: '🏏',
    title: 'Cricket',
    subtitle: 'CSK till I die 💛',
    desc: 'Watched every World Cup, every IPL. Chennai Super Kings fanatic.',
    tags: ['Chennai Super Kings', 'IPL', 'World Cup'],
    accent: '#F59E0B',
    border: 'rgba(245, 158, 11, 0.2)',
    bg: 'rgba(245, 158, 11, 0.04)',
  },
  {
    icon: '⚽',
    title: 'Football',
    subtitle: 'Man United & Real Madrid',
    desc: 'The drama, the history, the 90th-minute winners.',
    tags: ['Man United', 'Real Madrid', 'Champions League'],
    accent: '#EF4444',
    border: 'rgba(239, 68, 68, 0.2)',
    bg: 'rgba(239, 68, 68, 0.04)',
  },
  {
    icon: '🎾',
    title: 'Other Sports',
    subtitle: 'Tennis · Basketball',
    desc: 'Big tournaments, fast pace — love both on and off the court.',
    tags: ['Tennis', 'Basketball'],
    accent: '#22C55E',
    border: 'rgba(34, 197, 94, 0.2)',
    bg: 'rgba(34, 197, 94, 0.04)',
  },
  {
    icon: '🎬',
    title: 'Movies & Shows',
    subtitle: 'Comedy is the genre',
    desc: 'Always up for something that makes you think while making you laugh.',
    tags: ['Comedy', 'Netflix', 'Classics'],
    accent: '#818CF8',
    border: 'rgba(129, 140, 248, 0.2)',
    bg: 'rgba(129, 140, 248, 0.04)',
  },
];
