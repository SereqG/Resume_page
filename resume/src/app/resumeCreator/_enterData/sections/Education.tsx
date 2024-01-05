import { v4 as uuidv4 } from "uuid";

import { useForm, SubmitHandler } from "react-hook-form";
import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";

import { defaultValuesEducation } from "@/validation/resumeCreator/allSections/Default";
import { education } from "@/validation/resumeCreator/allSections/types";

import { Section } from "./Section";

import { usePopupVisibilityContext } from "@/context/PopupVisibilityProvider";
import { sections } from "@/data/allSections";

export const Education = () => {
  const { setIsPopupVisible } = usePopupVisibilityContext();
  const { userDataSet, setUserDataSet } = useUserDataSetContext();
  const form = useForm<education>({
    mode: "onChange",
    defaultValues: defaultValuesEducation,
  });

  const onSubmit: SubmitHandler<education> = (data) => {
    setIsPopupVisible(true);

    setUserDataSet({
      ...userDataSet,
      education: [
        ...userDataSet["education"],
        { inputsValues: data, id: uuidv4() },
      ],
    });
    form.reset(defaultValuesEducation);
  };

  return (
    <Section form={form} onSubmit={onSubmit} inputProps={sections.education} />
  );
};
