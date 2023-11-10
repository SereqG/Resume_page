import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";

import { MouseEvent } from "react";

interface IProps {
  name: string;
  label: string;
  id: string[];
}

const ReadyData = ({ name, label, id }: IProps) => {
  const { userDataSet, setUserDataSet } = useUserDataSetContext();

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const arr: any[] = [];
    userDataSet[id[1]].map(
      (e: { name: string; id: string; inputsValues: any }) => {
        if (e.id === id[0]) {
        } else {
          arr.push(e);
        }
      }
    );
    setUserDataSet({ ...userDataSet, [id[1]]: arr });
  };

  return (
    <div className="mb-2 mr-2 flex min-h-[3.5rem] w-[30%] min-w-[14rem] items-center justify-between rounded-2xl border-2 border-primary-color p-2">
      <div className="flex w-[75%] flex-col justify-center">
        <h2 className="font-bold">{name}</h2>
        <p className="font-sm">{label}</p>
      </div>
      <button
        onClick={handleClick}
        className="h-8 w-8 rounded-full bg-red-500 hover:bg-red-600"
      >
        X
      </button>
    </div>
  );
};

export default ReadyData;
