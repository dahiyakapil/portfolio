import { Suspense } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/constants/portfolio-data";

const AvatarSkeleton = () => (
  <div className="h-28 w-28 md:h-32 md:w-32 rounded-full bg-muted animate-pulse" />
);

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center py-10">
      <div className="w-full">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex flex-col gap-6">
            {/* Avatar */}
            <Suspense fallback={<AvatarSkeleton />}>
              <Avatar className="h-24 w-24 ring-2 ring-border ring-offset-4 ring-offset-background">
                <AvatarImage
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  loading="lazy"
                />
                <AvatarFallback className="text-2xl bg-gradient-to-br from-purple-500 to-pink-500">
                  {PERSONAL_INFO.initials}
                </AvatarFallback>
              </Avatar>
            </Suspense>

            {/* Text */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight leading-tight">
                Hi, I'm {PERSONAL_INFO.nickname} —{" "}
                <span className="text-muted-foreground">
                  {PERSONAL_INFO.title}
                </span>
              </h1>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                I build real-world web applications with authentication,
                dashboards, APIs, and production deployments. Experienced in
                React, TypeScript, Node.js, and MongoDB.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-3 md:gap-4 pt-4">
                <Link to="/contact">
                  <Button size="lg" className="px-8 h-11 text-base">
                    <Mail className="mr-2 h-4 w-4" />
                    Get in touch
                  </Button>
                </Link>
                <Link to="/resume">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 h-11 text-base"
                  >
                    Resume / CV
                  </Button>
                </Link>
              </div>

              {/* Socials */}
              <div className="flex gap-5 pt-2">
                <a
                  href={SOCIAL_LINKS.github}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={SOCIAL_LINKS.email}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
