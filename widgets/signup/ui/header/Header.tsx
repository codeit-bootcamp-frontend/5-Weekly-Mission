import React from "react";
import logo from "@/public/img/logo.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.container}>
      <Link href="/">
        <Image src={logo} alt="logo" width={210.583} height={38} />
      </Link>
      <p className={styles.description}>
        이미 회원이신가요? <Link href="/signin">로그인 하기</Link>
      </p>
    </header>
  );
};
