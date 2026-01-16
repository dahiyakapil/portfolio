import type { Project, WorkExperience, SkillCategory } from "@/types/portfolio";

export const SKILL_CATEGORIES: SkillCategory = {
  Frontend: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Three.js"],
  Backend: ["Node.js", "Bun", "PostgreSQL", "MongoDB"],
  DevOps: ["Vercel", "AWS", "Docker"],
  Tools: ["Git", "VS Code", "Figma"],
};

export const PROJECTS: Project[] = [
  {
    title: "Resumind",
    problem:
      "Job seekers struggle to understand why their resumes get rejected by ATS systems and how to improve them for specific job roles",
    solution:
      "Built an AI-powered resume analyzer that evaluates resumes against job descriptions, provides actionable improvement suggestions, and highlights ATS optimization gaps",
    technical:
      "Implemented resume parsing and semantic analysis using AI models, React.js for fast server-side rendering, MongoDB for structured resume insights storage, and deployed on Vercel for global edge performance",
    outcome:
      "Helps users improve ATS match scores, identify missing keywords, and generate clearer, role-specific resume feedback within seconds",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "AI"],
    link: "https://resumindai-ashy.vercel.app/",
    github: "https://github.com/dahiyakapil/Resumind-AI",
    image: "./src/assets/projects/resumind.png",
  },
  {
    title: "Resumind",
    problem:
      "Job seekers struggle to understand why their resumes get rejected by ATS systems and how to improve them for specific job roles",
    solution:
      "Built an AI-powered resume analyzer that evaluates resumes against job descriptions, provides actionable improvement suggestions, and highlights ATS optimization gaps",
    technical:
      "Implemented resume parsing and semantic analysis using AI models, React.js for fast server-side rendering, MongoDB for structured resume insights storage, and deployed on Vercel for global edge performance",
    outcome:
      "Helps users improve ATS match scores, identify missing keywords, and generate clearer, role-specific resume feedback within seconds",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "AI"],
    link: "#",
  },
  {
    title: "Resumind",
    problem:
      "Job seekers struggle to understand why their resumes get rejected by ATS systems and how to improve them for specific job roles",
    solution:
      "Built an AI-powered resume analyzer that evaluates resumes against job descriptions, provides actionable improvement suggestions, and highlights ATS optimization gaps",
    technical:
      "Implemented resume parsing and semantic analysis using AI models, React.js for fast server-side rendering, MongoDB for structured resume insights storage, and deployed on Vercel for global edge performance",
    outcome:
      "Helps users improve ATS match scores, identify missing keywords, and generate clearer, role-specific resume feedback within seconds",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "AI"],
    link: "#",
  },
  {
    title: "Resumind",
    problem:
      "Job seekers struggle to understand why their resumes get rejected by ATS systems and how to improve them for specific job roles",
    solution:
      "Built an AI-powered resume analyzer that evaluates resumes against job descriptions, provides actionable improvement suggestions, and highlights ATS optimization gaps",
    technical:
      "Implemented resume parsing and semantic analysis using AI models, React.js for fast server-side rendering, MongoDB for structured resume insights storage, and deployed on Vercel for global edge performance",
    outcome:
      "Helps users improve ATS match scores, identify missing keywords, and generate clearer, role-specific resume feedback within seconds",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "AI"],
    link: "#",
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Indian Capital and Investment (Coimbatore) Limited",
    role: "Full Stack Developer",
    period: "Sept 2025 - Dec 2025",
    location: "Remote (India)",
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "Firebase",
    ],
    achievements: [
      "Built and deployed a scalable Notion-based database system using Cloudflare Workers for fast, serverless data handling on tempusmail.com",
      "Integrated Notion CMS with a custom attention-mechanism-based content prioritization system to enhance content visibility and retrieval efficiency on blog.tempusmail.com",
      "Developed premium features including Firebase Authentication, Google SSO, secure payment gateway integration, Telegram alerts, and automated email notifications for users on premium.tempusmail.com.",
      "Implemented Firebase Cloud Functions for domain and email account management, managed Cloudflare DNS records, and ensured seamless connectivity between premium and admin panels via premium.tempusmail.com and panel.tempusmail.com",
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
  description:
    "I architect scalable web applications with TypeScript, React, and Next.js. Focused on performance, design systems, and user experience.",
  bio: "Founding engineer specializing in frontend architecture and product development. I build scalable systems from the ground up, with a focus on performance, maintainability, and exceptional user experiences.",
  avatar: "/src/assets/Kapil_DP-modified.png",
  avatarLarge: "/src/assets/Kapil_DP-modified.png",
  initials: "K",
} as const;
