import { v4 as uuidv4 } from "uuid";

import { useForm, SubmitHandler } from "react-hook-form";
import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";

import { defaultValuesAchievements } from "@/validation/resumeCreator/allSections/Default";
import { achievements } from "@/validation/resumeCreator/allSections/types";

import { Section } from "./Section";

import { usePopupVisibilityContext } from "@/context/PopupVisibilityProvider";
import { sections } from "@/data/allSections";

export const Achievements = () => {
  const { userDataSet, setUserDataSet } = useUserDataSetContext();
  const { setIsPopupVisible } = usePopupVisibilityContext();

  const form = useForm<achievements>({
    mode: "onChange",
    defaultValues: defaultValuesAchievements,
  });

  const onSubmit: SubmitHandler<achievements> = (data) => {
    setIsPopupVisible(true);
    setUserDataSet({
      ...userDataSet,
      achievements: [
        ...userDataSet["achievements"],
        { inputsValues: data, id: uuidv4() },
      ],
    });

    form.reset(defaultValuesAchievements);
  };

  return (
    <Section
      form={form}
      onSubmit={onSubmit}
      inputProps={sections.achievements}
    />
  );
};
