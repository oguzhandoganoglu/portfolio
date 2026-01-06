import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
