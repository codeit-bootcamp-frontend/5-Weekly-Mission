import React, { useState } from "react";
import styles from "./Input.module.css";
import { validateEmail, validatePassword } from "../../utils/validate";

interface InputProps {
    id: string;
    placeholder: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    errorMessage?: string;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
    id,
    placeholder,
    type,
    value,
    onChange,
    onBlur,
    errorMessage: externalErrorMessage,
    onKeyDown,
}) => {
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleEyeToggle = () => {
        setPasswordVisible((prev) => !prev);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (!value) {
            setErrorMessage(placeholder);
        } else if (id === "email" && !validateEmail(value)) {
            setErrorMessage("올바른 이메일 주소가 아닙니다.");
        } else if (id === "password" && !validatePassword(value)) {
            setErrorMessage("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
        } else {
            setErrorMessage("");
        }

        if (onBlur) {
            onBlur(event);
        }
    };

    const inputType = type === "password" && passwordVisible ? "text" : type;

    return (
        <div className={styles.input_container}>
            <input
                id={id}
                className={`${styles.input} ${
                    errorMessage || externalErrorMessage ? styles.invalid : ""
                }`}
                type={inputType}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={handleBlur}
                onKeyDown={onKeyDown}
            />
            {(errorMessage || externalErrorMessage) && (
                <span className={styles.error_msg}>{errorMessage || externalErrorMessage}</span>
            )}
            {type === "password" && (
                <button
                    className={`${styles.eye_button} ${passwordVisible ? styles.on : ""}`}
                    onClick={handleEyeToggle}
                    type='button'
                />
            )}
        </div>
    );
};

export default Input;
