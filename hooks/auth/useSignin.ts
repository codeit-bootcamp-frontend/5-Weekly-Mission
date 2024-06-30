import { postSignin } from "@/api";
import { FormValues } from "@/types/form";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { SubmitHandler } from "react-hook-form";

function useSignin() {
  const router = useRouter();
  const mutation = useMutation({ mutationFn: postSignin });

  const handleSignin: SubmitHandler<FormValues> = ({ email, password }) => {
    mutation.mutate({ email, password });
    router.replace("/");
  };

  return { handleSignin };
}

export default useSignin;
