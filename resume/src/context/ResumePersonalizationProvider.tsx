"use client";

import { createContext, useContext, useState } from "react";

interface IData {
  fontSize: string;
  color: string;
  fontFamily: string;
}

const ResumePersonalizationContext = createContext({});

export const ResumePersonalizationProvider = ({ children }: any) => {
  const [userPersonalization, setUserPersonalization] = useState<IData>({
    fontSize: "16",
    color: "#000000",
    fontFamily: "Segoe UI",
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
