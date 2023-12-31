import { MouseEventHandler } from "react";

interface Props {
  children: string | JSX.Element | JSX.Element[];
  action?: MouseEventHandler<HTMLButtonElement> | undefined;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button = ({ children, action, type }: Props) => {
  return (
    <button
      onClick={action}
      className="focus:shadow-outline rounded-2xl bg-primary-color px-12 py-3 font-bold text-white shadow hover:bg-button-hover-color focus:outline-none max-w-[250px]"
      type={type}
    >
      {children}
    </button>
  );
};
