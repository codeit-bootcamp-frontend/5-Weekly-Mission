import type { asyncFunctionType } from "@/src/components-common/util";
import type { Folder, Folders } from "../../../types/data-access-types";
import { axiosInstance } from "@/src/components-common/util";
import { useAsync } from "@/src/components-common/util";

interface useGetFoldersType {
  (): {
    loading: boolean;
    error: any;
    folders: null | Folder[];
  };
}

export const useGetFolders: useGetFoldersType = () => {
  const getFolders: asyncFunctionType = () =>
    axiosInstance.get("users/1/folders");
  const { loading, error, data: rawFoldersData } = useAsync(getFolders);

  // NOTE: 타입가드
  const isFolders = (rawFoldersData: any): rawFoldersData is Folders => {
    return (
      rawFoldersData !== null &&
      typeof rawFoldersData === "object" &&
      "data" in rawFoldersData
    );
  };

  const folders = isFolders(rawFoldersData)
    ? rawFoldersData.data.sort((a, b) => a?.id - b?.id)
    : null;

  return { loading, error, folders };
};
