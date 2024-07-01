import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

import Input from "@/shared/ui/input/Input";
import { validateConfirmPassword } from "../../model/validateConfirmPassword";

interface ConfirmPasswordInputProps {
  confirmPassword: string;
  password: string;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
  confirmPasswordErr: string;
  setConfirmPasswordErr: Dispatch<SetStateAction<string>>;
  inputType: string;
}

export const ConfirmPasswordInput = ({
  confirmPassword,
  setConfirmPassword,
  confirmPasswordErr,
  setConfirmPasswordErr,
  password,
  inputType,
}: ConfirmPasswordInputProps) => {
  return (
    <Input
      label="비밀번호 확인"
      type={inputType}
      placeholder="비밀번호를 입력해 주세요."
      errMsg={confirmPasswordErr}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
      }}
      focusOut={() => {
        validateConfirmPassword(
          password,
          confirmPassword,
          setConfirmPasswordErr,
        );
      }}
    />
  );
};
