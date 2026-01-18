import { Card, CardContent } from "@/components/ui/card";
import { WORK_EXPERIENCE } from "@/constants/portfolio-data";
import type { WorkExperience } from "@/types/portfolio";
import {
  SiLinkedin,
} from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Globe } from "lucide-react";
import { useState } from "react";
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

function ExperienceCard({ experience, isCollapsible = false, isExpanded = true, onToggle }: ExperienceCardProps) {
  const makeLinksClickable = (text: string) => {
    return text.replace(
      /\b((?:[\w-]+\.)+[\w-]{2,})(\/[^\s]*)?\b/g,
      (match) =>
        `<a href="https://${match}" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">${match}</a>`
    );
  };

  return (
    <Card className="border-border/30 hover:border-border/60 transition-all duration-300 bg-card/50">
      <CardContent className="p-6 md:p-7">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between gap-3 mb-5">
          <div className="space-y-0.5 flex-1">
            {/* COMPANY with Social Links — primary */}
            <div className="flex items-center gap-2 flex-wrap">
              <p className="text-lg md:text-xl font-semibold tracking-tight">
                {experience.company}
              </p>
              
              {/* Social Links with Tooltips */}
              {(experience.website || experience.linkedin) && (
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
                    
                    {/* Chevron Dropdown - Only for collapsible cards */}
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
                                isExpanded ? 'rotate-180' : ''
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

            {/* ROLE — secondary */}
            <h3 className="text-sm md:text-base text-muted-foreground font-medium leading-snug">
              {experience.role}
            </h3>
          </div>

          <div className="text-xs md:text-sm text-muted-foreground md:text-right space-y-0.5">
            <p className="font-semibold">{experience.period}</p>
            <p className="font-medium">{experience.location}</p>
          </div>
        </div>

        {/* Content - Collapsible if isCollapsible is true */}
        <div
          className={isCollapsible ? `transition-all duration-300 ease-in-out overflow-hidden ${
            isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          }` : ''}
        >
          {/* Technologies */}
          {experience.technologies?.length > 0 && (
            <div className="mb-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                <TooltipProvider delayDuration={300}>
                  {experience.technologies.map((tech) => {
                    const meta = getTechMeta(tech);

                    return (
                      <Tooltip key={tech}>
                        <TooltipTrigger asChild>
                          <div
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-muted/50 hover:bg-muted transition-colors cursor-default"
                          >
                            {meta && (
                              <meta.icon
                                className="text-base"
                                style={{ color: meta.color }}
                              />
                            )}
                            <span className="text-xs font-medium">{tech}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent side="top">
                          <p className="text-xs">{tech}</p>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </TooltipProvider>
              </div>
            </div>
          )}

          {/* Achievements */}
          <ul className="space-y-0.5">
            {experience.achievements.map((achievement, index) => (
              <li key={index} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                <span className="text-primary mt-1 shrink-0 font-bold">•</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: makeLinksClickable(achievement),
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

export function ExperienceSection() {
  const [isSecondExpanded, setIsSecondExpanded] = useState(false);

  return (
    <section id="experience" className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Experience
          </h2>
        </div>
      </div>

      <div className="space-y-6">
        {/* First Experience - No Chevron, Just Social Links */}
        {WORK_EXPERIENCE[0] && (
          <ExperienceCard 
            key={`${WORK_EXPERIENCE[0].company}-0`} 
            experience={WORK_EXPERIENCE[0]}
            isCollapsible={false}
          />
        )}

        {/* Second Experience - Collapsible with Chevron */}
        {WORK_EXPERIENCE[1] && (
          <ExperienceCard 
            key={`${WORK_EXPERIENCE[1].company}-1`} 
            experience={WORK_EXPERIENCE[1]}
            isCollapsible={true}
            isExpanded={isSecondExpanded}
            onToggle={() => setIsSecondExpanded(!isSecondExpanded)}
          />
        )}
      </div>

        {/* Show More Button */}
      <div className="flex justify-center mt-8">
        <Link to="/experience">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 group cursor-pointer"
          >
            Show all experiences
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
