import { useUserContext } from "@/lib/api/useUserContext";
import NavProfile from "./NavProfile";
import styles from "./NavigationBar.module.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/assets/Linkbrary.svg";

function NavigationBar({
  className = "",
  position,
}: {
  className?: string;
  position: any;
}) {
  const { userInfo, userFolder, isloading, error } = useUserContext();

  return (
    <nav className={`${styles.NavigationBar}`}>
      <div
        className={`${styles.NavigationBarItems}`}
        style={{ position: position }}
      >
        <Link className={`${styles.NavigationBarLogo}`} href="/">
          <Image src={LogoImg} alt="로고" />
        </Link>
        <div className={`${styles.NavigationBarProfile}`}>
          {userInfo ? (
            <NavProfile></NavProfile>
          ) : (
            <button className="NavigationBar-LoginButton">로그인</button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
