import Image from "next/image";
import React from "react";
import styles from "./eyeBtn.module.css";
import eyeOpen from "@/public/img/auth/eye-on.png";
import eyeClose from "@/public/img/auth/eye-off.svg";

interface EyeBtnProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EyeBtn = ({ isVisible, setIsVisible }: EyeBtnProps) => {
  return (
    <button
      tabIndex={-1}
      type="button"
      onClick={() => setIsVisible((prev) => !prev)}
      className={styles.eyeBtn}
    >
      {isVisible ? (
        <Image src={eyeOpen} alt="eyeOpen icon" />
      ) : (
        <Image src={eyeClose} alt="eyeClose icon" />
      )}
    </button>
  );
};
