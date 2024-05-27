import * as S from "./SignInputBox.styled";
import VALIDATION_MESSAGE from "@/constants/validationMsg";
import { emailValidation, passwordValidation } from "@/utills/validation";
import { useState, useRef } from "react";
import { SignInputProps } from "@/types/Sign";
import { postCheckEmail } from "@/api/user";

interface IInputType {
  [key: string]: {
    textType: string;
    placeholder: string;
    inputRegex?: RegExp;
  };
}

interface IRegisterOption {
  required: { value: boolean; message: string };
  pattern?: { value: RegExp; message: string };
  validate?: (value: string) => Promise<boolean | string>;
}

let InputOption: IInputType = {
  email: {
    textType: "text",
    placeholder: "이메일을 입력해 주세요.",
    inputRegex: emailValidation,
  },
  password: {
    textType: "password",
    placeholder: "비밀번호를 입력해 주세요.",
  },
  signUpPassword: {
    textType: "password",
    placeholder: "영문, 숫자를 조합해 8자 이상 입력해 주세요.",
    inputRegex: passwordValidation,
  },
  signUpPasswordCheck: {
    textType: "password",
    placeholder: "비밀번호와 일치하는 값을 입력해 주세요.",
  },
};

const SignInputBox = ({
  pageType,
  type,
  register,
  errors,
  watch,
}: SignInputProps) => {
  const [isPwdEyeOn, setPwdEyeOn] = useState(false);
  const [inputTextType, setInputTextType] = useState(
    InputOption[type].textType
  );
  const inputType = InputOption[type];
  const passwordRef = useRef<string | null>(null);
  if (watch) {
    passwordRef.current = watch("signUpPassword");
  }

  let checkRegister;

  switch (type) {
    case "email":
      const emailRegisterOptions: IRegisterOption = {
        required: { value: true, message: VALIDATION_MESSAGE.checkInputEmail },
        ...(inputType.inputRegex && {
          pattern: {
            value: inputType.inputRegex,
            message: VALIDATION_MESSAGE.checkValidationEmail,
          },
        }),
      };

      if (pageType === "signUp") {
        emailRegisterOptions.validate = async (value: string) => {
          const checkEmailResult = await checkEmailExist(value);
          return checkEmailResult || VALIDATION_MESSAGE.findDuplicateEmail;
        };
      }
      checkRegister = register(type, emailRegisterOptions);
      break;

    case "password":
    case "signUpPassword":
      const passwordRegisterOptions: IRegisterOption = {
        required: {
          value: true,
          message: VALIDATION_MESSAGE.checkInputPassword,
        },
      };

      if (type === "signUpPassword") {
        if (inputType.inputRegex) {
          passwordRegisterOptions.pattern = {
            value: inputType.inputRegex,
            message: VALIDATION_MESSAGE.checkValidationPassword,
          };
        }
      }
      checkRegister = register(type, passwordRegisterOptions);
      break;

    case "signUpPasswordCheck":
      checkRegister = register(type, {
        required: {
          value: true,
          message: VALIDATION_MESSAGE.checkInputPassword,
        },
        validate: (value) =>
          value === passwordRef.current ||
          VALIDATION_MESSAGE.checkPasswordMatch,
      });
      break;
  }

  const handlePasswordToggle = () => {
    setPwdEyeOn(!isPwdEyeOn);
    setInputTextType(inputTextType === "password" ? "text" : "password");
  };

  const checkEmailExist = async (email: string) => {
    const postCheckEmailResult = await postCheckEmail(email);
    return postCheckEmailResult?.data?.isUsableNickname;
  };

  return (
    <>
      <S.BoxWrap>
        <S.InfoInput
          type={inputTextType}
          placeholder={inputType.placeholder}
          errorBox={errors[type] ? true : false}
          {...checkRegister}
        />
        {type.toLowerCase().includes("password") && (
          <S.ViewPassword
            type="button"
            onClick={handlePasswordToggle}
            isEyeOpen={isPwdEyeOn}
          />
        )}
      </S.BoxWrap>
      {errors[type] && (
        <S.validation>{errors[type]?.message?.toString()}</S.validation>
      )}
    </>
  );
};

export default SignInputBox;
