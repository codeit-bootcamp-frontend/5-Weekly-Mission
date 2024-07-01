import React from "react";
import styles from "./addLink.module.css";
import linkIcon from "@/public/img/folder/link.svg";
import Image from "next/image";
import GradientSkyblueBtn from "@/shared/ui/button/gradientBtn/GradientSkyblueBtn";

export const AddLink = () => {
  return (
    <section className={styles.container}>
      <div className={styles.addLinkBar}>
        <div className={styles.wrap}>
          <Image src={linkIcon} alt="link icon" width={16} height={16} />
          <input
            className={styles.addLinkInput}
            type="text"
            placeholder="링크를 추가해 보세요"
          />
        </div>
        <div className={styles.addBtn}>
          <GradientSkyblueBtn text="추가하기" type="button" />
        </div>
      </div>
    </section>
  );
};
