export interface PatternProps {
  data: {
    photo: string;
    name: string;
    surname: string;
    phoneNumber: string;
    email: string;
    websiteURL: string;

    footer: string;

    selectedPattern: number;

    experience: {}[];
    education: {}[];
    skills: {}[];
    achievements: {}[];
    hobbys: {}[];
    certificates: {}[];
    additional_activity: {}[];
  };
  personalization: { color: string; fontFamily: string; fontSize: number };
}
