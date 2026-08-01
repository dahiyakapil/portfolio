import type { Project } from "@/types/portfolio";

/** Screenshot frames — dark/premium so product UI carries color, not neon chrome. */
export const ACCENT_FRAME: Record<
  NonNullable<Project["accent"]>,
  string
> = {
  orange: "bg-gradient-to-b from-[#1a1a1a] to-[#111111]",
  violet: "bg-gradient-to-b from-[#1a1a1a] to-[#111111]",
  teal: "bg-gradient-to-b from-[#1a1a1a] to-[#111111]",
  blue: "bg-gradient-to-b from-[#1a1a1a] to-[#111111]",
  green: "bg-gradient-to-b from-[#151515] to-[#0f0f0f]",
};

/** Subtle card accent border by project personality */
export const ACCENT_CARD: Record<NonNullable<Project["accent"]>, string> = {
  orange: "border-border/50",
  violet: "border-border/50",
  teal: "border-border/50",
  blue: "border-border/50",
  green: "border-border/50",
};

export const ACCENT_PICK: Record<NonNullable<Project["accent"]>, string> = {
  orange: "text-orange-600 dark:text-orange-400",
  violet: "text-violet-600 dark:text-violet-400",
  teal: "text-teal-600 dark:text-teal-400",
  blue: "text-blue-600 dark:text-blue-400",
  green: "text-emerald-600 dark:text-emerald-400",
};

export const ACCENT_SOFT: Record<NonNullable<Project["accent"]>, string> = {
  orange:
    "bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/20",
  violet:
    "bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/20",
  teal: "bg-teal-500/10 text-teal-700 dark:text-teal-300 border-teal-500/20",
  blue: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20",
  green:
    "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
};
