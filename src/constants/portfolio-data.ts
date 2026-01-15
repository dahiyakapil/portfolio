import type { Project, WorkExperience, SkillCategory } from "@/types/portfolio";

export const SKILL_CATEGORIES: SkillCategory = {
  Frontend: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Three.js"],
  Backend: ["Node.js", "Bun", "PostgreSQL", "MongoDB"],
  DevOps: ["Vercel", "AWS", "Docker"],
  Tools: ["Git", "VS Code", "Figma"],
};

export const PROJECTS: Project[] = [
  {
    title: "NotesBuddy",
    problem: "Students struggle to organize study materials and retain information effectively across multiple subjects",
    solution: "Built an AI-powered learning platform combining notes, flashcards, adaptive quizzes, and spaced repetition algorithms",
    technical: "Implemented server-side rendering with Next.js for SEO, MongoDB with indexed queries for <100ms response times, deployed on Vercel Edge Network",
    outcome: "Active daily users, 99.8% uptime, scales to handle 10k+ concurrent sessions",
    tech: ["Next.js", "TypeScript", "MongoDB", "OpenAI"],
    link: "#",
  },
  {
    title: "Appwrite MCP Server",
    problem: "Developers needed programmatic database access with type safety and reliability for AI workflows",
    solution: "Architected Model Context Protocol server exposing 7 database operations with full TypeScript support",
    technical: "Built connection pooling, retry logic with exponential backoff, comprehensive error handling ensuring 99.9% success rate",
    outcome: "Open source tool with production adoption, handles 1000+ daily operations",
    tech: ["TypeScript", "Appwrite", "MCP"],
    link: "#",
  },
  {
    title: "Syncify",
    problem: "Music lovers lacked a platform for synchronized listening experiences with friends in real-time",
    solution: "Developed WebSocket-based streaming platform with sub-100ms sync latency and live chat",
    technical: "Redis pub/sub for message broadcasting, PostgreSQL for user data, WebRTC for peer connections, horizontal scaling support",
    outcome: "Supports 500+ concurrent listeners per room with <1% packet loss",
    tech: ["React", "WebSocket", "Redis", "PostgreSQL"],
    link: "#",
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Stealth Startup",
    role: "Founding Frontend Engineer",
    period: "Aug 2025 - Present",
    location: "Remote (US)",
    achievements: [
      "Architected scalable component library serving 50+ pages with 95+ Lighthouse performance score",
      "Reduced initial bundle size by 60% through code splitting and lazy loading strategies",
      "Established TypeScript-first development workflow with 100% type coverage",
    ],
  },
  {
    company: "Upsurge Labs",
    role: "Backend Developer Intern",
    period: "Jun 2025 - Jul 2025",
    location: "Bangalore, India",
    achievements: [
      "Optimized API response times from 800ms to 120ms through database query optimization",
      "Designed RESTful API architecture handling 10k+ requests/day",
    ],
  },
  {
    company: "Prepeasy",
    role: "Founding Engineer",
    period: "Apr 2025 - Jun 2025",
    location: "Remote (India)",
    achievements: [
      "Built MVP from 0 to 1, shipped in 6 weeks with full authentication and payment integration",
      "Implemented CI/CD pipeline reducing deployment time from 20 minutes to 2 minutes",
    ],
  },
  {
    company: "Expelee",
    role: "Full Stack Engineer (Intern → SDE-1)",
    period: "Aug 2023 - Apr 2025",
    location: "Dubai, UAE (Remote)",
    achievements: [
      "Promoted to SDE-1 after 6 months for exceptional delivery and ownership",
      "Migrated monolithic backend to microservices architecture improving deployment flexibility",
    ],
  },
];

export const SOCIAL_LINKS = {
  github: "#",
  linkedin: "#",
  email: "#",
} as const;

export const PERSONAL_INFO = {
  name: "Kapil",
  nickname: "Kapil",
  title: "A Full Stack web developer",
  description: "I architect scalable web applications with TypeScript, React, and Next.js. Focused on performance, design systems, and user experience.",
  bio: "Founding engineer specializing in frontend architecture and product development. I build scalable systems from the ground up, with a focus on performance, maintainability, and exceptional user experiences.",
  avatar: "/src/assets/Kapil_DP-modified.png",
  avatarLarge: "/src/assets/Kapil_DP-modified.png",
  initials: "K",
} as const;
