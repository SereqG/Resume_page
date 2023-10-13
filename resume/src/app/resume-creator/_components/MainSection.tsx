import { FC } from "react";

import SelectPattern from "./mainSection-components/SelectPattern";

interface IProps {
  step: number;
}

const MainSection: FC<IProps> = ({ step }) => {
  if (step === 1) {
    return <SelectPattern />;
  } else if (step === 2) {
    return "";
  } else {
    return "<ResumePreview />;";
  }
};

export default MainSection;
