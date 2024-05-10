import { useState, useEffect } from "react";
import { getUserInfo, UserInfo } from "./getUserInfo";
import { getUserFolder, GetUserFolderProps } from "./getUserFolder";

export function useAsync() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [userFolder, setUserFolder] = useState<GetUserFolderProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // getUserInfo 함수 호출
        const userInfo = await getUserInfo();
        const userFolder = await getUserFolder();
        // 반환된 사용자 정보 업데이트
        setUserInfo(userInfo);
        setUserFolder(userFolder);
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

  return { userInfo, userFolder, loading, error }; // 상태를 반환
}
