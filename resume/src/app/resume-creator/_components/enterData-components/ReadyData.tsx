import { MouseEvent } from "react";
import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";
import { CloseButton } from "@/components/buttons/CloseButton";

interface Props {
  name: string;
  label: string;
  id: string[];
}

export const ReadyData = ({ name, label, id }: Props) => {
  const { userDataSet, setUserDataSet } = useUserDataSetContext();

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const sectionKey = id[1].toLowerCase().trim().replace(" ", "_");
    const updatedDataSet = userDataSet[sectionKey].filter(
      (item: { id: string }) => item.id !== id[0]
    );

    setUserDataSet({
      ...userDataSet,
      [sectionKey]: updatedDataSet,
    });
  };

  return (
    <div className="mb-2 mr-2 flex min-h-[3.5rem] min-w-[14rem] w-[75%] md:w-[30%] items-center justify-between rounded-2xl border-2 border-primary-color p-2">
      <div className="flex w-full flex-col justify-center">
        <h2 className="font-bold">{name}</h2>
        <p className="font-sm">{label}</p>
      </div>
      <CloseButton action={handleClick} />
    </div>
  );
};
