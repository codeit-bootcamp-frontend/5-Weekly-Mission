import React from "react";
import styles from "./FolderInfo.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";

const cx = classNames.bind(styles);

interface FolderInfoProps {
  profileImage: string;
  ownerName: string;
  folderName: string;
}

export const FolderInfo: React.FC<FolderInfoProps> = ({
  profileImage,
  ownerName,
  folderName,
}) => {
  return (
    <div className={cx("container")}>
      <Image
        className={cx("profile")}
        src={profileImage}
        alt="폴더 소유자 프로필 이미지"
      />
      <span className={cx("owner")}>{ownerName}</span>
      <h2 className={cx("folder")}>{folderName}</h2>
    </div>
  );
};
