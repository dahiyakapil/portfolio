import { Link } from "react-router-dom";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/constants/portfolio-data";
import type { Project } from "@/types/portfolio";
import { getTechMeta } from "@/constants/techColors";
import { SiGithub } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function TechIcon({ name }: { name: string }) {
  const meta = getTechMeta(name);
  if (!meta) return <Badge variant="secondary" className="text-[10px] px-1.5 py-0">{name}</Badge>;

  const { icon: Icon, color } = meta;

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center justify-center cursor-default group/icon">
            <Icon
              className="h-4 w-4 transition-all duration-300 text-muted-foreground group-hover/icon:scale-110"
              style={{ 
                '--hover-color': color === 'currentColor' ? 'var(--foreground)' : color 
              } as React.CSSProperties}
              onMouseEnter={(e: React.MouseEvent<SVGElement>) => {
                if (color !== 'currentColor') {
                  (e.currentTarget as SVGElement).style.color = color;
                } else {
                  (e.currentTarget as SVGElement).classList.add('text-foreground');
                  (e.currentTarget as SVGElement).classList.remove('text-muted-foreground');
                }
              }}
              onMouseLeave={(e: React.MouseEvent<SVGElement>) => {
                (e.currentTarget as SVGElement).style.color = '';
                (e.currentTarget as SVGElement).classList.remove('text-foreground');
                (e.currentTarget as SVGElement).classList.add('text-muted-foreground');
              }}
            />
          </div>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p className="text-xs font-medium">{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="rounded-xl bg-transparent hover:shadow-xl transition-all duration-300">
      {/* IMAGE AREA */}
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
            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors p-1 hover:bg-muted rounded-md"
                    onClick={(e) => e.stopPropagation()}
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p className="text-xs">Live Demo</p>
                </TooltipContent>
              </Tooltip>

              {project.github && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors p-1 hover:bg-muted rounded-md"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="GitHub Repository"
                    >
                      <SiGithub className="w-4 h-4" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p className="text-xs">GitHub Repo</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </TooltipProvider>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.solution}
        </p>

        <div className="mb-4">
          <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <TechIcon key={tech} name={tech} />
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

export default function ProjectsListPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
              Featured
            </p>
            <h1 className="text-5xl font-bold text-foreground mb-4">
              All Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A collection of my work spanning web applications, tools, and
              experiments. Each project represents a unique challenge and
              learning experience.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
