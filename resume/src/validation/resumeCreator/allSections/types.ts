export interface IPersonalData {
  photo: string;
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
  websiteURL: string;
}

export interface IExperience {
  companyName: string;
  city: string;
  position: string;
  startDate: string;
  endDate: string;
  additionalInfo: string;
}

export interface IEducation {
  level: string;
  city: string;
  institutionName: string;
  startDate: string;
  endDate: string;
  additionalInfo: string;
}

export interface ISkills {
  skillName: string;
  additionalInfo: string;
}

export interface IAchievements {
  achievementName: string;
  additionalInfo: string;
}

export interface IHobbys {
  hobbyName: string;
  additionalInfo: string;
}
