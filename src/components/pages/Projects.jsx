import Heading from "../interface/Heading"
import Project from "../interface/Project"
import kinguistics from "../../assets/images/kinguistics.png";
import humanOutsourcers from "../../assets/images/humanOutsourcers.png";
import zephyr from "../../assets/images/zephyr.png";
import moments from "../../assets/images/moments.png";
import sleep from "../../assets/images/sleep.png";

const Projects = () => {
  return (
    <section id="projects" className="w-full pb-16 xl:pb-20 h-fit projects text-dark" aria-label="projects">
      <Heading title="Projects"/>
      <Project
        title="Kinguistics"
        img={kinguistics}
        description="Developed a gamified language-learning platform with Firebase NoSQL for user and event data management. The React frontend includes role-based access control for user authentication and event handling, with refinements made through user research and usability testing."
        stack="React • TailwindCSS • CSS • Firebase"
        git = "https://github.com/UW-INFO442-AU23/jelly-cats"
        link="https://kinguistics-6dd7e.web.app/"
      />
      <Project
        title="Recognized Student Organization Management"
        img={humanOutsourcers}
        description="Designed a full-stack platform for managing student organizations, streamlining events and communication. Led a development team and implemented secure Azure Authentication for 40,000+ users, with a Node.js backend for club management and QR code check-ins."
        stack="HTML • CSS • Express • REST API • Next.js • Firebase"
        git = "https://github.com/JunAhn885/INFO441_Final_Project"
        link=""
      />
      <Project
        title="Zephyr"
        img={zephyr}
        description="Developed a full-stack e-commerce website with user authentication, purchasing, and search capabilities. Managed a SQLite database with 1,000+ entries and created detailed API documentation for all endpoints."
        stack="Javascript • HTML • CSS • Express • and SQLite"
        git = "https://github.com/peijie36/Zephyr"
        link=""
      />
      <Project
        title="Moments"
        img={moments}
        description="Created a responsive website for sharing photos and digital art, enabling users to manage posts with Firebase authentication. Refactored to a React app, improving load times by 30% and data fetching by 50%, while enhancing scalability and responsiveness."
        stack="HTML • CSS • React • Firebase • Bootstrap"
        git = "https://github.com/info340b-sp22/Moments"
        link="https://moments-175e7.web.app/"
      />
      <Project
        title="Can&apos;t Sleep Through the Pandemic"
        img={sleep}
        description="Conducted research on COVID-19, sleep, and health data using Google Dataset Search. Analyzed a dataset of over 30,000 entries in R to identify correlations. Developed an interactive R Shiny website featuring an introduction, four interactive graphs, key findings, and a data insights report."
        stack="R • HTML • CSS"
        git = "https://github.com/info-201a-wi22/Can-t-Sleep-Through-the-Pandemic"
        link="https://scottng.shinyapps.io/Final_Project/"
      />
    </section>
  )
}

export default Projects