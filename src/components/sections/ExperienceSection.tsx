import { Briefcase } from "lucide-react";
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
} from "react-icons/si";
import { FaFire } from "react-icons/fa";

const techColorMap: Record<string, string> = {
  JavaScript: "text-yellow-500",
  "React.js": "text-cyan-500",
  React: "text-cyan-500",
  "Next.js": "text-gray-900 dark:text-white",
  TypeScript: "text-blue-600",
  "Node.js": "text-green-600",
  "Tailwind CSS": "text-sky-500",
  MongoDB: "text-green-500",
  Git: "text-orange-600",
  Docker: "text-blue-500",
  HTML5: "text-orange-600",
  CSS3: "text-blue-500",
  Firebase: "text-orange-500",
  PostgreSQL: "text-blue-700",
};

const techIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  JavaScript: SiJavascript,
  "React.js": SiReact,
  React: SiReact,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  "Tailwind CSS": SiTailwindcss,
  Firebase: FaFire,
  "Next.js": SiNextdotjs,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Docker: SiDocker,
  Git: SiGit,
  HTML5: SiHtml5,
  CSS3: SiCss3,
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
          <div className="space-y-0.5">
            {/* ROLE — primary */}
            <p className="text-lg md:text-xl font-semibold tracking-tight">
              {experience.role}
            </p>

            {/* COMPANY — secondary */}
            <h3 className="text-sm md:text-base text-muted-foreground font-medium max-w-[48ch] leading-snug">
              {experience.company}
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
                const color = techColorMap[tech] || "text-foreground/80";

                return (
                  <div
                    key={tech}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-muted/50 hover:bg-muted transition-colors"
                  >
                    {Icon && <Icon className={`text-base ${color}`} />}
                    <span className="text-xs font-medium">{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Achievements */}
        <ul className="space-y-0.5">
          {experience.achievements.map((achievement, i) => (
            <li className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
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

export function ExperienceSection() {
  return (
    <section id="experience" className="mb-32=">
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Experience
          </h2>
        </div>
      </div>

      <div className="space-y-6">
        {WORK_EXPERIENCE.map((work: WorkExperience, idx: number) => (
          <ExperienceCard key={`${work.company}-${idx}`} experience={work} />
        ))}
      </div>
    </section>
  );
}
