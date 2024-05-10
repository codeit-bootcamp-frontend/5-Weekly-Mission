import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useFolderAsync } from "../api/useFolderAsync";
import FolderListMenu from "./FolderListMenu";
import "./FolderList.css";
import { CardList } from "../CardList/CardList";
import { FolderCardList } from "./FolderCardList";
import React from "react";

interface FolderProps {
  id: number;
  name: string;
}

function FolderList() {
  const { folderList, allFolderList, loading, error } = useFolderAsync();
  const [selectedFolder, setSelectedFolder] = useState<FolderProps | null>(
    null
  );
  const [curFolder, setCurFolder] = useState(null);
  const [folderId, setFolderId] = useState<number>(0);

  const handleFolderClick = (folder: any) => {
    setSelectedFolder(folder);
    if (folder) {
      setFolderId(folder.id);
    } else {
      setFolderId(0);
    }
  };

  return (
    <div className="FolderList_container">
      <SearchBar />
      <FolderListMenu
        folderList={folderList}
        onFolderClick={handleFolderClick}
        selectedFolder={selectedFolder}
      />
      <div className="FolderList_list-folderManage-container">
        <p>{selectedFolder ? selectedFolder.name : "전체"}</p>
        {selectedFolder && selectedFolder.name !== "전체" && (
          <>
            <a>공유</a>
            <a>이름 변경</a>
            <a>삭제</a>
          </>
        )}
      </div>
      <FolderCardList folderId={folderId} />
    </div>
  );
}

export default FolderList;
