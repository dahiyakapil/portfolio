import { Globe, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { WORK_EXPERIENCE } from "@/constants/portfolio-data";
import type { WorkExperience } from "@/types/portfolio";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiExpress,
  SiVercel,
  SiAmazonwebservices,
  SiFirebase,
  SiPostman,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const techIconMap: Record<
  string,
  React.ComponentType<{ className?: string; style?: React.CSSProperties }>
> = {
  JavaScript: SiJavascript,
  "React.js": SiReact,
  React: SiReact,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  "Tailwind CSS": SiTailwindcss,
  Firebase: SiFirebase,
  "Next.js": SiNextdotjs,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Docker: SiDocker,
  Git: SiGit,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  "Express.js": SiExpress,
  Express: SiExpress,
  Vercel: SiVercel,
  AWS: SiAmazonwebservices,
  Postman: SiPostman,
};

const techColorMap: Record<string, string> = {
  JavaScript: "#F7DF1E",
  "React.js": "#61DAFB",
  React: "#61DAFB",
  "Next.js": "currentColor",
  TypeScript: "#3178C6",
  "Node.js": "#339933",
  "Tailwind CSS": "#38BDF8",
  MongoDB: "#47A248",
  Git: "#F05032",
  Docker: "#2496ED",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  Firebase: "#FFCA28",
  PostgreSQL: "#4169E1",
  "Express.js": "currentColor",
  Express: "currentColor",
  Vercel: "currentColor",
  AWS: "#FF9900",
  Postman: "#FF6C37",
};

interface ExperienceCardProps {
  experience: WorkExperience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
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
                            <Linkedin className="w-4 h-4" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>LinkedIn</p>
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

        {/* Technologies */}
        {experience.technologies?.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => {
                const Icon = techIconMap[tech];
                const color = techColorMap[tech];

                return (
                  <div
                    key={tech}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-muted/50 hover:bg-muted transition-colors"
                  >
                    {Icon && (
                      <Icon
                        className="text-base"
                        style={{ color: color || "currentColor" }}
                      />
                    )}
                    <span className="text-xs font-medium">{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Achievements */}
        <ul className="space-y-2">
          {experience.achievements.map((achievement, i) => (
            <li
              key={i}
              className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
            >
              <span className="text-primary mt-1 shrink-0 font-bold">•</span>
              <span
                dangerouslySetInnerHTML={{
                  __html: makeLinksClickable(achievement),
                }}
              />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Work Experience
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            My work experiences across different companies and roles.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {WORK_EXPERIENCE.map((work: WorkExperience, idx: number) => (
            <ExperienceCard key={`${work.company}-${idx}`} experience={work} />
          ))}
        </div>
      </div>
    </div>
  );
}
