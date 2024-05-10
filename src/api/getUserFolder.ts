const BASE_URL = "https://bootcamp-api.codeit.kr/api";

interface LinksProps {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
}
interface Folder {
  id: number;
  count: number;
  links: LinksProps[];
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
}
export interface GetUserFolderProps {
  folder: Folder;
}

interface LinkCountProps {
  count: number;
}
interface FolderDataProps {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  links: LinkCountProps[];
}
export interface GetFolderListProps {
  data: FolderDataProps[];
}

interface LinksProps2 {
  id: number;
  created_at: string;
  description: string;
  folder_id: number;
  image_source: string;
  title: string;
  updated_at: string | null;
  url: string;
}
export interface GetAllFolderListProps {
  data: LinksProps2[];
}

export const getUserFolder = async (): Promise<GetUserFolderProps> => {
  const response = await fetch(`${BASE_URL}/sample/folder`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("폴더정보 불러오기 실패");
  }
  const { folder } = await response.json();

  return { folder };
};

export const getFolderList = async (): Promise<GetFolderListProps> => {
  const response = await fetch(`${BASE_URL}/users/1/folders`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("폴더정보 불러오기 실패");
  }
  const folder = await response.json();
  return folder;
};

export const getAllFolderList = async (): Promise<GetAllFolderListProps> => {
  const response = await fetch(`${BASE_URL}/users/1/links`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("폴더정보 불러오기 실패");
  }
  const folder = await response.json();
  return folder;
};

export const getFolderListById = async (folderId: number) => {
  const response = await fetch(
    `${BASE_URL}/users/1/links?folderId=${folderId}`,
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    throw new Error("폴더정보 불러오기 실패");
  }
  const folder = await response.json();
  return folder;
};
