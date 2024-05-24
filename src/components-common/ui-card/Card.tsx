import React, { MouseEvent } from "react";
import styles from "./Card.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type CardProps = React.PropsWithChildren<{
  onMouseOver: (e: MouseEvent<HTMLElement>) => void;
  onMouseLeave: (e: MouseEvent<HTMLElement>) => void;
}>;

export const Card: React.FC<CardProps> = ({
  children,
  onMouseOver,
  onMouseLeave,
}) => {
  return (
    <div
      className={cx("container")}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};
