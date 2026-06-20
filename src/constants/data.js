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
  'ML Engineer',
  'MERN Stack Developer',
  'AI/ML Builder',
  'Hackathon Winner',
  'MUN Chair & Delegate',
];

export const ABOUT_STATS = [
  { value: 10, suffix: '+', label: 'MUN Awards' },
  { value: 1, suffix: '+ yr', label: 'Experience' },
  { value: 8, suffix: '+', label: 'Projects' },
  { value: 4, suffix: '', label: 'Hackathon Wins' },
];

export const ABOUT_TECH = [
  'React / Next.js',
  'Node.js / Express',
  'Python / FastAPI',
  'MongoDB / PostgreSQL',
  'TensorFlow / XGBoost',
  'Docker / AWS',
  'Three.js / Framer',
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
      'Architected Glocal — real-time crowd analytics platform (React SPA + Node.js/Express + MongoDB)',
      'JWT auth, RBAC, responsive dashboards with live occupancy heatmaps and crowd-density KPIs',
      'Optimized MongoDB aggregation + WebSocket handlers → sub-200ms latency under high concurrent load',
      'Deployed live crowd detection at BITSAA Global Meet 2026 — first student-led campus deployment',
      'Platform serves transit agencies and public users across production environments',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSockets', 'JWT', 'RBAC'],
  },
  {
    title: 'Tech & Research Intern',
    company: 'Samvardhan Greenfields',
    flag: '🇮🇳',
    location: '',
    period: 'May 2025 – Jul 2025',
    duration: '3 mo',
    bullets: [
      'Python (Pandas/NumPy) pipelines for large-scale agricultural sensor dataset processing',
      'Evaluated third-party APIs and IoT frameworks for architecture decisions',
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
    degree: 'Class XII — Science Board (CBSE)',
    period: '2022',
    note: 'Percentage: 93.2%',
    highlight: null,
  },
  {
    icon: '📖',
    institution: 'St. Thomas Inter College',
    degree: 'Class X — ICSE / State Board',
    period: '2020',
    note: 'Percentage: 95.8%',
    highlight: '🏅 School Head Boy / School Leader',
  },
];

export const FEATURED_PROJECTS = [
  {
    title: 'Glocal — Real-Time Crowd Analytics',
    badge: '🔴 Live · Enterprise',
    github: 'https://github.com/ssojha0911',
    description:
      'Architected at PeopleSense.AI. Real-time crowd analytics for transit agencies and enterprise clients across the US. Live occupancy heatmaps, crowd-density KPIs, sub-200ms WebSocket latency. Deployed live at BITSAA Global Meet 2026.',
    tech: ['React SPA', 'Node.js', 'Express', 'MongoDB', 'WebSockets', 'JWT', 'RBAC'],
  },
  {
    title: 'TradePass — AI SME Export Gateway',
    badge: '🏆 DP World National Hackathon Winner',
    github: 'https://github.com/ssojha0911',
    description:
      "Team StackStorm at BITS Pilani. AI export compliance for India's 750,000+ SME exporters. NLP HS code classification, 4-corridor trade compliance, GLEC carbon scoring, auto-generated invoices + Scope 3 ESG reports.",
    stats: ['96/100 customs confidence', '₹1.8L savings/shipment', '30% fewer rejections'],
    tech: ['React.js', 'FastAPI', 'Claude API', 'GPT-4', 'GLEC Framework', 'Python'],
  },
];

export const PROJECTS = [
  {
    title: 'Origo — AI Social Platform',
    badge: '🏆 SEEP 3.0 Winner · 1st of 150+ startups',
    description:
      'MERN + Python ML microservice for cosine-similarity friend-matching. Socket.io real-time feed.',
    tech: ['MERN', 'Python ML', 'Socket.io', 'Vector Embeddings'],
    live: null,
    github: 'https://github.com/ssojha0911',
  },
  {
    title: 'Credit Scoring Platform',
    badge: null,
    description:
      'Fintech XGBoost + Logistic Regression pipeline. 89% AUC. Flask REST API with versioned endpoints.',
    tech: ['XGBoost', 'Logistic Regression', 'Flask', 'REST API'],
    live: null,
    github: 'https://github.com/ssojha0911',
  },
  {
    title: 'Campus Library Occupancy Dashboard',
    badge: null,
    description:
      'Live occupancy across BITS Hyderabad library sections. Computer vision ML inference.',
    tech: ['React', 'WebSockets', 'Computer Vision', 'Real-time'],
    live: null,
    github: 'https://github.com/ssojha0911',
  },
  {
    title: 'TEDx BITS Pilani Hyderabad Website',
    badge: null,
    description: 'Official site. React 18 + Vite + Tailwind + Framer Motion + Figma-designed.',
    tech: ['React 18', 'Vite', 'Tailwind', 'Framer Motion', 'Figma'],
    live: null,
    github: 'https://github.com/ssojha0911',
  },
  {
    title: 'Arena BPHC — Event Management',
    badge: null,
    description:
      'MERN + Socket.io fest portal. Live leaderboards + instant registration for thousands of users.',
    tech: ['MERN', 'Socket.io', 'Real-time'],
    live: null,
    github: 'https://github.com/ssojha0911',
  },
  {
    title: 'pI Predictor — ML Chemistry Tool',
    badge: null,
    description:
      'ML isoelectric point predictor. 7,500+ experimental sequences. Titration curve viz.',
    tech: ['FastAPI', 'React', 'scikit-learn', 'Random Forest', 'Recharts'],
    live: 'https://isoelectronic-point.netlify.app',
    github: 'https://github.com/ssojha0911',
  },
  {
    title: 'CyberBeat — Cyber Intelligence Platform',
    badge: '🥇 AUTOwn\'26 — 1st Place',
    description:
      'Real-time breach detection + threat monitoring. Award by Dean, BITS Pilani.',
    tech: ['Real-time', 'Threat Detection', 'Cyber Intelligence'],
    live: null,
    github: 'https://github.com/ssojha0911',
  },
];

