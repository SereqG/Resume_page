interface SectionInput {
  label: string;
  type: string;
  name: string;
}

interface SectionProps {
  name: string;
  id: string;
  inputs: SectionInput[];
}

interface Sections {
  [key: string]: SectionProps;
}

const createSectionProps = (
  name: string,
  id: string,
  inputs: SectionInput[]
): SectionProps => ({ name, id, inputs });

export const sections: Sections = {
  experience: createSectionProps("Experience", "experience", [
    { label: "Company name", type: "text", name: "companyName" },
    { label: "City", type: "text", name: "city" },
    { label: "Position", type: "text", name: "position" },
    { label: "Start date", type: "date", name: "startDate" },
    { label: "End date", type: "date", name: "endDate" },
    { label: "Additional info", type: "text", name: "additionalInfo" },
  ]),

  education: createSectionProps("Education", "education", [
    { label: "Level", type: "text", name: "level" },
    { label: "City", type: "text", name: "city" },
    { label: "Full institution name", type: "text", name: "institutionName" },
    { label: "Start date", type: "date", name: "startDate" },
    { label: "End date", type: "date", name: "endDate" },
    { label: "Additional Info", type: "text", name: "additionalInfo" },
  ]),

  skills: createSectionProps("Skills", "skills", [
    { label: "Skill name", type: "text", name: "skillName" },
    { label: "Additional info", type: "text", name: "additionalInfo" },
  ]),

  achievements: createSectionProps("Achievements", "achievements", [
    { label: "Achievement", type: "text", name: "achievementName" },
    { label: "Additional info", type: "text", name: "additionalInfo" },
  ]),

  hobbys: createSectionProps("Hobbys", "hobbys", [
    { label: "Hobby", type: "text", name: "hobbyName" },
    { label: "Additional info", type: "text", name: "additionalInfo" },
  ]),
};

export const allSectionsList: string[] = [
  "Personal Data",
  "Experience",
  "Education",
  "Skills",
  "Achievements",
  "Hobbys",
];
