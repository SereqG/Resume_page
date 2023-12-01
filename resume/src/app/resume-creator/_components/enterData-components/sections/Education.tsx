import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import FormInput from "@/components/inputs/FormInput";
import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";
import { defaultValuesEducation } from "@/validation/resumeCreator/allSections/Default";
import { IEducation } from "@/validation/resumeCreator/allSections/types";
import Section from "./Section";
import { sections } from "./allSections";
import { usePopupVisibilityContext } from "@/context/PopupVisibilityProvider";

const Education = () => {
  const { setIsPopupVisible } = usePopupVisibilityContext();
  const { userDataSet, setUserDataSet } = useUserDataSetContext();
  const form = useForm<IEducation>({
    mode: "onChange",
    defaultValues: defaultValuesEducation,
  });

  const onSubmit: SubmitHandler<IEducation> = (data) => {
    setIsPopupVisible(true);
    setUserDataSet({
      ...userDataSet,
      education: [...userDataSet["education"], { inputsValues: data }],
    });
    form.reset(defaultValuesEducation);
  };

  return (
    <Section form={form} onSubmit={onSubmit} inputProps={sections.education} />
  );
};

export default Education;
