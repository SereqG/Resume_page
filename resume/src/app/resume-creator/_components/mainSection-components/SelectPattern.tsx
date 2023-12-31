"use client";

import { v4 as uuidv4 } from "uuid";

import pattern1 from "@/../public/patterns/pattern1.jpg";
import pattern2 from "@/../public/patterns/pattern2.jpg";
import pattern3 from "@/../public/patterns/pattern3.jpg";

import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import { Pattern } from "../selectPattern/Pattern";

const styles = {
  buttonBase: "rounded-full p-4",
  primaryButton: "bg-primary-color hover:bg-button-hover-color",
  grayButton: "bg-gray-300",
};

export const SelectPattern = () => {
  const { userDataSet, setUserDataSet } = useUserDataSetContext();
  const patternList = [pattern1, pattern2, pattern3];

  const handlePatternChange = (direction: number) => {
    const newPattern = userDataSet.selectedPattern + direction;
    if (newPattern >= 1 && newPattern <= patternList.length) {
      setUserDataSet({ ...userDataSet, selectedPattern: newPattern });
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      {patternList.map((photo, index) => (
        <Pattern key={uuidv4()} id={index + 1} pattern={photo} />
      ))}
      <div className="flex w-48 justify-between">
        <button
          className={`${styles.buttonBase} ${
            userDataSet.selectedPattern > 1
              ? styles.primaryButton
              : styles.grayButton
          }`}
          onClick={() => handlePatternChange(-1)}
        >
          <AiOutlineArrowLeft color="white" />
        </button>

        <button
          className={`${styles.buttonBase} ${
            userDataSet.selectedPattern < patternList.length
              ? styles.primaryButton
              : styles.grayButton
          }`}
          onClick={() => handlePatternChange(1)}
        >
          <AiOutlineArrowRight color="white" />
        </button>
      </div>
    </div>
  );
};
