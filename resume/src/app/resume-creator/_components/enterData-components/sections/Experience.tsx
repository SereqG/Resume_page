import { useForm, SubmitHandler } from "react-hook-form";
import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";
import { defaultValuesExperience } from "@/validation/resumeCreator/allSections/Default";
import { IExperience } from "@/validation/resumeCreator/allSections/types";
import Section from "./Section";
import { sections } from "./allSections";

const Experience = () => {
  const { userDataSet, setUserDataSet } = useUserDataSetContext();

  const form = useForm<IExperience>({
    mode: "onChange",
    defaultValues: defaultValuesExperience,
  });

  const onSubmit: SubmitHandler<IExperience> = (data) => {
    setUserDataSet({
      ...userDataSet,
      experience: [...userDataSet["experience"], { inputsValues: data }],
    });

    form.reset(defaultValuesExperience);
  };

  return (
    <Section form={form} onSubmit={onSubmit} inputProps={sections.experience} />
  );
};

export default Experience;
