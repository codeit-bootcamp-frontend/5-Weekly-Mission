import Content from '@/components/shared/Content';
import Header from '@/components/shared/Header';
import Nav from '@/components/common/Nav';
import useFetch from '@/hooks/useFetch';
import Footer from '@/components/common/Footer';
import { API_INFO, putParams, FolderData, DataArray, UserData, LinkData } from '@/common/api';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const baseUrl = API_INFO.baseUrl;
const { url: getFolderUrl, method: getFolderMethod } = API_INFO.endpoints.getFolderByFolderId;
const { url: getUserUrl, method: getUserMethod } = API_INFO.endpoints.getUserByUserId;
const { url: getLinkUrl, method: getLinkMethod } = API_INFO.endpoints.getDataByUserId;

function Shared() {
  const router = useRouter();
  const { folderId } = router.query;
  const [userId, setUserId] = useState<number | null>(null);

  const {
    sendRequest: sendFolderRequest,
    data: folderData,
    loading: folderLoading,
    error: folderError,
  } = useFetch<DataArray<FolderData>>({});

  const userData = useFetch<DataArray<UserData>>({});

  const linkData = useFetch<DataArray<LinkData>>({});

  useEffect(() => {
    if (folderId) {
      sendFolderRequest({
        url: baseUrl + putParams(getFolderUrl, folderId as string),
        method: getFolderMethod,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folderId]);

  useEffect(() => {
    if (!folderLoading && folderError === null) {
      const id = folderData?.data[0].user_id ?? null;
      setUserId(id ?? null);

      userData.sendRequest({ url: baseUrl + putParams(getUserUrl, id?.toString() ?? ''), method: getUserMethod });
      linkData.sendRequest({
        url: baseUrl + putParams(getLinkUrl, id?.toString() ?? '') + '?folderId=' + folderId,
        method: getLinkMethod,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folderLoading, folderError, folderData]);

  const folderName = folderData?.data[0].name;

  return (
    <>
      <Head>
        <title>shared</title>
      </Head>
      <Nav
        userData={{
          data: userData?.data?.data[0] || null,
          loading: userData.loading,
          error: userData.error,
        }}
      ></Nav>
      <Header
        userData={{
          data: userData?.data?.data[0] || null,
          loading: userData.loading,
          error: userData.error,
        }}
        folderName={folderName}
      ></Header>
      <Content
        linkData={{
          data: linkData?.data?.data || null,
          loading: linkData.loading,
          error: linkData.error,
        }}
      ></Content>
      <Footer></Footer>
    </>
  );
}

export default Shared;
