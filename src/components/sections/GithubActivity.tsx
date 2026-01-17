import { useEffect, useState } from "react";
import {GitHubCalendar} from 'react-github-calendar';
import type { Activity } from 'react-github-calendar';
import { useTheme } from "@/context/theme-provider";

export default function GithubActivity() {
  const [mounted, setMounted] = useState(false);
  const [totalContributions, setTotalContributions] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Transform data to show last 9 months (from April onwards)
 const selectLastNineMonths = (contributions: Activity[]) => {
  // Group by weeks (7 days per week)
  const weeks: Activity[][] = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }

  // Take last 40–44 weeks (≈ 9–10 months safely)
  const visibleWeeks = weeks.slice(-39).flat();

  const total = visibleWeeks.reduce((sum, day) => sum + day.count, 0);
  setTotalContributions(total);

  return visibleWeeks;
};


  return (
    <section className="mt-32">
      <style>{`
        @keyframes shimmer {
          0%, 100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .github-calendar-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        
        .github-calendar-fadein {
          animation: fadeIn 0.6s ease-in;
        }
      `}</style>

      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
        Featured
      </p>

      <h2 className="text-4xl font-bold text-foreground">GitHub Activity</h2>

      <div className="rounded-xl border border-border/40 bg-card/50 p-6 max-w-5xl mt-5 mb-32 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">
              Open-source & personal contributions
            </p>
            <p className="text-2xl font-bold text-foreground">
              {totalContributions} <span className="text-sm font-normal text-muted-foreground">contributions</span>
            </p>
          </div>

          <a
            href="https://github.com/dahiyakapil"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1 group"
          >
            <span>@dahiyakapil</span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="relative group">
          {/* Snake animation background effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-green-400/20 to-transparent github-calendar-shimmer"></div>
          </div>
          
          <div className="relative github-calendar-fadein">
            <GitHubCalendar
              username="dahiyakapil"
              blockSize={12}
              blockMargin={4}
              fontSize={12}
              colorScheme={theme === "dark" ? "dark" : "light"}
              transformData={selectLastNineMonths}
              theme={{
                light: [
                  "#ebedf0",
                  "#9be9a8",
                  "#40c463",
                  "#30a14e",
                  "#216e39",
                ],
                dark: [
                  "#161b22",
                  "#0e4429",
                  "#006d32",
                  "#26a641",
                  "#39d353",
                ],
              }}
              style={{
                color: theme === "dark" ? '#9ca3af' : '#666',
              }}
            />
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
          <span>Last 9 months activity</span>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-[#ebedf0] rounded-sm"></span>
              <span>Less</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-[#9be9a8] rounded-sm"></span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-[#40c463] rounded-sm"></span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-[#30a14e] rounded-sm"></span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-[#216e39] rounded-sm"></span>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
