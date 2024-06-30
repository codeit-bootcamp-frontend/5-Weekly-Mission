import { postEmailCheck, postSignup } from "@/api";
import { FormValues } from "@/types/form";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

function useSignup() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm<FormValues>({ mode: "onBlur" });
  const emailCheckMutation = useMutation({
    mutationFn: postEmailCheck,
    onSuccess: (data) => {
      if (typeof data === "string") {
        setError(
          "email",
          {
            type: "validate",
            message: data,
          },
          { shouldFocus: true }
        );
      }
    },
  });
  const signupMutation = useMutation({ mutationFn: postSignup });

  const handleEmailCheck = (e: React.FocusEvent<HTMLInputElement>) => {
    const email = e.target.value;

    if (email.length === 0) return;

    emailCheckMutation.mutate(email);
  };

  const handleSignup: SubmitHandler<FormValues> = ({ email, password }) => {
    signupMutation.mutate({ email, password });

    router.replace("/signin");
  };

  return {
    handleEmailCheck,
    handleSignup,
    register,
    handleSubmit,
    formState: { errors },
    watch,
    emailCheckMutation,
  };
}

export default useSignup;
