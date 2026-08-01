import { WORK_EXPERIENCE } from "@/constants/portfolio-data";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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
        {WORK_EXPERIENCE.map((experience, index) => (
          <ExperienceCard
            key={`${experience.company}-${index}`}
            experience={experience}
            isCollapsible={index > 0}
            isExpanded={index === 0 || expandedIndex === index}
            onToggle={() =>
              setExpandedIndex((prev) => (prev === index ? null : index))
            }
          />
        ))}
      </div>

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
