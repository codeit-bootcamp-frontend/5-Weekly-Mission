import { Cta } from "@/src/components-common/ui-cta";
import { Input } from "../ui-input/Input";
import styles from "./Form.module.scss";
import classNames from "classnames/bind";
import { text } from "@/src/components-common/util";
import { ModalContentButton } from "@/src/components-common/ui-modal-content-button";

const cx = classNames.bind(styles);

export const Form = () => {
  return (
    <form className={cx("container")}>
      <Input
        label="비밀번호"
        placeholder="codeit@codeit.com"
        inputType={"password"}
        errorMessage={"에레메세지"}
        src={"/images/eye-off.svg"}
        alt={"눈 아이콘"}
      />
      <Input
        label="비밀번호"
        placeholder="codeit@codeit.com"
        inputType={"password"}
        errorMessage={"에레메세지"}
        src={"/images/eye-off.svg"}
        alt={"눈 아이콘"}
      />
      <Input
        label="비밀번호"
        placeholder="codeit@codeit.com"
        inputType={"password"}
        errorMessage={"에레메세지"}
        src={"/images/eye-off.svg"}
        alt={"눈 아이콘"}
      />
      <ModalContentButton onClick={() => {}} themeColor="blue">
        {text.signup}
      </ModalContentButton>
    </form>
  );
};
