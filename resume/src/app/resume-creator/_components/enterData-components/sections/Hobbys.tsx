import { useForm, SubmitHandler } from "react-hook-form";
import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";
import { defaultValuesHobbys } from "@/validation/resumeCreator/allSections/Default";
import { IHobbys } from "@/validation/resumeCreator/allSections/types";
import Section from "./Section";
import { sections } from "./allSections";

const Hobbys = () => {
  const { userDataSet, setUserDataSet } = useUserDataSetContext();

  const form = useForm<IHobbys>({
    mode: "onChange",
    defaultValues: defaultValuesHobbys,
  });

  const onSubmit: SubmitHandler<IHobbys> = (data) => {
    setUserDataSet({
      ...userDataSet,
      hobbys: [...userDataSet["hobbys"], { inputsValues: data }],
    });

    form.reset(defaultValuesHobbys);
  };

  return (
    <Section form={form} onSubmit={onSubmit} inputProps={sections.hobbys} />
  );
};

export default Hobbys;
