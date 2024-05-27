import { BASE_URL } from "@/constants/url";

export const getFolderNavInfo = async (userId: number) => {
  try {
    const response = await fetch(`${BASE_URL}/api/users/${userId}/folders`);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    if (error instanceof Error) alert(`${error.message}에러 발생!`);
    return false;
  }
};

export const getFolderListInfo = async (
  navId: string | string[] | undefined,
  userToken: string | undefined
) => {
  let query = "/api/links";
  if (navId) {
    query += `?folderId=${navId}`;
  }

  try {
    const response = await fetch(BASE_URL + query, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("로그인 인증 ");
      }
      throw new Error(`${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    if (error instanceof Error) alert(`${error.message}에러 발생!`);
    return false;
  }
};
