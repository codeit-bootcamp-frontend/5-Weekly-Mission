import React from "react";
import styles from "./editModal.module.css";
import GradientSkyblueBtn from "@//shared/ui/button/gradientBtn/GradientSkyblueBtn";
import { useFolderState } from "@/shared/store/useFolderState";

export const EditModal = () => {
  const { folderName } = useFolderState();

  return (
    <div className={styles.container}>
      <p className={styles.title}>폴더 이름 변경</p>
      <input
        className={styles.styledInput}
        type="text"
        placeholder={folderName}
      />
      <div className={styles.editBtn}>
        <GradientSkyblueBtn text="변경하기" type="button" onClick={() => {}} />
      </div>
    </div>
  );
};
