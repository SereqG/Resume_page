"use client";

import { useState } from "react";

import { useCurrentSectionContext } from "@/context/CurrentSectionProvider";

import Sidebar from "../enterData-components/Sidebar";
import { sections } from "../enterData-components/sections/allSections";

import PersonalData from "../enterData-components/sections/PersonalData";

import Section from "../enterData-components/sections/Section";

const EnterData = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);
  const { currentSection } = useCurrentSectionContext();
  console.log(sections);

  const renderSection = () => {
    switch (currentSection) {
      case "Personal Data":
        return <PersonalData />;
      case "Experience":
        return <Section dataProps={sections.experience} />;
      case "Education":
        return <Section dataProps={sections.education} />;
      case "Skills":
        return <Section dataProps={sections.skills} />;
      case "Achievements":
        return <Section dataProps={sections.achievements} />;
      case "Hobbys":
        return <Section dataProps={sections.hobbys} />;
    }
  };

  return (
    <div>
      <div>{renderSection()}</div>
      <div className="flex w-full h-[15vh] items-center justify-between">
        <h2 className="text-lg font-bold">{currentSection}</h2>
        <button
          className="text-lg font-bold text-primary-color underline"
          onClick={() => setIsSidebarVisible(true)}
        >
          Manage section
        </button>
        {isSidebarVisible ? (
          <Sidebar setIsSidebarVisible={setIsSidebarVisible} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default EnterData;
