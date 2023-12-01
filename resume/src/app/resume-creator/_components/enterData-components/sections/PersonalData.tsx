import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";
import { usePopupVisibilityContext } from "@/context/PopupVisibilityProvider";

import { defaultValuesPersonalData } from "@/validation/resumeCreator/allSections/Default";
import { formSchema } from "@/validation/resumeCreator/allSections/Schema";
import { sections } from "./allSections";
import Section from "./Section";
import { IPersonalData } from "@/validation/resumeCreator/allSections/types";

const PersonalData = () => {
  const { setIsPopupVisible } = usePopupVisibilityContext();
  const { userDataSet, setUserDataSet } = useUserDataSetContext();

  const form = useForm<IPersonalData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: defaultValuesPersonalData,
  });

  const onSubmit: SubmitHandler<IPersonalData> = (data) => {
    setIsPopupVisible(true);

    setUserDataSet({
      ...userDataSet,
      photo: data.photo,
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

export default PersonalData;
