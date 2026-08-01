import { useParams, Link, Navigate } from "react-router-dom";
import {
  AlertTriangle,
  ArrowLeft,
  ExternalLink,
  Github,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PROJECTS } from "@/constants/portfolio-data";
import { ACCENT_FRAME, ACCENT_SOFT } from "@/constants/accents";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getTechMeta } from "@/constants/techColors";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);
  const accent = project?.accent ?? "blue";

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {project.image && (
          <div
            className={`relative w-full aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-lg border border-border/40 ${ACCENT_FRAME[accent]}`}
          >
            <div className="absolute inset-0 flex items-end justify-center p-4 md:p-8 pb-0">
              <div className="w-[94%] h-[88%] rounded-t-lg overflow-hidden shadow-2xl border border-black/20 bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>
            </div>
          </div>
        )}

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-sm font-medium">
              {project.status === "In Progress"
                ? "Live · Active"
                : project.status || "Live"}
            </span>
            {project.team?.toLowerCase().includes("freelance") && (
              <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium">
                Freelance
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {project.title}
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-[65ch] leading-relaxed">
            {project.description}
          </p>

          {project.metrics && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-border/40 bg-card/50 px-4 py-3"
                >
                  <p className="text-xl font-bold text-foreground">{m.value}</p>
                  <p className="text-xs text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>
          )}

          <div className="grid gap-3 mb-8 max-w-[65ch]">
            <div className="rounded-xl border border-border/50 bg-card/60 p-4">
              <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1.5">
                <AlertTriangle className="h-3.5 w-3.5" />
                Problem
              </p>
              <p className="text-sm text-foreground/90 leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/60 p-4">
              <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-1.5">
                <Lightbulb className="h-3.5 w-3.5" />
                Solution
              </p>
              <p className="text-sm text-foreground/90 leading-relaxed">
                {project.solution}
              </p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/60 p-4">
              <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1.5">
                <TrendingUp className="h-3.5 w-3.5" />
                Impact
              </p>
              <p className="text-sm text-foreground/90 leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>

          {project.architecture && (
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                Architecture
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {project.architecture.map((node, i) => (
                  <div key={node} className="flex items-center gap-2">
                    <span
                      className={`text-xs md:text-sm font-medium px-3 py-1.5 rounded-lg border ${ACCENT_SOFT[accent]}`}
                    >
                      {node}
                    </span>
                    {i < project.architecture!.length - 1 && (
                      <span className="text-muted-foreground text-sm">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {project.timeline && (
              <div>
                <p className="text-muted-foreground">Timeline</p>
                <p className="text-sm text-foreground">{project.timeline}</p>
              </div>
            )}

            {project.role && (
              <div>
                <p className="text-muted-foreground">Role</p>
                <p className="text-sm text-foreground">{project.role}</p>
              </div>
            )}

            {project.team && (
              <div>
                <p className="text-muted-foreground">Team</p>
                <p className="text-sm text-foreground">{project.team}</p>
              </div>
            )}

            <div className="flex flex-col gap-1">
              <p className="text-sm text-muted-foreground">Status</p>
              <StatusBadge status={project.status} />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {project.link.startsWith("http") && (
              <Button asChild size="lg" className="gap-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </Button>
            )}

            {project.github && (
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </Button>
            )}
          </div>
        </div>

        <Separator className="my-12" />

        {/* Overview Section */}
        {project.overview && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Overview
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-[65ch]">
              {project.overview}
            </p>
          </section>
        )}

        {/* What Users Can Do Section */}
        {project.features && project.features.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              What Users Can Do
            </h2>
            <div className="space-y-3">
              {project.features.map((feature, index) => {
                const [title, ...rest] = feature.split(":");
                const description = rest.join(":");
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-base text-muted-foreground">
                        <span className="font-semibold text-foreground">
                          {title}
                        </span>
                        {description && `: ${description.trim()}`}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Why I Built This Section */}
        {project.challenges && project.challenges.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Why I Built This
            </h2>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              {project.problem}
            </p>
            <div className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                  </div>
                  <p className="text-base text-muted-foreground flex-1">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech Stack Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-8">
            {project.tech.map((tech) => {
              const meta = getTechMeta(tech);
              if (!meta) return <span key={tech} className="text-sm font-medium">{tech}</span>;
              
              const { icon: Icon, color } = meta;
              
              return (
                <div
                  key={tech}
                  className="flex flex-col items-center gap-2 group/icon"
                >
                  <TooltipProvider delayDuration={300}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center justify-center p-1 cursor-default">
                          <Icon
                            className="text-3xl transition-all duration-300 group-hover/icon:scale-110"
                            style={{ color: color === 'currentColor' ? 'inherit' : color }}
                          />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p className="text-xs">{tech}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground group-hover/icon:text-foreground transition-colors">
                    {tech}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* After Launch & Impact Section */}
        {project.impact && project.impact.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              After Launch & Impact
            </h2>
            <div className="space-y-3">
              {project.impact.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                  </div>
                  <p className="text-base text-muted-foreground flex-1">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Future Plans Section */}
        {project.futurePlans && project.futurePlans.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Future Plans
            </h2>
            <div className="space-y-3">
              {project.futurePlans.map((plan, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                  </div>
                  <p className="text-base text-muted-foreground flex-1">
                    {plan}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <Separator className="my-12" />

        {/* CTA Section */}
        <div className="text-center py-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Check Out The Project
          </h3>
          <p className="text-muted-foreground text-base mb-8 max-w-2xl mx-auto">
            Explore the live demo or dive into the source code to see how it
            works
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            {project.link.startsWith("http") && (
              <Button asChild size="lg" className="gap-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Live Site
                </a>
              </Button>
            )}

            {project.github && (
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
