import { useResumePersonalizationContext } from "@/context/ResumePersonalizationProvider";

const PersonalizationOptions = () => {
  const { userPersonalization, setUserPersonalization } =
    useResumePersonalizationContext();

  return (
    <div className="flex w-[80%] flex-col items-center justify-between md:w-[40rem] md:flex-row">
      <div className="flex w-full flex-col md:w-auto md:flex-row md:items-center">
        <label className="text-bold m-2">Font size:</label>
        <select
          className="mr-3 border-2 border-primary-color p-2"
          onChange={(e: any) => {
            setUserPersonalization({
              ...userPersonalization,
              fontSize: e.target.value,
            });
          }}
        >
          <option value={16}>S</option>
          <option value={20}>M</option>
          <option value={24}>L</option>
        </select>
      </div>

      <div className="flex w-full flex-col md:w-auto md:flex-row md:items-center">
        <label className="text-bold m-2">Font:</label>
        <select
          className="mr-3 border-2 border-primary-color p-2"
          onChange={(e: any) => {
            setUserPersonalization({
              ...userPersonalization,
              fontFamily: e.target.value,
            });
          }}
        >
          <option className="font-['Segoe_UI']" value="Segoe UI">
            Segoe UI
          </option>
          <option className="font-['Courier']" value="Courier">
            Courier New
          </option>
          <option className="font-['Times_New_Roman']" value="Times-Roman">
            Times New Roman
          </option>
          <option className="font-['Georgia']" value="Helvetica">
            Georgia
          </option>
          <option className="font-['Roboto']" value="Roboto">
            Roboto
          </option>
        </select>
      </div>

      <div className="flex w-full flex-col md:w-auto md:flex-row md:items-center">
        <label className="text-bold m-2">Color:</label>
        <input
          type="color"
          id="color"
          name="color"
          className="h-[2.5rem] w-[5rem] appearance-none"
          onChange={(e: any) => {
            setUserPersonalization({
              ...userPersonalization,
              color: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
};

export default PersonalizationOptions;
