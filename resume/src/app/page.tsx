"use client";
import TopSection from "./_landing-page-components/TopSection";
import MiddleSection from "./_landing-page-components/MiddleSection";
import BottomSection from "./_landing-page-components/BottomSection";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center">
      <TopSection />
      <MiddleSection />
      <BottomSection />
    </div>
  );
}
