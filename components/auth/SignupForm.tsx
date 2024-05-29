import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { GRAY3, PRIMARY, WHITE } from "../color";
import { signUpApi, tryEmailCheck } from "../../Api/Api";
import AuthButton from "./EyeButton";
import { FocusEvent, useState } from "react";

type Inputs = {
  Id: string;
  password: string;
  passwordCheck: string;
};

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onBlur" });
  const [passShow, setPassShow] = useState<boolean>(false);
  const [passCheckShow, setPassCheckShow] = useState<boolean>(false);

  const checkSameEmail = async (e: FocusEvent<HTMLInputElement>) => {
    if (!errors.Id) {
      try {
        await tryEmailCheck(e.target.value);
      } catch (err) {
        setError("Id", {
          type: "ExistedId",
          message: "이미 사용중인 이메일입니다",
        });
      }
    }
  };

  const isPassSame = (e: FocusEvent<HTMLInputElement>) => {
    if (getValues("password") !== e.target.value) {
      setError("passwordCheck", {
        type: "NotSame",
        message: "비밀번호가 다릅니다",
      });
    } else {
      clearErrors("passwordCheck");
    }
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await signUpApi(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="Id">아이디</Label>
      <Div>
        <Input
          id="Id"
          placeholder="이메일을 입력해주세요"
          type="text"
          className={errors.Id ? "err" : ""}
          aria-invalid={errors.Id ? "true" : "false"}
          {...register("Id", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/,
              message: "올바른 이메일 주소가 아닙니다",
            },
            onBlur: checkSameEmail,
          })}
        />
        {errors.Id && <ErrorMessage>{errors?.Id?.message}</ErrorMessage>}
      </Div>
      <Label htmlFor="password">비밀번호</Label>
      <Div>
        <Input
          id="password"
          placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요"
          type={passShow ? "text" : "password"}
          className={errors.password ? "err" : ""}
          aria-invalid={errors.password ? "true" : "false"}
          {...register("password", {
            required: "비밀번호를 입력해주세요",
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/,
              message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요",
            },
          })}
        />
        <AuthButton setShow={setPassShow} />
        {errors.password && (
          <ErrorMessage>{errors?.password?.message}</ErrorMessage>
        )}
      </Div>
      <Label htmlFor="passwordCheck">비밀번호 확인</Label>
      <Div>
        <Input
          id="passwordCheck"
          placeholder="비밀번호와 일치하는 값을 입력해주세요"
          type={passCheckShow ? "text" : "password"}
          className={errors.passwordCheck ? "err" : ""}
          aria-invalid={errors.passwordCheck ? "true" : "false"}
          {...(register("passwordCheck"), { onBlur: isPassSame })}
        />
        <AuthButton setShow={setPassCheckShow} />
        {errors.passwordCheck && (
          <ErrorMessage>{errors?.passwordCheck?.message}</ErrorMessage>
        )}
      </Div>
      <SubmitButton value={"회원가입"} type="submit" />
    </Form>
  );
}

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 18px 31px 18px 15px;
  border-radius: 8px;
  border: 1px solid ${GRAY3};
  background: ${WHITE};
  outline: none;
  color: #373740;
  font-size: 16px;
  line-height: 24px;

  &:focus {
    border-color: ${PRIMARY};
  }

  &.err {
    border-color: #ff5b56;
  }
`;

const SubmitButton = styled.input`
  display: flex;
  max-width: 400px;
  width: 100%;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  color: #f5f5f5;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin-top: 6px;
  cursor: pointer;
`;

const Label = styled.label`
  color: #000;
  font-size: 14px;
  line-height: normal;
  margin-bottom: 12px;
`;

const Div = styled.div`
  display: flex;
  max-width: 400px;
  width: 100%;
  flex-direction: column;
  row-gap: 6px;
  margin-bottom: 24px;
  position: relative;
`;

const ErrorMessage = styled.strong`
  color: #ff5b56;

  font-size: 14px;
  font-weight: 400;
  line-height: normal;
`;
