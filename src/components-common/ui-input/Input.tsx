import styles from "./Input.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface InputProps {
  type?: string;
  value: undefined; // TODO: 기능 구현 시 타입 수정
  onChange: undefined;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  value,
  onChange,
  placeholder,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={cx("input")}
    />
  );
};
