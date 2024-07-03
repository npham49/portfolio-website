"use client";
import { CurrentSectionContext } from "@/context/currentSection";
import Link from "next/link";
import React, { useEffect, useContext, useState } from "react";

const BottomNav = ({ currentScroll }: any) => {
  const [currentPageSection, setCurrentPageSection] = useState("contact");

  // @ts-ignore
  const { currentSection } = useContext(CurrentSectionContext);
  useEffect(() => {
    // get the current page section by sectracting the scroll position from the current section
    // if the current section is less than the current scroll position, then the current page section is the next section
    // if the current section is greater than the current scroll position, then the current page section is the current section
    switch (true) {
      case currentScroll > 0 && currentScroll < currentSection.contact:
        setCurrentPageSection("contact");
        break;
      case currentScroll > currentSection.contact &&
        currentScroll < currentSection.about + currentSection.contact:
        setCurrentPageSection("about");
        break;
      case currentScroll > currentSection.about + currentSection.contact &&
        currentScroll <
          currentSection.about +
            currentSection.contact +
            currentSection.experience:
        setCurrentPageSection("experiences");
        break;
      case currentScroll >
        currentSection.about +
          currentSection.contact +
          currentSection.experience &&
        currentScroll <
          currentSection.about +
            currentSection.contact +
            currentSection.experience +
            currentSection.projects:
        setCurrentPageSection("projects");
        break;
    }
  }, [currentScroll]);
  return (
    <div className=" w-5/6 lg:hidden fixed z-50 h-16 max-w-lg -translate-x-1/2 bg-stone-800 border border-stone-400 rounded-full bottom-4 left-1/2">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
        <Link
          href={"/"}
          data-tooltip-target="tooltip-home"
          type="Link"
          onClick={() => setCurrentPageSection("contact")}
          className={`inline-flex flex-col items-center justify-center px-5 rounded-s-full ${
            currentPageSection === "contact"
              ? "bg-stone-400 text-stone-800"
              : ""
          } group transition`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mb-1"
            fill="currentColor"
            viewBox="0 0 512 512"
          >
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
          </svg>
          <p className="text-xs font-medium" id="tooltip-home">
            Contact
          </p>
        </Link>
        <Link
          href={"#about"}
          data-tooltip-target="tooltip-wallet"
          type="Link"
          onClick={() => setCurrentPageSection("about")}
          className={`inline-flex flex-col items-center justify-center px-5 ${
            currentPageSection === "about" ? "bg-stone-400 text-stone-800" : ""
          } group transition`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mb-1"
            fill="currentColor"
            viewBox="0 0 448 512"
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
          <p className="text-xs font-medium" id="tooltip-home">
            About
          </p>
        </Link>
        <Link
          href={"#experience"}
          data-tooltip-target="tooltip-experience"
          type="Link"
          onClick={() => setCurrentPageSection("experiences")}
          className={`inline-flex flex-col items-center justify-center px-5 ${
            currentPageSection === "experiences"
              ? "bg-stone-400 text-stone-800"
              : ""
          } group transition`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mb-1"
            fill="currentColor"
            viewBox="0 0 512 512"
          >
            <path d="M176 56V96H336V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zM128 96V56c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56V96v32V480H128V128 96zM64 96H96V480H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zM448 480H416V96h32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64z" />
          </svg>
          <p className="text-xs font-medium" id="tooltip-home">
            Experiences
          </p>
        </Link>
        <Link
          href={"#projects"}
          data-tooltip-target="tooltip-profile"
          type="Link"
          onClick={() => setCurrentPageSection("projects")}
          className={`inline-flex flex-col items-center justify-center px-5 rounded-e-full ${
            currentPageSection === "projects"
              ? "bg-stone-400 text-stone-800"
              : ""
          } group transition`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mb-1"
            fill="currentColor"
            viewBox="0 0 512 512"
          >
            <path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
          <p className="text-xs font-medium" id="tooltip-home">
            Projects
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
