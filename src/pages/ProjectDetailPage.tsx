import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PROJECTS } from "@/constants/portfolio-data";
import { StatusBadge } from "@/components/ui/StatusBadge";

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Project Image */}
        {project.image && (
          <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 mb-12 shadow-2xl">
            <div className="absolute inset-6 bg-slate-900/90 rounded-xl overflow-hidden shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          </div>
        )}

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-sm font-medium">
              {project.status || "Completed"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {project.title}
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            {project.description}
          </p>

          {/* Project Metadata */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {project.timeline && (
              <div>
                <p className="text-muted-foreground">Timeline</p>
                <p className="text-sm text-foreground">{project.timeline}</p>
              </div>
            )}

            {project.role && (
              <div>
                <p className="text-muted-foreground">Role</p>
                <p className="text-sm text-foreground">{project.role}</p>
              </div>
            )}

            {project.team && (
              <div>
                <p className="text-muted-foreground">Team</p>
                <p className="text-sm text-foreground">{project.team}</p>
              </div>
            )}

            <div className="flex flex-col gap-1">
              <p className="text-sm text-muted-foreground">Status</p>
              <StatusBadge status={project.status} />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </Button>

            {project.github && (
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </Button>
            )}
          </div>
        </div>

        <Separator className="my-12" />

        {/* Overview Section */}
        {project.overview && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Overview
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {project.overview}
            </p>
          </section>
        )}

        {/* What Users Can Do Section */}
        {project.features && project.features.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              What Users Can Do
            </h2>
            <div className="space-y-3">
              {project.features.map((feature, index) => {
                const [title, ...rest] = feature.split(":");
                const description = rest.join(":");
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-base text-muted-foreground">
                        <span className="font-semibold text-foreground">
                          {title}
                        </span>
                        {description && `: ${description.trim()}`}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Why I Built This Section */}
        {project.challenges && project.challenges.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Why I Built This
            </h2>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              {project.problem}
            </p>
            <div className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                  </div>
                  <p className="text-base text-muted-foreground flex-1">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech Stack Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-3 py-1.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* After Launch & Impact Section */}
        {project.impact && project.impact.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              After Launch & Impact
            </h2>
            <div className="space-y-3">
              {project.impact.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                  </div>
                  <p className="text-base text-muted-foreground flex-1">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Future Plans Section */}
        {project.futurePlans && project.futurePlans.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Future Plans
            </h2>
            <div className="space-y-3">
              {project.futurePlans.map((plan, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                  </div>
                  <p className="text-base text-muted-foreground flex-1">
                    {plan}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <Separator className="my-12" />

        {/* CTA Section */}
        <div className="text-center py-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Check Out The Project
          </h3>
          <p className="text-muted-foreground text-base mb-8 max-w-2xl mx-auto">
            Explore the live demo or dive into the source code to see how it
            works
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="gap-2">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Visit Live Site
              </a>
            </Button>

            {project.github && (
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
