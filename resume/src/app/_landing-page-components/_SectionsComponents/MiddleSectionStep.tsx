import { motion } from "framer-motion";
import Image from "next/image";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  stepNumber: number;
  title: string;
  description: string;
  imgSrc: string;
}

export const MiddleSectionStep = ({
  icon,
  stepNumber,
  title,
  description,
  imgSrc,
}: Props) => {
  return (
    <motion.div
      className="my-10 sm:mx-6 sm:my-0"
      animate={{ y: [200, 0] }}
      transition={{ delay: 1, duration: 2 }}
      viewport={{ once: true }}
    >
      <div className="flex h-40 w-[130px] items-center justify-center">
        <Image
          className="absolute z-[-999]"
          src={imgSrc}
          width={130}
          height={130}
          alt="shape"
        />
        {icon({ size: 50 })}
      </div>
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-color font-bold text-white">
        {stepNumber}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};
