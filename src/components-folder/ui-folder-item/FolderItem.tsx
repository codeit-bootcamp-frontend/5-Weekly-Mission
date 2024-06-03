import React from "react";
import styles from "./FolderItem.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";

const cx = classNames.bind(styles);

interface FolderItemProps {
  folderName: string;
  linkCount: number;
  isSelected: boolean;
  onClick: () => void;
}

export const FolderItem: React.FC<FolderItemProps> = ({
  folderName,
  linkCount,
  isSelected = false,
  onClick,
}) => {
  return (
    <button className={cx("button", { isSelected })} onClick={onClick}>
      <span className={cx("name", { isSelected })}>{folderName}</span>
      <span className={cx("count")}>{linkCount}개 링크</span>
      {isSelected && (
        <div className={cx("check")}>
          <Image
            fill
            src="images/check.svg"
            alt="체크 아이콘"
            style={{ objectFit: "contain" }}
          />
        </div>
      )}
    </button>
  );
};
