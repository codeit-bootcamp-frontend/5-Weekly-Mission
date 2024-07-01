import React from "react";
import searchedSectionImg from "@/public/img/home/Searched_section.png";
import Image from "next/image";
import styles from "./searchedSection.module.css";

export const SearchedSection = () => {
  return (
    <section className={styles.container}>
      <p className={styles.mobileHeading}>
        저장한 링크를 &nbsp;
        <span className={styles.gradient}>검색</span>해 보세요
      </p>
      <Image
        className={styles.image}
        src={searchedSectionImg}
        alt="Searched Section img"
        width={550}
        height={450}
      />
      <div className={styles.wrap}>
        <p className={styles.heading}>
          저장한 링크를
          <span className={styles.gradient}>검색</span>해 보세요
        </p>
        <p className={styles.description}>
          중요한 정보들을 검색으로 쉽게 찾아보세요.
        </p>
      </div>
    </section>
  );
};
