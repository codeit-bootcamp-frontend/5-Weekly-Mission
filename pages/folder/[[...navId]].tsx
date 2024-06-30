import * as S from "@/styles/pages/Folder.styled";
import LinkAdd from "@/components/folder/LinkAdd";
import SearchBar from "@/components/common/SearchBar";
import NavBox from "@/components/folder/NavBox";
import { useContext, useEffect, useState } from "react";
import { getFolderListInfo } from "@/api/folder";
import LinkList from "@/components/common/LinkList";
import { UserInfoContext } from "@/context/User";
import { useRouter } from "next/router";

interface FolderItem {
  id: number;
  created_at: string;
  updated_at: string;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: number;
}

const Folder = () => {
  const [linkList, setLinkList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [key, setKey] = useState(0);
  const router = useRouter();
  const { navId } = router.query;
  const userInfo = useContext(UserInfoContext);

  useEffect(() => {
    if (!localStorage.getItem("userToken")) router.replace("/signin");
  }, []);

  useEffect(() => {
    if (!userInfo) return;

    handleGetLinkListData(navId);
  }, [navId, userInfo]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleGetLinkListData = async (
    navId: string | string[] | undefined
  ) => {
    const resultData = await getFolderListInfo(navId, userInfo?.token);
    setLinkList(resultData);
  };

  const handleSearchList = () => {
    if (!searchValue) return linkList;
    const searchList = linkList.filter((item: FolderItem) => {
      return (
        item.description?.includes(searchValue) ||
        item.title?.includes(searchValue) ||
        item.url?.includes(searchValue)
      );
    });
    return searchList;
  };

  const filterLinkList = handleSearchList();

  const handleDeleteBtn = () => {
    setSearchValue("");
  };

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [navId]);

  return (
    <>
      <S.LinkAddWrap>
        <LinkAdd />
      </S.LinkAddWrap>
      <S.ContentSection>
        <S.ContentBox>
          <SearchBar
            value={searchValue}
            onChangeEvent={handleSearchChange}
            onClickDeleteBtn={handleDeleteBtn}
          />
          <S.FolderBox>
            <NavBox key={key} pageNavId={navId} />
          </S.FolderBox>
          <S.ContentItemBox>
            <LinkList listInfo={filterLinkList} isSetting />
          </S.ContentItemBox>
        </S.ContentBox>
      </S.ContentSection>
    </>
  );
};

export default Folder;
