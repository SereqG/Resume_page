import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";
import { usePopupVisibilityContext } from "@/context/PopupVisibilityProvider";

import { sections } from "@/data/allSections";
import { Section } from "./Section";

import { formSchema } from "@/validation/resumeCreator/allSections/Schema";
import { personalData } from "@/validation/resumeCreator/allSections/types";

export const PersonalData = () => {
  const { setIsPopupVisible } = usePopupVisibilityContext();
  const { userDataSet, setUserDataSet } = useUserDataSetContext();

  const form = useForm<personalData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      name: userDataSet.name,
      surname: userDataSet.surname,
      phoneNumber: userDataSet.phoneNumber,
      email: userDataSet.email,
      websiteURL: userDataSet.websiteURL,
    },
  });

  const onSubmit: SubmitHandler<personalData> = (data) => {
    setIsPopupVisible(true);

    setUserDataSet({
      ...userDataSet,
      name: data.name,
      surname: data.surname,
      email: data.email,
      phoneNumber: data.phoneNumber,
      websiteURL: data.websiteURL,
    });
  };

  return (
    <Section
      form={form}
      onSubmit={onSubmit}
      inputProps={sections.personalData}
    />
  );
};
