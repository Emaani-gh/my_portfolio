import React from "react";
import { NavBar } from "../Components/NavBar";
import { Hero } from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";

export const Home = () => {
  return (
    <header>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </header>
  );
};
