import { useState } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import FormInput from "@/components/inputs/FormInput";
import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";

import * as defaultValues from "@/validation/resumeCreator/allSections/Default";

interface IProps {
  dataProps: {
    name: string;
    id: string;
    inputs: { name: string; label: string; type: string }[];
  };
}

const Section = ({ dataProps }: IProps) => {
  console.log(dataProps);
  const { userDataSet, setUserDataSet } = useUserDataSetContext();
  const defaultValuesMap: Record<string, object> = {
    experience: defaultValues.defaultValuesExperience,
    education: defaultValues.defaultValuesEducation,
    skills: defaultValues.defaultValuesSkills,
    achievements: defaultValues.defaultValuesAchievements,
    hobbys: defaultValues.defaultValuesHobbys,
  };

  const form = useForm({
    mode: "onChange",
    defaultValues: defaultValuesMap[dataProps.name.toLowerCase()] || {},
  });

  const onSubmit: SubmitHandler<object> = (formData) => {
    setUserDataSet({
      ...userDataSet,
      [String(dataProps.name).toLowerCase()]: [
        ...userDataSet[String(dataProps.id)],
        { inputsValues: formData },
      ],
    });

    form.reset(defaultValuesMap[dataProps.name.toLowerCase()] || {});
  };

  return (
    <div className="flex max-h-[50vh] w-full flex-col overflow-auto p-5">
      <section className="mt-6 min-h-[21.5rem] w-full">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-color hover:bg-button-hover-color"
              type="submit"
            >
              <FaCheck />
            </button>
            {dataProps.inputs.map((input) => (
              <FormInput
                key={input.label}
                type={input.type}
                label={input.label}
                id={input.name}
              />
            ))}
          </form>
        </FormProvider>
      </section>
      <div></div>
    </div>
  );
};

export default Section;
