import React, { ChangeEvent, useState } from "react";
import styles from "./Input.module.scss";
import classNames from "classnames/bind";
import { toggleIcon } from "../feature-form/constant";

const cx = classNames.bind(styles);

interface InputProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  message: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checkInput: (id: string) => boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  placeholder,
  value,
  message,
  handleChange,
  checkInput,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPwdVisible, setIsPwdVisible] = useState(false);

  const inputStyle = cx(
    `${styles.input} ${isFocused ? styles.focus : ""} ${
      !isFocused && message !== "" ? styles.error : ""
    }`
  );

  const messageStyle = cx(
    `${styles.message} ${!isFocused && message !== "" ? styles.error : ""}`
  );

  const type = isPwdVisible ? toggleIcon.on.type : toggleIcon.off.type;
  const alt = isPwdVisible ? toggleIcon.on.alt : toggleIcon.off.alt;
  const src = isPwdVisible ? toggleIcon.on.src : toggleIcon.off.src;

  return (
    <div className={cx("container")}>
      <label className={cx("label")}>{label}</label>
      <div className={cx("inputBox")}>
        <input
          name={name}
          type={name === "id" ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
            checkInput(value);
          }}
          className={inputStyle}
        />
        {name !== "id" ? (
          <button
            className={cx("button")}
            type="button"
            onClick={() => setIsPwdVisible((isPwdVisible) => !isPwdVisible)}
          >
            <img className={cx("image")} src={src} alt={alt} />
          </button>
        ) : null}
      </div>
      <span className={messageStyle}>{message}</span>
    </div>
  );
};
