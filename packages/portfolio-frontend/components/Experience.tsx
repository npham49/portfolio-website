"use client";
import React from "react";
import PortableTextComponent from "./common/PortableText";

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
  React.useEffect(() => {
    console.log(experiences);
    console.log(skills);
  }, []);
  return (
    <div id="experience" className="w-full mt-20">
      <h3 className="text-2xl font-bold tracking-tight text-stone-200 sm:text-3xl">
        Experience
      </h3>
      <div className="w-full mt-4">
        {experiences.map((experience: any) => (
          <div key={experience._id} className="w-full">
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
