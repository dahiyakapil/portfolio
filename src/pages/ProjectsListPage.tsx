import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PROJECTS } from "@/constants/portfolio-data";
import { ProjectCard } from "@/components/projects/ProjectCard";

export default function ProjectsListPage() {
  const sorted = [...PROJECTS].sort((a, b) => {
    if (a.caseStudy !== b.caseStudy) return Number(!!b.caseStudy) - Number(!!a.caseStudy);
    return Number(b.featured) - Number(a.featured);
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Selected work
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              All Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              SportsHub and supporting builds — each with a live demo where
              available.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {sorted.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
