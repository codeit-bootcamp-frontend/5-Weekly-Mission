import { useCallback, useEffect } from "react";
import { formatLinkRawData, LinkRawData } from "../type";
import { useAsync, mapLinksData } from "../util";
import { instance } from "../util";

export const useGetSharedLinks = (userId: number, folderId?: string) => {
  const getLinks = useCallback(
    () =>
      instance.get<{ data: LinkRawData[] }>(
        `users/${userId}/links?folderId=${folderId}`
      ),
    [userId, folderId]
  );
  const { execute, loading, error, data } = useAsync({
    asyncFunction: getLinks,
    enabled: !!userId && !!folderId,
  });

  useEffect(() => {
    execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, folderId]);

  const linksData = data?.data?.map(formatLinkRawData).map(mapLinksData) ?? [];

  return { execute, loading, error, data: linksData };
};
