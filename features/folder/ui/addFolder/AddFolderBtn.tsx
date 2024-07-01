import React from "react";
import styles from "./addFolderBtn.module.css";
import plusIcon from "@/public/img/folder/plus.svg";
import Image from "next/image";

export const FixedAddFolderBtn = () => {
  return (
    <button className={styles.wrap}>
      <p>폴더추가</p>
      <Image src={plusIcon} alt="폴더추가" width={16} height={16} />
    </button>
  );
};
