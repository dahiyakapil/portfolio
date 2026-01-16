import { Spotlight } from "./ui/spotlight";
import { Navbar } from "./shared/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { TechnicalSkills } from "./sections/TechnicalSkills";
import { ExperienceSection } from "./sections/ExperienceSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { AboutSection } from "./sections/AboutSection";
import { Footer } from "./shared/Footer";
import GithubActivity from "./sections/GithubActivity";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <HeroSection />
        <TechnicalSkills />
        <ExperienceSection />
        <ProjectsSection />
        <GithubActivity />
        <AboutSection />
        <Footer />
      </div>
    </div>
  );
}
