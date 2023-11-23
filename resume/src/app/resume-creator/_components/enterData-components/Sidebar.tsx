import { v4 as uuidv4 } from "uuid";

import { allSectionsList } from "./sections/allSections";
import SidebarSection from "./SidebarSection";
import CloseButton from "@/components/buttons/CloseButton";

import { useCurrentSectionContext } from "@/context/CurrentSectionProvider";

interface IProps {
  setIsSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ setIsSidebarVisible }: IProps) => {
  const { currentSection } = useCurrentSectionContext();
  return (
    <>
      <div className="w-[100vw] h-[100vh] absolute top-0 left-0 bg-black opacity-20 z-10"></div>
      <div className="w-[80vw] max-w-[500px] h-[65vh] max-h-[800px] bg-white absolute top-[20vh] left-0 p-10 z-20 overflow-hidden">
        <div className="flex w-full justify-between items-center">
          <h2 className="text-xl font-bold text-primary-color">
            Manage sections
          </h2>
          <CloseButton
            action={() => {
              setIsSidebarVisible((prevState) => !prevState);
            }}
          />
        </div>
        <div className="mt-6 h-[80%] w-full overflow-scroll">
          {allSectionsList.map((section: string) => (
            <div key={uuidv4()}>
              <SidebarSection
                isActive={currentSection === section ? true : false}
                name={section}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
