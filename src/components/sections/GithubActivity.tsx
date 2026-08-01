import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import type { Activity } from "react-github-calendar";
import { useTheme } from "@/context/theme-provider";
import { SiGithub } from "react-icons/si";
import { GITHUB_HIGHLIGHTS } from "@/constants/portfolio-data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function GithubActivity() {
  const [mounted, setMounted] = useState(false);
  const [totalContributions, setTotalContributions] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const selectLastNineMonths = (contributions: Activity[]) => {
    const weeks: Activity[][] = [];
    for (let i = 0; i < contributions.length; i += 7) {
      weeks.push(contributions.slice(i, i + 7));
    }
    const visibleWeeks = weeks.slice(-39).flat();
    const total = visibleWeeks.reduce((sum, day) => sum + day.count, 0);
    setTotalContributions(total);
    return visibleWeeks;
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
        Open source
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
        GitHub Activity
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 mb-6">
        <div className="rounded-xl border border-border/40 bg-card/50 px-4 py-3">
          <p className="text-2xl font-bold text-foreground">
            {totalContributions || "—"}
          </p>
          <p className="text-xs text-muted-foreground">Recent contributions</p>
        </div>
        {GITHUB_HIGHLIGHTS.slice(0, 3).map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-border/40 bg-card/50 px-4 py-3"
          >
            <p className="text-2xl font-bold text-foreground">{item.value}</p>
            <p className="text-xs text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-border/40 bg-card/50 p-6 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">
            Consistency over the last ~9 months
          </p>
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://github.com/dahiyakapil"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <SiGithub className="w-5 h-5" />
                  <span>@dahiyakapil</span>
                </a>
              </TooltipTrigger>
              <TooltipContent>GitHub Profile</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <GitHubCalendar
          username="dahiyakapil"
          blockSize={12}
          blockMargin={4}
          fontSize={12}
          colorScheme={theme === "dark" ? "dark" : "light"}
          transformData={selectLastNineMonths}
          theme={{
            light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
            dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
          }}
          style={{
            color: theme === "dark" ? "#9ca3af" : "#666",
          }}
        />
      </div>
    </section>
  );
}
