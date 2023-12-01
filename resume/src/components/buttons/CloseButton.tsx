import { MouseEventHandler } from "react";
import { MdClose } from "react-icons/md";

interface IProps {
  action: MouseEventHandler<HTMLButtonElement> | undefined;
}

const CloseButton = ({ action }: IProps) => {
  return (
    <button
      onClick={action}
      className="w-6 h-6 flex items-center justify-center border-2 border-gray-400 text-gray-400 rounded-full hover:border-red-600 hover:text-red-600"
    >
      <MdClose />
    </button>
  );
};

export default CloseButton;
