import { getFolders } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { QueryTokenProp } from "./useUser";
import { useRouter } from "next/router";

export function useFolder({ localAccessToken }: QueryTokenProp) {
  const router = useRouter();

  const {
    data: folders,
    isLoading: isLoadingFolders,
    isError: isErrorFolders,
  } = useQuery({
    queryKey: ["folders"],
    queryFn: async () => {
      if (!localAccessToken) {
        router.replace("/signin");
        return null;
      }
      const data = await getFolders({
        token: localAccessToken,
      });
      return data;
    },
    enabled: !!window,
  });

  return { folders, isLoadingFolders, isErrorFolders };
}
