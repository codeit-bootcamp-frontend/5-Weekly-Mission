import React from "react";
import { GetFolderListProps } from "@/lib/api/getUserFolder";
import styles from "./FolderList.module.css";
import { isEmpty } from "lodash";

interface FolderListMenuProps {
  folderList: GetFolderListProps | null;
  onFolderClick: any;
  selectedFolder: any;
}

function FolderListMenu({
  folderList,
  onFolderClick,
  selectedFolder,
}: FolderListMenuProps) {
  const handleMenuButtonClick = (folder: any) => {
    onFolderClick(folder);
  };

  return (
    <>
      {folderList && folderList.data && isEmpty(!folderList.data) ? (
        <div className={`${styles.FolderList_list_menu_container}`}>
          <button
            className={`${styles.FolderList_button}`}
            onClick={() => handleMenuButtonClick(null)}
          >
            <span>전체</span>
          </button>
          {folderList &&
            folderList.data &&
            folderList.data.map((folder) => (
              <button
                className={`${styles.FolderList_button}`}
                key={folder.id}
                onClick={() => handleMenuButtonClick(folder)}
              >
                {folder.name}
              </button>
            ))}
        </div>
      ) : (
        <p>저장된 링크가 없습니다.</p>
      )}
    </>
  );
}

export default FolderListMenu;
