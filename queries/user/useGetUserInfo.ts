import apiInstance from "@/shared/model/axios";
import { User } from "@/types/user";
import { queryOptions } from "@tanstack/react-query";

const key = {
  user: () => ["/user/info"],
};

const CODEIT_USER = "/users/1";

export const useGetUserInfo = {
  queryKey: () => key.user(),

  queryOptions: () =>
    queryOptions<{ data: { data: User[] } }>({
      queryKey: useGetUserInfo.queryKey(),
      queryFn: () => apiInstance.get(CODEIT_USER),
    }),
};
