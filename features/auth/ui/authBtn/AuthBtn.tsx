import React from "react";
import styles from "./authBtn.module.css";
import GradientSkyblueBtn from "@/shared/ui/button/gradientBtn/GradientSkyblueBtn";

export const AuthBtn = () => {
  return (
    <div className={styles.signinBtn}>
      <GradientSkyblueBtn type="submit" text="로그인" />
    </div>
  );
};
