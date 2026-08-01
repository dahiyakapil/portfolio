import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { CAREER_TIMELINE, PERSONAL_INFO } from "@/constants/portfolio-data";

export function AboutSection() {
  return (
    <section id="about" className="pt-6 pb-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
        About
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-10 items-start">
        <div className="flex justify-center md:justify-start">
          <div className="relative aspect-square w-48 md:w-full max-w-[200px] rounded-2xl overflow-hidden border border-border/50">
            <Avatar className="h-full w-full rounded-none">
              <AvatarImage
                src={PERSONAL_INFO.avatarLarge}
                alt={PERSONAL_INFO.name}
                className="object-cover w-full h-full"
              />
            </Avatar>
          </div>
        </div>

        <div className="space-y-5">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            {PERSONAL_INFO.name}
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-[65ch]">
            {PERSONAL_INFO.bio}
          </p>
          <p className="text-sm font-medium text-foreground/80">
            {PERSONAL_INFO.availability}
          </p>

          <div className="pt-2">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Growth
            </p>
            <ol className="space-y-3 border-l border-border/60 pl-4">
              {CAREER_TIMELINE.map((item) => (
                <li key={item.value} className="relative">
                  <span className="absolute -left-[1.28rem] top-1.5 h-2 w-2 rounded-full bg-foreground" />
                  <p className="text-sm font-semibold text-foreground">
                    {item.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
