import { WORK_EXPERIENCE } from "@/constants/portfolio-data";
import type { WorkExperience } from "@/types/portfolio";
import { ExperienceCard } from "@/components/experience/ExperienceCard";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="space-y-6">
          {WORK_EXPERIENCE.map((work: WorkExperience, idx: number) => (
            <ExperienceCard key={`${work.company}-${idx}`} experience={work} />
          ))}
        </div>
      </div>
    </div>
  );
}
