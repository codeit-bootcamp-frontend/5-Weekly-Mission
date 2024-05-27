import {
  UseFormRegister,
  FieldErrors,
  FieldValues,
  UseFormWatch,
} from "react-hook-form";

export interface FormValues {
  email: string;
  password: string;
  signUpPassword: string;
  signUpPasswordCheck: string;
}

export interface SignInputProps {
  pageType: "signUp" | "signIn";
  type: "email" | "password" | "signUpPassword" | "signUpPasswordCheck";
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FieldValues>;
  watch?: UseFormWatch<FormValues>;
  loginFailState?: boolean;
}
