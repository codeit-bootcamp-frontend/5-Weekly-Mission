import { BASE_URL } from "../constants/url";

export const getSharedFolderInfo = async (
  folderId: string | string[] | undefined
) => {
  try {
    const response = await fetch(`${BASE_URL}/api/folders/${folderId}`);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    if (error instanceof Error) alert(`${error.message}에러 발생!!`);
    return false;
  }
};

export const getSharedLinkList = async (
  userId: string,
  folderId: string | string[]
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/users/${userId}/links?folderId=${folderId}`
    );
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    if (error instanceof Error) alert(`${error.message}에러 발생2!`);
    return false;
  }
};
