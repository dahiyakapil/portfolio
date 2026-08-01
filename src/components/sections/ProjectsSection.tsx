import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HOME_PROJECTS } from "@/constants/portfolio-data";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="mb-5">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
          Selected projects
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Projects
        </h2>
        <p className="text-muted-foreground mt-2 max-w-[65ch]">
          Flagship and supporting builds — compact product stories with live
          demos, stack, and outcomes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        {HOME_PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-6 flex justify-center border-t border-border/40 pt-6">
        <Link to="/projects">
          <Button variant="outline" size="sm" className="gap-2 group">
            Explore all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
