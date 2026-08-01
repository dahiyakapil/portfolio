import { Layout, Server, Settings2 } from "lucide-react";
import { SKILL_GROUPS } from "@/constants/portfolio-data";
import { getTechMeta } from "@/constants/techColors";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const GROUP_ICONS = {
  backend: Server,
  infra: Settings2,
  frontend: Layout,
} as const;

export function TechnicalSkills() {
  return (
    <section id="stack" className="pt-10 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Core Technologies
          </h2>
          <p className="text-base text-muted-foreground max-w-[65ch]">
            Production technologies behind the systems I&apos;ve designed,
            built, and shipped.
          </p>
        </div>

        <div className="space-y-7">
          {SKILL_GROUPS.map((group) => {
            const GroupIcon = group.icon ? GROUP_ICONS[group.icon] : null;
            const isFrontend = group.icon === "frontend";

            return (
              <div key={group.label}>
                <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                  <div className="flex items-center gap-2">
                    {GroupIcon && (
                      <GroupIcon
                        className={cn(
                          "h-3.5 w-3.5 shrink-0",
                          isFrontend
                            ? "text-muted-foreground/60"
                            : "text-muted-foreground"
                        )}
                        aria-hidden
                      />
                    )}
                    <p
                      className={cn(
                        "text-xs font-bold uppercase tracking-wider",
                        isFrontend
                          ? "text-muted-foreground/70"
                          : "text-muted-foreground"
                      )}
                    >
                      {group.label}
                    </p>
                  </div>
                  {group.description && (
                    <p
                      className={cn(
                        "text-xs sm:text-[13px] max-w-[55ch]",
                        isFrontend
                          ? "text-muted-foreground/65"
                          : "text-muted-foreground/85"
                      )}
                    >
                      {group.description}
                    </p>
                  )}
                </div>

                <div
                  className={cn(
                    "flex flex-wrap gap-2",
                    isFrontend && "opacity-85"
                  )}
                >
                  <TooltipProvider delayDuration={300}>
                    {group.skills.map((skill) => {
                      const meta = getTechMeta(skill.name);
                      const Icon = meta?.icon;
                      const color = skill.color || meta?.color;

                      return (
                        <div
                          key={skill.name}
                          className={cn(
                            "inline-flex min-w-[7.5rem] items-center gap-2 px-3 py-2 rounded-lg border border-border/50 bg-card",
                            isFrontend && "min-w-[6.75rem] px-2.5 py-1.5"
                          )}
                        >
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="flex items-center justify-center shrink-0">
                                {Icon && (
                                  <Icon
                                    className={
                                      isFrontend
                                        ? "h-3.5 w-3.5"
                                        : "h-[1.125rem] w-[1.125rem]"
                                    }
                                    style={{ color }}
                                  />
                                )}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent side="top">
                              <p className="text-xs">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                          <span
                            className={cn(
                              "font-medium text-foreground truncate",
                              isFrontend ? "text-xs" : "text-sm"
                            )}
                          >
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </TooltipProvider>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
