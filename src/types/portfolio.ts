export type ProjectStatus = "Completed" | "In Progress" | "Planned";

export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  technical: string;
  outcome: string;
  tech: string[];
  link: string;
  github?: string;
  image?: string;
  timeline?: string;
  role?: string;
  team?: string;
  status?: ProjectStatus;
  overview?: string;
  features?: string[];
  challenges?: string[];
  impact?: string[];
  futurePlans?: string[];
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  technologies: string[];
  website?: string;
  linkedin?: string;
}

export interface SkillCategory {
  Frontend: string[];
  Backend: string[];
  DevOps: string[];
  Tools: string[];
}