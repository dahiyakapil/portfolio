import { Suspense } from "react";
import { User } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
} from "react-icons/si";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { PERSONAL_INFO } from "@/constants/portfolio-data";
import { TECH_COLORS } from "@/constants/techColors";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const AvatarSkeleton = () => (
  <div className="h-56 w-56 rounded-2xl bg-muted animate-pulse" />
);

interface TechIconProps {
  icon: React.ElementType;
  label: string;
}

function TechIcon({ icon: Icon, label }: TechIconProps) {
  const iconName = Icon.displayName || Icon.name;
  const color = TECH_COLORS[iconName] || "#9CA3AF";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="cursor-default">
          <Icon className="h-6 w-6" style={{ color }} />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-xs font-medium">{label}</p>
      </TooltipContent>
    </Tooltip>
  );
}


export function AboutSection() {
  return (
    <section id="about">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
          About Me
        </h2>
      </div>
      <Card className="border-border/40 bg-background/40 backdrop-blur p-0 m-0">
        <CardContent>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[260px_1fr]">
            {/* LEFT */}
            <div className="flex justify-center md:justify-start">
              <Suspense fallback={<AvatarSkeleton />}>
                <div className="relative aspect-square w-56 rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                  <Avatar className="h-full w-full rounded-none">
                    <AvatarImage
                      src={PERSONAL_INFO.avatarLarge}
                      alt={PERSONAL_INFO.name}
                      className="object-cover w-full h-full"
                    />
                  </Avatar>
                </div>
              </Suspense>
            </div>

            {/* RIGHT */}
            <div className="space-y-4 m-0">
              <div className="leading-tight">
                <h2 className="text-3xl font-bold">Kapil Dahiya</h2>
              </div>

              <p className="text-muted-foreground max-w-xl">
                I build production-grade web applications with a strong focus on
                frontend architecture, performance, and long-term scalability.
              </p>

              <div>
                <p className="text-md font-bold text-muted-foreground mb-3">
                  Skills
                </p>
                <TooltipProvider>
                  <div className="flex items-center space-x-2">
                    <TechIcon icon={SiReact} label="React" />
                    <TechIcon icon={SiNextdotjs} label="Next.js" />
                    <TechIcon icon={SiTypescript} label="TypeScript" />
                    <TechIcon icon={SiNodedotjs} label="Node.js" />
                  </div>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
