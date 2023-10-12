"use client";
import TopSection from "./_landing_page_components/TopSection";
import MiddleSection from "./_landing_page_components/MiddleSection";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center">
      <TopSection />
      <MiddleSection />
    </div>
  );
}
