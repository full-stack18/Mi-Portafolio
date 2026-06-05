import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import SkillsGrid from "@/components/SkillsGrid";
import Timeline from "@/components/Timeline";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import StatusBar from "@/components/StatusBar";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen antialiased selection:bg-cyan-500/30 pb-10">
      <Navbar />
      <Hero />
      <AboutMe />
      <SkillsGrid />
      <Timeline />
      <ProjectsSection />
      <Footer />
      <StatusBar />
    </main>
  );
}