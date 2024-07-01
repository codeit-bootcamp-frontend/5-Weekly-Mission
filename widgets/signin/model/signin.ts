import { AuthFormStateKey } from "@/widgets/signin/model/useSigninFormState";
import { signinApi } from "../api/signinApi";

export const signin = async (
  data: { email: string; password: string },
  setError: any,
) => {
  const result = await signinApi(data);

  if (!result) {
    setError(AuthFormStateKey.email, {
      type: "manual",
      message: "이메일 또는 비밀번호가 일치하지 않습니다.",
    });
    setError(AuthFormStateKey.password, {
      type: "manual",
      message: "이메일 또는 비밀번호가 일치하지 않습니다.",
    });
    return;
  }

  localStorage.setItem("accessToken", result.data.accessToken);
  window.location.replace("/folder");
  console.log("signin");
};
