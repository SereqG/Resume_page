import { v4 as uuidv4 } from "uuid";

import { useForm, SubmitHandler } from "react-hook-form";
import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";

import { defaultValuesCertificates } from "@/validation/resumeCreator/allSections/Default";
import { certificates } from "@/validation/resumeCreator/allSections/types";

import { Section } from "./Section";

import { usePopupVisibilityContext } from "@/context/PopupVisibilityProvider";
import { sections } from "@/data/allSections";

export const Certificates = () => {
  const { setIsPopupVisible } = usePopupVisibilityContext();
  const { userDataSet, setUserDataSet } = useUserDataSetContext();

  const form = useForm<certificates>({
    mode: "onChange",
    defaultValues: defaultValuesCertificates,
  });

  const onSubmit: SubmitHandler<certificates> = (data) => {
    setIsPopupVisible(true);

    setUserDataSet({
      ...userDataSet,
      certificates: [
        ...userDataSet["certificates"],
        { inputsValues: data, id: uuidv4() },
      ],
    });

    form.reset(defaultValuesCertificates);
  };

  return (
    <Section
      form={form}
      onSubmit={onSubmit}
      inputProps={sections.certificates}
    />
  );
};
