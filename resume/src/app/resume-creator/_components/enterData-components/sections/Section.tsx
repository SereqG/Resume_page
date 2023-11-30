import { FormProvider, SubmitHandler, UseFormReturn } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import FormInput from "@/components/inputs/FormInput";
import { SectionProps } from "@/validation/resumeCreatorSection/types";

interface IProps {
  form: UseFormReturn<any>;
  onSubmit: SubmitHandler<any>;
  inputProps: SectionProps;
}

const Section: React.FC<IProps> = ({ form, onSubmit, inputProps }) => {
  console.log(inputProps);
  return (
    <div className="flex max-h-[50vh] w-full flex-col overflow-auto p-5">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-color hover:bg-button-hover-color"
            type="submit"
          >
            <FaCheck />
          </button>
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
        </form>
      </FormProvider>
    </div>
  );
};

export default Section;
