import { useForm, SubmitHandler } from "react-hook-form";
import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";
import { defaultValuesHobbys } from "@/validation/resumeCreator/allSections/Default";
import { IHobbys } from "@/validation/resumeCreator/allSections/types";
import Section from "./Section";
import { sections } from "./allSections";
import { usePopupVisibilityContext } from "@/context/PopupVisibilityProvider";

const Hobbys = () => {
  const { setIsPopupVisible } = usePopupVisibilityContext();
  const { userDataSet, setUserDataSet } = useUserDataSetContext();

  const form = useForm<IHobbys>({
    mode: "onChange",
    defaultValues: defaultValuesHobbys,
  });

  const onSubmit: SubmitHandler<IHobbys> = (data) => {
    setIsPopupVisible(true);
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
