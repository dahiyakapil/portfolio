import { FileDown, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/constants/portfolio-data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ContactCTA() {
  return (
    <section
      id="contact"
      className="py-14 px-4 sm:px-6 lg:px-8 border-t border-border/40"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-10">
        <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-2xl overflow-hidden border border-border/50 shrink-0">
          <Avatar className="h-full w-full rounded-none">
            <AvatarImage
              src={PERSONAL_INFO.avatarLarge}
              alt={PERSONAL_INFO.name}
              className="object-cover w-full h-full"
            />
          </Avatar>
        </div>

        <div className="space-y-5 max-w-[62ch]">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for opportunities
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Interested in building reliable software together?
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            I&apos;m currently looking for backend and full-stack opportunities
            where I can build production systems, APIs, payments, and
            distributed infrastructure.
          </p>

          <p className="text-sm text-foreground/80 leading-relaxed">
            {PERSONAL_INFO.availability}
          </p>

          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <Button asChild size="lg" className="gap-2">
              <Link to="/contact">
                <Mail className="h-4 w-4" />
                Contact me
              </Link>
            </Button>
            <a
              href="/assets/resume/Kapil_Resume.pdf"
              download="Kapil_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="gap-2">
                <FileDown className="h-4 w-4" />
                Download CV
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:text-foreground hover:border-border transition-colors"
                    aria-label="GitHub"
                  >
                    <SiGithub className="h-4 w-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>GitHub</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:text-foreground hover:border-border transition-colors"
                    aria-label="LinkedIn"
                  >
                    <SiLinkedin className="h-4 w-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>LinkedIn</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="inline-flex items-center gap-2 h-9 rounded-full border border-border/60 px-3 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-border transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0" />
                    {SOCIAL_LINKS.email}
                  </a>
                </TooltipTrigger>
                <TooltipContent>Email</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </section>
  );
}
