import Heading from '../interface/Heading.jsx';
import ListSkills from '../interface/ListSkills.jsx';

const Skills = () => {
  return (
    <section id="skills" className="flex flex-col w-full h-screen skills task bg-darkbg text-light" aria-label="skills">
      <Heading title="Digital Tool Box" />
      <div className="flex flex-col items-center justify-center flex-grow py-6 md:flex-row md:justify-between md:mx-20">
        <ListSkills title="Languages" item1="JavaScript" icon1="devicon-javascript-plain" item2="Java" icon2="devicon-java-plain" item3="Python"
          icon3="devicon-python-plain" item4="HTML" icon4="devicon-html5-plain-wordmark" item5="CSS" icon5="devicon-css3-plain-wordmark" />

        <ListSkills title="Web Development" item1="React" icon1="devicon-react-original" item2="Node.JS" icon2="devicon-nodejs-plain" item3="Express"
          icon3="devicon-express-original" item4="Tailwind" icon4="devicon-tailwindcss-plain" item5="Bootstrap" icon5="devicon-bootstrap-plain" />

        <ListSkills title="Technologies" item1="Git" icon1="devicon-github-original" item2="MongoDB" icon2="devicon-mongodb-plain" item3="Firebase"
          icon3="devicon-firebase-plain" item4="Azure" icon4="devicon-azure-plain" item5="SQLite" icon5="devicon-sqlite-plain" />
      </div>
    </section>
  );
};

export default Skills;
