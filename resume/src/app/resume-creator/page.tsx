"use client";

import { useState } from "react";

import TopBar from "./_components/TopBar";
import BottomBar from "./_components/BottomBar";
import MainSection from "./_components/MainSection";

import { ResumePersonalizationProvider } from "@/context/ResumePersonalizationProvider";
import { UserDataSetContextProvider } from "@/context/ResumeDatasetProvider";
import { CurrentSectionContextProvider } from "@/context/CurrentSectionProvider";

const Page = () => {
  const [step, setStep] = useState<number>(1);
  return (
    <>
      <div className="flex h-[100vh] w-full flex-col items-center justify-between pt-16">
        <ResumePersonalizationProvider>
          <UserDataSetContextProvider>
            <CurrentSectionContextProvider>
              <TopBar step={step} />
              <MainSection step={step} />
              <BottomBar step={step} setStep={setStep} />
            </CurrentSectionContextProvider>
          </UserDataSetContextProvider>
        </ResumePersonalizationProvider>
      </div>
    </>
  );
};

export default Page;
