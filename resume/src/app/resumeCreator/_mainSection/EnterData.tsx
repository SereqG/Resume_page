import { useState } from "react";

import { useCurrentSectionContext } from "@/context/CurrentSectionProvider";

import { Sidebar } from "../_enterData/Sidebar";

import { PersonalData } from "../_enterData/sections/PersonalData";
import { Experience } from "../_enterData/sections/Experience";
import { Education } from "../_enterData/sections/Education";
import { Skills } from "../_enterData/sections/Skills";
import { Achievements } from "../_enterData/sections/Achivements";
import { Hobbys } from "../_enterData/sections/Hobbys";
import { Certificates } from "../_enterData/sections/Certificates";
import { AdditionalActivity } from "../_enterData/sections/AdditionalActivity";
import { Footer } from "../_enterData/sections/Footer";

export const EnterData = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);
  const { currentSection } = useCurrentSectionContext();

  const renderSection = () => {
    switch (currentSection) {
      case "Personal Data":
        return <PersonalData />;
      case "Experience":
        return <Experience />;
      case "Education":
        return <Education />;
      case "Skills":
        return <Skills />;
      case "Achievements":
        return <Achievements />;
      case "Hobbys":
        return <Hobbys />;
      case "Certificates":
        return <Certificates />;
      case "Additional Activity":
        return <AdditionalActivity />;
      case "Footer":
        return <Footer />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[90vw] max-w-2xl">{renderSection()}</div>
      <div className="flex w-[80%] h-[15vh] items-center justify-between">
        <h2 className="text-lg font-bold">{currentSection}</h2>
        <button
          className="text-lg font-bold text-primary-color underline"
          onClick={() => setIsSidebarVisible(true)}
        >
          Manage section
        </button>
        {isSidebarVisible && (
          <Sidebar setIsSidebarVisible={setIsSidebarVisible} />
        )}
      </div>
    </div>
  );
};
