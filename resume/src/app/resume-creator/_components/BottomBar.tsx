import { FC } from "react";
import Button from "@/components/buttons/Button";

import DownloadBtn from "@/components/buttons/DownloadBtn";

import { useResumePersonalizationContext } from "@/context/ResumePersonalizationProvider";
import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";

interface IProps {
  step: number;
  setStep: any;
}

const BottomBar: FC<IProps> = ({ step, setStep }) => {
  const { userPersonalization } = useResumePersonalizationContext();
  const { userDataSet } = useUserDataSetContext();

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="flex w-full items-center justify-between border-t-2 border-dashed border-primary-color px-[8vw] py-8">
      <div>
        {step > 1 ? (
          <button
            onClick={prevStep}
            className="font-bold text-primary-color underline"
          >
            {"< Back"}
          </button>
        ) : (
          ""
        )}
      </div>
      <div>
        {step < 3 ? (
          <Button label="Next >" type="" action={nextStep} />
        ) : (
          <DownloadBtn
            selectedPattern={userDataSet.selectedPattern}
            data={userDataSet}
            personalization={userPersonalization}
          />
        )}
      </div>
    </div>
  );
};

export default BottomBar;
