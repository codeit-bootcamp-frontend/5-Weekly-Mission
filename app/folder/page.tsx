'use client';

import { getFolder } from '@/api/folder';
import { getUser } from '@/api/user';
import Footer from '@/components/common/Footer';
import Nav from '@/components/common/Nav';
import Content from '@/components/folder/Content';
import Header from '@/components/folder/Header';
import { useQuery } from '@tanstack/react-query';

export default function Folder() {
  const { data: userData } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    staleTime: 1000 * 60 * 60,
  });

  const { data: folderData } = useQuery({
    queryKey: ['folder'],
    queryFn: getFolder,
    staleTime: 1000 * 60 * 60,
  });

  return (
    <>
      <Nav userData={userData} />
      <Header folderData={folderData} />
      <Content userData={userData} folderData={folderData} />
      <Footer />
    </>
  );
}
