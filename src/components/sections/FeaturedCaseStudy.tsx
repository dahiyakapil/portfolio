import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CASE_STUDY } from "@/constants/portfolio-data";
import { getTechMeta } from "@/constants/techColors";

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-3">
      {children}
    </p>
  );
}

export function FeaturedCaseStudy() {
  const project = CASE_STUDY;
  if (!project) return null;

  const isExternalLive = project.link.startsWith("http");
  const challenges = (project.challenges ?? []).slice(0, 5);
  const results = (project.impact ?? []).slice(0, 4);
  const nodes = project.architecture ?? [];

  return (
    <section id="case-study" className="pt-4 pb-10 px-4 sm:px-6 lg:px-8">
      <article className="rounded-2xl border border-border/60 bg-card/40 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] overflow-hidden">
        {/* Header band */}
        <header className="px-5 sm:px-8 md:px-10 pt-7 sm:pt-9 pb-6 border-b border-border/40">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-3">
                Featured case study
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                  {project.title}
                </h2>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                  </span>
                  Live
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                {project.timeline} · Freelance · Sole engineer
              </p>
              <p className="text-[15px] text-muted-foreground max-w-[58ch] leading-relaxed">
                Concurrency-safe booking, payments, and admin ops — owned
                end-to-end.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              {project.tech.slice(0, 6).map((t) => {
                const meta = getTechMeta(t);
                if (!meta) return null;
                const Icon = meta.icon;
                return (
                  <span
                    key={t}
                    title={t}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border/50 bg-background/40"
                  >
                    <Icon className="h-3.5 w-3.5" style={{ color: meta.color }} />
                  </span>
                );
              })}
            </div>
          </div>

          {/* Capability strip */}
          {project.metrics && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-7 rounded-xl overflow-hidden border border-border/50 bg-border/50">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="bg-background/80 px-4 py-3.5"
                >
                  <p className="text-base md:text-lg font-bold text-foreground tracking-tight">
                    {m.value}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </header>

        <div className="px-5 sm:px-8 md:px-10 py-8 space-y-9">
          {/* Problem */}
          <div className="max-w-[60ch]">
            <SectionLabel>Problem</SectionLabel>
            <p className="text-[15px] md:text-base text-foreground/90 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Challenges + Solution side by side on large screens */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {challenges.length > 0 && (
              <div>
                <SectionLabel>Challenges</SectionLabel>
                <ul className="space-y-2.5">
                  {challenges.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-foreground/85 leading-snug"
                    >
                      <span className="mt-[7px] h-1 w-1 rounded-full bg-muted-foreground/70 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.solutionGroups && project.solutionGroups.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-4">
                {project.solutionGroups.map((group) => (
                  <div
                    key={group.label}
                    className="rounded-xl border border-border/50 bg-background/40 p-4"
                  >
                    <SectionLabel>{group.label}</SectionLabel>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-foreground/85"
                        >
                          <span className="mt-[7px] h-1 w-1 rounded-full bg-emerald-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Architecture pipeline */}
          {nodes.length > 0 && (
            <div id="architecture" className="scroll-mt-28">
              <SectionLabel>Architecture</SectionLabel>
              <div className="rounded-xl border border-border/50 bg-background/50 p-4 md:p-5 overflow-x-auto">
                <ol className="flex items-center gap-0 min-w-[560px] md:min-w-0">
                  {nodes.map((node, i) => (
                    <li key={node} className="flex items-center flex-1 min-w-0">
                      <div className="flex flex-col items-center gap-2 flex-1 min-w-0 px-1">
                        <span className="text-[10px] font-medium tabular-nums text-muted-foreground">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="w-full text-center text-[11px] sm:text-xs font-semibold px-1.5 py-2.5 rounded-md border border-border/70 bg-card text-foreground leading-tight">
                          {node}
                        </div>
                      </div>
                      {i < nodes.length - 1 && (
                        <div
                          className="w-3 sm:w-5 h-px bg-foreground/25 shrink-0 mb-[-0.65rem]"
                          aria-hidden
                        />
                      )}
                    </li>
                  ))}
                </ol>
                <p className="text-[11px] text-muted-foreground mt-4 leading-relaxed max-w-[55ch]">
                  Hard path: lock slot → commit booking → expire holds →
                  reconcile payment.
                </p>
              </div>
            </div>
          )}

          {/* Product frame */}
          {project.image && (
            <div>
              <SectionLabel>Product</SectionLabel>
              <div className="rounded-xl border border-border/50 bg-zinc-950 overflow-hidden">
                <div className="flex items-center gap-3 px-3.5 py-2.5 border-b border-white/10 bg-zinc-950">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <span className="text-[11px] text-white/50 font-medium truncate max-w-[200px]">
                      {project.title} · live
                    </span>
                  </div>
                  <div className="w-10" aria-hidden />
                </div>
                <div className="aspect-[16/9] bg-zinc-900">
                  <img
                    src={project.image}
                    alt={`${project.title} product UI`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Result */}
          <div className="max-w-[60ch]">
            <SectionLabel>Result</SectionLabel>
            <p className="text-[15px] md:text-base text-foreground/90 leading-relaxed mb-4">
              {project.outcome}
            </p>
            {results.length > 0 && (
              <ul className="space-y-2">
                {results.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground leading-snug"
                  >
                    <span className="mt-[7px] h-1 w-1 rounded-full bg-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Single clear CTA */}
          <div className="flex flex-wrap gap-3 pt-1">
            <Link to={`/projects/${project.id}`}>
              <Button size="lg" className="gap-2 h-11 px-6">
                Engineering deep dive
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            {isExternalLive && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-2 h-11 px-6">
                  Open live product
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            )}
          </div>
        </div>
      </article>
    </section>
  );
}
