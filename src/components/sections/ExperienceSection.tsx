import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { WORK_EXPERIENCE } from "@/constants/portfolio-data";
import type { WorkExperience } from "@/types/portfolio";

interface ExperienceCardProps {
  experience: WorkExperience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="border-border/40 shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div className="space-y-1">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
              {experience.company}
            </h3>
            <p className="text-base text-muted-foreground">{experience.role}</p>
          </div>
          <div className="text-sm text-muted-foreground md:text-right space-y-0.5">
            <p className="font-medium">{experience.period}</p>
            <p>{experience.location}</p>
          </div>
        </div>

        <ul className="space-y-3">
          {experience.achievements.map((achievement: string, i: number) => (
            <li
              key={i}
              className="text-sm md:text-base text-muted-foreground leading-relaxed flex items-start gap-3"
            >
              <span className="text-primary mt-1.5 shrink-0">→</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="mb-32">
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-3">
          <Briefcase className="h-6 w-6 text-muted-foreground" />
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <p className="text-muted-foreground">Building products at scale</p>
      </div>

      <div className="space-y-8">
        {WORK_EXPERIENCE.map((work: WorkExperience, idx: number) => (
          <ExperienceCard key={`${work.company}-${idx}`} experience={work} />
        ))}
      </div>
    </section>
  );
}
