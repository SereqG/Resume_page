import { MouseEventHandler } from "react";

interface IButton {
  action: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button = ({ action }: IButton) => {
  return (
    <button
      onClick={action}
      className="w-8 h-8 flex items-center justify-center border-2 border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white"
    >
      X
    </button>
  );
};

export default Button;
