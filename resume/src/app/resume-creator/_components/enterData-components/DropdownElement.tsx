import React from "react";

import { FC, useState, Dispatch, SetStateAction } from "react";

import FormInput from "@/components/inputs/FormInput";
import ReadyData from "./ReadyData";

import { FaCheck, FaTrashAlt } from "react-icons/fa";

import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";

interface IDropownElementProps {
  name: string;
  id: string;
  plusBtnClickFunc: Dispatch<SetStateAction<string>>;
  currentlyUnrolledElement: string;
  inputs: Array<{ label: string; type: string; name: string }>;
}

interface IDataState {
  name: string;
  id: string;
  inputsValues: {}[];
}

const DropdownElement: FC<IDropownElementProps> = ({
  name,
  id,
  inputs,
  plusBtnClickFunc,
  currentlyUnrolledElement,
}) => {
  const { userDataSet, setUserDataSet } = useUserDataSetContext();

  const array: any = [];

  inputs.forEach((e) => {
    array[e.name] = "";
  });

  const [data, setData] = useState<IDataState>({
    name: id,
    id: String(Date.now()),
    inputsValues: array,
  });

  const stateReset = () => {
    setData({
      name: id,
      id: String(Date.now()),
      inputsValues: array,
    });
  };

  const stateResetFunc = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    plusBtnClickFunc("");
    stateReset();
  };

  const updateValues = (
    e: React.ChangeEvent<HTMLInputElement>,
    input: string
  ) => {
    const neww = { ...data.inputsValues, [input]: e.target.value };
    const nextData = { ...data, inputsValues: neww };
    setData(nextData);
  };

  const saveData = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    plusBtnClickFunc("");
    if (Object.values(data.inputsValues).join("") !== "") {
      setUserDataSet({
        ...userDataSet,
        [name]: userDataSet[String(id)].push(data),
      });
    }
    stateReset();
  };

  return (
    <>
      {currentlyUnrolledElement !== "" && currentlyUnrolledElement !== id ? (
        ""
      ) : (
        <div className="h-full w-full border-b-2 border-gray-200 p-2 py-4">
          <section className="flex h-12 w-full items-center justify-between">
            <h2>{name}</h2>
            {currentlyUnrolledElement === id ? (
              <div className="flex h-12 w-20 justify-between bg-white">
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 hover:bg-yellow-700"
                  onClick={stateResetFunc}
                >
                  <FaTrashAlt color="black" />
                </button>
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-color hover:bg-button-hover-color"
                  onClick={saveData}
                >
                  <FaCheck />
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="h-10 w-10 rounded-full bg-primary-color text-white"
                  onClick={(e: React.MouseEvent<HTMLElement>) => {
                    e.preventDefault();
                    plusBtnClickFunc(id);
                  }}
                >
                  +
                </button>
              </div>
            )}
          </section>
          {currentlyUnrolledElement === id ? (
            <section className="mt-6 min-h-[21.5rem] w-full">
              {inputs.map((input) => {
                return (
                  <FormInput
                    key={input.label}
                    type={input.type}
                    label={input.label}
                    id={input.label}
                    name={input.label}
                    onChange={(e) => {
                      updateValues(e, input.name);
                    }}
                  />
                );
              })}
            </section>
          ) : (
            <div>
              {userDataSet[id].length > 0
                ? userDataSet[id].map(
                    (e: { id: string; inputsValues: any; name: string }) => {
                      return (
                        <ReadyData
                          key={e.id}
                          id={[e.id, id]}
                          name={name}
                          label={e.inputsValues[Object.keys(e.inputsValues)[0]]}
                        />
                      );
                    }
                  )
                : ""}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default DropdownElement;
