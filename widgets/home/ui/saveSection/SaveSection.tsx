import Image from "next/image";
import React from "react";
import save_section_img from "@/public/img/home/save_section.svg";
import styles from "./savedSection.module.css";

export const SaveSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.headingWrap}>
        <p className={styles.heading}>
          <span className={styles.gradient}>원하는 링크</span>를 저장하세요
        </p>
        <p className={styles.description}>
          나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은
          모든 것을 한 공간에 저장하세요.
        </p>
      </div>
      <Image
        className={styles.img}
        src={save_section_img}
        alt="save_section_img"
        width={550}
        height={450}
      />
      <p className={styles.mobileDescription}>
        나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은
        모든 것을 한 공간에 저장하세요.
      </p>
    </section>
  );
};
