"use client";

import { useState } from "react";

import { ResumePersonalizationProvider } from "@/context/ResumePersonalizationProvider";
import { UserDataSetContextProvider } from "@/context/ResumeDatasetProvider";

const Page = () => {
  const [step, setStep] = useState<number>(1);
  const [data, setData] = useState("");
  return (
    <>
      <div className="flex h-[100vh] w-full flex-col items-center justify-between pt-16">
        <ResumePersonalizationProvider>
          <UserDataSetContextProvider>
            <div>Content</div>
          </UserDataSetContextProvider>
        </ResumePersonalizationProvider>
      </div>
    </>
  );
};

export default Page;
