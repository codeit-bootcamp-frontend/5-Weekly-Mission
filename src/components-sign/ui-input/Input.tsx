import React from "react";
import styles from "./Input.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface InputProps {
  [props: string]: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  inputType,
  errorMessage,
  src,
  alt,
}) => {
  return (
    <div className={cx("container")}>
      <label className={cx("label")}>{label}</label>
      <div className={cx("inputBox")}>
        <input
          className={cx("input")}
          type={inputType}
          placeholder={placeholder}
        />
        <button className={cx("button")} type="button">
          <img className={cx("image")} src={src} alt={alt} />
        </button>
      </div>
      <span className={cx("message")}>{errorMessage}</span>
    </div>
  );
};
