'use client';

import Content from '@/components/shared/Content';
import Header from '@/components/shared/Header';
import Nav from '@/components/common/Nav';
import Footer from '@/components/common/Footer';
import { useQueries } from '@tanstack/react-query';
import { getLinkById } from '@/api/link';
import { getUser } from '@/api/user';
import { getFolderById } from '@/api/folder';
import { useParams } from 'next/navigation';

function Shared() {
  const params = useParams();
  const { folderId } = params;

  const folderIdNumber = isNaN(Number(folderId)) ? 0 : Number(folderId);

  const [{ data: userData }, { data: folderData }, { data: linkData }] = useQueries({
    queries: [
      {
        queryKey: ['user'],
        queryFn: getUser,
        staleTime: 1000 * 60 * 60,
      },
      {
        queryKey: ['folder', folderId],
        queryFn: () => getFolderById({ folderId: folderIdNumber }),
        staleTime: 1000 * 60 * 60,
      },
      {
        queryKey: ['folderLinks', folderId],
        queryFn: () => getLinkById({ folderId: folderIdNumber }),
        staleTime: 1000 * 60 * 60,
      },
    ],
  });

  const folderName = folderData?.[0].name;

  return (
    <>
      <Nav userData={userData} />
      <Header userData={userData} folderName={folderName} />
      <Content linkData={linkData} />
      <Footer />
    </>
  );
}

export default Shared;
