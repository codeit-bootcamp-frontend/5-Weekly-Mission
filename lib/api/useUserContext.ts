import { useState, useEffect } from "react";
import { getUserInfo, UserInfo } from "./getUserInfo";
import { getUserFolder, GetUserFolder } from "./getUserFolder";

export function useUserContext() {
  const [isloading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [userFolder, setUserFolder] = useState<GetUserFolder | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userInfo, userFolder] = await Promise.all([
          getUserInfo(),
          getUserFolder(),
        ]);
        // 반환된 사용자 정보 업데이트
        setUserInfo(userInfo);
        setUserFolder(userFolder);
        setIsLoading(false); // 로딩 상태 변경
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("Unknown error occurred"));
        }
        setIsLoading(false);
      }
    };

    fetchData(); // fetchData 함수 호출
  }, []);

  return { userInfo, userFolder, isloading, error }; // 상태를 반환
}
