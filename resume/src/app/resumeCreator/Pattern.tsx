import { StaticImageData } from "next/image";
import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";
import Image from "next/image";

interface PatternProps {
  id: number;
  pattern: StaticImageData;
}

export const Pattern = ({ id, pattern }: PatternProps) => {
  const { userDataSet } = useUserDataSetContext();

  const isSelected = userDataSet.selectedPattern === id;

  return (
    <>
      {isSelected ? (
        <button
          className={`m-8 border-2 ${
            isSelected ? "border-primary-color" : ""
          } transition-all hover:scale-105`}
        >
          <Image
            placeholder="blur"
            src={pattern}
            alt="Pattern"
            className="h-auto w-[60vw] max-w-[20rem] md:w-[30vw]"
          />
        </button>
      ) : (
        ""
      )}
    </>
  );
};
