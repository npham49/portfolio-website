"use client";
import React, { useEffect } from "react";
import { PortableText } from "@portabletext/react";

const About = ({ about }: any) => {
  const textComponents = {
    marks: {
      link: ({ children, value }: any) => {
        const rel = !value.href.startsWith("/")
          ? "noreferrer noopener"
          : undefined;
        return (
          <a
            className="text-stone-100 hover:text-lime-300 transition"
            href={value.href}
            rel={rel}
          >
            {children}
          </a>
        );
      },
    },
    block: {
      normal: ({ children }: any) => <p className="mb-4">{children}</p>,
    },
  };
  return (
    <div id="about">
      <PortableText value={about[0].description} components={textComponents} />
    </div>
  );
};

export default About;
