import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/interface/Navbar";
import Landing from "./components/pages/Landing";
import Task from "./components/pages/Task";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Footer from "./components/interface/Footer";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRefs = useRef([]);

  useEffect(() => {
    const sectionHeadings = document.querySelectorAll(".section-heading");
    sectionHeadings.forEach((heading) => {
      const headings = heading.querySelectorAll(".heading");

      headings.forEach((individualHeading) => {
        ScrollTrigger.create({
          trigger: heading,
          start: "top 550px",
          end: "bottom 550px",
          animation: gsap.to(individualHeading, {
            opacity: 1,
            y: 0,
            ease: "power4.out",
            duration: 1,
          }),
          toggleActions: "play none none none",

        });
        ScrollTrigger.refresh()
      });
    });
  }, []);

  return (
    <div className="">
      <Navbar />
      <Landing />
      <main className="">
        <Task />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App