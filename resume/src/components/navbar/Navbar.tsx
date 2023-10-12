"use client";

import Link from "next/link";

import MobileMenu from "./MobileMenu";

import { useState } from "react";

import { BiMenu } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false);

  const hamburgerMenuClick = () => {
    if (isMobileMenu) {
      setIsMobileMenu(false);
    } else {
      setIsMobileMenu(true);
    }
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
      <div className="hidden md:flex">
        <div className="ml-[10vw] flex w-72 justify-between">
          <Link className="group relative" href={"/resume-creator"}>
            Create CV
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary-color transition-all group-hover:w-[50%]"></span>
          </Link>
        </div>
      </div>
      <button className="p-2 md:hidden" onClick={hamburgerMenuClick}>
        {isMobileMenu ? <IoCloseSharp size={30} /> : <BiMenu size={30} />}
      </button>
      {isMobileMenu ? <MobileMenu /> : ""}
    </nav>
  );
};

export default Navbar;
