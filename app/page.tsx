import type { ReactNode } from "react";
import AboutSection from "../components/about-section";
import ProjectsSection from "../components/projects-section";
import WorkExperienceSection from "../components/work-experience-section";

export default function Home(): ReactNode {
  return (
    <>
      <AboutSection />
      <ProjectsSection />
      <WorkExperienceSection />
    </>
  );
}
