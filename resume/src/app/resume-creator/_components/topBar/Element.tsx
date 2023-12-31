interface Props {
  text: string;
  number: number;
  step: number;
}

const styles = {
  container: "flex cursor-pointer flex-col items-center",
  numberDiv:
    "flex h-8 w-8 items-center justify-center rounded-full bg-primary-color font-bold text-white",
  text: "w-20 text-center text-sm",
};

export const Element = ({ text, number, step }: Props) => {
  if (number === step) {
    return (
      <div className={styles.container}>
        <div className={styles.numberDiv}>{number}</div>
        <h2 className={styles.text}>{text}</h2>
      </div>
    );
  } else {
    return (
      <div className={`${styles.container} opacity-60`}>
        <div className={styles.numberDiv}>{number}</div>
        <h2 className={styles.text}>{text}</h2>
      </div>
    );
  }
};
