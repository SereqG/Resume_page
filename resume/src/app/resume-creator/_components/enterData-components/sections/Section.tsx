import React from "react";
import { FormProvider, SubmitHandler, UseFormReturn } from "react-hook-form";
import { FormInput } from "@/components/inputs/FormInput";
import { SectionProps } from "@/validation/resumeCreatorSection/types";
import { Button } from "@/components/buttons/Button";
import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";
import { FileInput } from "@/components/inputs/FileInput";

interface Props {
  form: UseFormReturn<any>;
  onSubmit: SubmitHandler<any>;
  inputProps: SectionProps;
}

export const Section = ({ form, onSubmit, inputProps }: Props) => {
  const { userDataSet, setUserDataSet } = useUserDataSetContext();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUserDataSet({
        ...userDataSet,
        photo: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  return (
    <div className="flex w-full flex-col p-5">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Button type="submit" action={undefined}>
            Submit data
          </Button>
          <div className="my-4 h-[40vh] overflow-auto">
            {inputProps.inputs.map((e) => (
              <div key={e.name}>
                {e.type === "file" ? (
                  <FileInput
                    label={e.label}
                    name={e.name}
                    onChange={handleFileChange}
                    key={e.name}
                  />
                ) : (
                  <FormInput
                    type={e.type}
                    label={e.label}
                    id={e.name}
                    key={e.name}
                  />
                )}
              </div>
            ))}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
