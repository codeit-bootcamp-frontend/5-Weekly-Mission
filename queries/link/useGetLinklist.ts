import apiInstance from "@/shared/model/axios";
import { queryOptions } from "@tanstack/react-query";

const key = {
  linkList: () => ["users/1/links"],
};

export const useGetLinklist = {
  queryKey: () => key.linkList(),
  queryOptions: (folderId?: string | undefined | string[]) => {
    let url;

    if (!folderId) {
      url = "/users/1/links";
    } else {
      url = `/users/1/links?folderId=${folderId}`;
    }

    return queryOptions({
      queryKey: useGetLinklist.queryKey(),
      queryFn: () => apiInstance.get(url),
    });
  },
};
