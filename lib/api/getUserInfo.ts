const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export interface UserInfo {
  name: string;
  id: string;
  email: string;
  profileImageSource?: string;
}

export const getUserInfo = async (): Promise<UserInfo> => {
  const response = await fetch(`${BASE_URL}/sample/user`);
  if (!response.ok) {
    throw new Error("유저 불러오기 실패");
  }

  //타입가드
  const userData: Partial<UserInfo> = await response.json();
  const userInfo: UserInfo = {
    name: userData.name || "이름 없음",
    id: userData.id || "아이디 없음",
    email: userData.email || "이메일 없음",
    profileImageSource: userData.profileImageSource,
  };

  return userInfo;
};
