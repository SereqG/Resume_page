import { FC } from "react";

import SelectPattern from "./mainSection-components/SelectPattern";
import EnterData from "./mainSection-components/EnterData";
import ResumePreview from "./mainSection-components/ResumePreview";

import { CurrentSectionContextProvider } from "@/context/CurrentSectionProvider";

interface IProps {
  step: number;
}

const MainSection: FC<IProps> = ({ step }) => {
  if (step === 1) {
    return <SelectPattern />;
  } else if (step === 2) {
    return <EnterData />;
  } else {
    return <ResumePreview />;
  }
};

export default MainSection;
