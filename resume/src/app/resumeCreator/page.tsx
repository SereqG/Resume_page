"use client";

import { useState } from "react";

import { TopBar } from "./_topBar/TopBar";
import { BottomBar } from "./BottomBar";
import { MainSection } from "./MainSection";
import Layout from "./layout";
import { Popup } from "@/components/other/Popup";

const Page = () => {
  const [step, setStep] = useState<number>(1);

  return (
    <Layout>
      <Popup message={"Data submitted successfully"} />
      <TopBar step={step} />
      <MainSection step={step} />
      <BottomBar step={step} setStep={setStep} />
    </Layout>
  );
};

export default Page;
