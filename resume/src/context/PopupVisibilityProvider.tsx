"use client";

import { createContext, useContext, useState } from "react";

const PopupVisibilityContext = createContext({});

export const PopupVisibilityContextProvider = ({ children }: any) => {
  const [isPopupVisible, setIsPopupVisible] = useState<Boolean>(false);

  return (
    <PopupVisibilityContext.Provider
      value={{ isPopupVisible, setIsPopupVisible }}
    >
      {children}
    </PopupVisibilityContext.Provider>
  );
};

export const usePopupVisibilityContext: any = () =>
  useContext(PopupVisibilityContext);
