import Link from "next/link";

const MobileMenu = () => {
  return (
    <nav className="absolute right-0 top-16 flex w-full flex-col bg-white px-10 py-6 shadow-xl md:hidden">
      <Link className=" text-xl" href={"/resume-creator"}>
        Create CV
      </Link>
    </nav>
  );
};

export default MobileMenu;
