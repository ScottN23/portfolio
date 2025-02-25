import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/interface/Navbar";
import Landing from "./components/pages/Landing";
import Task from "./components/pages/Task";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import Footer from "./components/interface/Footer";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Landing />
      <main className="">
        <Task />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App