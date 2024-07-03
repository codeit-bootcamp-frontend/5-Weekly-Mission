import { useEffect, useState } from 'react';
import { getFolderList } from '../service/api';
import { useQuery } from '@tanstack/react-query';

export type LinkData = {
  id: number;
  favorite: boolean;
  created_at: Date;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id?: string;
};

export interface Links extends Array<LinkData> {}

function useGetFolder(deBounceValue: string, folderId: string) {
  const [linkList, setLinkList] = useState<Links>([]);

  const {
    data: link,
    isPending: linkLoading,
    isSuccess: linkSuccess,
  } = useQuery({
    queryKey: folderId ? ['links', folderId] : ['links'],
    queryFn: () => getFolderList(folderId),
    staleTime: 60 * 1000 * 60,
  });

  const linkArr = link?.data ?? [];

  const search = (list: Links) => {
    if (list) {
      const searchLinks = list.filter(
        (link) =>
          link.url?.includes(deBounceValue) ||
          link.title?.includes(deBounceValue) ||
          link.description?.includes(deBounceValue)
      );
      setLinkList([...searchLinks]);
    }
  };

  useEffect(() => {
    if (linkArr && linkSuccess) {
      setLinkList(linkArr);
    }
  }, [linkArr, linkSuccess, folderId]);

  useEffect(() => {
    if (!deBounceValue) {
      setLinkList(linkArr);
    } else {
      search(linkList);
    }
  }, [deBounceValue]);

  return { linkList, linkLoading };
}

export default useGetFolder;
