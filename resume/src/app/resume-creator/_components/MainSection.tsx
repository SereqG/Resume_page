import { FC } from "react";

import SelectPattern from "./mainSection-components/SelectPattern";
import EnterData from "./mainSection-components/EnterData";

interface IProps {
  step: number;
}

const MainSection: FC<IProps> = ({ step }) => {
  if (step === 1) {
    return <SelectPattern />;
  } else if (step === 2) {
    return <EnterData />;
  } else {
    return "<ResumePreview />;";
  }
};

export default MainSection;
