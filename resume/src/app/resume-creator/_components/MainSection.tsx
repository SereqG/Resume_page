import { SelectPattern } from "./mainSection-components/SelectPattern";
import { EnterData } from "./mainSection-components/EnterData";
import { ResumePreview } from "./mainSection-components/ResumePreview";

interface Props {
  step: number;
}

export const MainSection = ({ step }: Props) =>
  step === 1 ? (
    <SelectPattern />
  ) : step === 2 ? (
    <EnterData />
  ) : (
    <ResumePreview />
  );
