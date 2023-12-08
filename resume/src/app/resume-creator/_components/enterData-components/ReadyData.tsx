import { MouseEvent } from "react";

import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";

import CloseButton from "@/components/buttons/CloseButton";

interface IProps {
  name: string;
  label: string;
  id: string[];
}

const ReadyData = ({ name, label, id }: IProps) => {
  const { userDataSet, setUserDataSet } = useUserDataSetContext();

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const updatedDataSet = userDataSet[
      id[1].toLowerCase().trim().replace(" ", "_")
    ].filter((item: { id: string }) => item.id !== id[0]);

    console.log(updatedDataSet);

    setUserDataSet({
      ...userDataSet,
      [id[1].toLowerCase().trim().replace(" ", "_")]: updatedDataSet,
    });
  };

  return (
    <div className="mb-2 mr-2 flex min-h-[3.5rem] w-[30%] min-w-[14rem] items-center justify-between rounded-2xl border-2 border-primary-color p-2">
      <div className="flex w-[75%] flex-col justify-center">
        <h2 className="font-bold">{name}</h2>
        <p className="font-sm">{label}</p>
      </div>
      <CloseButton action={handleClick} />
    </div>
  );
};

export default ReadyData;
