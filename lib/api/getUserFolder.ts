interface Links {
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
  links: Links[];
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
}
export interface GetUserFolder {
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

interface LinksByFolder {
  id: number;
  created_at: Date;
  description: string;
  folder_id: number;
  image_source: string;
  title: string;
  updated_at: string | null;
  url: string;
}
export interface GetAllFolderListProps {
  data: LinksByFolder[];
}

interface FolderIdProps {
  folderId: number;
}

interface Folder {
  id: number;
  created_at: string;
  description: string;
  folder_id: number;
  image_source: string;
  title: string;
  updated_at: string | null;
  url: string;
}
export interface FolderListResponse {
  data: Folder[];
}

export const getUserFolder = async (): Promise<GetUserFolder> => {
  const response = await fetch(`${process.env.BASE_URL}/sample/folder`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("폴더정보 불러오기 실패");
  }
  const { folder } = await response.json();

  return { folder };
};

export const getFolderList = async (): Promise<GetFolderListProps> => {
  const response = await fetch(`${process.env.BASE_URL}/users/1/folders`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("폴더정보 불러오기 실패");
  }
  const folder = await response.json();
  return folder;
};

export const getAllFolderList = async (): Promise<GetAllFolderListProps> => {
  const response = await fetch(`${process.env.BASE_URL}/users/1/links`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("폴더정보 불러오기 실패");
  }
  const folder = await response.json();
  return folder;
};

export const getFolderListById = async (
  folderId: number
): Promise<FolderListResponse> => {
  const response = await fetch(
    `${process.env.BASE_URL}/users/1/links?folderId=${folderId}`,
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
