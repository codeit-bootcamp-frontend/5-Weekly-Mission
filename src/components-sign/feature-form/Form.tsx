import { Input } from "../ui-input/Input";
import styles from "./Form.module.scss";
import classNames from "classnames/bind";
import { text } from "@/src/components-common/util";
import { ModalContentButton } from "@/src/components-common/ui-modal-content-button";
import { ChangeEvent, FormEvent, useState } from "react";
import { isIdValid, isPwdValid, testUser } from "./constant";
import {
  checkAccountAlreadyExist,
  checkAccountValid,
} from "../data-access-sign/useCheckAccount";

const cx = classNames.bind(styles);

const initialValue: Record<string, string> = {
  id: "",
  pwd: "",
  confirmPwd: "",
};

export const Form = () => {
  const [input, setInput] = useState(initialValue);
  const [message, setMessage] = useState(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const checkIdInput = (id: string): boolean => {
    setMessage((prevMessage) => ({ ...prevMessage, id: "" }));
    if (id === "") {
      setMessage((prevMessage) => ({
        ...prevMessage,
        id: "이메일을 입력해주세요.",
      }));
      return false;
    }

    if (isIdValid(id) === false) {
      setMessage((prevMessage) => ({
        ...prevMessage,
        id: "올바른 이메일 주소가 아닙니다.",
      }));
      return false;
    }

    if (id === testUser.id) {
      setMessage((prevMessage) => ({
        ...prevMessage,
        id: "이미 사용 중인 이메일입니다.",
      }));
      return false;
    }

    return true;
  };

  const checkPwdInput = (pwd: string): boolean => {
    setMessage((prevMessage) => ({ ...prevMessage, pwd: "" }));
    if (pwd === "" || !isPwdValid(pwd)) {
      setMessage((prevMessage) => ({
        ...prevMessage,
        pwd: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
      }));
      return false;
    }
    return true;
  };

  const checkConfirmPwdInput = (confirmPwd: string): boolean => {
    setMessage((prevMessage) => ({ ...prevMessage, confirmPwd: "" }));
    if (confirmPwd === "" || !isPwdValid(confirmPwd)) {
      setMessage((prevMessage) => ({
        ...prevMessage,
        confirmPwd: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
      }));
      return false;
    }

    if (input.pwd !== input.confirmPwd) {
      setMessage((prevMessage) => ({
        ...prevMessage,
        confirmPwd: "비밀번호가 일치하지 않습니다.",
      }));
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { id, pwd, confirmPwd } = input;
    const isAccountValid = await checkAccountValid(id, pwd);
    const isAccountNew = await checkAccountAlreadyExist(id);

    if (
      checkIdInput(id) &&
      checkPwdInput(pwd) &&
      checkConfirmPwdInput(confirmPwd) &&
      isAccountValid &&
      isAccountNew
    ) {
      console.log("sing-up complete");
    }
  };

  return (
    <form className={cx("container")} onSubmit={handleSubmit}>
      <Input
        label="아이디"
        name={"id"}
        placeholder="codeit@codeit.com"
        value={input.id}
        message={message.id}
        handleChange={handleChange}
        checkInput={checkIdInput}
      />
      <Input
        label="비밀번호"
        name={"pwd"}
        placeholder="8자 이상 입력"
        value={input.pwd}
        message={message.pwd}
        handleChange={handleChange}
        checkInput={checkPwdInput}
      />

      <Input
        label="비밀번호 확인"
        name={"confirmPwd"}
        placeholder="8자 이상 입력"
        value={input.confirmPwd}
        message={message.confirmPwd}
        handleChange={handleChange}
        checkInput={checkConfirmPwdInput}
      />
      <ModalContentButton themeColor="blue">{text.signup}</ModalContentButton>
    </form>
  );
};
