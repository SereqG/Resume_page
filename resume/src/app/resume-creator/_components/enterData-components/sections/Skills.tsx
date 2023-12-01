import { useForm, SubmitHandler } from "react-hook-form";
import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";
import { defaultValuesSkills } from "@/validation/resumeCreator/allSections/Default";
import { ISkills } from "@/validation/resumeCreator/allSections/types";
import Section from "./Section";
import { sections } from "./allSections";
import { usePopupVisibilityContext } from "@/context/PopupVisibilityProvider";

const Skills = () => {
  const { setIsPopupVisible } = usePopupVisibilityContext();
  const { userDataSet, setUserDataSet } = useUserDataSetContext();

  const form = useForm<ISkills>({
    mode: "onChange",
    defaultValues: defaultValuesSkills,
  });

  const onSubmit: SubmitHandler<ISkills> = (data) => {
    setIsPopupVisible(true);
    setUserDataSet({
      ...userDataSet,
      skills: [...userDataSet["skills"], { inputsValues: data }],
    });

    form.reset(defaultValuesSkills);
  };

  return (
    <Section form={form} onSubmit={onSubmit} inputProps={sections.skills} />
  );
};

export default Skills;
