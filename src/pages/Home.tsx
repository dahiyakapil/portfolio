import { AboutSection } from "@/components/sections/AboutSection";
import { CompaniesSection } from "@/components/sections/CompaniesSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FeaturedCaseStudy } from "@/components/sections/FeaturedCaseStudy";
import GithubActivity from "@/components/sections/GithubActivity";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechnicalSkills } from "@/components/sections/TechnicalSkills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompaniesSection />
      <FeaturedCaseStudy />
      <ExperienceSection />
      <ProjectsSection />
      <ProcessSection />
      <TechnicalSkills />
      <GithubActivity />
      <AboutSection />
      <ContactCTA />
    </>
  );
}
