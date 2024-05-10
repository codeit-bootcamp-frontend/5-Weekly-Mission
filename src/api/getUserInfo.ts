const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export interface UserInfo {
  name: string;
  id: string;
  email: string;
  profileImageSource?: string;
}

export const getUserInfo = async (): Promise<UserInfo> => {
  const response = await fetch(`${BASE_URL}/sample/user`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("유저 불러오기 실패");
  }
  const { name, id, email, profileImageSource } = await response.json();
  return { name, id, email, profileImageSource };
};
