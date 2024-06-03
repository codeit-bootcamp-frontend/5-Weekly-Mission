import { mapFolderData } from "@/src/components-folder/util-map";
import { useAsync } from "@/src/components-common/util";
import { axiosInstance } from "@/src/components-common/util";
import type { mapFolderDataReturnType } from "@/src/components-folder/util-map";
import type { asyncFunctionType } from "@/src/components-common/util";
import type { SampleFolder } from "../../../types/data-access-types";

interface useGetFolderType {
  (): {
    loading: boolean;
    error: any;
    folder: null | mapFolderDataReturnType;
  };
}

export const useGetFolder: useGetFolderType = () => {
  const getFolder: asyncFunctionType = () => axiosInstance.get("sample/folder");
  const { loading, error, data: rawFolderData } = useAsync(getFolder);

  // NOTE: 타입가드
  const isSampleFolder = (
    rawFolderData: any
  ): rawFolderData is SampleFolder => {
    return (
      rawFolderData !== null &&
      typeof rawFolderData === "object" &&
      "folder" in rawFolderData
    );
  };

  const folder = isSampleFolder(rawFolderData)
    ? mapFolderData(rawFolderData.folder)
    : null;

  return { loading, error, folder };
};
