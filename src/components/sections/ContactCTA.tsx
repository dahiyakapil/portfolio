import { FileDown, Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/constants/portfolio-data";

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
            Let&apos;s build reliable software.
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            I enjoy building production systems where reliability matters more
            than demos—payments, concurrency, distributed jobs, and software
            that real businesses depend on.
          </p>

          <p className="text-sm text-foreground/85 leading-relaxed">
            Looking for backend and full-stack roles focused on distributed
            systems, payments, APIs, and production infrastructure.
          </p>

          <div className="flex flex-wrap gap-2.5 pt-1">
            <a href={`mailto:${SOCIAL_LINKS.email}`}>
              <Button size="lg" className="gap-2">
                <Mail className="h-4 w-4" />
                Email
              </Button>
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="gap-2">
                <SiLinkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="gap-2">
                <SiGithub className="h-4 w-4" />
                GitHub
              </Button>
            </a>
            <a
              href="/assets/resume/Kapil_Resume.pdf"
              download="Kapil_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="lg" className="gap-2">
                <FileDown className="h-4 w-4" />
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
