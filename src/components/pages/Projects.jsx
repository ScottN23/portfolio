import Heading from "../interface/Heading"
import link from '../../assets/icons/link.svg'

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col items-center w-full h-screen projects bg-lightbg text-dark" aria-label="projects">
      <Heading title="Projects" />
      <div className="">
        <img src="" alt="Kinguistics Project" />
        <p>Featured Project</p>
        <h3>Kinguistics</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo co Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
        <div className="flex flex-row items-center justify-between">
          <p>React • TailwindCSS • CSS • Firebase</p>
          <i className="devicon-github-original colored"></i>
          <img src={link} alt="" className="" />
        </div>
      </div>
    </section>
  )
}

export default Projects