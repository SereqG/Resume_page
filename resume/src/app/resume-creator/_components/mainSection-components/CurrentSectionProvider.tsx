"use client";

import { createContext, useContext, useState } from "react";

const CurrentSectionContext = createContext({});

export const CurrentSectionContextProvider = ({ children }: any) => {
  const [currentSection, setCurrentSection] = useState<string>("Personal Data");

  return (
    <CurrentSectionContext.Provider
      value={{ currentSection, setCurrentSection }}
    >
      {children}
    </CurrentSectionContext.Provider>
  );
};

export const useCurrentSectionContext: any = () =>
  useContext(CurrentSectionContext);
