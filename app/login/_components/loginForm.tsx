"use client";

import { useState } from "react";
import { Button } from "@/components/Button/Button";
import { Controller, useForm } from "react-hook-form";
import { emailPattern } from "@/util/util";
import AuthInput from "@/components/Input/AuthInput";
import { signIn } from "next-auth/react";
import Image from "next/image";
import eyeIcon from "@/public/eye-on.svg";
import eyeOffIcon from "@/public/eye_off.svg";
import { useRouter } from "next/navigation";

export interface FormValueType {
  id: string;
  password: string;
  confirmPassword?: string;
}

export default function LoginForm() {
  const [textHidden, setTextHidden] = useState(true);
  const {
    handleSubmit,
    control,
    setError,
    formState: { isValid },
  } = useForm<FormValueType>({ mode: "onChange" });
  const router = useRouter();

  const formAction = async (data: FormValueType) => {
    const result = await signIn("credentials", {
      id: data.id,
      password: data.password,
      redirect: false,
    });
    if (result?.ok) {
      router.push("/folder");
    } else if (result?.error) {
      setError("id", {
        type: "manual",
        message: "아이디를 다시 확인해주세요!",
      });
      setError("password", {
        type: "manual",
        message: "비밀번호를 다시 확인해주세요!",
      });
    }
  };

  const hiddenText = () => {
    setTextHidden(!textHidden);
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
              id="email"
              label="이메일"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              type="text"
              placeholder="이메일"
              size="md"
              error={error}
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
          }}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <AuthInput
              id="password"
              label="비밀번호"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              type={textHidden ? "password" : "text"}
              placeholder="비밀번호"
              size="md"
              error={error}
            />
          )}
        />
        <div
          className="absolute right-[1.5rem] top-[5.5rem] m-0 cursor-pointer border-none p-0"
          onClick={hiddenText}
        >
          <Image
            src={textHidden ? eyeOffIcon : eyeIcon}
            width={16}
            height={16}
            alt="눈 아이콘"
          />
        </div>
      </div>
      <Button size={"lg"} type="submit" buttonActive={!isValid}>
        로그인
      </Button>
    </form>
  );
}
