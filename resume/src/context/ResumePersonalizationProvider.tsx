"use client";

import { createContext, useContext, useState } from "react";

interface IData {
  fontSize: "16" | "20" | "24";
  color: string;
  fontFamily: "Courier" | "Times-Roman" | "Helvetica";
}

const ResumePersonalizationContext = createContext({});

export const ResumePersonalizationProvider = ({ children }: any) => {
  const [userPersonalization, setUserPersonalization] = useState<IData>({
    fontSize: "16",
    color: "#000000",
    fontFamily: "Courier",
  });

  return (
    <ResumePersonalizationContext.Provider
      value={{ userPersonalization, setUserPersonalization }}
    >
      {children}
    </ResumePersonalizationContext.Provider>
  );
};

export const useResumePersonalizationContext: any = () =>
  useContext(ResumePersonalizationContext);
