import { useState } from "react";

import { useCurrentSectionContext } from "@/context/CurrentSectionProvider";

import Sidebar from "../enterData-components/Sidebar";

import PersonalData from "../enterData-components/sections/PersonalData";
import Experience from "../enterData-components/sections/Experience";
import Education from "../enterData-components/sections/Education";
import Skills from "../enterData-components/sections/Skills";
import Achievements from "../enterData-components/sections/Achivements";
import Hobbys from "../enterData-components/sections/Hobbys";

const EnterData = () => {
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

export default EnterData;
