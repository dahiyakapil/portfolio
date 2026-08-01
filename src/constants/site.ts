import { PERSONAL_INFO } from "@/constants/portfolio-data";

/** Production origin — set `VITE_SITE_URL` in `.env` (no trailing slash). */
const envUrl = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(
  /\/$/,
  ""
);

export const SITE = {
  /** Absolute origin used for canonical + OG/Twitter image URLs */
  get url() {
    if (envUrl) return envUrl;
    if (typeof window !== "undefined" && window.location?.origin) {
      return window.location.origin;
    }
    return "";
  },
  name: PERSONAL_INFO.name,
  title: `${PERSONAL_INFO.name} · ${PERSONAL_INFO.role}`,
  description:
    "Backend Engineer specializing in distributed systems and payment-enabled apps. Sole engineer on SportsHub — Redis locks, MongoDB transactions, BullMQ, Razorpay. Open to full-time roles.",
  /** Default share image (relative to origin) */
  ogImage: "/assets/projects/SportsHub.webp",
  ogImageAlt: "SportsHub — live sports venue booking platform",
  twitterHandle: "@KapilDahiya21",
  locale: "en_US",
} as const;

export function absoluteUrl(path = "/"): string {
  const origin = SITE.url;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (!origin) return normalized;
  return `${origin}${normalized === "/" ? "/" : normalized}`;
}

export function pageTitle(segment?: string): string {
  if (!segment) return SITE.title;
  return `${segment} · ${SITE.name}`;
}
