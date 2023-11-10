"use client";

import { createContext, useContext, useState } from "react";

interface IData {
  selectedPattern: number;

  photo: string | null;
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
  websiteURL: string;

  experience: {}[];
  education: {}[];
  skills: {}[];
  achievements: {}[];
  hobbys: {}[];
  custom_section: {}[];
}

const UserDataSetContext = createContext({});

export const UserDataSetContextProvider = ({ children }: any) => {
  const [userDataSet, setUserDataSet] = useState<IData>({
    selectedPattern: 1,

    photo: "",
    name: "",
    surname: "",
    phoneNumber: "",
    email: "",
    websiteURL: "",

    experience: [],
    education: [],
    skills: [],
    achievements: [],
    hobbys: [],
    custom_section: [],
  });

  return (
    <UserDataSetContext.Provider value={{ userDataSet, setUserDataSet }}>
      {children}
    </UserDataSetContext.Provider>
  );
};

export const useUserDataSetContext: any = () => useContext(UserDataSetContext);
