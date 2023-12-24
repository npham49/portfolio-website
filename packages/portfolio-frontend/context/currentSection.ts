"use client";
import { createContext } from "react";

export const CurrentSectionContext = createContext({
  about: 0,
  experience: 0,
  projects: 0,
});
