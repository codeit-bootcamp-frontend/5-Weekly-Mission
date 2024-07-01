import Image from "next/image";
import React from "react";
import logo from "@/public/img/logo.svg";
import styles from "./header.module.css";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useGetUserInfo } from "@/queries/user/useGetUserInfo";

export const Header = () => {
  const { data: userData } = useQuery(useGetUserInfo.queryOptions());

  return (
    <header className={styles.container}>
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
      <div className={styles.profile}>
        <Image
          className="profileImg"
          src={
            userData?.data.data[0].image_source ||
            "https://ssl.pstatic.net/sstatic/search/common/og_v3.png"
          }
          alt="user profile"
          width={28}
          height={28}
        />
        <p className={styles.email}>{userData?.data.data[0].email}</p>
      </div>
    </header>
  );
};
