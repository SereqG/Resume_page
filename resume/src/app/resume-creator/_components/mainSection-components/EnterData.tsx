"use client";

import { useState } from "react";

import FormInput from "@/components/inputs/FormInput";
import EnterDataRightSide from "../enterData-components/EnterDataRightSide";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";

const EnterData = () => {
  const { userDataSet, setUserDataSet } = useUserDataSetContext();
  const [stepMobile, setStepMobile] = useState<number>(1);

  const leftSideBody = () => {
    return (
      <div className="flex max-h-[22rem] w-full flex-col overflow-auto p-5 md:max-h-[26rem]">
        <FormInput
          type="file"
          label="Photo"
          id="photo"
          name="photo"
          onChange={(e) => {
            setUserDataSet({
              ...userDataSet,
              photo: URL.createObjectURL(e.target.files[0]),
            });
          }}
        />
        <FormInput
          type="text"
          label="Name"
          id="name"
          name="name"
          onChange={(e) =>
            setUserDataSet({ ...userDataSet, name: e.target.value })
          }
        />
        <FormInput
          type="text"
          label="Surname"
          id="surname"
          name="surname"
          onChange={(e) =>
            setUserDataSet({ ...userDataSet, surname: e.target.value })
          }
        />
        <FormInput
          type="text"
          label="Phone number"
          id="phoneNumber"
          name="phoneNumber"
          onChange={(e) =>
            setUserDataSet({ ...userDataSet, phoneNumber: e.target.value })
          }
        />
        <FormInput
          type="email"
          label="Email address"
          id="email"
          name="email"
          onChange={(e) =>
            setUserDataSet({ ...userDataSet, email: e.target.value })
          }
        />
        <FormInput
          type="url"
          label="Website URL address"
          id="websiteURL"
          name="websiteURL"
          onChange={(e) =>
            setUserDataSet({ ...userDataSet, websiteURL: e.target.value })
          }
        />
      </div>
    );
  };

  const switchStepMobile = () => {
    if (stepMobile === 1) {
      setStepMobile(2);
    } else {
      setStepMobile(1);
    }
  };

  return (
    <div className="w-[100vw] md:px-[10%]">
      <div className="hidden w-full md:flex">
        <div className="w-full">{leftSideBody()}</div>
        <EnterDataRightSide displayDropdown={true} />
      </div>
      <div className="flex w-full flex-col items-center justify-center md:hidden">
        {stepMobile === 1 ? (
          <div className="w-full">{leftSideBody()}</div>
        ) : (
          <EnterDataRightSide displayDropdown={true} />
        )}

        <div className="mt-6 flex w-48 justify-between">
          {stepMobile === 2 ? (
            <button
              className="rounded-full bg-primary-color p-4 hover:bg-button-hover-color"
              onClick={switchStepMobile}
            >
              <AiOutlineArrowLeft color="white" />
            </button>
          ) : (
            <button className="rounded-full bg-gray-300 p-4">
              <AiOutlineArrowLeft color="white" />
            </button>
          )}
          {stepMobile === 1 ? (
            <button
              className="rounded-full bg-primary-color p-4 hover:bg-button-hover-color"
              onClick={switchStepMobile}
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
    </div>
  );
};

export default EnterData;
