import { FormProvider, SubmitHandler, UseFormReturn } from "react-hook-form";
import FormInput from "@/components/inputs/FormInput";
import { SectionProps } from "@/validation/resumeCreatorSection/types";
import Button from "@/components/buttons/Button";

interface IProps {
  form: UseFormReturn<any>;
  onSubmit: SubmitHandler<any>;
  inputProps: SectionProps;
}

const Section = ({ form, onSubmit, inputProps }: IProps) => {
  return (
    <div className="flex w-full flex-col p-5">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Button type="submit" label="Submit data" action={undefined} />
          <div className="my-4 h-[40vh] overflow-auto">
            {inputProps.inputs.map((e) => {
              return (
                <FormInput
                  key={e.name}
                  type={e.type}
                  label={e.label}
                  id={e.name}
                />
              );
            })}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Section;
