import { ArrowRight, FileDown, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { IconGithub, IconLinkedin, IconX } from "@/components/icons/brands";
import {
  CASE_STUDY,
  PERSONAL_INFO,
  SOCIAL_LINKS,
} from "@/constants/portfolio-data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { scrollToHash } from "@/lib/hashScroll";
import { useHeavyHeroEffects } from "@/hooks/useMotionPreference";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

function HeroArchitecturePreview() {
  const nodes = CASE_STUDY?.architecture ?? [
    "Frontend",
    "API",
    "Redis Lock",
    "Mongo Tx",
    "BullMQ",
    "Payment",
  ];

  return (
    <div className="relative w-full">
      <div
        className="absolute -inset-3 rounded-3xl bg-[var(--hero-accent-to)]/10 blur-2xl"
        aria-hidden
      />
      <div className="relative rounded-2xl border border-border/60 bg-card/70 backdrop-blur-md p-5 overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
              System preview
            </p>
            <p className="text-sm font-semibold text-foreground">
              {CASE_STUDY?.title ?? "SportsHub"}
            </p>
          </div>
          <span className="text-[10px] font-medium px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            Live
          </span>
        </div>

        {CASE_STUDY?.image ? (
          <div className="mb-4 rounded-lg overflow-hidden border border-border/40 bg-slate-950 aspect-[16/10]">
            <OptimizedImage
              src={CASE_STUDY.image}
              alt={`${CASE_STUDY.title} preview`}
              width={CASE_STUDY.imageWidth ?? 1024}
              height={CASE_STUDY.imageHeight ?? 487}
              className="w-full h-full object-cover object-top opacity-90"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        ) : null}

        <div className="flex flex-wrap items-center gap-1.5">
          {nodes.map((node, i) => (
            <div key={node} className="flex items-center gap-1.5">
              <span className="text-[11px] font-medium px-2 py-1 rounded-md border border-border/60 bg-muted/40 text-foreground">
                {node}
              </span>
              {i < nodes.length - 1 && (
                <span className="text-muted-foreground text-[10px]" aria-hidden>
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const glowRef = useRef<HTMLDivElement>(null);
  const heavyEffects = useHeavyHeroEffects();

  useEffect(() => {
    if (!heavyEffects) return;
    const glow = glowRef.current;
    if (!glow) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (clientX / window.innerWidth) * 100;
        const y = (clientY / window.innerHeight) * 100;
        glow.style.setProperty("--mx", `${x}%`);
        glow.style.setProperty("--my", `${y}%`);
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, [heavyEffects]);

  return (
    <section className="relative pt-24 md:pt-28 pb-8 md:pb-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-0" aria-hidden>
        <div className="absolute inset-0 hero-grid opacity-[0.35] dark:opacity-[0.25]" />
        {heavyEffects ? (
          <>
            <div className="absolute inset-0 hero-noise opacity-[0.04] dark:opacity-[0.06]" />
            <div
              ref={glowRef}
              className="absolute inset-0 hero-cursor-glow opacity-60 dark:opacity-80"
            />
            <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-[var(--hero-accent-to)]/20 blur-3xl animate-blob" />
            <div className="absolute bottom-0 left-[-10%] h-64 w-64 rounded-full bg-[var(--hero-accent-from)]/15 blur-3xl animate-blob animation-delay-2000" />
          </>
        ) : (
          <>
            <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-[var(--hero-accent-to)]/12 blur-3xl" />
            <div className="absolute bottom-0 left-[-10%] h-64 w-64 rounded-full bg-[var(--hero-accent-from)]/10 blur-3xl" />
          </>
        )}
      </div>

      <div className="w-full relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-center">
          <div className="flex flex-col gap-6">
            <Avatar className="h-20 w-20 md:h-24 md:w-24 ring-2 ring-border ring-offset-4 ring-offset-background">
              <AvatarImage
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                width={PERSONAL_INFO.avatarWidth}
                height={PERSONAL_INFO.avatarHeight}
                loading="eager"
                fetchPriority="high"
              />
              <AvatarFallback className="text-2xl bg-foreground text-background">
                {PERSONAL_INFO.initials}
              </AvatarFallback>
            </Avatar>

            <div className="space-y-5">
              <p className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span
                    className={cn(
                      "absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60",
                      heavyEffects && "animate-ping"
                    )}
                  />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                {PERSONAL_INFO.availability}
              </p>

              <p className="text-base md:text-lg text-muted-foreground font-medium max-w-[40ch]">
                Hi, I&apos;m {PERSONAL_INFO.nickname} — {PERSONAL_INFO.role}{" "}
                {PERSONAL_INFO.punchline}.
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.12] text-foreground max-w-[18ch]">
                {PERSONAL_INFO.headlineLead}{" "}
                <span className="text-hero-accent">
                  {PERSONAL_INFO.headlineAccent}
                </span>{" "}
                {PERSONAL_INFO.headlineTail}
              </h1>

              <p className="text-base md:text-[1.05rem] text-muted-foreground leading-relaxed max-w-[58ch]">
                {PERSONAL_INFO.description}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  to="/#case-study"
                  onClick={(e) => {
                    if (window.location.pathname === "/") {
                      e.preventDefault();
                      if (window.location.hash !== "#case-study") {
                        window.history.pushState(null, "", "/#case-study");
                      }
                      scrollToHash("#case-study");
                    }
                  }}
                >
                  <Button size="lg" className="px-7 h-11 text-base gap-2">
                    View projects
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
                <a
                  href="/assets/resume/Kapil_Resume.pdf"
                  download="Kapil_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-7 h-11 text-base gap-2"
                  >
                    <FileDown className="h-4 w-4" aria-hidden="true" />
                    Download CV
                  </Button>
                </a>
                <Link to="/contact">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="px-5 h-11 text-base text-muted-foreground hover:text-foreground gap-2"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Contact
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-5 pt-3">
                <TooltipProvider delayDuration={300}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={SOCIAL_LINKS.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        aria-label="X (Twitter)"
                      >
                        <IconX className="h-4 w-4" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>X</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        aria-label="LinkedIn"
                      >
                        <IconLinkedin className="h-4 w-4" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>LinkedIn</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        aria-label="GitHub"
                      >
                        <IconGithub className="h-4 w-4" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>GitHub</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={`mailto:${SOCIAL_LINKS.email}`}
                        className="text-muted-foreground hover:text-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        aria-label="Email"
                      >
                        <Mail className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>Email</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>

          <div className="order-last lg:order-none">
            <HeroArchitecturePreview />
          </div>
        </div>
      </div>
    </section>
  );
}
