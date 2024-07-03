import { useEffect, useState } from 'react';
import { getFolder } from '../service/api';
import { useQuery } from '@tanstack/react-query';

export interface Folder {
  id: string;
  created_at: Date;
  name: string;
  user_id: number;
  favorite: boolean;
  link_count: number;
}

export interface Folders extends Array<Folder> {}

function useGetFolderList() {
  const [favoriteFolder, setFavoriteFolder] = useState('');
  const { data: list, isPending } = useQuery({
    queryKey: ['folder'],
    queryFn: () => getFolder(),
    staleTime: 60 * 1000 * 10,
  });

  const folderList = list?.data ?? [];

  useEffect(() => {
    if (list) {
      setFavoriteFolder(list?.data[0]?.id);
    }
  }, [list]);

  return {
    folderList,
    isPending,
    favoriteFolder,
  };
}
export default useGetFolderList;
