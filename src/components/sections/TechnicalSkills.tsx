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
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    { name: "React", icon: SiReact, color: "text-cyan-500" },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "text-gray-900 dark:text-white",
    },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "Git", icon: SiGit, color: "text-orange-600" },
    { name: "Docker", icon: SiDocker, color: "text-blue-500" },
    { name: "HTML5", icon: SiHtml5, color: "text-orange-600" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
  ];

  return (
    <section className="py-16">
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
                  className={`text-xl ${skill.color} group-hover:scale-110 transition-transform`}
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
