import { Card, CardContent } from "@/components/ui/card";
import type { WorkExperience } from "@/types/portfolio";
import { SiLinkedin } from "react-icons/si";
import { ChevronDown, Globe, Star } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getTechMeta } from "@/constants/techColors";

interface ExperienceCardProps {
  experience: WorkExperience;
  isCollapsible?: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
}

function TechPill({ tech }: { tech: string }) {
  const meta = getTechMeta(tech);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted/50 hover:bg-muted transition-colors cursor-default">
          {meta && (
            <meta.icon className="text-sm" style={{ color: meta.color }} />
          )}
          <span className="text-xs font-medium">{tech}</span>
        </div>
      </TooltipTrigger>
      <TooltipContent side="top">
        <p className="text-xs">{tech}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export function ExperienceCard({
  experience,
  isCollapsible = false,
  isExpanded = true,
  onToggle,
}: ExperienceCardProps) {
  const makeLinksClickable = (text: string) => {
    return text.replace(
      /\b((?:[\w-]+\.)+[\w-]{2,})(\/[^\s]*)?\b/g,
      (match) =>
        `<a href="https://${match}" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">${match}</a>`
    );
  };

  const techGroups =
    experience.techGroups && experience.techGroups.length > 0
      ? experience.techGroups
      : experience.technologies?.length
        ? [{ label: "Stack", items: experience.technologies }]
        : [];

  return (
    <Card className="border-border/50 hover:border-border hover:bg-card/80 transition-all duration-300 bg-card/50 shadow-sm hover:shadow-md">
      <CardContent className="p-6 md:p-7">
        <div className="flex flex-col md:flex-row md:justify-between gap-3 mb-4">
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center gap-2.5 flex-wrap">
              {experience.logoDomain && (
                <img
                  src={`https://www.google.com/s2/favicons?domain=${experience.logoDomain}&sz=64`}
                  alt=""
                  width={26}
                  height={26}
                  className="rounded-sm shrink-0"
                  loading="lazy"
                />
              )}
              <p className="text-lg md:text-xl font-semibold tracking-tight">
                {experience.company}
              </p>

              {(experience.website || experience.linkedin || isCollapsible) && (
                <TooltipProvider>
                  <div className="flex items-center gap-1.5">
                    {experience.website && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={experience.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="Company website"
                          >
                            <Globe className="w-4 h-4" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Website</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                    {experience.linkedin && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={experience.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="LinkedIn profile"
                          >
                            <SiLinkedin className="w-4 h-4" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>LinkedIn</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                    {isCollapsible && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            onClick={onToggle}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="Expand experience"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-300 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Expand</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </div>
                </TooltipProvider>
              )}
            </div>

            <h3 className="text-sm md:text-base text-muted-foreground font-medium leading-snug">
              {experience.role}
            </h3>

            {experience.badges && experience.badges.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {experience.badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {badge}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="text-xs md:text-sm text-muted-foreground md:text-right space-y-0.5 shrink-0">
            <p className="font-semibold text-foreground/90">{experience.period}</p>
            <p className="font-medium">{experience.location}</p>
          </div>
        </div>

        <div
          className={
            isCollapsible
              ? `transition-all duration-300 ease-in-out overflow-hidden ${
                  isExpanded
                    ? "max-h-[3000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`
              : ""
          }
        >
          {experience.keyAchievement && (
            <div className="mb-5 rounded-lg border border-border/60 bg-muted/30 px-4 py-3">
              <div className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500/20" />
                Key Achievement
              </div>
              <p className="text-sm text-foreground/90 leading-[1.65]">
                {experience.keyAchievement}
              </p>
            </div>
          )}

          {techGroups.length > 0 && (
            <div className="mb-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
                Engineering Stack
              </h4>
              <TooltipProvider delayDuration={300}>
                <div className="space-y-2.5">
                  {techGroups.map((group) => (
                    <div
                      key={group.label}
                      className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3"
                    >
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground/80 sm:w-28 shrink-0">
                        {group.label}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {group.items.map((tech) => (
                          <TechPill key={tech} tech={tech} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TooltipProvider>
            </div>
          )}

          <ul className="space-y-2.5 max-w-[68ch]">
            {experience.achievements.map((achievement, index) => (
              <li
                key={index}
                className="text-sm text-muted-foreground leading-[1.65] flex items-start gap-2"
              >
                <span className="text-primary mt-[0.35em] shrink-0 font-bold leading-none">
                  •
                </span>
                <span>
                  <span className="font-semibold text-foreground">
                    {achievement.label}
                  </span>
                  <span className="text-muted-foreground"> — </span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: makeLinksClickable(achievement.detail),
                    }}
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
