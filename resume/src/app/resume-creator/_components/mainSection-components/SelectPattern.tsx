"use client";

import { FC } from "react";
import Image from "next/image";

import { StaticImageData } from "next/image";

import { v4 as uuidv4 } from "uuid";

import pattern2 from "@/../public/patterns/pattern2.jpg";
import pattern1 from "@/../public/patterns/pattern1.jpg";
import pattern3 from "@/../public/patterns/pattern3.jpg";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";

interface IPatternProps {
  id: number;
  pattern: StaticImageData;
}

const Pattern: FC<IPatternProps> = ({ id, pattern }) => {
  const { userDataSet } = useUserDataSetContext();

  if (userDataSet.selectedPattern === id) {
    return (
      <button className="m-8 border-2 border-primary-color transition-all hover:scale-105 ">
        <Image
          src={pattern}
          alt="Pattern"
          className="h-auto w-[60vw] max-w-[20rem] md:w-[30vw]"
        />
      </button>
    );
  }
};

const SelectPattern = () => {
  const { userDataSet, setUserDataSet } = useUserDataSetContext();
  const patternList: { photo: StaticImageData; id: number }[] = [
    { photo: pattern1, id: 1 },
    { photo: pattern2, id: 2 },
    { photo: pattern3, id: 3 },
  ];

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      {patternList.map((e) => (
        <Pattern key={uuidv4()} id={e.id} pattern={e.photo} />
      ))}
      <div className="flex w-48 justify-between">
        {userDataSet.selectedPattern > 1 ? (
          <button
            className="rounded-full bg-primary-color p-4 hover:bg-button-hover-color"
            onClick={() => {
              setUserDataSet({
                ...userDataSet,
                selectedPattern: userDataSet.selectedPattern - 1,
              });
            }}
          >
            <AiOutlineArrowLeft color="white" />
          </button>
        ) : (
          <button className="rounded-full bg-gray-300 p-4">
            <AiOutlineArrowLeft color="white" />
          </button>
        )}
        {userDataSet.selectedPattern < patternList.length ? (
          <button
            className="rounded-full bg-primary-color p-4 hover:bg-button-hover-color"
            onClick={() => {
              setUserDataSet({
                ...userDataSet,
                selectedPattern: userDataSet.selectedPattern + 1,
              });
            }}
          >
            <AiOutlineArrowRight color="white" />
          </button>
        ) : (
          <button className="rounded-full bg-gray-300 p-4">
            <AiOutlineArrowRight color="white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SelectPattern;
