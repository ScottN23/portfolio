import { useState } from 'react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="fixed top-0 z-50 flex flex-row items-center justify-between w-full h-12 px-6 py-6 font-bold bg-white text-dark">
      <div className="text-xl md:basis-1/2 xl:text-3xl 2xl:basis-3/4">
        <a href="#landing" className="cursor-pointer">
          scottng
        </a>
      </div>
      <div className="items-center justify-between hidden text-xl md:basis-1/2 3xl:basis-1/4 xl:text-3xl md:flex">
        <a href="#about">about</a>
        <a href="#skills">skills</a>
        <a href="#projects">projects</a>
        <a href="/resume.pdf" download>
          resume
        </a>
        <a href="https://www.linkedin.com/in/scottn523/" target="_blank" rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" className="h-8" />
        </a>
      </div>

      <button
        className="space-y-1 group md:hidden"
        onClick={() => setToggle(!toggle)}
      >
        <div className={`w-6 h-[3px] bg-dark`}></div>
        <div className={`w-6 h-[3px] bg-dark`}></div>
        <div className={`w-6 h-[3px] bg-dark`}></div>
      </button>

      <ul className={`w-screen bg-white absolute right-0 top-0 duration-300 flex flex-col space-y-3 justify-end ${toggle ? "" : "hidden"}`}>
        <button
          className="relative px-12 py-6 ml-auto"
          onClick={() => setToggle(!toggle)}
        >
          <div className={`absolute w-6 h-[3px] rotate-45 bg-dark`}></div>
          <div className={`absolute w-6 h-[3px] -rotate-45 bg-dark`}></div>
        </button>
        <li className="flex justify-center w-full py-4 hover:bg-light">
          <a href="#about">about</a>
        </li>
        <li className="flex justify-center w-full py-4 hover:bg-light">
          <a href="#skills">skills</a>
        </li>
        <li className="flex justify-center w-full py-4 hover:bg-light">
          <a href="#projects">projects</a>
        </li>
        <li className="flex justify-center w-full py-4 hover:bg-light">
          <a href="#resume">resume</a>
        </li>
        <li className="flex justify-center w-full py-4 hover:bg-light">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" className="h-8" />
        </li>
      </ul>
    </header>
  );
}

export default Navbar;