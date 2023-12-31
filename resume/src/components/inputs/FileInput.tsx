export const FileInput = ({
  label,
  name,
  onChange,
}: {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="my-4 w-full">
    <label
      className="mb-1 whitespace-nowrap font-bold md:mb-0 md:text-right"
      htmlFor={name}
    >
      {label}
    </label>
    <input
      id={name}
      type="file"
      className="w-full appearance-none rounded border-2 border-gray-100 bg-gray-100 px-4 py-2 leading-tight text-gray-700 focus:border-primary-color focus:bg-white focus:outline-none"
      placeholder={label}
      onChange={onChange}
    />
  </div>
);
