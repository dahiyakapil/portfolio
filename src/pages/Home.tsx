import { ContactCTA } from "@/components/sections/ContactCTA";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FeaturedCaseStudy } from "@/components/sections/FeaturedCaseStudy";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechnicalSkills } from "@/components/sections/TechnicalSkills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCaseStudy />
      <ExperienceSection />
      <ProjectsSection />
      <TechnicalSkills />
      <ContactCTA />
    </>
  );
}
