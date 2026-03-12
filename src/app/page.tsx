import { Nav } from "@/components/Nav";
import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { MissionSection } from "@/components/MissionSection";
import { About } from "@/components/About";
import { Qualities } from "@/components/Qualities";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Atharva Nagarsekar | Aspiring Commercial Pilot",
  description:
    "Portfolio of Atharva Nagarsekar — Aspiring Commercial Pilot & AI Engineer. Mumbai, India.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0a0f1e] flex flex-col antialiased text-slate-900 dark:text-white transition-colors duration-300">
      {/* Global ambient atmosphere — fixed radial gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-sky-400/[0.04] blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-amber-400/[0.04] blur-[140px]" />
      </div>

      {/* Sticky Navigation */}
      <Nav />

      {/* Hero — Scrollytelling Canvas */}
      <section className="relative w-full z-10 block">
        <ScrollyCanvas />
      </section>

      {/* Mission / Why I Fly */}
      <section className="relative w-full z-20 block">
        <MissionSection />
      </section>

      {/* About */}
      <section
        id="about"
        className="relative w-full z-20 block shadow-[0_-20px_80px_rgba(0,0,0,0.05)] dark:shadow-[0_-20px_80px_rgba(0,0,0,0.7)]"
      >
        <About />
      </section>



      {/* Qualities / Skills */}
      <section id="qualities" className="relative w-full z-20 block">
        <Qualities />
      </section>

      {/* Projects / Flight Log */}
      <section id="projects" className="relative w-full z-20 block">
        <Projects />
      </section>

      {/* Contact / Coms Channel */}
      <section id="contact" className="relative w-full z-20 block bg-slate-50 dark:bg-[#0a0f1e] transition-colors duration-300">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
