import type { Project, WorkExperience, SkillCategory } from "@/types/portfolio";

export const SKILL_CATEGORIES: SkillCategory = {
  Frontend: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Three.js"],
  Backend: ["Node.js", "Bun", "PostgreSQL", "MongoDB"],
  DevOps: ["Vercel", "AWS", "Docker"],
  Tools: ["Git", "VS Code", "Figma"],
};

export const PROJECTS: Project[] = [
  {
    id: "resumind",
    title: "Resumind",
    description:
      "An AI-powered resume analyzer that helps job seekers optimize their resumes for ATS systems and specific job roles",
    problem:
      "Job seekers struggle to understand why their resumes get rejected by ATS systems and how to improve them for specific job roles",
    solution:
      "Built an AI-powered resume analyzer that evaluates resumes against job descriptions, provides actionable improvement suggestions, and highlights ATS optimization gaps",
    technical:
      "Implemented resume parsing and semantic analysis using AI models, React.js for fast server-side rendering, MongoDB for structured resume insights storage, and deployed on Vercel for global edge performance",
    outcome:
      "Helps users improve ATS match scores, identify missing keywords, and generate clearer, role-specific resume feedback within seconds",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB",],
    link: "https://resumindai-ashy.vercel.app/",
    github: "https://github.com/dahiyakapil/Resumind-AI",
    image: "/src/assets/projects/resumind.png",
    timeline: "2 months",
    role: "Full Stack",
    team: "Solo",
    status: "Completed",
    overview:
      "Resumind is an AI-powered resume analysis platform that helps job seekers understand why their resumes may be rejected by Applicant Tracking Systems (ATS) and provides actionable insights to improve them for specific job roles. The platform uses advanced AI models to parse resumes, analyze content against job descriptions, and generate detailed feedback.",
    features: [
      "Upload Resume: Users can upload their resume in PDF or DOCX format for instant analysis",
      "Job Description Matching: Compare your resume against specific job descriptions to find gaps",
      "ATS Score: Get a detailed ATS compatibility score with breakdown by category",
      "Keyword Analysis: Identify missing keywords and skills from job descriptions",
      "Improvement Suggestions: Receive actionable recommendations to enhance your resume",
      "Section Analysis: Get detailed feedback on each resume section (experience, skills, education)",
      "Real-time Feedback: Instant analysis results without waiting",
    ],
    challenges: [
      "Job seekers don't know why their resumes get rejected by ATS systems",
      "Difficult to optimize resumes for specific job roles without expertise",
      "No clear visibility into what recruiters and ATS systems are looking for",
      "Generic resume templates don't account for role-specific requirements",
    ],
    impact: [
      "Helped users identify critical gaps in their resumes within seconds",
      "Improved ATS match scores by highlighting missing keywords and skills",
      "Provided role-specific feedback that increased interview callbacks",
      "Saved time by automating resume analysis that would take hours manually",
      "Empowered job seekers with actionable insights to improve their applications",
    ],
    futurePlans: [
      "Add resume builder with ATS-optimized templates",
      "Implement cover letter analysis and generation",
      "Create industry-specific optimization profiles",
      "Add LinkedIn profile optimization",
      "Build Chrome extension for one-click job application analysis",
    ],
  },
  {
    id: "url-shortener",
    title: "URL Shortener",
    description:
      "A full-stack URL shortening service that lets users generate short, shareable links from long URLs with analytics support.",
    problem:
      "Long URLs are hard to remember, share, or include in messages; there was no lightweight, self-hosted solution in my toolset.",
    solution:
      "Built a custom URL shortening service with a React frontend and Node.js backend to generate, store, and redirect short URLs, with real-time analytics for link clicks with real user data.",
    technical:
      "Designed with React for the frontend UI, Node.js/Express for the backend API, MongoDB for link storage, and deployed via Vercel (frontend) and a cloud Node host (backend).",
    outcome:
      "Users can easily shorten long URLs, track click counts, and copy/share the resulting links across platforms.",
    tech: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    link: "https://url-short-pearl.vercel.app", 
    github: "https://github.com/dahiyakapil/Url-Shortener",
    image: "/src/assets/projects/url-shortener.png",
    timeline: "3 weeks",
    role: "Full Stack",
    team: "Solo",
    status: "Completed",
    overview:
      "A full-stack web application that provides a simple UI for creating short links from long URLs and a backend API for link redirection and analytics",
    features: [
      "Create short, human-friendly URLs",
      "Automatic redirect when accessing a short link",
      "Click count analytics per URL",
      "Copy short links to clipboard",
      "Responsive UI",
    ],
    challenges: [
      "Ensuring accurate tracking of link clicks without affecting performance",
      "Designing a scalable redirect system",
      "Handling invalid URL inputs and collisions",
    ],
    impact: [
      "Users can shorten URLs with one click and track usage without third-party services",
      "Self-hosted solution gives full control over data",
      "Improved shareability of links for portfolios, emails, and chats",
    ],
    futurePlans: [
      "Add custom slug creation",
      "Add user authentication and personal dashboards",
      "Generate QR codes for shortened links",
      "Add API keys for third-party API usage",
      "Deploy with analytics dashboard",
    ],
  },
  {
    id: "resumind-3",
    title: "Resumind",
    description: "An AI-powered resume analyzer for job seekers",
    problem:
      "Job seekers struggle to understand why their resumes get rejected by ATS systems and how to improve them for specific job roles",
    solution:
      "Built an AI-powered resume analyzer that evaluates resumes against job descriptions, provides actionable improvement suggestions, and highlights ATS optimization gaps",
    technical:
      "Implemented resume parsing and semantic analysis using AI models, React.js for fast server-side rendering, MongoDB for structured resume insights storage, and deployed on Vercel for global edge performance",
    outcome:
      "Helps users improve ATS match scores, identify missing keywords, and generate clearer, role-specific resume feedback within seconds",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB",],
    link: "#",
  },
  {
    id: "resumind-4",
    title: "Resumind",
    description: "An AI-powered resume analyzer for job seekers",
    problem:
      "Job seekers struggle to understand why their resumes get rejected by ATS systems and how to improve them for specific job roles",
    solution:
      "Built an AI-powered resume analyzer that evaluates resumes against job descriptions, provides actionable improvement suggestions, and highlights ATS optimization gaps",
    technical:
      "Implemented resume parsing and semantic analysis using AI models, React.js for fast server-side rendering, MongoDB for structured resume insights storage, and deployed on Vercel for global edge performance",
    outcome:
      "Helps users improve ATS match scores, identify missing keywords, and generate clearer, role-specific resume feedback within seconds",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB",],
    link: "#",
  },
  {
    id: "resumind-4",
    title: "Resumind",
    description: "An AI-powered resume analyzer for job seekers",
    problem:
      "Job seekers struggle to understand why their resumes get rejected by ATS systems and how to improve them for specific job roles",
    solution:
      "Built an AI-powered resume analyzer that evaluates resumes against job descriptions, provides actionable improvement suggestions, and highlights ATS optimization gaps",
    technical:
      "Implemented resume parsing and semantic analysis using AI models, React.js for fast server-side rendering, MongoDB for structured resume insights storage, and deployed on Vercel for global edge performance",
    outcome:
      "Helps users improve ATS match scores, identify missing keywords, and generate clearer, role-specific resume feedback within seconds",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB"],
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
  github: "https://github.com/dahiyakapil",
  linkedin: "https://www.linkedin.com/in/kapildahiya21/",
  email: "mailto:kapildahiya308@gmail.com",
} as const;

export const PERSONAL_INFO = {
  name: "Kapil",
  nickname: "Kapil",
  title: "A Full Stack web developer",
  description:
    "I architect scalable web applications with TypeScript, React, and Next.js. Focused on performance, design systems, and user experience.",
  bio: "Founding engineer specializing in frontend architecture and product development. I build scalable systems from the ground up, with a focus on performance, maintainability, and exceptional user experiences.",
  avatar: "/assets/Kapil_DP-modified.png",
  avatarLarge: "/assets/Kapil_Square.png",
  initials: "K",
} as const;
