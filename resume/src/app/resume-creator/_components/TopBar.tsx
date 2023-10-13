import { FC } from "react";

interface IElement {
  text: string;
  number: number;
  step: number;
}

interface IProps {
  step: number;
}

const Element: FC<IElement> = ({ text, number, step }) => {
  if (number === step) {
    return (
      <div className="flex cursor-pointer flex-col items-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-color font-bold text-white">
          {number}
        </div>
        <h2 className="w-20 text-center text-sm">{text}</h2>
      </div>
    );
  } else {
    return (
      <div className="flex cursor-pointer flex-col items-center opacity-60">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-color font-bold text-white">
          {number}
        </div>
        <h2 className="w-20 text-center text-sm">{text}</h2>
      </div>
    );
  }
};

const TopBar: FC<IProps> = ({ step }) => {
  const texts = ["Choose a pattern", "Fill your details", "Generate resume"];

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-[24rem] justify-between">
        <Element text={texts[0]} number={1} step={step} />
        <Element text={texts[1]} number={2} step={step} />
        <Element text={texts[2]} number={3} step={step} />
      </div>
    </div>
  );
};

export default TopBar;
