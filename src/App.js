import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <main className="text-gray-900 bg-gray-300 body-font">
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
};

export default App;
