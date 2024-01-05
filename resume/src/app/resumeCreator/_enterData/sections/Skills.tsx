import { v4 as uuidv4 } from "uuid";

import { useForm, SubmitHandler } from "react-hook-form";
import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";
import { Section } from "./Section";
import { sections } from "@/data/allSections";

import { usePopupVisibilityContext } from "@/context/PopupVisibilityProvider";

import { defaultValuesSkills } from "@/validation/resumeCreator/allSections/Default";
import { skills } from "@/validation/resumeCreator/allSections/types";

export const Skills = () => {
  const { setIsPopupVisible } = usePopupVisibilityContext();
  const { userDataSet, setUserDataSet } = useUserDataSetContext();

  const form = useForm<skills>({
    mode: "onChange",
    defaultValues: defaultValuesSkills,
  });

  const onSubmit: SubmitHandler<skills> = (data) => {
    setIsPopupVisible(true);
    setUserDataSet({
      ...userDataSet,
      skills: [...userDataSet["skills"], { inputsValues: data, id: uuidv4() }],
    });

    form.reset(defaultValuesSkills);
  };

  return (
    <Section form={form} onSubmit={onSubmit} inputProps={sections.skills} />
  );
};
