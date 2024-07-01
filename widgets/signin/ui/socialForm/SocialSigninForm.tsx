import React from "react";
import styles from "./socialSigninForm.module.css";
import Image from "next/image";
import googleIcon from "@/public/img/auth/google.png";
import kakaoIcon from "@/public/img/auth/kakao.svg";

export const SocialSigninForm = () => {
  return (
    <div className={styles.container}>
      <p>소셜 로그인</p>
      <div className={styles.socialContainer}>
        <button className={styles.googleBtn}>
          <Image src={googleIcon} alt="google icon" />
        </button>
        <button className={styles.kakaoBtn}>
          <Image src={kakaoIcon} alt="google icon" />
        </button>
      </div>
    </div>
  );
};
