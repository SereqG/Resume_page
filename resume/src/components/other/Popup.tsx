import { CloseButton } from "@/components/buttons/CloseButton";
import { usePopupVisibilityContext } from "@/context/PopupVisibilityProvider";

interface IProps {
  message: string;
}

export const Popup = ({ message }: IProps) => {
  const { isPopupVisible, setIsPopupVisible } = usePopupVisibilityContext();

  if (isPopupVisible) {
    setTimeout(() => {
      setIsPopupVisible(false);
    }, 3000);
  }

  return (
    <div
      className={`py-6 px-12 absolute flex text-center border-2 border-primary-color bg-white text-primary-color font-semibold z-[999] rounded-lg ${
        isPopupVisible == true ? "opacity-1" : "opacity-0"
      }`}
    >
      <div className="absolute top-0 right-0 p-2">
        <CloseButton
          action={() => {
            setIsPopupVisible(false);
          }}
        />
      </div>
      {message}
    </div>
  );
};
