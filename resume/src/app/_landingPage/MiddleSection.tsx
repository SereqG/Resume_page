import { motion } from "framer-motion";
import { CgTemplate } from "react-icons/cg";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdSaveAlt } from "react-icons/md";
import shape2 from "@/assets/shapes/shape2.png";
import shape4 from "@/assets/shapes/shape4.png";
import shape5 from "@/assets/shapes/shape5.png";

import { MiddleSectionStep } from "./_sections/MiddleSectionStep";

const steps = [
  {
    icon: CgTemplate,
    stepNumber: 1,
    title: "Choose one of the available templates",
    description: "Choose the one that best suits your needs",
    imgSrc: shape2,
  },
  {
    icon: BsFillPersonLinesFill,
    stepNumber: 2,
    title: "Enter your personal data",
    description: "Fill all form fields in order to get an accurate resume",
    imgSrc: shape4,
  },
  {
    icon: MdSaveAlt,
    stepNumber: 3,
    title: "Download and enjoy",
    description: "Your sheet is ready. It is your time to shine!",
    imgSrc: shape5,
  },
];

export const MiddleSection = () => {
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
          {steps.map((step, index) => (
            <MiddleSectionStep key={index} {...step} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
