import { v4 as uuidv4 } from "uuid";

import { useForm, SubmitHandler } from "react-hook-form";
import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";
import { defaultValuesAdditionalActivity } from "@/validation/resumeCreator/allSections/Default";
import { IAdditionalActivity } from "@/validation/resumeCreator/allSections/types";
import Section from "./Section";
import { sections } from "./allSections";
import { usePopupVisibilityContext } from "@/context/PopupVisibilityProvider";

const AdditionalActivity = () => {
  const { setIsPopupVisible } = usePopupVisibilityContext();
  const { userDataSet, setUserDataSet } = useUserDataSetContext();

  const form = useForm<IAdditionalActivity>({
    mode: "onChange",
    defaultValues: defaultValuesAdditionalActivity,
  });

  const onSubmit: SubmitHandler<IAdditionalActivity> = (data) => {
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

export default AdditionalActivity;
