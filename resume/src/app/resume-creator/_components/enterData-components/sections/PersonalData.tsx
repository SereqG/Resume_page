import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaCheck } from "react-icons/fa";
import FormInput from "@/components/inputs/FormInput";
import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";
import { defaultValuesPersonalData } from "@/validation/resumeCreator/allSections/Default";
import { formSchema } from "@/validation/resumeCreator/allSections/Schema";

interface FormData {
  photo: string;
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
  websiteURL: string;
}

const PersonalData = () => {
  const { userDataSet, setUserDataSet } = useUserDataSetContext();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: defaultValuesPersonalData,
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
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
    <div className="flex max-h-[50vh] w-full flex-col overflow-auto p-5">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-color hover:bg-button-hover-color"
            type="submit"
          >
            <FaCheck />
          </button>

          {Object.entries(defaultValuesPersonalData).map(([key, value]) => (
            <FormInput
              key={key}
              type={key === "photo" ? "file" : "text"}
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              id={key}
            />
          ))}
        </form>
      </FormProvider>
    </div>
  );
};

export default PersonalData;
