import { v4 as uuidv4 } from "uuid";

import { useForm, SubmitHandler } from "react-hook-form";
import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";

import { defaultValuesHobbys } from "@/validation/resumeCreator/allSections/Default";
import { hobbys } from "@/validation/resumeCreator/allSections/types";

import { Section } from "./Section";

import { usePopupVisibilityContext } from "@/context/PopupVisibilityProvider";
import { sections } from "@/data/allSections";

export const Hobbys = () => {
  const { setIsPopupVisible } = usePopupVisibilityContext();
  const { userDataSet, setUserDataSet } = useUserDataSetContext();

  const form = useForm<hobbys>({
    mode: "onChange",
    defaultValues: defaultValuesHobbys,
  });

  const onSubmit: SubmitHandler<hobbys> = (data) => {
    setIsPopupVisible(true);
    setUserDataSet({
      ...userDataSet,
      hobbys: [...userDataSet["hobbys"], { inputsValues: data, id: uuidv4() }],
    });
    form.reset(defaultValuesHobbys);
  };

  return (
    <Section form={form} onSubmit={onSubmit} inputProps={sections.hobbys} />
  );
};
