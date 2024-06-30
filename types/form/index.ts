import { TProps } from "@/components/Auth/Header";
import { ReactNode } from "react";
import { SubmitHandler, UseFormHandleSubmit } from "react-hook-form";

export interface FormValues {
  email: string;
  password: string;
  passwordConfirm?: string;
}

export interface AuthFormProps {
  children?: ReactNode;
  onSubmit: SubmitHandler<FormValues>;
  handleSubmit: UseFormHandleSubmit<FormValues, undefined>;
  purpose: TProps;
}
