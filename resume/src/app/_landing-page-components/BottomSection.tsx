import { motion } from "framer-motion";

const BottomSection = () => {
  return (
    <section className="w-[80vw]">
      <h2 className="relative flex items-center text-2xl font-bold text-primary-color before:absolute before:left-[-2.5rem] before:z-[-999] before:block before:h-6 before:w-6 before:rounded-md before:bg-primary-color before:content-[''] sm:text-3xl">
        Why you should use RESUME?
      </h2>
      <motion.div
        className="my-[4vh] border-4 border-solid border-primary-color"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <div className="flex w-full flex-col justify-around sm:flex-row">
          <div className="group flex h-32 flex-col items-center justify-center border-b-4 border-solid border-primary-color px-[5%] text-center text-white hover:bg-primary-color hover:transition-all sm:h-52 sm:w-1/2 sm:border-r-4 sm:hover:w-[70%]">
            <h2 className="max-w-xs text-sm text-xl font-bold text-primary-color group-hover:text-white sm:text-xl">
              A lot of personalization options
            </h2>
            <p className="none sm:font-base max-w-xs text-xs">
              Our creator allows you to change color, font family and font size
            </p>
          </div>
          <div className="group flex h-32 flex-col items-center justify-center border-b-4 border-solid border-primary-color px-[5%] text-center text-primary-color text-white hover:bg-primary-color hover:transition-all sm:h-52 sm:w-1/2  sm:hover:w-[70%]">
            <h2 className="max-w-xs text-sm text-xl font-bold text-primary-color group-hover:text-white sm:text-xl">
              Many well designed patterns
            </h2>
            <p className="none sm:font-base max-w-xs text-xs">
              You can easily find a pattern that suits your needs
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col justify-around sm:flex-row">
          <div className="group flex h-32 flex-col items-center justify-center border-b-4 border-solid border-primary-color px-[5%] text-center text-primary-color text-white hover:bg-primary-color hover:transition-all sm:h-52 sm:w-1/2 sm:border-b-0 sm:border-r-4 sm:hover:w-[70%]">
            <h2 className="max-w-xs text-sm text-xl font-bold text-primary-color group-hover:text-white sm:text-xl">
              Intuitive creator
            </h2>
            <p className="none sm:font-base max-w-xs text-xs">
              You do not need to know how to design, our creator will do it for
              you you
            </p>
          </div>
          <div className="group flex h-32 flex-col items-center justify-center px-[5%] text-center text-primary-color text-white hover:bg-primary-color hover:transition-all sm:h-52 sm:w-1/2  sm:hover:w-[70%]">
            <h2 className="max-w-xs text-sm text-xl font-bold text-primary-color group-hover:text-white sm:text-xl">
              No hidden costs
            </h2>
            <p className="none sm:font-base max-w-xs text-xs">
              RESUME is totally free
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BottomSection;
