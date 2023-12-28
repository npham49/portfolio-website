"use client";
import React, { useContext, useRef } from "react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

import client from "@/config/client";
import PortableTextComponent from "./common/PortableText";
import { CurrentSectionContext } from "@/context/currentSection";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

const About = ({ about }: any) => {
  const ref = useRef<HTMLDivElement>(null);

  // @ts-ignore
  const { setCurrentSection } = useContext(CurrentSectionContext);
  function urlFor(source: any) {
    return builder.image(source);
  }
  React.useEffect(() => {
    if (ref.current?.clientHeight) {
      setCurrentSection((prev: any) => ({
        ...prev,
        about: ref.current?.clientHeight,
      }));
    }
  }, []);
  return (
    <div ref={ref} id="about">
      <h3 className="text-2xl font-bold tracking-tight text-stone-200 mb-4 sm:text-3xl lg:hidden">
        About
      </h3>
      <PortableTextComponent value={about[0].description} />
      <div className="flex flex-col items-center my-4">
        <Image
          className="rounded-md w-auto h-auto mt-4"
          src={urlFor(about[0].aboutimage).url()}
          width={250}
          height={400}
          alt={about[0].aboutimage.attribution}
        />
        <p className="text-xs italic text-stone-500 mt-2">
          {about[0].aboutimage.caption}
        </p>
      </div>
    </div>
  );
};

export default About;
