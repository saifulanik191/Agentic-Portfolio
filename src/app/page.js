import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExtracurricularSection from "@/components/ExtracurricularSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Saiful Islam — Full-Stack & WordPress Developer",
  description:
    "Portfolio of Saiful Islam, a Full-Stack and WordPress developer based in Bangladesh with 1.5+ years of experience building responsive web applications.",
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <ExtracurricularSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
