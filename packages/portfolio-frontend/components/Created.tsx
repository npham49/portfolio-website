import React from "react";

const Created = () => {
  return (
    <div className="text-stone-400 text-sm mt-8 mb-4">
      Created using{" "}
      <a
        className="text-stone-100 hover:text-lime-300 transition"
        href="https://nextjs.org/"
        target="_blank"
        rel="noreferrer noopener"
      >
        NextJS
      </a>{" "}
      with{" "}
      <a
        className="text-stone-100 hover:text-lime-300 transition"
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noreferrer noopener"
      >
        TailwindCSS
      </a>{" "}
      and{" "}
      <a
        className="text-stone-100 hover:text-lime-300 transition"
        href="https://www.sanity.io/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Sanity
      </a>{" "}
      as Backend. Heavily inspired by Brittany Chiang&apos;s{" "}
      <a
        className="text-stone-100 hover:text-lime-300 transition"
        href="https://brittanychiang.com/"
        target="_blank"
        rel="noreferrer noopener"
      >
        portfolio
      </a>
      .
    </div>
  );
};

export default Created;
