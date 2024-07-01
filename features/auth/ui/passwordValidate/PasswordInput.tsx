import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

import Input from "@/shared/ui/input/Input";
import { validatePassword } from "../../model/validatePassword";

interface PasswordInputProps {
  passwordErr: string;
  setPasswordErr: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  inputType: string;
}

export const PasswordInput = ({
  passwordErr,
  setPasswordErr,
  password,
  setPassword,
  inputType,
}: PasswordInputProps) => {
  return (
    <Input
      label="비밀번호"
      type={inputType}
      placeholder="비밀번호를 입력해 주세요."
      errMsg={passwordErr}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
      }}
      focusOut={() => {
        validatePassword(password, setPasswordErr);
      }}
    />
  );
};
