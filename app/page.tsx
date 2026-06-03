import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";
import StatusBar from "@/components/StatusBar";

export default function Home() {
  return (
    // Añadimos pb-10 para compensar el espacio de la barra inferior
    <main className="bg-[#0a0a0a] min-h-screen antialiased selection:bg-cyan-500/30 pb-10">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <Footer />
      <StatusBar />
    </main>
  );
}