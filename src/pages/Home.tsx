import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import GithubActivity from "@/components/sections/GithubActivity";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechnicalSkills } from "@/components/sections/TechnicalSkills";


export default function Home() {
  return (
    <>
      <HeroSection />
      <TechnicalSkills />
      <ExperienceSection />
      <ProjectsSection />
      <GithubActivity />
      <AboutSection />
    </>
  );
}
