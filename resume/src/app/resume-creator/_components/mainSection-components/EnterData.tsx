"use client";

import { useState } from "react";

import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";

import PersonalData from "../enterData-components/sections/PersonalData";

import Sidebar from "../enterData-components/Sidebar";

const EnterData = () => {
  const { userDataSet, setUserDataSet } = useUserDataSetContext();
  const [currentSection, setCurrentSection] = useState<string>("Personal Data");
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);

  return (
    <div>
      <PersonalData />
      <div className="flex w-full h-[15vh] items-center justify-between">
        <h2 className="text-lg font-bold">{currentSection}</h2>
        <button
          className="text-lg font-bold text-primary-color underline"
          onClick={() => setIsSidebarVisible((prevState) => !prevState)}
        >
          Manage section
        </button>
        {isSidebarVisible ? (
          <Sidebar
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
            setIsSidebarVisible={setIsSidebarVisible}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default EnterData;
