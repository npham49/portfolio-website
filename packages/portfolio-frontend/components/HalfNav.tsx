"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { CurrentSectionContext } from "@/context/currentSection";
import Modal from "./common/Modal";

const tailwindClassesCurrent = " w-14 bg-stone-200";
const tailwindClassesNotCurrent =
  "w-8 bg-stone-600 group-hover:w-14 group-hover:bg-stone-200 group-focus-visible:w-14 group-focus-visible:bg-stone-200";
const tailwindTextClassesCurrent =
  "text-stone-200 group-focus-visible:text-stone-500";
const tailwindTextClassesNotCurrent =
  "text-stone-500 group-hover:text-stone-200 group-focus-visible:text-stone-200";

const HalfNav = ({ currentScroll }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [currentPageSection, setCurrentPageSection] = useState("about");
  const ref = useRef<HTMLDivElement>(null);
  // @ts-ignore
  const { setCurrentSection, currentSection } = useContext(
    CurrentSectionContext,
  );
  useEffect(() => {
    if (ref.current?.clientHeight) {
      setCurrentSection((prev: any) => ({
        ...prev,
        contact: ref.current?.clientHeight,
      }));
    }
  }, [ref.current?.clientHeight]);
  useEffect(() => {
    // get the current page section by sectracting the scroll position from the current section
    // if the current section is less than the current scroll position, then the current page section is the next section
    // if the current section is greater than the current scroll position, then the current page section is the current section
    switch (true) {
      case currentScroll < currentSection.about && currentScroll > 0:
        setCurrentPageSection("about");
        break;
      case currentScroll > currentSection.about &&
        currentScroll < currentSection.about + currentSection.experience:
        setCurrentPageSection("experiences");
        break;
      case currentScroll > currentSection.about + currentSection.experience &&
        currentScroll <
          currentSection.about +
            currentSection.experience +
            currentSection.projects:
        setCurrentPageSection("projects");
        break;
    }
  }, [currentScroll]);
  return (
    <header
      ref={ref}
      className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
    >
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-stone-200 sm:text-5xl">
          <a href="/">Dinh Nguyen (Brian) Pham</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-stone-200 sm:text-xl">
          Full Stack Developer
        </h2>
        <p className="mt-2 max-w-xs leading-normal">
          2 years of experience in developing secure, diverse, and accessible
          web applications.
        </p>
        <a
          href="https://docs.google.com/document/d/1BMTNUp5SANlbFwqYvqjmKneAzkcsT-bl/edit?usp=sharing&ouid=111157184374471284633&rtpof=true&sd=true"
          target="_blank"
          rel="noreferrer noopener"
          className="cursor-pointer mt-6 mr-2 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-stone-200 bg-stone-600 hover:bg-stone-200 hover:text-stone-600 transition-colors"
        >
          Get Resume
        </a>
        <button
          onClick={() => setShowModal(true)}
          className="cursor-pointer mt-6 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-stone-200 bg-stone-600 hover:bg-stone-200 hover:text-stone-600 transition-colors"
        >
          Contact Me
        </button>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            <li>
              <a className="group flex items-center py-3 active" href="#about">
                <span
                  className={`nav-indicator mr-4 h-px ${
                    currentPageSection === "about"
                      ? tailwindClassesCurrent
                      : tailwindClassesNotCurrent
                  } transition-all  motion-reduce:transition-none`}
                ></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    currentPageSection === "about"
                      ? "w-6 mr-2"
                      : "group-hover:w-6 group-hover:mr-2 w-0 m-0"
                  } transition-all h-6`}
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
                <span
                  className={`nav-text text-xs font-bold uppercase tracking-widest ${
                    currentPageSection === "about"
                      ? tailwindTextClassesCurrent
                      : tailwindTextClassesNotCurrent
                  }`}
                >
                  About
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#experience">
                <span
                  className={`nav-indicator mr-4 h-px ${
                    currentPageSection === "experiences"
                      ? tailwindClassesCurrent
                      : tailwindClassesNotCurrent
                  } transition-all  motion-reduce:transition-none`}
                ></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    currentPageSection === "experiences"
                      ? "w-6 mr-2"
                      : "group-hover:w-6 group-hover:mr-2 w-0 m-0"
                  } transition-all h-6`}
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M176 56V96H336V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zM128 96V56c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56V96v32V480H128V128 96zM64 96H96V480H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zM448 480H416V96h32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64z" />
                </svg>
                <span
                  className={`nav-text text-xs font-bold uppercase tracking-widest ${
                    currentPageSection === "experiences"
                      ? tailwindTextClassesCurrent
                      : tailwindTextClassesNotCurrent
                  }`}
                >
                  Experiences
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#projects">
                <span
                  className={`nav-indicator mr-4 h-px ${
                    currentPageSection === "projects"
                      ? tailwindClassesCurrent
                      : tailwindClassesNotCurrent
                  } transition-all  motion-reduce:transition-none`}
                ></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    currentPageSection === "projects"
                      ? "w-6 mr-2"
                      : "group-hover:w-6 group-hover:mr-2 w-0 m-0"
                  } transition-all h-6`}
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
                <span
                  className={`nav-text text-xs font-bold uppercase tracking-widest ${
                    currentPageSection === "projects"
                      ? tailwindTextClassesCurrent
                      : tailwindTextClassesNotCurrent
                  }`}
                >
                  Projects
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-stone-200"
            href="https://github.com/npham49"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
          >
            <span className="sr-only">GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-stone-200"
            href="https://www.instagram.com/n.pham49/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram (opens in a new tab)"
          >
            <span className="sr-only">Instagram</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 1000"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
            </svg>
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-stone-200"
            href="https://www.linkedin.com/in/dinhnguyenpham/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default HalfNav;
