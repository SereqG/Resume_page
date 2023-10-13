"use client";

import { useState } from "react";

import TopBar from "./_components/TopBar";
import BottomBar from "./_components/BottomBar";
import MainSection from "./_components/MainSection";

import { ResumePersonalizationProvider } from "@/context/ResumePersonalizationProvider";
import { UserDataSetContextProvider } from "@/context/ResumeDatasetProvider";

const Page = () => {
  const [step, setStep] = useState<number>(1);
  return (
    <>
      <div className="flex h-[100vh] w-full flex-col items-center justify-between pt-16">
        <ResumePersonalizationProvider>
          <UserDataSetContextProvider>
            <TopBar step={step} />
            <MainSection step={step} />
            <BottomBar step={step} setStep={setStep} />
          </UserDataSetContextProvider>
        </ResumePersonalizationProvider>
      </div>
    </>
  );
};

export default Page;
