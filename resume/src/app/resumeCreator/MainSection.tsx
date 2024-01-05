import { SelectPattern } from "./_mainSection/SelectPattern";
import { EnterData } from "./_mainSection/EnterData";
import { ResumePreview } from "./_mainSection/ResumePreview";

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
