import { v4 as uuidv4 } from "uuid";

import ReadyData from "./ReadyData";
import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";

import { useCurrentSectionContext } from "@/context/CurrentSectionProvider";

interface IProps {
  name: string;
  isActive: boolean;
}

const SidebarSection = ({ name, isActive }: IProps) => {
  const { userDataSet } = useUserDataSetContext();
  const { setCurrentSection } = useCurrentSectionContext();
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
                  <div key={uuidv4()}>
                    <ReadyData
                      key={e.id}
                      id={[e.id, name]}
                      name={name}
                      label={e.inputsValues[Object.keys(e.inputsValues)[0]]}
                    />
                  </div>
                );
              }
            )
          : ""}
      </div>
    </div>
  );
};

export default SidebarSection;
