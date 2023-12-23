"use client";
import React from "react";
import PortableTextComponent from "./common/PortableText";

const About = ({ about }: any) => {
  return (
    <div id="about">
      <PortableTextComponent value={about[0].description} />
    </div>
  );
};

export default About;
