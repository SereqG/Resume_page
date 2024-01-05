import { useResumePersonalizationContext } from "@/context/ResumePersonalizationProvider";

const styles = {
  box: "flex w-full flex-col md:w-auto md:flex-row md:items-center",
  select: "mr-3 border-2 border-primary-color p-2",
};

export const ResumePreview = () => {
  const { userPersonalization, setUserPersonalization } =
    useResumePersonalizationContext();

  return (
    <div className="flex h-full w-full items-center justify-center md:flex-col">
      <div className="flex w-[80%] flex-col items-center justify-between md:w-[40rem] md:flex-row">
        <div className={styles.box}>
          <label className="text-bold m-2">Font size:</label>
          <select
            className={styles.select}
            value={userPersonalization.fontSize}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
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

        <div className={styles.box}>
          <label className="text-bold m-2">Font:</label>
          <select
            className={styles.select}
            value={userPersonalization.fontFamily}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setUserPersonalization({
                ...userPersonalization,
                fontFamily: e.target.value,
              });
            }}
          >
            <option className="font-['Courier']" value="Courier">
              Courier New
            </option>
            <option className="font-['Times_New_Roman']" value="Times-Roman">
              Times New Roman
            </option>
            <option className="font-['Helvetica']" value="Helvetica">
              Helvetica
            </option>
          </select>
        </div>

        <div className={styles.box}>
          <label className="text-bold m-2">Color:</label>
          <input
            type="color"
            id="color"
            name="color"
            className="h-[2.5rem] w-[5rem] appearance-none"
            value={userPersonalization.color}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUserPersonalization({
                ...userPersonalization,
                color: e.target.value,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};
