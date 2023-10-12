import { motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

const TopSection = () => {
  return (
    <motion.div
      className="flex h-[90vh] w-[80vw] items-center justify-center sm:justify-between"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <section className="flex w-[16rem] flex-col sm:w-[22rem] lg:w-[26rem]">
        <h1 className="text-4xl sm:text-5xl xl:text-6xl">
          <span className="relative before:absolute before:left-[-5%] before:z-[-999] before:h-4/5 before:w-[110%] before:rounded-2xl before:bg-primary-color before:content-['']">
            Create
          </span>{" "}
          your dream{" "}
          <span className="relative before:absolute before:left-[-5%] before:z-[-999] before:h-4/5 before:w-[110%] before:rounded-2xl before:bg-primary-color before:content-['']">
            resume
          </span>{" "}
          with us!
        </h1>
        <Link
          className=" mt-10 flex h-12 w-full items-center justify-center rounded-lg bg-primary-color font-bold text-white hover:bg-button-hover-color sm:w-40"
          href={"/resume-creator"}
        >
          Create a resume
        </Link>
      </section>
      <section className="hidden lg:block">
        <Image
          src={"/heroImage.png"}
          alt="hero img"
          width={600}
          height={790}
          layout="intrinsic"
        />
      </section>
    </motion.div>
  );
};

export default TopSection;
