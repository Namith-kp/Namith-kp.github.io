import ScrollyCanvas from "@/components/ScrollyCanvas";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <ScrollyCanvas />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </main>
  );
}
