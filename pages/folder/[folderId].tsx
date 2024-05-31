import { API_INFO, Data, DataArray, FoldersData, UserData } from '@/common/api';
import useFetch from '@/hooks/useFetch';
import Footer from '@/components/common/Footer';
import Nav from '@/components/common/Nav';
import Content from '@/components/folder/Content';
import Header from '@/components/folder/Header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const { url: getUserUrl, method: getUserMethod } = API_INFO.endpoints.getUserByToken;
const { url: getFolderUrl, method: getFolderMethod } = API_INFO.endpoints.getFolderByToken;

function DynamicFolder() {
  const router = useRouter();
  const { folderId } = router.query;

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      router.push('/signin');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const headers =
    typeof window === 'undefined' ? undefined : { Authorization: 'Bearer ' + localStorage.getItem('accessToken') };

  const userData = useFetch<DataArray<UserData>>({
    url: API_INFO.baseUrl + getUserUrl,
    method: getUserMethod,
    headers: headers,
    immediate: true,
  });

  const folderData = useFetch<Data<FoldersData>>({
    url: API_INFO.baseUrl + getFolderUrl,
    method: getFolderMethod,
    headers: headers,
    immediate: true,
  });

  return (
    <>
      <Head>
        <title>folder</title>
      </Head>
      <Nav userData={{ data: userData.data?.data[0], loading: userData.loading, error: userData.error }} />
      <Header
        folderData={{
          data: folderData.data ? folderData.data.data : null,
          loading: folderData.loading,
          error: folderData.error,
        }}
      />
      <Content
        folderData={{
          data: folderData.data ? folderData.data.data : null,
          loading: folderData.loading,
          error: folderData.error,
        }}
        folderId={folderId ? parseInt(folderId.toString()) : 0}
      />
      <Footer />
    </>
  );
}

export default DynamicFolder;
