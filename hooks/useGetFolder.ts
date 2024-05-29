import { useEffect, useState } from 'react';
import { getFolderList } from '../api/api';

export type LinkData = {
  id: number;
  created_at: Date;
  updated_at?: Date;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id?: string;
};

export interface Links extends Array<LinkData> {}

function useGetFolder(id: string, searchKeyword: string, folderId: string) {
  const [linkList, setLinkList] = useState<Links>([]);
  const [loading, setLoading] = useState(false);

  const search = (list: Links) => {
    if (list) {
      const searchLinks = list.filter(
        (link) =>
          link.url?.includes(searchKeyword) ||
          link.title?.includes(searchKeyword) ||
          link.description?.includes(searchKeyword)
      );
      setLinkList(searchLinks);
    }
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    try {
      setLoading(true);
      const loadFolder = async () => {
        const list = await getFolderList(id, folderId);
        if (searchKeyword) {
          search(list);
          setLoading(false);
        } else {
          setLinkList(list);
          setLoading(false);
        }
      };
      loadFolder();
    } catch (error) {
      console.error(error);
    }
  }, [folderId, id, searchKeyword]);

  return { linkList, loading };
}

export default useGetFolder;
