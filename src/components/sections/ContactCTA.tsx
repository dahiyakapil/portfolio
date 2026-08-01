import { Link } from "react-router-dom";
import { Mail, FileText } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/constants/portfolio-data";

export function ContactCTA() {
  return (
    <section
      id="contact-cta"
      className="py-14 px-4 sm:px-6 lg:px-8 border-t border-border/40"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-10">
        <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-2xl overflow-hidden border border-border/50 shrink-0">
          <Avatar className="h-full w-full rounded-none">
            <AvatarImage
              src={PERSONAL_INFO.avatarLarge}
              alt={PERSONAL_INFO.name}
              className="object-cover w-full h-full"
            />
          </Avatar>
        </div>

        <div className="space-y-5 max-w-[65ch]">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for opportunities
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Let's work together
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {PERSONAL_INFO.availability}. Tell me about the role or product —
            I'll reply within a day.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link to="/contact">
              <Button size="lg" className="gap-2">
                <Mail className="h-4 w-4" />
                Contact me
              </Button>
            </Link>
            <a
              href="/assets/resume/Kapil_Resume.pdf"
              download="Kapil_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="gap-2">
                <FileText className="h-4 w-4" />
                Download CV
              </Button>
            </a>
            <a href={`mailto:${SOCIAL_LINKS.email}`}>
              <Button variant="ghost" size="lg" className="gap-2">
                {SOCIAL_LINKS.email}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
