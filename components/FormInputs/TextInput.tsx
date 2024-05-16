import React from "react";

type TextInputProps = {
  label: string;
  register: any;
  name: string;
  errors: any;
  type?: string;
};

const TextInput = ({
  label,
  register,
  name,
  errors,
  type = "text",
}: TextInputProps) => {
  return (
    <div>
      <label
        htmlFor={`${name}`}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          {...register(`${name}`, { required: true })}
          id={`${name}`}
          name={`${name}`}
          type={type}
          autoComplete="name"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {errors[`${name}`] && (
          <span className="text-red-600 text-sm">{label} is required</span>
        )}
      </div>
    </div>
  );
};

export default TextInput;
