import { FC } from "react";
import Button from "@/components/buttons/Button";

interface IProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const BottomBar: FC<IProps> = ({ step, setStep }) => {
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
          <button>Download</button>
        )}
      </div>
    </div>
  );
};

export default BottomBar;
