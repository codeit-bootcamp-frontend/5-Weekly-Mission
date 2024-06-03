import React from "react";
import styles from "./IconAndTextButton.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";

const cx = classNames.bind(styles);

interface IconAndTextButtonProps {
  iconSource: string;
  text: string;
  onClick: () => void;
}

export const IconAndTextButton: React.FC<IconAndTextButtonProps> = ({
  iconSource,
  text,
  onClick,
}) => {
  return (
    <button className={cx("container")} onClick={onClick}>
      <div className={cx("icon")}>
        <Image
          fill
          src={iconSource}
          alt={`${text} 아이콘`}
          style={{ objectFit: "contain" }}
        />
      </div>
      <span className={cx("text")}>{text}</span>
    </button>
  );
};
