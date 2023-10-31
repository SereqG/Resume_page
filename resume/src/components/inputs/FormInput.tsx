import react from "react";

interface IFormInput {
  type?: string;
  label: string;
  id: string;
  name: string;
  onChange: (e: any) => void;
}

const FormInput: react.FC<IFormInput> = ({
  type,
  label,
  id,
  onChange,
  name,
}) => {
  return (
    <>
      <div className="my-4 w-full">
        <label
          className="mb-1 whitespace-nowrap font-bold md:mb-0 md:text-right"
          htmlFor="inline-full-name"
        >
          {label}
        </label>

        <input
          type={type || "text"}
          id={id}
          placeholder={label}
          onChange={onChange}
          name={name}
          className="w-full appearance-none rounded border-2 border-gray-100 bg-gray-100 px-4 py-2 leading-tight text-gray-700 focus:border-primary-color focus:bg-white focus:outline-none"
        />
      </div>
    </>
  );
};
export default FormInput;
