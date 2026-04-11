import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingBlobs from "@/components/FloatingBlobs";

const Index = () => (
  <div className="noise-overlay relative">
    <Navbar />
    <Hero />
    <About />
    <div className="relative">
      <FloatingBlobs />
      <Skills />
    </div>
    <Projects />
    <div className="relative">
      <FloatingBlobs />
      <Experience />
    </div>
    <Achievements />
    <Contact />
    <Footer />
  </div>
);

export default Index;
