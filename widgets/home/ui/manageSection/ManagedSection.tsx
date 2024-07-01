import React from "react";
import managed_section_img from "@/public/img/home/managed_section.png";
import Image from "next/image";
import styles from "./managedSection.module.css";

export const ManagedSection = () => {
  return (
    <section className={styles.container}>
      <p className={styles.mobileHeading}>
        링크를 폴더로 &nbsp;
        <span className={styles.gradient}>관리</span>
        하세요
      </p>
      <Image
        className={styles.image}
        src={managed_section_img}
        alt="managed_section_img"
        width={550}
        height={450}
      />
      <div className={styles.wrap}>
        <p className={styles.heading}>
          링크를 폴더로
          <span className={styles.gradient}>관리</span>
          하세요
        </p>
        <p className={styles.description}>
          나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
        </p>
      </div>
    </section>
  );
};
