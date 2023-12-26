"use client";
import React from "react";
import { PortableText } from "@portabletext/react";

const PortableTextComponent = ({ value }: any) => {
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
            target="_blank"
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
    <div>
      {" "}
      <PortableText value={value} components={textComponents} />
    </div>
  );
};

export default PortableTextComponent;
