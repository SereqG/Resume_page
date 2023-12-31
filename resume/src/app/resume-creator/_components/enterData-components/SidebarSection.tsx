import { v4 as uuidv4 } from "uuid";
import { ReadyData } from "./ReadyData";
import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";
import { useCurrentSectionContext } from "@/context/CurrentSectionProvider";

interface Props {
  name: string;
  isActive: boolean;
}

export const SidebarSection = ({ name, isActive }: Props) => {
  const { userDataSet } = useUserDataSetContext();
  const { setCurrentSection } = useCurrentSectionContext();

  const isPersonalData = name.toLowerCase() === "personal data";
  const sectionKey = name.toLowerCase().trim().replace(" ", "_");
  const sectionData = userDataSet[sectionKey];

  const handleSectionClick = () => {
    setCurrentSection(name);
  };

  return (
    <div className="mb-6">
      <button
        onClick={handleSectionClick}
        className="flex items-center w-full hover:font-bold"
      >
        <h2
          className={`text-primary-color ml-2 ${
            isActive ? "font-bold underline" : ""
          }`}
        >
          {name}
        </h2>
      </button>
      {isPersonalData || name.toLowerCase() == "footer" ? null : (
        <div>
          {sectionData.length > 0 &&
            sectionData.map(
              (e: { id: string; inputsValues: any; name: string }) => (
                <div key={uuidv4()}>
                  <ReadyData
                    key={e.id}
                    id={[e.id, name]}
                    name={name}
                    label={e.inputsValues[Object.keys(e.inputsValues)[0]]}
                  />
                </div>
              )
            )}
        </div>
      )}
    </div>
  );
};
