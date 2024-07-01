import React, { Dispatch, SetStateAction } from "react";
import styles from "./folderOption.module.css";
import shareIcon from "@/public/img/folder/share.svg";
import editIcon from "@/public/img/folder/edit.svg";
import deleteIcon from "@/public/img/folder/delete.svg";
import { FolderHandle } from "@/features/folder";

interface FolderOptionProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setModalType: Dispatch<SetStateAction<string>>;
}

export const FolderOption = ({
  setIsModalOpen,
  setModalType,
}: FolderOptionProps) => {
  return (
    <div className={styles.optionBtn}>
      <FolderHandle
        src={shareIcon}
        text="공유"
        onClick={() => {
          setIsModalOpen(true);
          setModalType("share");
        }}
      />
      <FolderHandle
        src={editIcon}
        text="수정"
        onClick={() => {
          setIsModalOpen(true);
          setModalType("edit");
        }}
      />
      <FolderHandle
        src={deleteIcon}
        text="삭제"
        onClick={() => {
          setIsModalOpen(true);
          setModalType("delete");
        }}
      />
    </div>
  );
};
