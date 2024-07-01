import { useForm } from "react-hook-form";
import { duplicateCheckEmail } from "../api/duplicateCheckEmail";

enum AuthFormStateKey {
  email = "email",
  password = "password",
  confirmPassword = "confirmPassword",
}

export const useSignupFormState = () => {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  const passwordValue = watch(AuthFormStateKey.password);

  const emailValidation = {
    ...register(AuthFormStateKey.email, {
      required: { value: true, message: "이메일을 입력해주세요." },
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        message: "이메일 형식이 아닙니다.",
      },
      validate: async (value) => {
        const isDuplicate = await duplicateCheckEmail(value);
        return isDuplicate || "이미 사용중인 이메일입니다.";
      },
    }),
  };

  const passwordValidation = {
    ...register(AuthFormStateKey.password, {
      required: { value: true, message: "비밀번호를 입력해주세요." },
    }),
  };

  const confirmPasswordValidation = {
    ...register(AuthFormStateKey.confirmPassword, {
      required: { value: true, message: "비밀번호를 다시 입력해주세요." },
      validate: (value) =>
        value === passwordValue || "비밀번호가 일치하지 않습니다.",
    }),
  };

  return {
    emailValidation,
    passwordValidation,
    confirmPasswordValidation,
    errors,
    handleSubmit,
    setError,
  };
};
