export interface personalData {
  photo: string;
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
  websiteURL: string;
}

export interface experience {
  companyName: string;
  city: string;
  position: string;
  startDate: string;
  endDate: string;
  additionalInfo: string;
}

export interface education {
  level: string;
  city: string;
  institutionName: string;
  startDate: string;
  endDate: string;
  additionalInfo: string;
}

export interface skills {
  skillName: string;
  additionalInfo: string;
}

export interface achievements {
  achievementName: string;
  additionalInfo: string;
}

export interface hobbys {
  hobbyName: string;
  additionalInfo: string;
}

export interface certificates {
  certificateName: string;
  endDate: string;
  additionalInfo: string;
}

export interface additionalActivity {
  activity: string;
  city: string;
  startDate: string;
  endDate: string;
  additionalInfo: string;
}

export interface footer {
  footer: string;
}
