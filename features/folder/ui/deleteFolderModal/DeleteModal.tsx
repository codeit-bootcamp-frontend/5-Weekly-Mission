import React from "react";
import styles from "./deleteModal.module.css";
import { useFolderState } from "@/shared/store/useFolderState";

export const DeleteModal = () => {
  const { folderName } = useFolderState();
  return (
    <div className={styles.container}>
      <p className={styles.title}>폴더 삭제</p>
      <p className={styles.subTitle}>{folderName}</p>
      <button className={styles.deleteBtn}>
        <p>삭제하기</p>
      </button>
    </div>
  );
};
