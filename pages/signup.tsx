import React, { useEffect } from "react";
import AuthFrame from "../components/auth/AuthFrame";
import AuthSocial from "../components/auth/AuthSocial";
import AuthFormTop from "../components/auth/AuthFormTop";
import SignupForm from "../components/auth/SignupForm";
import { useRouter } from "next/router";
import { SIGN_UP_TOKKEN } from "../Api/Api";

export default function signup() {
  const router = useRouter();

  const checkSignUpToken = function () {
    const userToken = window.localStorage.getItem(SIGN_UP_TOKKEN);
    if (userToken) {
      router.push("./folder");
    }
  };

  useEffect(() => {
    checkSignUpToken();
  }, []);

  return (
    <AuthFrame>
      <AuthFormTop auth="signup" />
      <SignupForm />
      <AuthSocial>
        <span>다른 방식으로 가입하기</span>
      </AuthSocial>
    </AuthFrame>
  );
}
