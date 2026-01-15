import { Suspense } from "react";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { PERSONAL_INFO, SKILL_CATEGORIES } from "@/constants/portfolio-data";

const AvatarSkeleton = () => (
  <div className="h-28 w-28 md:h-32 md:w-32 rounded-full bg-muted animate-pulse shrink-0" />
);

interface SkillGroupProps {
  category: string;
  skills: string[];
}

function SkillGroup({ category, skills }: SkillGroupProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-sm bg-muted/50 rounded-md text-foreground/90"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="mb-32">
      <Card className="border-border/40 shadow-sm">
        <CardContent className="p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center mb-10">
              <Suspense fallback={<AvatarSkeleton />}>
                <Avatar className="h-28 w-28 md:h-32 md:w-32 ring-2 ring-border ring-offset-4 ring-offset-background shrink-0">
                  <AvatarImage
                    src={PERSONAL_INFO.avatarLarge}
                    alt={PERSONAL_INFO.name}
                    loading="lazy"
                  />
                  <AvatarFallback className="text-4xl bg-gradient-to-br from-purple-500 to-pink-500">
                    {PERSONAL_INFO.initials}
                  </AvatarFallback>
                </Avatar>
              </Suspense>

              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <h2 className="text-3xl md:text-4xl font-bold">{PERSONAL_INFO.name}</h2>
                </div>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {PERSONAL_INFO.bio}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {(Object.entries(SKILL_CATEGORIES) as [string, string[]][]).map(([category, skills]) => (
                <SkillGroup key={category} category={category} skills={skills} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
