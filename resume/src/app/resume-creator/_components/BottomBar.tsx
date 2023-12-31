import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/buttons/Button";
import { DownloadBtn } from "@/components/buttons/DownloadBtn";

interface Props {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export const BottomBar = ({ step, setStep }: Props) => {
  const nextStep = () => {
    setStep((prevStep) => (prevStep < 3 ? prevStep + 1 : prevStep));
  };
  const prevStep = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  return (
    <div className="flex w-full items-center justify-between border-t-2 border-dashed border-primary-color px-[8vw] py-8">
      <div>
        {step > 1 && (
          <button
            onClick={prevStep}
            className="font-bold text-primary-color underline"
          >
            {step == 2 ? "Choose a pattern" : "Fill your details"}
          </button>
        )}
      </div>
      <div>
        {step < 3 ? (
          <Button type={undefined} action={nextStep}>
            {step == 1 ? "Fill your details" : "Generate resume"}
          </Button>
        ) : (
          <DownloadBtn />
        )}
      </div>
    </div>
  );
};
