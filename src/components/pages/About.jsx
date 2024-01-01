import Heading from '../interface/Heading.jsx';
import profile from '../../assets/images/profile.webp'

const About = () => {
  return (
    <section id="about" className="flex flex-col w-full h-screen gap-5 task bg-lightbg text-dark" aria-label="about">
      <Heading title="About Me"/>
      <img src={profile} alt="profile image" className="w-9/12 mx-auto"/>
      <div>
        <h3 className="text-3xl font-bold">A brief intro, who am I?</h3>
        <p className="mb-3">
          Hello, I&apos;m Scott—passionate about language,
          culture, with a love for travel and meeting new
          people. With a firm belief in technology&apos;s
          power to unite, my main goal is to build a
          career that bridges gaps and brings people
          closer together.
        </p>
        <p>
          Whether through curating innovative software 
          solutions or collaborating within diverse teams,
          I aim to promote cross-cultural understanding
          and leverage my skills for a positive impact on
          the world. 
        </p>
      </div>
    </section>
  )
}

export default About