"use client";
import React, { useEffect, useState } from "react";
import HalfNav from "./HalfNav";
import BottomNav from "./BottomNav";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import Created from "./Created";
import { CurrentSectionContext } from "@/context/currentSection";
import MouseTracker from "./MouseTracker";

const Home = ({ about, experiences, skills, projects }: any) => {
  const [currentSection, setCurrentSection] = React.useState({
    contact: 0,
    about: 0,
    experience: 0,
    projects: 0,
  });
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <CurrentSectionContext.Provider
      // @ts-ignore
      value={{ currentSection, setCurrentSection }}
    >
      <div className="lg:flex lg:justify-between lg:gap-4 text-stone-400">
        <BottomNav currentScroll={scrollPosition} />
        <HalfNav currentScroll={scrollPosition} />
        <div className="pt-24 lg:w-1/2 lg:py-24 mb-16 lg:mb-0">
          <About about={about} />
          <Experience experiences={experiences} skills={skills} />
          <Project projects={projects} skills={skills} />
          <Created />
        </div>
      </div>
    </CurrentSectionContext.Provider>
  );
};

export default Home;
