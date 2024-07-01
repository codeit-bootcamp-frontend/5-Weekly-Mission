import React from "react";
import styles from "./folder.module.css";
import type { Category } from "@/types/category";
import { useFolderState } from "@/shared/store/useFolderState";

interface FolderBtnProps {
  folder: Category;
  onClick: () => void;
}

export const FolderBtn = ({ folder, onClick }: FolderBtnProps) => {
  const { folderName } = useFolderState();
  const isSelected = folderName === folder.name;

  return (
    <button
      onClick={onClick}
      className={isSelected ? styles.select : styles.container}
    >
      {folder.name}
    </button>
  );
};
