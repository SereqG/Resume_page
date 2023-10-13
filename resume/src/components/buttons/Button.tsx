import { FC } from "react";

interface IButton {
  label: string;
  action: any;
  type: any;
}

const Button: FC<IButton> = ({ label, action, type }) => {
  return (
    <button
      onClick={action}
      className="focus:shadow-outline rounded bg-primary-color px-12 py-2 font-bold text-white shadow hover:bg-button-hover-color focus:outline-none"
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
