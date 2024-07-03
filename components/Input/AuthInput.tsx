"use client";

import { FieldError } from "react-hook-form";
import { useEffect, useState } from "react";

export interface FormValueTypes {
  id?: string;
  password?: string;
  confirmPassword?: string;
  folder?: string;
}

export interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  size: "sm" | "md" | "lg";
  error: FieldError | undefined;
  value?: string;
  onChange: (...event: any[]) => void;
  onBlur?: () => void;
}

function AuthInput({
  id,
  label,
  placeholder,
  type,
  size,
  error,
  onChange,
  onBlur,
  value,
}: InputProps) {
  const [errorMessage, setErrorMessage] = useState(false);
  const buttonWidth = {
    sm: "w-[28rem]",
    md: "w-[40rem]",
    lg: "w-[50rem]",
  };

  useEffect(() => {
    if (error) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
    }
  }, [error]);

  return (
    <div className="flex flex-col gap-[1rem]">
      <label className="text-[1.4rem]" htmlFor={id}>
        {label}
      </label>
      <input
        className={`flex items-center ${buttonWidth[size]} justify-center rounded-[0.8rem] border border-solid bg-[--Section-white] px-[1.5rem] py-[1.8rem] text-[1.6rem] ${errorMessage ? "border-[--ErrorMessage]" : "border-[--Linkbrary-gray20]"}`}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      <div className="flex h-[1.5rem] w-full items-center">
        {error && (
          <p className="m-0 text-[1.4rem] text-[--ErrorMessage]">
            {error.message}
          </p>
        )}
      </div>
    </div>
  );
}

export default AuthInput;
