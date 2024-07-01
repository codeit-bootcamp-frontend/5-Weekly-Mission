import React, { useState } from "react";
import styles from "./signinForm.module.css";
import Input from "@//shared/ui/input/Input";
import { useSigninFormState } from "../../model/useSigninFormState";
import { signin } from "../../model/signin";
import { useRouter } from "next/router";
import { AuthBtn, EyeBtn } from "@/features/auth";

export const SigninForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    emailValidation,
    passwordValidation,
    handleSubmit,
    setError,
    errors,
  } = useSigninFormState();
  const router = useRouter();

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit((data) => {
        signin(data, setError);
      })}
    >
      <Input
        register={emailValidation}
        label="이메일"
        type="text"
        placeholder="이메일을 입력해주세요."
      />
      <p className={styles.errMsg}>{errors.email?.message}</p>
      <div className={styles.inputWrap}>
        <Input
          register={passwordValidation}
          type={isVisible ? "text" : "password"}
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
        />
        <EyeBtn setIsVisible={setIsVisible} isVisible={isVisible} />
      </div>
      <p className={styles.errMsg}>{errors.password?.message}</p>
      <AuthBtn />
    </form>
  );
};
