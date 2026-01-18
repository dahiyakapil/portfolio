import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

export function TechnicalSkills() {
  const skills = [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  ];

  return (
    <section className="py-10">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Technical Skills
          </h2>
          <p className="text-base text-muted-foreground">
            A showcase of my technical expertise and the technologies I work
            with to build modern applications.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="flex items-center gap-2.5 px-4 py-3 rounded-lg border border-border/50 bg-card hover:bg-accent/50 transition-all hover:shadow-lg hover:border-border group"
              >
                <Icon
                  className="text-xl group-hover:scale-110 transition-transform"
                  style={{ color: skill.color }}
                />
                <span className="font-medium text-sm text-foreground">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
