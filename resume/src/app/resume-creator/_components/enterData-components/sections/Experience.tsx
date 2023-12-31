import { v4 as uuidv4 } from "uuid";

import { useForm, SubmitHandler } from "react-hook-form";
import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";
import { defaultValuesExperience } from "@/validation/resumeCreator/allSections/Default";
import { experience } from "@/validation/resumeCreator/allSections/types";
import { Section } from "./Section";
import { sections } from "./allSections";
import { usePopupVisibilityContext } from "@/context/PopupVisibilityProvider";

export const Experience = () => {
  const { setIsPopupVisible } = usePopupVisibilityContext();
  const { userDataSet, setUserDataSet } = useUserDataSetContext();

  const form = useForm<experience>({
    mode: "onChange",
    defaultValues: defaultValuesExperience,
  });

  const onSubmit: SubmitHandler<experience> = (data) => {
    setIsPopupVisible(true);

    setUserDataSet({
      ...userDataSet,
      experience: [
        ...userDataSet["experience"],
        { inputsValues: data, id: uuidv4() },
      ],
    });

    form.reset(defaultValuesExperience);
  };

  return (
    <Section form={form} onSubmit={onSubmit} inputProps={sections.experience} />
  );
};
