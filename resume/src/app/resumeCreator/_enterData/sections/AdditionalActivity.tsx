import { v4 as uuidv4 } from "uuid";

import { useForm, SubmitHandler } from "react-hook-form";
import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";

import { defaultValuesAdditionalActivity } from "@/validation/resumeCreator/allSections/Default";
import { additionalActivity } from "@/validation/resumeCreator/allSections/types";

import { Section } from "./Section";

import { usePopupVisibilityContext } from "@/context/PopupVisibilityProvider";
import { sections } from "@/data/allSections";

export const AdditionalActivity = () => {
  const { setIsPopupVisible } = usePopupVisibilityContext();
  const { userDataSet, setUserDataSet } = useUserDataSetContext();

  const form = useForm<additionalActivity>({
    mode: "onChange",
    defaultValues: defaultValuesAdditionalActivity,
  });

  const onSubmit: SubmitHandler<additionalActivity> = (data) => {
    setIsPopupVisible(true);

    setUserDataSet({
      ...userDataSet,
      additional_activity: [
        ...userDataSet["additional_activity"],
        { inputsValues: data, id: uuidv4() },
      ],
    });

    form.reset(defaultValuesAdditionalActivity);
  };

  return (
    <Section
      form={form}
      onSubmit={onSubmit}
      inputProps={sections.additionalActivity}
    />
  );
};
