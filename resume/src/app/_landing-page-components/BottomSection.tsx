import { motion } from "framer-motion";
import { FeatureCard } from "./_SectionsComponents/FeatureCard";

const styles = {
  CardColumn: "flex w-full flex-col justify-around sm:flex-row",
  Card: "sm:w-1/2 sm:hover:w-[70%]",
};
export const BottomSection = () => {
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
        <div className={styles.CardColumn}>
          <FeatureCard
            title="A lot of personalization options"
            description="Our creator allows you to change color, font family, and font size"
            hoverClass={styles.Card}
          />
          <FeatureCard
            title="Many well-designed patterns"
            description="You can easily find a pattern that suits your needs"
            hoverClass={styles.Card}
          />
        </div>
        <div className={styles.CardColumn}>
          <FeatureCard
            title="Intuitive creator"
            description="You do not need to know how to design, our creator will do it for you"
            hoverClass={styles.Card}
          />
          <FeatureCard
            title="No hidden costs"
            description="RESUME is totally free"
            hoverClass={styles.Card}
          />
        </div>
      </motion.div>
    </section>
  );
};
