import PersonalizationOptions from "./_resume-preview-components/PersonalizationOptions";
import { useUserDataSetContext } from "@/context/ResumeDatasetProvider";

const ResumePreview = () => {
  const { userDataSet, setUserDataSet } = useUserDataSetContext();
  console.log(userDataSet);
  return (
    <div className="flex h-full w-full items-center justify-center md:flex-col">
      <PersonalizationOptions />
    </div>
  );
};

export default ResumePreview;
