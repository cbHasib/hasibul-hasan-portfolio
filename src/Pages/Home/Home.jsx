import React from "react";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects/Projects";
import AboutMe from "./AboutMe/AboutMe";
import "./Home.css";
import HomeHero from "./HomeHero/HomeHero";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
