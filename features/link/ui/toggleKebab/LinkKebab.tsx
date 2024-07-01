import React from "react";
import styles from "./linkKebab.module.css";

export const LinkKebab = () => {
  return (
    <div className={styles.kebabModal}>
      <button className={styles.kebabItem}>삭제하기</button>
      <button className={styles.kebabItem}>폴더에 추가</button>
    </div>
  );
};
