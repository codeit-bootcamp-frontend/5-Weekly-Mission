import { getFolderData, getFolderList, getUserData } from "@/service/api";
import SharedFolderInfo from "../_components/SharedFolderInfo";
import SharedFolderContents from "../_components/SharedFolderContents";

export default async function SharedFolder({
  params,
}: {
  params: { folderId: string };
}) {
  const folderInfo = await getFolderData(params.folderId);
  const folderLink = await getFolderList(params.folderId);
  const linkList = folderLink?.data ?? [];
  const owner = await getUserData(folderInfo?.data[0].user_id);

  return (
    <>
      <SharedFolderInfo owner={owner.data[0]} folderInfo={folderInfo.data[0]} />
      <div className="mx-auto my-0 flex max-w-[106rem] flex-col items-center justify-center py-[5rem]">
        <SharedFolderContents list={linkList} />
      </div>
    </>
  );
}
