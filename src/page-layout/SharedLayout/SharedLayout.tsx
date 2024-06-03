import React, { ReactNode } from "react";
import styles from "./SharedLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface ShareLayoutProps {
  [props: string]: ReactNode;
}

export const SharedLayout: React.FC<ShareLayoutProps> = ({
  folderInfo,
  searchBar,
  cardList,
}) => {
  return (
    <div className={cx("container")}>
      {folderInfo}
      <div className={cx("items")}>
        {searchBar}
        {cardList}
      </div>
    </div>
  );
};
