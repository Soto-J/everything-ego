import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  register,
  errors,
  disabled,
  required,
}) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        placeholder=" "
        {...register(id, { required })}
        className="
          peer
          w-full
          border-2
          p-4
          font-light
          outline-none
          transition
          disabled:cursor-not-allowed
          disabled:opacity-70
        "
      />
      <label
        htmlFor=""
        className={`
          absolute 
          left-2.5 
          top-4 
          z-10 
          origin-[0] 
          -translate-y-4 
          scale-75 
          transform 
          text-sm 
          text-gray-500 
          duration-300 
          peer-placeholder-shown:translate-y-0 
          peer-placeholder-shown:scale-100 
          peer-focus:-translate-y-4 
          peer-focus:scale-75 
          peer-focus:text-blue-600 
          dark:text-gray-400 
          peer-focus:dark:text-blue-500
          ${errors[id] ? "text-rose-500" : "text-gray-500"}
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
