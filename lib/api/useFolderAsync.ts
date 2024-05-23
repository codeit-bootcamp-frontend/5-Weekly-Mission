import { useState, useEffect } from "react";
import {
  getFolderList,
  getAllFolderList,
  GetFolderListProps,
  GetAllFolderListProps,
} from "./getUserFolder";

export function useFolderAsync() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [folderList, setFolderList] = useState<GetFolderListProps | null>(null);
  const [allFolderList, setAllFolderList] =
    useState<GetAllFolderListProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const folderList = await getFolderList();
        const allFolderList = await getAllFolderList();

        setFolderList(folderList);
        setAllFolderList(allFolderList);
        setLoading(false); // 로딩 상태 변경
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("Unknown error occurred"));
        }
        setLoading(false);
      }
    };

    fetchData(); // fetchData 함수 호출
  }, []);

  return { folderList, allFolderList, loading, error }; // 상태를 반환
}
