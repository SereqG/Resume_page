import { useState } from "react";
import { useFormContext, useController } from "react-hook-form";

interface IFormInput {
  type?: string;
  id: string;
  label: string;
}

import React from "react";

const FormInput = ({ type, id, label }: IFormInput) => {
  const [inputType, setInputType] = useState<string>(type || "text");
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { field } = useController({
    control,
    name: id,
  });

  return (
    <div>
      <div className="my-4 w-full">
        <label
          className="mb-1 whitespace-nowrap font-bold md:mb-0 md:text-right"
          htmlFor="inline-full-name"
        >
          {label}
        </label>
        <input
          id={id}
          type={inputType}
          className="w-full appearance-none rounded border-2 border-gray-100 bg-gray-100 px-4 py-2 leading-tight text-gray-700 focus:border-primary-color focus:bg-white focus:outline-none"
          placeholder={label}
          value={field.value}
          onChange={field.onChange}
        />
      </div>
      <label className="text-red-600 text-xs font-semibold">
        {errors[id]?.message?.toString()}
      </label>
    </div>
  );
};

export default FormInput;
