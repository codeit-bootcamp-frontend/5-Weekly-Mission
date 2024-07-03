"use client";

import { FormValueType } from "@/app/login/_components/loginForm";
import { Button } from "@/components/Button/Button";
import AuthInput from "@/components/Input/AuthInput";
import { postCheckEmail, postSignUp } from "@/service/api";
import { emailPattern } from "@/util/util";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

export default function SignUpForm() {
  const {
    handleSubmit,
    control,
    watch,
    setError,
    formState: { isValid },
  } = useForm<FormValueType>({
    mode: "onChange",
  });
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [passwordConfirmHidden, setPasswordConfirmHidden] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const { mutate: checkEmail } = useMutation({
    mutationFn: (id: string) => postCheckEmail(id),
    onMutate: () => setIsActive(true),
    onError: () => {
      setIsActive(false);
      setError("id", { type: "manual", message: "이미 가입된 이메일입니다!" });
    },
  });

  const { mutate: signUp, isPending: signUpLoading } = useMutation({
    mutationFn: (user: { id: string; password: string }) =>
      postSignUp(user.id, user.password),
    onSuccess: () => (window.location.href = "/signin"),
  });

  const formAction = async (data: FormValueType) => {
    signUp(data);
  };

  return (
    <form
      className="flex flex-col justify-start gap-[1rem]"
      onSubmit={handleSubmit(formAction)}
    >
      <div className="gap--[1.2rem] relative flex flex-col items-start">
        <Controller
          name="id"
          control={control}
          rules={{
            required: "이메일을 입력해주세요!",
            pattern: {
              value: emailPattern,
              message: "이메일 형식이 아닙니다!",
            },
          }}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <AuthInput
              value={value}
              onChange={onChange}
              onBlur={() => {
                onBlur;
                if (value && !error) {
                  checkEmail(value);
                }
              }}
              type="text"
              placeholder="이메일"
              size="md"
              error={error}
              id="email"
              label="이메일"
            />
          )}
        />
      </div>
      <div className="gap--[1.2rem] relative flex flex-col items-start">
        <Controller
          name="password"
          control={control}
          rules={{
            required: "비밀번호를 입력해주세요!",
            minLength: {
              value: 8,
              message: "최소 8자를 입력해주세요!",
            },
            deps: ["confirmPassword"],
          }}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <AuthInput
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              type={passwordHidden ? "password" : "text"}
              placeholder="비밀번호"
              size="md"
              error={error}
              id="password"
              label="비밀번호"
            />
          )}
        />
        <div
          className="absolute right-[1.5rem] top-[5.5rem] m-0 cursor-pointer border-none p-0"
          onClick={() => {
            setPasswordHidden(!passwordHidden);
          }}
        />
      </div>
      <div className="gap--[1.2rem] relative flex flex-col items-start">
        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: "비밀번호를 입력해주세요!",
            validate: (value) => {
              return value === watch("password")
                ? true
                : "비밀번호가 일치하지 않습니다!";
            },
          }}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <AuthInput
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              type={passwordConfirmHidden ? "password" : "text"}
              placeholder="비밀번호"
              size="md"
              error={error}
              id="passwordConfirm"
              label="비밀번호확인"
            />
          )}
        />
        <div
          className="absolute right-[1.5rem] top-[5.5rem] m-0 cursor-pointer border-none p-0"
          onClick={() => setPasswordConfirmHidden(!passwordConfirmHidden)}
        />
      </div>
      <Button
        size={"lg"}
        type="submit"
        buttonActive={!isValid}
        isActive={!isActive}
      >
        회원가입
      </Button>
    </form>
  );
}
