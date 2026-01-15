import { Rocket, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/constants/portfolio-data";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="border-border/40 shadow-sm hover:shadow-md transition-all duration-300 group">
      <CardContent className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-6">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <a
            href={project.link}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={`View ${project.title} project`}
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>

        <div className="space-y-5 mb-6">
          <ProjectDetail label="Problem" content={project.problem} />
          <ProjectDetail label="Solution" content={project.solution} />
          <ProjectDetail label="Technical Approach" content={project.technical} />
          <ProjectDetail label="Impact" content={project.outcome} isBold />
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
          {project.tech.map((tech: string) => (
            <Badge key={tech} variant="secondary" className="text-xs font-medium">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

interface ProjectDetailProps {
  label: string;
  content: string;
  isBold?: boolean;
}

function ProjectDetail({ label, content, isBold = false }: ProjectDetailProps) {
  return (
    <div>
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
        {label}
      </p>
      <p className={`text-sm md:text-base text-foreground/90 leading-relaxed ${isBold ? "font-medium" : ""}`}>
        {content}
      </p>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="mb-32">
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-3">
          <Rocket className="h-6 w-6 text-muted-foreground" />
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
        </div>
        <p className="text-muted-foreground">Solving real problems with technology</p>
      </div>

      <div className="grid gap-8 md:gap-10">
        {PROJECTS.map((project: Project, idx: number) => (
          <ProjectCard key={`${project.title}-${idx}`} project={project} />
        ))}
      </div>
    </section>
  );
}
