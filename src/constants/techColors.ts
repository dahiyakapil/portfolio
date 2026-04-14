import { FaJava } from "react-icons/fa";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiVercel,
  SiAmazonwebservices,
  SiPostman,
  SiCloudflare,
  SiVite,
  SiJsonwebtokens,
  SiSocketdotio,
  SiLaravel,
  SiStrapi,
  SiWordpress,
  SiElementor,
  SiPayloadcms
} from "react-icons/si";

export interface TechMeta {
  icon: React.ElementType;
  cSolor: string;
}

export const TECH_DATA: Record<string, TechMeta> = {
  "React.js": { icon: SiReact, color: "#61DAFB" },
  "React": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "currentColor" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "Express.js": { icon: SiExpress, color: "currentColor" },
  "Express": { icon: SiExpress, color: "currentColor" },
  "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
  "Firebase": { icon: SiFirebase, color: "#FFCA28" },
  "Docker": { icon: SiDocker, color: "#2496ED" },
  "Git": { icon: SiGit, color: "#F05032" },
  "HTML5": { icon: SiHtml5, color: "#E34F26" },
  "CSS3": { icon: SiCss3, color: "#1572B6" },
  "Vercel": { icon: SiVercel, color: "currentColor" },
  "AWS": { icon: SiAmazonwebservices, color: "#FF9900" },
  "Postman": { icon: SiPostman, color: "#FF6C37" },
  "Cloudflare Workers": { icon: SiCloudflare, color: "#F38020" },
  "Durable Objects": { icon: SiCloudflare, color: "#F38020" },
  "Vite": { icon: SiVite, color: "#646CFF" },
  "JWT": { icon: SiJsonwebtokens, color: "#000000" },
  "WebSockets": { icon: SiSocketdotio, color: "#010101" },
  "Laravel": { icon: SiLaravel, color: "#FF2D20" },
  "Java": { icon: FaJava, color: "#007396" },
  "Strapi": { icon: SiStrapi, color: "#000000" },
  "WordPress": { icon: SiWordpress, color: "#21759B" },
  "Elementor": { icon: SiElementor, color: "#0F75BC" },
  "Payload CMS": { icon: SiPayloadcms, color: "#FF6F61" },
};

export const getTechMeta = (name: string): TechMeta | null => {
  const meta = TECH_DATA[name];
  if (!meta) return null;
  
  // Handle black colors for dark mode
  if (meta.color === "#000000" || meta.color === "#010101") {
    return { ...meta, color: "currentColor" };
  }
  
  return meta;
};
