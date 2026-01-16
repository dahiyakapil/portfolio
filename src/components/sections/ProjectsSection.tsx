import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/constants/portfolio-data";
import type { Project } from "@/types/portfolio";

function ProjectCard({ project }: { project: Project }) {
  return (
   <Card className="rounded-xl bg-transparent">
      {/* IMAGE AREA (flush to top, no white) */}
      <div className="relative h-[220px] bg-gradient-to-br from-pink-500 via-purple-500 to-fuchsia-600">
        <div className="absolute inset-0 flex items-end justify-center pb-6">
          <div className="w-[88%] h-[160px] overflow-hidden shadow-2xl bg-slate-900">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-500 text-sm">
                Project Preview
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CONTENT AREA (white starts here) */}
      <div className="bg-white p-5 rounded-b-xl">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">
            {project.title}
          </h3>

          <div className="flex gap-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-700"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={project.github!}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-700"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {project.solution}
        </p>

        <div className="mb-4">
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
            Technologies
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full border border-yellow-900 bg-green-500" />
            Operational
          </span>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 flex items-center gap-1"
          >
            View details
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </Card>
  );
}


export function ProjectsSection() {
  return (
    <section id="projects" className="mt-24 mb-32">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
          Featured
        </p>
        <h2 className="text-4xl font-bold text-gray-900">Projects</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 ">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}
