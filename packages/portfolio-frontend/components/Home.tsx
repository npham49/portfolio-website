"use client";
import React, { useEffect, useState } from "react";
import HalfNav from "./HalfNav";
import BottomNav from "./BottomNav";
import About from "./About";
import Experience from "./Experience";
import { CurrentSectionContext } from "@/context/currentSection";

const Home = ({ about, experiences, skills }: any) => {
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
        </div>
      </div>
    </CurrentSectionContext.Provider>
  );
};

export default Home;
