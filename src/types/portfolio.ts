export type ProjectStatus = "Completed" | "In Progress" | "Planned";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  /** Short role/identity line under the title, e.g. "AI Resume Analyzer" */
  tagline?: string;
  /** Compact card blurb — keep to ~2 lines; full description stays for detail pages */
  summary?: string;
  /** Status / positioning chips shown on project cards */
  badges?: string[];
  /** First badge is emphasized; remaining badges render quieter */
  primaryBadge?: string;
  /** Scannable capability bullets for compact case-study cards */
  highlights?: string[];
  /** Domain shown in the browser chrome address bar */
  browserUrl?: string;
  /** Subtle spotlight label on the stronger card, e.g. "Featured AI Project" */
  pickLabel?: string;
  problem: string;
  solution: string;
  technical: string;
  outcome: string;
  tech: string[];
  link: string;
  github?: string;
  image?: string;
  /** Intrinsic pixel size of `image` (for CLS) */
  imageWidth?: number;
  imageHeight?: number;
  timeline?: string;
  role?: string;
  team?: string;
  status?: ProjectStatus;
  featured?: boolean;
  caseStudy?: boolean;
  accent?: "orange" | "violet" | "teal" | "blue" | "green";
  metrics?: ProjectMetric[];
  architecture?: string[];
  solutionGroups?: { label: string; items: string[] }[];
  overview?: string;
  features?: string[];
  challenges?: string[];
  impact?: string[];
  futurePlans?: string[];
}

export interface ExperienceAchievement {
  label: string;
  detail: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: ExperienceAchievement[];
  technologies: string[];
  techGroups?: { label: string; items: string[] }[];
  keyAchievement?: string;
  badges?: string[];
  website?: string;
  linkedin?: string;
  logoDomain?: string;
}

export interface Company {
  name: string;
  role: string;
  href: string;
  domain: string;
  latest?: boolean;
}

export interface SkillGroup {
  label: string;
  description?: string;
  /** Lucide-style key used by the Skills section */
  icon?: "backend" | "infra" | "frontend";
  skills: { name: string; color: string; highlight?: boolean }[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SkillCategory {
  Frontend: string[];
  Backend: string[];
  DevOps: string[];
  Tools: string[];
}
