"use client";
import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import client from "@/config/client";

import PortableTextComponent from "./common/PortableText";
import Image from "next/image";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

const About = ({ about }: any) => {
  function urlFor(source: any) {
    return builder.image(source);
  }
  React.useEffect(() => {
    console.log(about);
  }, []);
  return (
    <div id="about">
      <h3 className="text-2xl font-bold tracking-tight text-stone-200 sm:text-3xl lg:hidden">
        About
      </h3>
      <PortableTextComponent value={about[0].description} />
      <div className="flex flex-col items-center my-4">
        <Image
          className="rounded-md w-auto h-auto"
          src={urlFor(about[0].aboutimage).url()}
          width={250}
          height={400}
          alt={about[0].aboutimage.attribution}
        />
        <p className="text-xs italic text-stone-500 m-2">
          {about[0].aboutimage.caption}
        </p>
      </div>
    </div>
  );
};

export default About;
