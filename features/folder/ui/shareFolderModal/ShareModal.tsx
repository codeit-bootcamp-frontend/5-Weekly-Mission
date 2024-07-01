import React from "react";
import styles from "./shareModal.module.css";

import Image from "next/image";
import kakaoIcon from "@/public/img/auth/kakao.svg";
import facebookIcon from "@/public/img/auth/facebook.svg";
import linkIcon from "@/public/img/folder/link.svg";
import { useFolderState } from "@/shared/store/useFolderState";

export const ShareModal = () => {
  const { folderName } = useFolderState();

  return (
    <div className={styles.container}>
      <p className={styles.title}>폴더 공유</p>
      <p className={styles.folderName}>{folderName}</p>
      <div className={styles.socialContainer}>
        <div className={styles.social}>
          <div className={styles.kakao}>
            <Image src={kakaoIcon} alt="kakaoIcon" />
          </div>
          <p>카카오톡</p>
        </div>

        <div className={styles.social}>
          <div className={styles.facebook}>
            <Image src={facebookIcon} alt="facebookIcon" />
          </div>
          <p>페이스북</p>
        </div>

        <div className={styles.social}>
          <div className={styles.link}>
            <Image src={linkIcon} alt="linkIcon" />
          </div>
          <p>링크 복사</p>
        </div>
      </div>
    </div>
  );
};
