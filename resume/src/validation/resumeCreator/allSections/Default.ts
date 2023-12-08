import * as types from "./types";

export const defaultValuesPersonalData: types.IPersonalData = {
  photo: "",
  name: "",
  surname: "",
  phoneNumber: "",
  email: "",
  websiteURL: "",
};

export const defaultValuesExperience: types.IExperience = {
  companyName: "",
  city: "",
  position: "",
  startDate: "",
  endDate: "",
  additionalInfo: "",
};

export const defaultValuesEducation: types.IEducation = {
  level: "",
  city: "",
  institutionName: "",
  startDate: "",
  endDate: "",
  additionalInfo: "",
};

export const defaultValuesSkills: types.ISkills = {
  skillName: "",
  additionalInfo: "",
};

export const defaultValuesAchievements: types.IAchievements = {
  achievementName: "",
  additionalInfo: "",
};

export const defaultValuesHobbys: types.IHobbys = {
  hobbyName: "",
  additionalInfo: "",
};

export const defaultValuesCertificates: types.ICertificates = {
  certificateName: "",
  endDate: "",
  additionalInfo: "",
};

export const defaultValuesAdditionalActivity: types.IAdditionalActivity = {
  activity: "",
  city: "",
  startDate: "",
  endDate: "",
  additionalInfo: "",
};
