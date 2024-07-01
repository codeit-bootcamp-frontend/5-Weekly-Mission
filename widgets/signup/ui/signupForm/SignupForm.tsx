import React, { useState } from "react";
import styles from "./signupForm.module.css";
import { useSignupFormState } from "../../model/useSignupFormValidate";
import Input from "@//shared/ui/input/Input";
import { signup } from "../../model/signup";
import { AuthBtn, EyeBtn } from "@/features/auth";

export const SignupForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const {
    emailValidation,
    passwordValidation,
    confirmPasswordValidation,
    errors,
    setError,
    handleSubmit,
  } = useSignupFormState();

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit((data) => signup(data))}
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
          label="비밀번호"
          type={isPasswordVisible ? "text" : "password"}
          placeholder="비밀번호를 입력해주세요."
        />
        <EyeBtn
          isVisible={isPasswordVisible}
          setIsVisible={setIsPasswordVisible}
        />
      </div>
      <p className={styles.errMsg}>{errors.password?.message}</p>
      <div className={styles.inputWrap}>
        <Input
          register={confirmPasswordValidation}
          type={isConfirmVisible ? "text" : "password"}
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요."
        />
        <EyeBtn
          isVisible={isConfirmVisible}
          setIsVisible={setIsConfirmVisible}
        />
      </div>
      <p className={styles.errMsg}>{errors.confirmPassword?.message}</p>
      <AuthBtn />
    </form>
  );
};
