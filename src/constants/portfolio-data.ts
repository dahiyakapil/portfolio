import type {
  Project,
  WorkExperience,
  SkillCategory,
  SkillGroup,
} from "@/types/portfolio";

export const SKILL_CATEGORIES: SkillCategory = {
  Frontend: ["React.js", "Redux Toolkit", "Tailwind CSS"],
  Backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redis",
    "PostgreSQL",
    "BullMQ",
  ],
  DevOps: ["Docker", "Cloudflare Workers", "JWT", "Razorpay", "Jest"],
  Tools: ["Git", "REST APIs", "Postman"],
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Backend Systems",
    description:
      "Production APIs, distributed systems, concurrency and scalable data access.",
    icon: "backend",
    skills: [
      { name: "Node.js", color: "#339933" },
      { name: "Express.js", color: "currentColor" },
      { name: "MongoDB", color: "#47A248" },
      { name: "Redis", color: "#DC382D" },
      { name: "BullMQ", color: "#E11D48" },
      { name: "PostgreSQL", color: "#4169E1" },
    ],
  },
  {
    label: "Production Engineering",
    description:
      "Authentication, payments, queues, testing and deployment.",
    icon: "infra",
    skills: [
      { name: "JWT", color: "currentColor" },
      { name: "Razorpay", color: "#072654" },
      { name: "Docker", color: "#2496ED" },
      { name: "REST APIs", color: "currentColor" },
      { name: "Jest", color: "#C21325" },
      { name: "Cloudflare Workers", color: "#F38020" },
    ],
  },
  {
    label: "Frontend",
    description: "React applications, dashboards and internal tools.",
    icon: "frontend",
    skills: [
      { name: "React.js", color: "#61DAFB" },
      { name: "Redux Toolkit", color: "#764ABC" },
      { name: "Tailwind CSS", color: "#38BDF8" },
    ],
  },
];

