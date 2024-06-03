import React, { ReactNode } from "react";
import styles from "./IndexLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface IndexLayoutProps {
  [props: string]: ReactNode;
}

export const IndexLayout: React.FC<IndexLayoutProps> = ({
  header,
  overview,
}) => {
  return (
    <div className={cx("container")}>
      {header}
      {overview}
    </div>
  );
};
