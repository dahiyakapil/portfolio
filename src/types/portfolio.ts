export interface Project {
  title: string;
  problem: string;
  solution: string;
  technical: string;
  outcome: string;
  tech: string[];
  link: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface SkillCategory {
  Frontend: string[];
  Backend: string[];
  DevOps: string[];
  Tools: string[];
}
