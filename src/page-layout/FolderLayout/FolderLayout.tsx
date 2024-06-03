import { ReactNode } from "react";
import styles from "./FolderLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface FolderLayoutProps {
  [props: string]: ReactNode;
}

export const FolderLayout: React.FC<FolderLayoutProps> = ({
  linkForm,
  searchBar,
  folderToolBar,
  cardList,
}) => {
  return (
    <div className={cx("container")}>
      {linkForm}
      <div className={cx("items")}>
        {searchBar}
        <div className={cx("folder-box")}>
          {folderToolBar}
          {cardList}
        </div>
      </div>
    </div>
  );
};
