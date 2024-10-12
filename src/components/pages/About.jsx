import Heading from '../interface/Heading.jsx';
import profile from '../../assets/images/profile.webp';

const About = () => {
  return (
    <section id="about" className="flex flex-col w-full h-screen about text-dark" aria-label="about">
      <Heading title="About Me" />
      <div className="flex flex-col flex-grow gap-3 px-3 mt-3 md:flex-row">
        <div className="flex items-center justify-center md:w-1/2">
          <img src={profile} alt="profile image" className="w-9/12 md:max-h-[80vh] md:w-fit" />
        </div>
        <div className="flex flex-col justify-between w-full gap-3 md:w-1/2 md:justify-center md:gap-5 xl:gap-8">
          <h3 className="text-3xl font-bold md:text-5xl">A brief intro, who am I?</h3>
          <p className="md:text-3xl">
            Hello, I&apos;m Scott—passionate about language, culture, with a love for travel and meeting new people. With a firm
            belief in technology&apos;s power to unite, my main goal is to build a career that bridges gaps and brings people
            closer together.
          </p>
          <p className="mb-6 md:text-3xl md:mb-0">
            Whether through curating innovative software solutions or collaborating within diverse teams, I aim to promote
            cross-cultural understanding and leverage my skills for a positive impact on the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
