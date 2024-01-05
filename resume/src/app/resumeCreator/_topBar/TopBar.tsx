import { Element } from "./Element";

interface Props {
  step: number;
}
const elements = [
  { text: "Choose a pattern", number: 1 },
  { text: "Fill your details", number: 2 },
  { text: "Generate resume", number: 3 },
];

export const TopBar = ({ step }: Props) => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-[24rem] justify-between">
        {elements.map((element) => (
          <Element key={element.number} {...element} step={step} />
        ))}
      </div>
    </div>
  );
};
