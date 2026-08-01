import type { ElementType } from "react";
import {
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiRedis,
  SiPostgresql,
  SiJavascript,
  SiRazorpay,
  SiJsonwebtokens,
  SiDocker,
  SiJest,
  SiRedux,
  SiExpress,
} from "react-icons/si";
import { SKILL_GROUPS } from "@/constants/portfolio-data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ICON_MAP: Record<string, ElementType> = {
  "React.js": SiReact,
  "Redux Toolkit": SiRedux,
  "Tailwind CSS": SiTailwindcss,
  JavaScript: SiJavascript,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  PostgreSQL: SiPostgresql,
  Razorpay: SiRazorpay,
  JWT: SiJsonwebtokens,
  Docker: SiDocker,
  Jest: SiJest,
};

export function TechnicalSkills() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Skills
          </h2>
          <p className="text-base text-muted-foreground max-w-[65ch]">
            Stack from the resume — systems, payments, and shipping — not a
            laundry list of every language I've touched.
          </p>
        </div>

        <div className="space-y-6">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2.5">
                <TooltipProvider delayDuration={300}>
                  {group.skills.map((skill) => {
                    const Icon = ICON_MAP[skill.name];
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg border border-border/50 bg-card hover:bg-accent/50 transition-colors"
                      >
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex items-center justify-center">
                              {Icon && (
                                <Icon
                                  className="text-lg"
                                  style={{ color: skill.color }}
                                />
                              )}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            <p className="text-xs">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                        <span className="font-medium text-sm text-foreground">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </TooltipProvider>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
