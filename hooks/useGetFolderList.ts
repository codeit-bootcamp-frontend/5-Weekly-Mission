import { useEffect, useState } from 'react';
import { getFolder } from '../api/api';

type Like = {
  count: number;
};

export interface Folder {
  id: string;
  created_at: Date;
  name: string;
  user_id: number;
  favorite: boolean;
  link: Like;
}

export interface Folders extends Array<Folder> {}

function useGetFolderList(userId: string, folderId?: string) {
  const [link, setLink] = useState<Folders>([]);
  const [linkLoading, setLinkLoading] = useState(false);

  useEffect(() => {
    if (!userId) {
      return;
    }
    try {
      setLinkLoading(true);
      const loadFolderList = async () => {
        const links = await getFolder(userId);
        setLink(links.data);
        setLinkLoading(false);
      };
      loadFolderList();
    } catch (error) {
      console.error();
    }
  }, [userId, folderId]);

  return {
    link,
    linkLoading,
  };
}
export default useGetFolderList;
