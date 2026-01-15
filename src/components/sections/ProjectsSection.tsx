import { Rocket, ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/constants/portfolio-data";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const gradients = [
    "from-purple-500/20 to-pink-500/20",
    "from-blue-500/20 to-cyan-500/20",
    "from-orange-500/20 to-red-500/20",
  ];

  return (
    <Card className="overflow-hidden border-border/30 hover:border-border/60 transition-all duration-300 group bg-card/50">
      <div className={`bg-gradient-to-br ${gradients[index % gradients.length]} p-8 md:p-10 relative`}>
        {/* Tilted mockup image placeholder */}
        <div className="relative w-full aspect-[16/10] mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-background/90 rounded-lg transform rotate-2 group-hover:rotate-0 transition-transform duration-300 shadow-2xl border border-border/50">
            <div className="p-6 h-full flex flex-col">
              <div className="flex gap-1.5 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex-1 bg-muted/30 rounded-md flex items-center justify-center">
                <Rocket className="h-16 w-16 text-muted-foreground/30" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            {project.title}
          </h3>
          <div className="flex gap-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`View ${project.title} project`}
            >
              <ExternalLink className="h-5 w-5" />
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          {project.solution}
        </p>

        <div className="mb-4">
          <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">Technologies</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tech.map((tech: string) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs font-medium bg-background/60 hover:bg-background/80"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            All Systems Operational
          </span>
          <span>•</span>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-1"
          >
            View Details
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </Card>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="mb-32 mt-16">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <Rocket className="h-7 w-7 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        </div>
        <p className="text-sm text-muted-foreground font-medium">Featured</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {PROJECTS.map((project: Project, idx: number) => (
          <ProjectCard key={`${project.title}-${idx}`} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
