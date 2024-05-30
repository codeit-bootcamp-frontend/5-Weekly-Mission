import { axiosInstance } from '@/utils/axiosInstance';
import { FolderObj } from '@/utils/interfaces';
import { useEffect, useState } from 'react';
import { useUserInfo } from './useUserInfo';

const useFolders = () => {
  const [folders, setFolders] = useState<FolderObj[]>();
  const { user } = useUserInfo();

  const allFolder = {
    id: -1,
    name: '전체',
    user_id: -1,
  };

  const getFolderList = async () => {
    if (!user) return;
    const res = await axiosInstance.get(`/users/${user.id}/folders`);
    const folderList = res.data.data;
    setFolders([allFolder, ...folderList]);
  };

  useEffect(() => {
    getFolderList();
  }, [user]);

  return { folders };
};

export default useFolders;
