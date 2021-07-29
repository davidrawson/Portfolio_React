import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

const NavBar = () => {
  return (
    <header className="bg-gray md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl"
          href="#about"
        >
          David Rawson
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:border-1 md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#experience" className="mr-5 hover:text-white">
            Experience
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center text-white bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
};
export default NavBar;
