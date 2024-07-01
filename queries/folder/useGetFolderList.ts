import apiInstance from "@/shared/model/axios";
import { Category } from "@/types/category";
import { queryOptions } from "@tanstack/react-query";

const key = {
  folderList: () => ["/users/1/folders"],
};

const CODEIT_USER = "/users/1";

export const useGetFolderList = {
  queryKey: () => key.folderList(),

  queryOptions: () =>
    queryOptions<{ data: { data: Category[] } }>({
      queryKey: useGetFolderList.queryKey(),
      queryFn: () => apiInstance.get(`${CODEIT_USER}/folders`),
    }),
};
