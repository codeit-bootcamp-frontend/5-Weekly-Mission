import React from "react";
import styles from "./addFolderModal.module.css";
import GradientSkyblueBtn from "@/shared/ui/button/gradientBtn/GradientSkyblueBtn";

export const AddFolderModal = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>폴더 추가</p>
      <input
        type="text"
        className={styles.styledInput}
        placeholder="내용 입력"
      />

      <div className={styles.addBtn}>
        <GradientSkyblueBtn text="추가하기" type="button" onClick={() => {}} />
      </div>
    </div>
  );
};
