import { motion } from "framer-motion";

import { CgTemplate } from "react-icons/cg";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdSaveAlt } from "react-icons/md";

import Image from "next/image";

const MiddleSection = () => {
  return (
    <section className="my-[20vh] w-[80vw]">
      <h2 className="relative flex items-center text-2xl font-bold text-primary-color before:absolute before:left-[-2.5rem] before:z-[-999] before:block before:h-6 before:w-6 before:rounded-md before:bg-primary-color before:content-[''] sm:text-3xl">
        3 simple steps
      </h2>
      <motion.div
        className="my-[4vh] flex w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <div className="flex w-full flex-col justify-between sm:flex-row">
          <motion.div
            animate={{ y: [200, 0] }}
            transition={{ delay: 1, duration: 2 }}
            viewport={{ once: true }}
          >
            <div className="flex h-40 w-[130px] items-center justify-center">
              <Image
                className="absolute z-[-999]"
                src={"/shapes/shape2.png"}
                width={130}
                height={130}
                alt="shape"
              />
              <CgTemplate size={50} />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-color font-bold text-white">
              1
            </div>
            <h3 className="text-xl font-bold">
              Choose one of the available templates
            </h3>
            <p>Choose the one that best suits your needs</p>
          </motion.div>
          <motion.div
            className="my-10 sm:mx-6 sm:my-0"
            animate={{ y: [200, 0] }}
            transition={{ delay: 1, duration: 2 }}
            viewport={{ once: true }}
          >
            <div className="flex h-40 w-[130px] items-center justify-center">
              <Image
                className="absolute z-[-999]"
                src={"/shapes/shape5.png"}
                width={130}
                height={130}
                alt="shape"
              />
              <BsFillPersonLinesFill size={50} />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-color font-bold text-white">
              2
            </div>
            <h3 className="text-xl font-bold">Enter your personal data</h3>
            <p>Fill all form fields in order to get an accurate resume</p>
          </motion.div>
          <motion.div
            animate={{ y: [200, 0] }}
            transition={{ delay: 1, duration: 2 }}
            viewport={{ once: true }}
          >
            <div className="flex h-40 w-[130px] items-center justify-center">
              <Image
                className="absolute z-[-999]"
                src={"/shapes/shape4.png"}
                width={130}
                height={130}
                alt="shape"
              />
              <MdSaveAlt size={50} />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-color font-bold text-white">
              3
            </div>
            <h3 className="text-xl font-bold">Download and enjoy</h3>
            <p>Your sheet is ready. It is your time to shine!</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default MiddleSection;
