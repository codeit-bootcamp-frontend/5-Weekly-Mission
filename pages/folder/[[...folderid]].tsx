import SubHeader from "../../components/SubHeader";
import AddLink from "../../components/AddLink";
import Folder from "../../components/FolderPage/Folder";
import { useData } from "../../Hooks/useData";
import App from "../../components/App";
import { getLinksData, LOGIN_TOKEN, getFolderDataByToken } from "../../Api/Api";
import React, { MouseEvent, useCallback, useEffect, useState } from "react";
import { LinkItem } from "../../components/CardList";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
import { useUser } from "@/contexts/UserContext";

interface Item {
  name: string;
  id: number;
  email: string;
  profileImageSource: string;
}

export interface FolderType {
  id: number;
  name: string;
  owner: { id: number; name: string; profileImageSource: string };
  links: LinkItem[];
  count: number;
}

function folder() {
  const [folderInfo, getFolderInfo] = useData(getFolderDataByToken);
  const [linkData, getLinkData] = useData(getLinksData);
  const [selectedFolder, setSelectedFolder] = useState<FolderType>();
  const [foot, footView] = useInView();
  const router = useRouter();
  const { user } = useUser();

  const checkToken = (userToken: string | null) => {
    if (!userToken) router.push("/signin");
  };

  const selectFolder = (e: MouseEvent<any, MouseEvent>) => {
    const target = e.target;
    if (target instanceof HTMLButtonElement) {
      const folderId = Number(target.name);
      const selected = folderInfo?.data.folder.filter(
        (item: Item) => item.id === folderId
      );
      setSelectedFolder(selected[0]);
      if (folderId === -1) {
        router.push("/folder");
      } else {
        router.push(`/folder/${folderId}`);
      }
    }
  };

  const getData = useCallback(async () => {
    if (!user) return;
    const userToken = window.localStorage.getItem(LOGIN_TOKEN);
    await getLinkData(selectedFolder?.id ?? "", user?.data[0].id);
    await getFolderInfo(userToken);
  }, [getFolderInfo, getLinkData, selectedFolder, user]);

  useEffect(() => {
    const userToken = window.localStorage.getItem(LOGIN_TOKEN);
    checkToken(userToken);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <App headerFixed={false} foot={foot}>
      <SubHeader headerfixed={false}>
        <AddLink folder={folderInfo?.data.folder} footView={footView} />
      </SubHeader>
      <Folder
        linkData={linkData}
        selectFolder={selectFolder}
        folderInfo={folderInfo?.data.folder}
        selectedFolder={selectedFolder}
      />
    </App>
  );
}

export default folder;
