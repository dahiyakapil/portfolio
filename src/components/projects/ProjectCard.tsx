import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Star } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ACCENT_CARD, ACCENT_PICK } from "@/constants/accents";
import { getTechMeta } from "@/constants/techColors";
import type { Project } from "@/types/portfolio";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

function BrowserFrame({ project }: { project: Project }) {
  const url =
    project.browserUrl ??
    (project.link.startsWith("http")
      ? project.link.replace(/^https?:\/\//, "").replace(/\/$/, "")
      : `${project.title.toLowerCase()} · preview`);

  return (
    <div className="rounded-t-lg overflow-hidden border border-border/50 border-b-0 bg-zinc-950">
      <div className="flex items-center gap-2.5 px-2.5 py-1.5 border-b border-white/10 bg-zinc-950">
        <div className="flex items-center gap-1 shrink-0">
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        </div>
        <div className="flex-1 min-w-0 flex justify-center">
          {project.link.startsWith("http") ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-white/45 font-medium truncate max-w-[180px] hover:text-white/70 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              {url}
            </a>
          ) : (
            <span className="text-[10px] text-white/45 font-medium truncate max-w-[180px]">
              {url}
            </span>
          )}
        </div>
        <div className="w-6 shrink-0" aria-hidden />
      </div>
      <div className="aspect-[21/9] bg-zinc-900 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} product UI`}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-500 text-xs">
            Project Preview
          </div>
        )}
      </div>
    </div>
  );
}

function TechPill({ name }: { name: string }) {
  const meta = getTechMeta(name);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="inline-flex items-center gap-1 rounded-md border border-border/50 bg-muted/40 px-1.5 py-0.5 text-[10px] font-medium text-foreground/90">
          {meta && (
            <meta.icon className="h-2.5 w-2.5" style={{ color: meta.color }} />
          )}
          {name}
        </span>
      </TooltipTrigger>
      <TooltipContent side="top">
        <p className="text-xs">{name}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const accent = project.accent ?? "blue";
  const isFlagship = !!project.caseStudy || project.pickLabel === "Flagship";
  const isExternalLive = project.link.startsWith("http");
  const primaryBadge =
    project.primaryBadge ??
    (project.status === "In Progress" || project.status === "Completed"
      ? "Production"
      : undefined);
  const secondaryBadges = (project.badges ?? []).filter(
    (b) => b.toLowerCase() !== primaryBadge?.toLowerCase()
  );
  const visibleTech = project.tech.slice(0, 3);
  const moreTech = project.tech.length - visibleTech.length;
  const blurb = project.summary ?? project.description;

  return (
    <Card
      className={cn(
        "rounded-lg bg-card/50 border overflow-hidden h-full flex flex-col shadow-sm",
        ACCENT_CARD[accent]
      )}
    >
      <BrowserFrame project={project} />

      <div className="p-4 sm:p-5 flex-1 flex flex-col border border-border/40 border-t-0 rounded-b-lg">
        {project.pickLabel && (
          <p
            className={cn(
              "inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider mb-2.5",
              ACCENT_PICK[accent]
            )}
          >
            <Star className="h-2.5 w-2.5 fill-current/30" />
            {project.pickLabel}
          </p>
        )}

        <div className="min-w-0 mb-2.5 space-y-1">
          <Link to={`/projects/${project.id}`}>
            <h3
              className={cn(
                "font-semibold tracking-tight text-foreground hover:text-primary transition-colors",
                isFlagship ? "text-lg md:text-xl" : "text-base md:text-lg"
              )}
            >
              {project.title}
            </h3>
          </Link>
          {project.tagline && (
            <p className="text-xs sm:text-[13px] text-muted-foreground leading-snug">
              {project.tagline}
            </p>
          )}
        </div>

        {(primaryBadge || secondaryBadges.length > 0) && (
          <div className="flex flex-wrap items-center gap-1.5 mb-3">
            {primaryBadge && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                {primaryBadge}
              </span>
            )}
            {secondaryBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center rounded-md border border-border/50 bg-transparent px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-muted-foreground/80"
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-px mb-3 rounded-md overflow-hidden border border-border/50 bg-border/50">
            {project.metrics.slice(0, 3).map((m) => (
              <div
                key={m.label}
                className="bg-background/70 px-2 py-2 text-center sm:text-left"
              >
                <p className="text-[13px] font-bold text-foreground tracking-tight leading-tight">
                  {m.value}
                </p>
                <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5 leading-snug">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        )}

        <p className="text-[13px] text-foreground/85 leading-[1.55] mb-3">
          {blurb}
        </p>

        <TooltipProvider delayDuration={300}>
          <div className="flex flex-wrap items-center gap-1 mb-4">
            {visibleTech.map((tech) => (
              <TechPill key={tech} name={tech} />
            ))}
            {moreTech > 0 && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center rounded-md border border-border/50 bg-muted/30 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    +{moreTech}
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p className="text-xs">{project.tech.slice(3).join(", ")}</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </TooltipProvider>

        <div className="flex flex-wrap items-center gap-1.5 mt-auto">
          <Button
            asChild
            size="sm"
            variant="default"
            className="h-7 gap-1 text-xs"
          >
            <Link to={`/projects/${project.id}`}>
              View case study
              <ArrowRight className="h-3 w-3" />
            </Link>
          </Button>

          {isExternalLive ? (
            <Button asChild size="sm" variant="outline" className="h-7 gap-1 text-xs">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Live demo
                <ExternalLink className="h-2.5 w-2.5" />
              </a>
            </Button>
          ) : (
            <Button
              size="sm"
              variant="outline"
              className="h-7 gap-1 text-xs"
              disabled
              title="Public live URL coming soon"
            >
              Live demo
              <ExternalLink className="h-2.5 w-2.5" />
            </Button>
          )}

          {project.github ? (
            <Button
              asChild
              size="sm"
              variant="ghost"
              className="h-7 gap-1 px-2 text-xs text-muted-foreground"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <SiGithub className="h-3 w-3" />
                GitHub
              </a>
            </Button>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
