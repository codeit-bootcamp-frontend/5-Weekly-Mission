import { useForm } from "react-hook-form";

export enum AuthFormStateKey {
  email = "email",
  password = "password",
}

export const useSigninFormState = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: { email: "", password: "" },
  });

  const emailValidation = {
    ...register(AuthFormStateKey.email, {
      required: { value: true, message: "이메일을 입력해주세요." },
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        message: "이메일 형식이 아닙니다.",
      },
    }),
  };

  const passwordValidation = {
    ...register(AuthFormStateKey.password, {
      required: { value: true, message: "비밀번호를 입력해주세요." },
    }),
  };

  return {
    emailValidation,
    passwordValidation,
    errors,
    handleSubmit,
    setError,
  };
};
