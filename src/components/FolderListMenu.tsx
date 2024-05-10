import React from "react";
import { GetFolderListProps } from "../api/getUserFolder";

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
      {folderList && folderList.data && folderList.data.length > 0 ? (
        <div className="FolderList_list_menu-container">
          <button
            className="FolderList-button"
            onClick={() => handleMenuButtonClick(null)}
          >
            <span>전체</span>
          </button>
          {folderList &&
            folderList.data &&
            folderList.data.map((folder) => (
              <button
                className="FolderList-button"
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
