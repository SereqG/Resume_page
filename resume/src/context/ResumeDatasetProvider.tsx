"use client";

import { createContext, useContext, useState } from "react";

interface data {
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
  certificates: {}[];
  additional_activity: {}[];

  footer: string;
}

const UserDataSetContext = createContext({});

export const UserDataSetContextProvider = ({ children }: any) => {
  const [userDataSet, setUserDataSet] = useState<data>({
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
    certificates: [],
    additional_activity: [],

    footer: "",
  });

  return (
    <UserDataSetContext.Provider value={{ userDataSet, setUserDataSet }}>
      {children}
    </UserDataSetContext.Provider>
  );
};

export const useUserDataSetContext: any = () => useContext(UserDataSetContext);
