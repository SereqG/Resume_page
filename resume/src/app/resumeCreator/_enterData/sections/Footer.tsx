import { useForm, SubmitHandler } from "react-hook-form";

import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";
import { usePopupVisibilityContext } from "@/context/PopupVisibilityProvider";

import { sections } from "@/data/allSections";
import { Section } from "./Section";

import { footer } from "@/validation/resumeCreator/allSections/types";

export const Footer = () => {
  const { setIsPopupVisible } = usePopupVisibilityContext();
  const { userDataSet, setUserDataSet } = useUserDataSetContext();

  const form = useForm<footer>({
    mode: "onChange",
    defaultValues: {
      footer: userDataSet.footer,
    },
  });

  const onSubmit: SubmitHandler<footer> = (data) => {
    setIsPopupVisible(true);

    setUserDataSet({
      ...userDataSet,
      footer: data.footer,
    });
  };

  return (
    <Section form={form} onSubmit={onSubmit} inputProps={sections.footer} />
  );
};
