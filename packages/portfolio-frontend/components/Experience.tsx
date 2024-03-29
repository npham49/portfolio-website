"use client";
import React, { useRef, useContext } from "react";
import PortableTextComponent from "./common/PortableText";
import SkillLinks from "./common/SkillLinks";
import { CurrentSectionContext } from "@/context/currentSection";

const Experience = ({ experiences, skills }: any) => {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const ref = useRef<HTMLDivElement>(null);
  // @ts-ignore
  const { setCurrentSection } = useContext(CurrentSectionContext);
  React.useEffect(() => {
    if (ref.current?.clientHeight) {
      setCurrentSection((prev: any) => ({
        ...prev,
        experience: ref.current?.clientHeight,
      }));
    }
  }, []);
  return (
    <div ref={ref} id="experience" className="w-full mt-20">
      <h3 className="text-2xl font-bold tracking-tight text-stone-200 sm:text-3xl lg:hidden">
        Experience
      </h3>
      <div className="w-full mt-4 group/list">
        {experiences.map((experience: any) => (
          <div
            key={experience._id}
            className="group w-full hover:border-stone-600 hover:border hover:bg-stone-900 hover:p-[7px] p-2 rounded-md lg:hover:!opacity-100 lg:group-hover/list:opacity-50 transition-opacity"
          >
            <div className="flex items-start justify-between">
              <div className="w-1/3 pr-2 text-sm text-stone-400">
                {month[new Date(experience.startDate).getUTCMonth()]}{" "}
                {new Date(experience.startDate).getFullYear()} -{" "}
                {experience.endDate
                  ? `${
                      month[new Date(experience.endDate).getUTCMonth()]
                    } ${new Date(experience.endDate).getFullYear()}`
                  : "Present"}
              </div>
              <div className="w-2/3">
                <h4 className="text-lg font-bold tracking-tight text-stone-200 sm:text-xl">
                  {experience.position}
                </h4>
                <p className="text-xs text-stone-400">
                  {experience.company} | {experience.location}
                </p>
                <div className="mt-2">
                  <PortableTextComponent value={experience.description} />
                  <div>
                    {experience.skills.map((skill: any) => (
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
            <p className="mt-2 text-sm text-stone-400"></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
