import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Research from "@/components/Research";
import Exploring from "@/components/Exploring";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollSection from "@/components/ScrollSection";

export default function Home() {
  return (
    <main
      id="top"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#030712]
      "
    >

      {/* Animated Background */}
      <Background />


      {/* Main Website */}
      <div
        className="
          relative
          z-10
        "
      >

        <Navbar />


        {/* Hero */}
        <Hero />


        {/* Stats */}
        <Stats />


        {/* About */}
        <ScrollSection id="about">
          <About />
        </ScrollSection>


        {/* Skills */}
        <ScrollSection id="skills">
          <Skills />
        </ScrollSection>


        {/* Tech Stack */}
        <TechStack />


        {/* Projects */}
        <ScrollSection id="projects">
          <Projects />
        </ScrollSection>


        {/* Experience */}
        <ScrollSection id="experience">
          <Experience />
        </ScrollSection>


        {/* Education */}
        <ScrollSection id="education">
          <Education />
        </ScrollSection>


        {/* Research */}
        <ScrollSection id="research">
          <Research />
        </ScrollSection>


        {/* Exploring */}
        <Exploring />


        {/* Contact */}
        <ScrollSection id="contact">
          <Contact />
        </ScrollSection>


        <Footer />

      </div>

    </main>
  );
}