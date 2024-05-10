import "./CardList.css";
import { useAsync } from "../api/useAsync";
import FolderItem from "./FolderItem";
import SearchBar from "../SearchBar/SearchBar";
import React from "react";

export const CardList = () => {
  const { userInfo, userFolder, loading, error } = useAsync();

  // 로딩 중일 때
  if (loading) {
    return <div>Loading...</div>;
  }

  // 에러 발생 시
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // 사용자 정보가 없을 때, 폴더가 없을 때
  if (!userInfo) {
    return null;
  }
  if (!userFolder) {
    return null;
  }
  const folderLinks = Object.keys(userFolder.folder.links);

  return (
    <div className="CardListForm">
      <SearchBar />
      <div className="CardList">
        {userFolder.folder.links.map((link) => (
          <div className="CardList-item" key={link.id.toString()}>
            <FolderItem item={link} />
          </div>
        ))}
      </div>
    </div>
  );
};
