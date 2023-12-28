"use client";
import { useRef, useContext, useEffect } from "react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

import client from "@/config/client";
import { CurrentSectionContext } from "@/context/currentSection";
import PortableTextComponent from "./common/PortableText";
import SkillLinks from "./common/SkillLinks";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

const Project = ({ projects, skills }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  // @ts-ignore
  const { setCurrentSection } = useContext(CurrentSectionContext);
  function urlFor(source: any) {
    return builder.image(source);
  }
  useEffect(() => {
    if (ref.current?.clientHeight) {
      setCurrentSection((prev: any) => ({
        ...prev,
        projects: ref.current?.clientHeight,
      }));
    }
  }, []);
  return (
    <div ref={ref} id="projects" className="w-full mt-20">
      <h3 className="text-2xl font-bold tracking-tight text-stone-200 sm:text-3xl lg:hidden">
        Projects
      </h3>
      <div className="w-full mt-4 group/list">
        {projects.map((project: any) => (
          <div
            className="group w-full hover:border-stone-600 hover:border hover:bg-stone-900 hover:p-[7px] p-2 rounded-md lg:hover:!opacity-100 lg:group-hover/list:opacity-50 transition-opacity"
            key={project._id}
          >
            <div className="h-full flex items-start justify-between">
              <div className="w-1/3 pr-2 text-sm text-stone-400">
                <Image
                  className="rounded-md w-full h-full"
                  src={urlFor(project.aboutimage).width(250).height(250).url()}
                  width={250}
                  height={250}
                  alt={project.aboutimage.attribution}
                  style={{ objectFit: "fill", height: "100%", width: "100%" }}
                />
              </div>
              <div className="w-2/3 max-h-full flex flex-col justify-between">
                <h4 className="text-lg font-bold tracking-tight text-stone-200 sm:text-xl">
                  {project.name}
                  <a
                    className="h-8 inline-block"
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-6 h-6 ml-2 text-stone-400 hover:text-stone-200 hover:w-8 hover:h-8 transition"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z" />
                    </svg>
                  </a>
                </h4>
                <p className=" text-ellipsis max-h-1/2">
                  {project.shortDescription}
                </p>
                <div className="w-full max-h-full text-ellipsis mt-2">
                  {project.skills.map((skill: any) => (
                    <SkillLinks
                      skill={skill}
                      skills={skills}
                      key={skill._key}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
