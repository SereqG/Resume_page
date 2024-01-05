"use client";
import { TopSection } from "./_landingPage/TopSection";
import { MiddleSection } from "./_landingPage/MiddleSection";
import { BottomSection } from "./_landingPage/BottomSection";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center">
      <TopSection />
      <MiddleSection />
      <BottomSection />
    </div>
  );
}
