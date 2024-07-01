import Image from "next/image";
import React from "react";
import shared_section_img from "@/public/img/home/shared_section.png";
import styles from "./sharedSection.module.css";

export const SharedSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrap}>
        <p className={styles.heading}>
          저장한 링크를 &nbsp;
          <span className={styles.gradient}>공유</span>해 보세요.
        </p>
        <p className={styles.description}>
          여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
          쉽고 빠르게 링크를 공유해 보세요.
        </p>
      </div>
      <Image
        className={styles.image}
        src={shared_section_img}
        alt="Shared Section img"
        width={550}
        height={450}
      />
      <p className={styles.mobileDescription}>
        여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게 쉽고
        빠르게 링크를 공유해 보세요.
      </p>
    </section>
  );
};