export const FEATURED_SKILLS = [
  { name: "React.js", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Redis", color: "#DC382D" },
  { name: "Razorpay", color: "#072654" },
  { name: "Docker", color: "#2496ED" },
  { name: "JWT", color: "currentColor" },
  { name: "Jest", color: "#C21325" },
] as const;

export const PROJECTS: Project[] = [
  {
    id: "sportshub",
    title: "SportsHub",
    tagline: "Live Sports Venue Booking Platform",
    pickLabel: "Flagship",
    primaryBadge: "Production",
    badges: ["Sole Engineer", "Payments"],
    highlights: [
      "Redis distributed locks",
      "MongoDB transactions",
      "BullMQ booking expiry",
      "Razorpay payments",
      "JWT + refresh rotation",
    ],
    browserUrl: "sports-hub-user-web.vercel.app",
    summary:
      "Concurrency-safe venue booking with live payments — owned end-to-end as sole engineer.",
    description:
      "Live sports activity booking platform — venue discovery, concurrency-safe bookings, Razorpay payments, and admin operations. Built and owned end-to-end as freelance sole engineer.",
    problem:
      "Sports venue booking platforms often suffer from double bookings and failed payments during peak demand.",
    solution:
      "SportsHub solves this with distributed locking, transactional writes, automated booking expiration, and payment webhooks — owned end-to-end as a freelance sole engineer.",
    solutionGroups: [
      {
        label: "Core Backend",
        items: [
          "Redis distributed locks",
          "MongoDB transactions",
          "BullMQ workers",
          "Razorpay webhooks",
        ],
      },
      {
        label: "Security",
        items: [
          "JWT authentication",
          "Refresh-token rotation",
          "OTP verification",
          "CSRF protection",
          "Redis-backed rate limiting",
        ],
      },
    ],
    technical:
      "Freelance sole engineer across 3 live applications: Node.js API, user web app, and admin panel. 55+ REST APIs, 10 MongoDB models. Stack: React.js, Node.js, Express.js, MongoDB, Redis, Razorpay, Redux Toolkit, Docker. MVC architecture with centralized validation/error handling; validated by 49 Jest tests.",
    outcome:
      "Live production platform for venue discovery, real-time booking, payments, and admin operations.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Razorpay",
      "Redux Toolkit",
      "Docker",
    ],
    link: "https://sports-hub-user-web.vercel.app/",
    image: "/assets/projects/SportsHub.webp",
    imageWidth: 1024,
    imageHeight: 487,
    timeline: "Jan 2026 – Present",
    role: "Freelance sole engineer — API, user app, admin panel",
    team: "Solo (Freelance)",
    status: "In Progress",
    featured: true,
    caseStudy: true,
    accent: "green",
    metrics: [
      { value: "Concurrency", label: "Redis Locks" },
      { value: "Transactions", label: "MongoDB ACID" },
      { value: "Background Jobs", label: "BullMQ" },
      { value: "Payments", label: "Razorpay" },
    ],
    architecture: [
      "Frontend",
      "API",
      "Redis Lock",
      "Mongo Tx",
      "BullMQ",
      "Payment",
    ],
    overview:
      "SportsHub is a live sports activity booking platform I am building as a freelance sole engineer. I own the product end-to-end: Node.js API, user-facing web app, and admin panel — covering venue discovery, bookings, payments, and operations.",
    features: [
      "Venue discovery and sports activity booking flows",
      "Concurrency-safe booking engine using Redis distributed locks and MongoDB transactions",
      "BullMQ background jobs for automated booking expiry",
      "Razorpay integration with payment webhooks",
      "JWT access tokens, refresh token rotation, reuse detection, and OTP verification",
      "CSRF protection and Redis-backed rate limiting",
      "Admin panel for platform operations",
      "MVC architecture with centralized validation and error handling",
      "49 Jest tests covering critical booking and auth paths",
    ],
    challenges: [
      "Concurrent bookings without double-booking slots",
      "Payment reconciliation via Razorpay webhooks",
      "Slot locking under race conditions",
      "Admin scalability across venues and operations",
      "Background cleanup of expired unpaid holds",
    ],
    impact: [
      "Concurrency-safe bookings via Redis locks + MongoDB transactions",
      "Payment flows reconciled through Razorpay webhooks",
      "Background jobs expire unpaid holds and keep inventory consistent",
      "Three apps owned end-to-end: API, user web, and admin",
    ],
    futurePlans: [
      "Expand venue inventory and sports categories",
      "Deeper ops analytics in the admin panel",
    ],
  },
  {
    id: "resumind",
    title: "Resumind AI",
    tagline: "AI-powered ATS Resume Optimization Platform",
    pickLabel: "Featured AI",
    primaryBadge: "Production",
    badges: ["AI", "Open Source"],
    highlights: [
      "ATS matching against job descriptions",
      "PDF resume parsing",
      "AI-powered suggestions",
      "Keyword scoring modules",
      "Authenticated upload flow",
    ],
    browserUrl: "resumindai-ashy.vercel.app",
    summary:
      "AI-powered ATS analyzer that scores resumes against real job descriptions.",
    description:
      "AI-powered ATS resume analyzer that helps candidates optimize resumes against real job descriptions.",
    problem:
      "Job seekers struggle to see why ATS systems reject resumes or how to improve them for a specific role.",
    solution:
      "Built Resumind AI with 10+ REST APIs for resume upload, authentication, PDF parsing, AI analysis, and job matching — plus 8+ ATS evaluation modules for parsing, keyword matching, scoring, and AI-powered recommendations.",
    technical:
      "React.js, Node.js, Express.js, MongoDB, Redux, Tailwind CSS, DeepSeek AI.",
    outcome:
      "Candidates get ATS scores, keyword gaps, and actionable AI recommendations against a target role.",
    tech: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Redux",
      "Tailwind CSS",
    ],
    link: "https://resumindai-ashy.vercel.app/",
    github: "https://github.com/dahiyakapil/Resumind-AI",
    image: "/assets/projects/Resumind.webp",
    imageWidth: 1200,
    imageHeight: 569,
    timeline: "Project",
    role: "Full Stack — APIs, ATS modules, AI analysis",
    team: "Solo",
    status: "Completed",
    featured: true,
    accent: "violet",
    metrics: [
      { value: "10+", label: "Production APIs" },
      { value: "8+", label: "AI Features" },
      { value: "Live", label: "Production" },
    ],
    overview:
      "Resumind AI evaluates resumes for ATS compatibility, suggests improvements, and matches candidate skills with job descriptions using DeepSeek AI on a MERN stack.",
    features: [
      "Resume upload with authentication",
      "PDF parsing for structured resume content",
      "ATS scoring and keyword matching against job descriptions",
      "AI-powered recommendations via DeepSeek AI",
      "Job matching based on parsed skills and experience",
    ],
    challenges: [
      "Reliable PDF parsing across resume formats",
      "Meaningful ATS scoring beyond keyword stuffing",
      "Connecting AI analysis to actionable UI feedback",
    ],
    impact: [
      "Live ATS resume analyzer and job matcher",
      "10+ REST APIs covering upload, auth, parsing, analysis, and matching",
      "8+ ATS evaluation modules for scoring and recommendations",
    ],
    futurePlans: [
      "Cover letter analysis",
      "Industry-specific scoring profiles",
    ],
  },
  {
    id: "tempusmail",
    title: "Tempus Mail (Internship)",
    tagline: "Serverless Product Integrations",
    badges: ["Internship", "Serverless"],
    highlights: [
      "Cloudflare Workers workflows",
      "Firebase Auth",
      "Notion CMS",
      "Payment gateway hooks",
    ],
    browserUrl: "tempusmail.com",
    description:
      "Internship work at Indian Capital — serverless backend workflows with Cloudflare Workers, Firebase Auth, Notion CMS, and payment gateway integrations.",
    problem:
      "The product needed serverless backend workflows and integrations for auth, CMS, and payments without a heavy traditional server footprint.",
    solution:
      "Built serverless backend workflows using Cloudflare Workers and integrated Firebase Auth, Notion CMS, payment gateways, and external REST APIs.",
    technical:
      "Cloudflare Workers, Firebase Auth, Notion CMS, payment gateways, external REST APIs (Indian Capital internship, Sep–Dec 2025).",
    outcome:
      "Delivered internship deliverables spanning serverless workflows, authentication, CMS, and payment integrations.",
    tech: [
      "Cloudflare Workers",
      "Firebase",
      "Notion CMS",
      "React.js",
      "Node.js",
    ],
    link: "https://tempusmail.com",
    image: "/assets/projects/Mail-App-Cloudflare.webp",
    imageWidth: 1200,
    imageHeight: 570,
    timeline: "Sep 2025 – Dec 2025",
    role: "Full Stack Developer Intern",
    team: "Internship",
    status: "Completed",
    featured: false,
    accent: "orange",
    metrics: [
      { value: "Intern", label: "ICIL" },
      { value: "Workers", label: "Serverless" },
    ],
    overview:
      "Work completed during the Full Stack Developer internship at Indian Capital and Investment (Coimbatore) Limited — focused on Cloudflare Workers, Firebase Auth, Notion CMS, and payment integrations.",
    features: [
      "Serverless backend workflows on Cloudflare Workers",
      "Firebase Authentication integrations",
      "Notion CMS integration",
      "Payment gateway and external REST API integrations",
    ],
    challenges: [
      "Wiring serverless workers with third-party auth and CMS",
      "Reliable payment and API integrations in production-like environments",
    ],
    impact: [
      "Shipped internship features for serverless workflows, auth, CMS, and payments",
    ],
    futurePlans: [],
  },
  {
    id: "kapil-mail",
    title: "Edge Mail",
    tagline: "Realtime Edge Inbox",
    badges: ["Live", "Open Source", "Edge"],
    highlights: [
      "JWT authentication",
      "WebSocket realtime updates",
      "Cloudflare Workers",
      "Durable Objects state",
      "Inbox read/unread flows",
    ],
    browserUrl: "kapil-4oz.pages.dev",
    description:
      "Realtime edge-native email platform delivering instant inbox updates without traditional servers.",
    problem:
      "Building realtime messaging with low latency is hard on traditional server architectures.",
    solution:
      "Implemented a simplified email platform on Cloudflare Workers with JWT authentication and WebSocket-based updates.",
    technical:
      "Next.js, React, TypeScript, Tailwind CSS, Cloudflare Workers, Durable Objects, WebSockets, JWT.",
    outcome:
      "Realtime inbox updates on edge infrastructure without managing traditional origin servers.",
    tech: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Cloudflare Workers",
      "JWT",
    ],
    link: "https://kapil-4oz.pages.dev/",
    github: "https://github.com/dahiyakapil/mail-app",
    image: "/assets/projects/Mail-App-Cloudflare.webp",
    imageWidth: 1200,
    imageHeight: 570,
    timeline: "2 weeks",
    role: "Full Stack",
    team: "Solo",
    status: "Completed",
    featured: true,
    accent: "teal",
    metrics: [
      { value: "Edge", label: "Workers" },
      { value: "WS", label: "Realtime" },
      { value: "Live", label: "Production" },
    ],
    overview:
      "Portfolio project demonstrating realtime messaging on Cloudflare Workers and Durable Objects.",
    features: [
      "JWT authentication",
      "Inbox with read/unread state",
      "Realtime updates via WebSockets",
    ],
    challenges: [
      "Stateful realtime messaging on serverless edge",
    ],
    impact: [
      "Demonstrated edge-first realtime architecture",
    ],
    futurePlans: [],
  },
  {
    id: "url-shortener",
    title: "URL Shortener",
    tagline: "Links + Click Analytics",
    badges: ["Live", "Open Source"],
    highlights: [
      "Short link creation",
      "Redirect API",
      "Click count analytics",
      "Copy to clipboard",
    ],
    browserUrl: "url-short-pearl.vercel.app",
    description:
      "Full-stack URL shortener with redirect handling and basic click analytics.",
    problem:
      "Long URLs are hard to share; needed a lightweight self-hosted shortener with basic analytics.",
    solution:
      "Built React + Node.js/Express shortener with MongoDB storage and click counts.",
    technical:
      "React.js, TypeScript, Node.js, Express.js, MongoDB, Tailwind CSS.",
    outcome:
      "Users can shorten URLs, copy links, and track click counts.",
    tech: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    link: "https://url-short-pearl.vercel.app",
    github: "https://github.com/dahiyakapil/Url-Shortener",
    image: "/assets/projects/URL-Shortener.webp",
    imageWidth: 932,
    imageHeight: 442,
    timeline: "3 weeks",
    role: "Full Stack",
    team: "Solo",
    status: "Completed",
    featured: false,
    accent: "blue",
    metrics: [
      { value: "Live", label: "Demo" },
      { value: "MERN", label: "Stack" },
    ],
    overview:
      "URL shortener with redirect API and click analytics.",
    features: [
      "Create short URLs",
      "Redirect + click count analytics",
      "Copy to clipboard",
    ],
    challenges: [
      "Accurate click tracking",
      "Collision handling for short codes",
    ],
    impact: [
      "Self-hosted short links with basic analytics",
    ],
    futurePlans: [],
  },
  {
    id: "pocket-notes",
    title: "Pocket Notes",
    tagline: "Realtime Multi-Device Notes",
    badges: ["Live", "Open Source", "Realtime"],
    highlights: [
      "Inbox-style notes",
      "Realtime sync",
      "JWT sessions",
      "Multi-device updates",
    ],
    browserUrl: "pocket-notes-module-test-c1x3.vercel.app",
    description:
      "Realtime multi-device notes and messaging with JWT auth on a lightweight stack.",
    problem:
      "Quick notes across devices need lightweight sync without heavy chat apps.",
    solution:
      "Built a notes platform with Cloudflare Workers, Durable Objects, WebSockets, and JWT auth.",
    technical:
      "React, Vite, Cloudflare Workers, Durable Objects, WebSockets, JWT.",
    outcome:
      "Realtime note sync across devices.",
    tech: ["React.js", "JavaScript", "Vite"],
    link: "https://pocket-notes-module-test-c1x3.vercel.app",
    github: "https://github.com/dahiyakapil/pocket-notes-module-test",
    image: "/assets/projects/Pocket-Notes.webp",
    imageWidth: 1200,
    imageHeight: 813,
    timeline: "2 weeks",
    role: "Full Stack",
    team: "Solo",
    status: "Completed",
    featured: false,
    accent: "blue",
    metrics: [
      { value: "Realtime", label: "Sync" },
      { value: "Live", label: "Demo" },
    ],
    overview:
      "Lightweight realtime notes/messaging portfolio project.",
    features: [
      "Inbox-style notes",
      "Realtime updates",
      "JWT sessions",
    ],
    challenges: [
      "Cross-device realtime sync on serverless",
    ],
    impact: [
      "Realtime multi-device note sync",
    ],
    futurePlans: [],
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
export const CASE_STUDY = PROJECTS.find((p) => p.caseStudy) ?? PROJECTS[0];
/** Home projects grid — flagship + one supporting build */
export const HOME_PROJECTS = [...PROJECTS]
  .filter((p) => p.featured)
  .sort((a, b) => Number(!!b.caseStudy) - Number(!!a.caseStudy))
  .slice(0, 2);

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "SportsHub",
    role: "Freelance Full Stack Developer",
    period: "Jan 2026 – Present",
    location: "Remote (India)",
    website: "https://sports-hub-user-web.vercel.app/",
    logoDomain: "sports-hub-user-web.vercel.app",
    badges: ["Production", "Sole Engineer", "Payments", "Booking Engine"],
    keyAchievement:
      "Owned the entire backend architecture of a production sports booking platform used by real customers—from authentication to payments, booking engine, background jobs, and deployment.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Razorpay",
      "Redux Toolkit",
      "Docker",
    ],
    techGroups: [
      { label: "Frontend", items: ["React.js", "Redux Toolkit"] },
      { label: "Backend", items: ["Node.js", "Express.js"] },
      { label: "Database", items: ["MongoDB"] },
      { label: "Infrastructure", items: ["Redis", "Docker"] },
      { label: "Payments", items: ["Razorpay"] },
    ],
    achievements: [
      {
        label: "Ownership",
        detail:
          "Sole engineer on the live SportsHub product end-to-end — Node.js API, user web app, and admin panel for venue discovery, bookings, payments, and admin operations.",
      },
      {
        label: "Booking Engine",
        detail:
          "Designed a concurrency-safe booking flow with Redis distributed locks and MongoDB transactions that prevents double bookings during simultaneous reservations.",
      },
      {
        label: "Background Jobs",
        detail:
          "Automated reservation expiry with BullMQ so expired holds release without manual intervention.",
      },
      {
        label: "Payments",
        detail:
          "Integrated Razorpay webhooks for reliable payment confirmation across booking flows.",
      },
      {
        label: "Security",
        detail:
          "Reduced authentication attack surface with JWT access tokens, refresh-token rotation, and reuse detection.",
      },
      {
        label: "Access Control",
        detail:
          "Added OTP verification, CSRF protection, and Redis-backed rate limiting on sensitive endpoints.",
      },
      {
        label: "Architecture",
        detail:
          "Architected a scalable backend with 55+ APIs, 10 domain models, centralized validation, consistent error handling, and 49 automated tests.",
      },
    ],
  },
  {
    company: "Indian Capital and Investment (Coimbatore) Limited",
    role: "Full Stack Developer Intern",
    period: "Sep 2025 – Dec 2025",
    location: "Remote (India)",
    website: "https://www.indiancapital.in/",
    linkedin:
      "https://www.linkedin.com/company/indian-capital-and-investment-cbe-ltd",
    logoDomain: "indiancapital.in",
    technologies: [
      "Cloudflare Workers",
      "Firebase",
      "Notion CMS",
      "React.js",
      "Node.js",
    ],
    techGroups: [
      { label: "Frontend", items: ["React.js"] },
      { label: "Backend", items: ["Node.js", "Cloudflare Workers"] },
      { label: "Platform", items: ["Firebase", "Notion CMS"] },
    ],
    achievements: [
      {
        label: "Serverless",
        detail:
          "Built serverless backend workflows on Cloudflare Workers for faster, edge-ready request handling.",
      },
      {
        label: "Integrations",
        detail:
          "Connected Firebase Auth, Notion CMS, payment gateways, and external REST APIs into a cohesive product flow.",
      },
    ],
  },
  {
    company: "Unified Mentor",
    role: "Full Stack Developer Intern",
    period: "Jul 2024 – Jan 2025",
    location: "Remote (India)",
    website: "https://unifiedmentor.com",
    linkedin: "https://www.linkedin.com/company/unified-mentor",
    logoDomain: "unifiedmentor.com",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
    ],
    techGroups: [
      { label: "Frontend", items: ["React.js", "Redux"] },
      { label: "Backend", items: ["Node.js", "Express.js"] },
      { label: "Database", items: ["MongoDB"] },
    ],
    achievements: [
      {
        label: "Frontend",
        detail: "Shipped 10+ responsive React.js pages for product and admin flows.",
      },
      {
        label: "APIs",
        detail:
          "Developed 12+ RESTful APIs covering authentication and core CRUD operations.",
      },
    ],
  },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/dahiyakapil",
  linkedin: "https://www.linkedin.com/in/kapildahiya21/",
  email: "kapildahiya308@gmail.com",
  twitter: "https://x.com/KapilDahiya21",
  phone: "+91 8168035828",
} as const;

export const PERSONAL_INFO = {
  name: "Kapil Dahiya",
  nickname: "Kapil",
  role: "Backend Engineer",
  punchline: "specializing in distributed systems",
  title: "Backend Engineer specializing in distributed systems",
  headlineLead: "Building",
  headlineAccent: "production systems",
  headlineTail: "and payment-enabled apps.",
  description:
    "I design and build production-grade distributed systems — concurrency control, background jobs, secure APIs, and scalable payment-enabled applications. Currently freelancing as sole engineer on SportsHub, a live booking platform.",
  bio: "Backend-focused software engineer based in Haryana, India. I freelance on production products — currently owning SportsHub live: Redis locks, MongoDB transactions, BullMQ, Razorpay, and 55+ APIs across three apps. Previously interned at Indian Capital (Cloudflare Workers, Firebase Auth, Notion CMS, payments) and Unified Mentor (React + REST APIs).",
  availability:
    "Open to full-time roles & freelance · Remote · Haryana, India",
  avatar: "/assets/kapil-avatar.webp",
  avatarLarge: "/assets/kapil-avatar-lg.webp",
  avatarWidth: 192,
  avatarHeight: 192,
  avatarLargeWidth: 256,
  avatarLargeHeight: 256,
  initials: "K",
} as const;
