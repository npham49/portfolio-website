"use client";
import { createContext } from "react";

export const CurrentSectionContext = createContext({
  contact: 0,
  about: 0,
  experience: 0,
  projects: 0,
});
