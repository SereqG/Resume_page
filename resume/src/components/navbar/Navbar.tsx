"use client";

import { useState } from "react";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenu((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 z-[999] flex h-16 w-full items-center justify-between bg-white px-[10vw] md:justify-normal">
      <Link
        href={"/"}
        className="text-xl font-bold uppercase text-primary-color"
      >
        resu
        <span className="after:b-0 relative after:absolute after:left-0 after:block after:h-[3px] after:w-full after:bg-primary-color after:content-['']">
          me
        </span>
      </Link>

      <div className="hidden md:flex ml-[10vw]">
        <Link href={"/resumeCreator"} className="group relative">
          Create CV
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary-color transition-all group-hover:w-[50%]"></span>
        </Link>
      </div>

      <button className="p-2 md:hidden" onClick={toggleMobileMenu}>
        {isMobileMenu ? <IoCloseSharp size={30} /> : <BiMenu size={30} />}
      </button>

      {isMobileMenu && <MobileMenu />}
    </nav>
  );
};
