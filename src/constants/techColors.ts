import type { ElementType } from "react";
import {
  Cloud,
  CreditCard,
  FileCode,
  LayoutTemplate,
  Server,
  Triangle,
  Workflow,
  Network,
  Zap,
} from "lucide-react";
import { FaJava } from "@react-icons/all-files/fa/FaJava";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { SiNextDotJs } from "@react-icons/all-files/si/SiNextDotJs";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiNodeDotJs } from "@react-icons/all-files/si/SiNodeDotJs";
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";
import { SiMongodb } from "@react-icons/all-files/si/SiMongodb";
import { SiPostgresql } from "@react-icons/all-files/si/SiPostgresql";
import { SiDocker } from "@react-icons/all-files/si/SiDocker";
import { SiGit } from "@react-icons/all-files/si/SiGit";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { SiHtml5 } from "@react-icons/all-files/si/SiHtml5";
import { SiCss3 } from "@react-icons/all-files/si/SiCss3";
import { SiFirebase } from "@react-icons/all-files/si/SiFirebase";
import { SiAmazonaws } from "@react-icons/all-files/si/SiAmazonaws";
import { SiPostman } from "@react-icons/all-files/si/SiPostman";
import { SiCloudflare } from "@react-icons/all-files/si/SiCloudflare";
import { SiJsonwebtokens } from "@react-icons/all-files/si/SiJsonwebtokens";
import { SiSocketDotIo } from "@react-icons/all-files/si/SiSocketDotIo";
import { SiLaravel } from "@react-icons/all-files/si/SiLaravel";
import { SiStrapi } from "@react-icons/all-files/si/SiStrapi";
import { SiWordpress } from "@react-icons/all-files/si/SiWordpress";
import { SiRedis } from "@react-icons/all-files/si/SiRedis";
import { SiRedux } from "@react-icons/all-files/si/SiRedux";
import { SiJest } from "@react-icons/all-files/si/SiJest";
import { SiMysql } from "@react-icons/all-files/si/SiMysql";

export interface TechMeta {
  icon: ElementType;
  color: string;
}

/**
 * Per-file `@react-icons/all-files` imports — never pull the 5MB `react-icons/si` barrel.
 * Missing brands fall back to Lucide stand-ins.
 */
export const TECH_DATA: Record<string, TechMeta> = {
  "React.js": { icon: SiReact, color: "#61DAFB" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextDotJs, color: "currentColor" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  "Node.js": { icon: SiNodeDotJs, color: "#339933" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  "Express.js": { icon: Server, color: "currentColor" },
  Express: { icon: Server, color: "currentColor" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  Redis: { icon: SiRedis, color: "#DC382D" },
  BullMQ: { icon: Workflow, color: "#E11D48" },
  "REST APIs": { icon: Network, color: "currentColor" },
  Razorpay: { icon: CreditCard, color: "#072654" },
  "Redux Toolkit": { icon: SiRedux, color: "#764ABC" },
  Redux: { icon: SiRedux, color: "#764ABC" },
  Jest: { icon: SiJest, color: "#C21325" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "currentColor" },
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS3: { icon: SiCss3, color: "#1572B6" },
  Vercel: { icon: Triangle, color: "currentColor" },
  Render: { icon: Triangle, color: "#46E3B7" },
  "CI/CD": { icon: SiGithub, color: "currentColor" },
  AWS: { icon: SiAmazonaws, color: "#FF9900" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  Cloudflare: { icon: SiCloudflare, color: "#F38020" },
  "Cloudflare Workers": { icon: SiCloudflare, color: "#F38020" },
  "Durable Objects": { icon: Cloud, color: "#F38020" },
  Vite: { icon: Zap, color: "#646CFF" },
  JWT: { icon: SiJsonwebtokens, color: "currentColor" },
  WebSockets: { icon: SiSocketDotIo, color: "currentColor" },
  Laravel: { icon: SiLaravel, color: "#FF2D20" },
  Java: { icon: FaJava, color: "#007396" },
  Strapi: { icon: SiStrapi, color: "currentColor" },
  WordPress: { icon: SiWordpress, color: "#21759B" },
  Elementor: { icon: LayoutTemplate, color: "#0F75BC" },
  "Notion CMS": { icon: FileCode, color: "currentColor" },
  "Payload CMS": { icon: FileCode, color: "#FF6F61" },
};

export const getTechMeta = (name: string): TechMeta | null => {
  const meta = TECH_DATA[name];
  if (!meta) return null;

  if (meta.color === "#000000" || meta.color === "#010101") {
    return { ...meta, color: "currentColor" };
  }

  return meta;
};
