import React from "react";

import ReadyData from "./ReadyData";
import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";

interface IProps {
  name: string;
  isActive: boolean;
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
}

const SidebarSection = ({ name, isActive, setCurrentSection }: IProps) => {
  console.log(name.toLowerCase().trim());
  const { userDataSet } = useUserDataSetContext();

  return (
    <div className="mb-6">
      <button
        onClick={() => setCurrentSection(name)}
        className="flex items-center w-full hover:font-bold "
      >
        <h2
          className={`text-primary-color ml-2 ${
            isActive === true ? "font-bold underline " : ""
          }`}
        >
          {name}
        </h2>
      </button>
      <div>
        {name.toLowerCase() != "personal data" &&
        userDataSet[name.toLowerCase().trim().replace(" ", "_")].length > 0
          ? userDataSet[name.toLowerCase().trim()].map(
              (e: { id: string; inputsValues: any; name: string }) => {
                return (
                  <ReadyData
                    key={e.id}
                    id={[e.id, name]}
                    name={name}
                    label={e.inputsValues[Object.keys(e.inputsValues)[0]]}
                  />
                );
              }
            )
          : ""}
      </div>
    </div>
  );
};

export default SidebarSection;
