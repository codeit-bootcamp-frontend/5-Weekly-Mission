import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import Input from "@/shared/ui/input/Input";
import { validateEmail } from "../../model/validateEmail";

interface EmailInputProps {
  emailErr: string;
  email?: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setEmailErr: Dispatch<SetStateAction<string>>;
}

export const EmailInput = ({
  emailErr,
  setEmail,
  email,
  setEmailErr,
}: EmailInputProps) => {
  return (
    <Input
      label="이메일"
      type="text"
      placeholder="이메일을 입력해 주세요."
      errMsg={emailErr || ""}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
      }}
      focusOut={() => {
        validateEmail(email || "", setEmailErr);
      }}
    />
  );
};
