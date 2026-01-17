import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/constants/portfolio-data";
import type { Project } from "@/types/portfolio";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="rounded-xl bg-transparent">
      {/* IMAGE AREA (flush to top, no white) */}
      <div className="relative h-[220px] bg-gradient-to-br from-pink-500 via-purple-500 to-fuchsia-600">
        <div className="absolute inset-0 flex items-end justify-center pb-6">
          <div className="w-[88%] h-[160px] overflow-hidden shadow-2xl bg-slate-900">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-500 text-sm">
                Project Preview
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="bg-card p-5 rounded-b-xl border border-border/40">
        <div className="flex items-start justify-between mb-2">
          <Link to={`/projects/${project.id}`}>
            <h3 className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
              {project.title}
            </h3>
          </Link>

          <div className="flex gap-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.solution}
        </p>

        <div className="mb-4">
          <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
            Technologies
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs px-2 py-0.5"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full border border-primary bg-green-500" />
            Operational
          </span>

          <Link
            to={`/projects/${project.id}`}
            className="hover:text-foreground transition-colors flex items-center gap-1"
          >
            View details
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </Card>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-10">
      <div className="mb-10">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Featured
          </p>
          <Link
            to="/projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <h2 className="text-4xl font-bold text-foreground">Projects</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.slice(0, 4).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-8">
        <Link to="/projects">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 group"
          >
            Show all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
