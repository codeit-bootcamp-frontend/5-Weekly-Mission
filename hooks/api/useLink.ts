import { getLinksByFolderId } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { QueryTokenProp } from "./useUser";
import { useRouter } from "next/router";

interface LinkProps extends QueryTokenProp {
  folderId?: number;
}

export function useLink({ folderId, localAccessToken }: LinkProps) {
  const router = useRouter();

  const {
    data: links,
    isLoading: isLoadingLinks,
    isError: isErrorLinks,
  } = useQuery({
    queryKey: ["links", folderId],
    queryFn: async () => {
      if (!localAccessToken) {
        router.replace("/signin");
        return null;
      }
      const data = await getLinksByFolderId({
        folderId,
        token: localAccessToken,
      });
      return data;
    },
    enabled: !!window,
  });

  return { links, isLoadingLinks, isErrorLinks };
}
