import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen antialiased selection:bg-cyan-500/30">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