export const SKILL_CATEGORIES = [
  {
    group: 'Languages',
    filter: 'All',
    skills: ['C', 'Java', 'Python', 'JavaScript', 'HTML5', 'CSS3', 'SQL'],
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
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
  },
  {
    group: 'ML / AI',
    filter: 'ML/AI',
    skills: ['TensorFlow', 'scikit-learn', 'PyTorch', 'XGBoost', 'Pandas', 'NumPy', 'GenAI / LLM APIs'],
  },
  {
    group: 'Design & Prototyping',
    filter: 'Design',
    skills: ['Figma', 'UI/UX Design', 'Responsive Design', 'Design Systems', 'Wireframing'],
  },
  {
    group: 'DevOps & Tools',
    filter: 'DevOps',
    skills: ['Git', 'GitHub', 'Docker', 'AWS', 'VS Code', 'Postman'],
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
  { award: 'Outstanding Delegate', conference: 'Asia Youth International MUN', date: 'Sept 2022', committee: 'UNESCO Committee', country: 'Austria', level: 'outstanding' },
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
  { role: 'Chairperson', conference: 'Manila MUN (Nov 11–14)', committee: 'OAS Committee', icon: '👨‍⚖️' },
  { role: 'Deputy Under-Secretary-General', conference: 'FRIWMUN (Nov 10)', committee: 'Event Team', icon: '🎭' },
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
    title: 'SEEP 3.0 Winner',
    issuer: '2024 · 1st of 150+ startups',
    date: '2024',
    desc: 'Origo — AI-driven social platform',
    level: 'gold',
  },
  {
    icon: '🏆',
    title: 'DP World National Hackathon Winner',
    issuer: '2025 · Team StackStorm · BITS Pilani Hyderabad',
    date: '2025',
    desc: 'TradePass AI export gateway',
    level: 'gold',
  },
  {
    icon: '🥈',
    title: 'AI Codeathon — 2nd Position',
    issuer: 'Camp K12',
    date: '',
    desc: '',
    level: 'silver',
  },
  {
    icon: '🥈',
    title: 'Global Business Competition — 2nd Prize',
    issuer: '2023',
    date: '2023',
    desc: 'AI healthcare chatbot',
    level: 'silver',
  },
  {
    icon: '🥈',
    title: 'Eco Business Forum — 2nd Prize',
    issuer: '2023',
    date: '2023',
    desc: 'Plastic Buster AI — sustainability & circular economy',
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
    issuer: 'School Leader / Head Boy',
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
  {
    icon: '🌐',
    title: 'FOB Tech Week',
    desc: 'Friends of BITS — connecting BITS alumni and students in global tech ecosystem.',
  },
];

export const HOBBIES = [
  {
    icon: '🏏',
    title: 'Cricket',
    subtitle: 'Massive cricket fan. CSK till I die. 💛',
    desc: 'Watched every World Cup, every IPL since I can remember.',
    tags: ['Chennai Super Kings', 'IPL enthusiast'],
    color: 'from-yellow-900/20 to-yellow-800/10',
    accent: '#F59E0B',
    border: 'rgba(245, 158, 11, 0.3)',
  },
  {
    icon: '⚽',
    title: 'Football',
    subtitle: 'Manchester United & Real Madrid supporter.',
    desc: 'The drama, the history, the 90th-minute winners.',
    tags: ['Man United', 'Real Madrid', 'Champions League nights'],
    color: 'from-red-900/20 to-red-800/10',
    accent: '#EF4444',
    border: 'rgba(239, 68, 68, 0.3)',
  },
  {
    icon: '🎾',
    title: 'Other Sports',
    subtitle: 'Tennis · Basketball',
    desc: 'Enjoy watching and playing both. Following the big tournaments, love the fast pace.',
    tags: ['Tennis', 'Basketball', 'Fast-paced'],
    color: 'from-green-900/20 to-green-800/10',
    accent: '#22C55E',
    border: 'rgba(34, 197, 94, 0.3)',
  },
  {
    icon: '🎬',
    title: 'Movies & Entertainment',
    subtitle: 'Comedy is my comfort genre.',
    desc: 'Always up for a good laugh — from classics to Netflix specials. Light-hearted, fun, makes you think differently.',
    tags: ['Comedy', 'Netflix', 'Classic Films'],
    color: 'from-purple-900/20 to-purple-800/10',
    accent: '#915EFF',
    border: 'rgba(145, 94, 255, 0.3)',
  },
];
