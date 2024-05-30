import { axiosInstance } from '@/utils/axiosInstance';
import SharedLinkCardList from '@/components/SharedLinkCardList/SharedLinkCardList';
import SharedProfile from '@/components/SharedProfile/SharedProfile';

interface Props {
  params: { folderId: string };
}

async function fetchFolderData(folderId: string) {
  const response = await axiosInstance.get(`/folders/${folderId}`);
  console.log(response);
  return response.data.data[0];
}

async function fetchUserInfo(userId: number) {
  const response = await axiosInstance.get(`/users/${userId}`);
  console.log(response);
  return response.data.data[0];
}

async function fetchUserLinks(userId: number, folderId: number) {
  const response = await axiosInstance.get(
    `/users/${userId}/links?folderId=${folderId}`
  );
  console.log(response);
  return response.data.data;
}

export default async function Page({ params }: Props) {
  const folderData = await fetchFolderData(params.folderId);
  const userInfo = await fetchUserInfo(folderData.user_id);
  const links = await fetchUserLinks(folderData.user_id, folderData.id);

  return (
    <>
      <SharedProfile userInfo={userInfo} folderName={folderData.name} />
      <SharedLinkCardList items={links} />
    </>
  );
}
