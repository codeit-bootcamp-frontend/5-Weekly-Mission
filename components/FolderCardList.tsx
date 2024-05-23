import "@/components/CardList/CardList.module.css";
import React, { useState, useEffect } from "react";
import FolderCardListItem from "./FolderCardListItem";
import styles from "./CardList/CardList.module.css";

import {
  getFolderListById,
  FolderListResponse,
  getAllFolderList,
  GetAllFolderListProps,
} from "@/lib/api/getUserFolder";

interface FolderCardListProps {
  folderId: number;
  searchTerm: string;
}

export const FolderCardList = ({
  folderId,
  searchTerm,
}: FolderCardListProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [folderInfo, setFolderInfo] = useState<FolderListResponse | null>(null); // 폴더 정보 상태

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response: any;
        if (folderId) {
          // folderList가 배열인지 확인하고 필터링
          response = await getFolderListById(folderId);
          setFolderInfo(response);
        } else {
          response = await getAllFolderList();
        }
        setFolderInfo(response);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("Unknown error occurred"));
        }
      }
    };

    fetchData();
  }, [folderId]); // folderId가 변경될 때마다 호출

  if (!folderInfo) {
    return <div>로딩 중...</div>;
  }

  if (folderInfo.data && Array.isArray(folderInfo.data)) {
    // 폴더 정보가 객체이고 그 안에 data 필드가 있는 경우, data를 사용하여 렌더링합니다.
    return (
      <div className={`${styles.CardList}`}>
        {folderInfo.data.map((item, index) => (
          <div className={`${styles.CardList_item}`} key={index}>
            <FolderCardListItem item={item} searchTerm={searchTerm} />
          </div>
        ))}
      </div>
    );
  }

  // 폴더 정보가 없거나 잘못된 형태인 경우 에러를 표시합니다.
  return <div>폴더 정보를 불러오는 중 문제가 발생했습니다.</div>;
};
