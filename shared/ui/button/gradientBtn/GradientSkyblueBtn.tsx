import React, { MouseEvent } from "react";
import styles from "./gradientSkyblueBtn.module.css";

interface PropsType {
  text: string;
  type: "submit" | "button" | "reset" | undefined;
  onClick?: () => void;
}

const GradientSkyblueBtn: React.FC<PropsType> = ({ text, type, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.gradientSkyblueBtn}`}
    >
      {text}
    </button>
  );
};

export default GradientSkyblueBtn;
