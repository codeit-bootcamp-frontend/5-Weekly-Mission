import { useAuth } from '@/contexts/AuthContext';
import { axiosInstance } from '@/utils/axiosInstance';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { LinkObj } from '@/utils/interfaces';
import { useUserInfo } from './useUserInfo';

const useLinks = () => {
  const router = useRouter();
  const { user } = useUserInfo();
  const [links, setLinks] = useState<LinkObj[]>([]);

  const folderId = router.query.slug ? router.query.slug[0] : -1;
  const getLinkList = async () => {
    if (!user) return;

    const folderEndPoint =
      folderId && folderId !== -1 ? `?folderId=${folderId}` : '';
    const response = await axiosInstance.get(
      `/users/${user.id}/links${folderEndPoint}`
    );
    setLinks(response.data.data);
  };

  useEffect(() => {
    getLinkList();
  }, [folderId, user]);

  return { links };
};

export default useLinks;
