import { useEffect } from "react";
import { getFolderData, getLinksData, getUsersData } from "../../Api/Api";
import SubHeader from "../../components/SubHeader";
import Shared from "../../components/SharedPage/Shared";
import { useData } from "../../Hooks/useData";
import UserFolderInfo from "../../components/SharedPage/UserFolderInfo";
import App from "../../components/App";
import React from "react";
import { useRouter } from "next/router";

function shared() {
  const [folder, getFolder] = useData(getFolderData);
  const [user, getUser] = useData(getUsersData);
  const [folderLink, getFolderLink] = useData(getLinksData);
  const router = useRouter();
  const { folderid } = router.query;

  useEffect(() => {
    if (typeof folderid !== "string") return;

    getFolder(folderid);
    getUser(folder?.data[0].user_id);
    getFolderLink(folderid, folder?.data[0]?.user_id);
  }, [folderid, folder?.data[0].user_id]);

  if (!folder || !user?.data || !folderLink) return;
  return (
    <App headerFixed={true}>
      <SubHeader headerfixed={true}>
        <UserFolderInfo
          name={user?.data[0]?.name}
          profileImg={user?.data[0].image_source}
          folderName={folder?.data[0].name}
        />
      </SubHeader>
      <Shared items={folderLink?.data} />
    </App>
  );
}

export default shared;
