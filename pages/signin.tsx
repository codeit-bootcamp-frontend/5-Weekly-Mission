import React, { useEffect } from "react";
import AuthFrame from "../components/auth/AuthFrame";
import AuthSocial from "../components/auth/AuthSocial";
import AuthFormTop from "../components/auth/AuthFormTop";
import SigninForm from "../components/auth/SigninForm";
import { LOGIN_TOKEN } from "../Api/Api";
import { useRouter } from "next/router";

export default function signin() {
  const router = useRouter();

  const checkSignInToken = function () {
    const userToken = window.localStorage.getItem(LOGIN_TOKEN);
    if (userToken) {
      router.push("./folder");
    }
  };

  useEffect(() => {
    checkSignInToken();
  }, []);

  return (
    <AuthFrame>
      <AuthFormTop auth="signin" />
      <SigninForm />
      <AuthSocial>
        <span>소셜 로그인</span>
      </AuthSocial>
    </AuthFrame>
  );
}
