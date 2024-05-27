import * as S from "@/styles/pages/Shared.styled";
import BookMark from "@/components/shared/BookMark";
import SearchBar from "@/components/common/SearchBar";
import LinkList from "@/components/common/LinkList";
import { useContext, useEffect, useState } from "react";
import { getSharedFolderInfo, getSharedLinkList } from "@/api/shared";
import { getUserInfo } from "@/api/user";
import { UserInfoContext } from "@/context/User";
import { useRouter } from "next/router";

interface Props {
  name: string;
  image_source: string;
}

interface IFolderInfo {
  id: number;
  created_at: Date;
  name: string;
  user_id: number;
  favorite: boolean;
}

const Shared = () => {
  const [bookMarkOwner, setBookMarkOwner] = useState<Props | null>(null);
  const [folderInfo, setFolderInfo] = useState<string | null>(null);
  const [linkList, setLinkList] = useState([]);
  const router = useRouter();
  const { folderId } = router.query;
  const userInfo = useContext(UserInfoContext);

  const handleLoadFolderInfo = async () => {
    if (!folderId) return;

    const folderInfo = await getSharedFolderInfo(folderId);

    if (folderInfo) {
      const folderInfoData = folderInfo.data[0];

      setFolderInfo(folderInfoData?.name);
      handleLoadOwnerInfo(folderInfoData?.user_id);
      handleSharedLinkList(folderInfoData?.user_id, folderId);
    }
  };

  const handleLoadOwnerInfo = async (userId: string) => {
    const ownerInfo = await getUserInfo(userId);

    if (ownerInfo) {
      setBookMarkOwner({
        name: ownerInfo.data[0].name,
        image_source: ownerInfo.data[0].image_source,
      });
    }
  };

  const handleSharedLinkList = async (
    userId: string,
    folderId: string | string[]
  ) => {
    const linkList = await getSharedLinkList(userId, folderId);

    if (linkList) {
      setLinkList(linkList.data);
    }
  };

  // run build 에러때문에 잠시 작성
  const handleSearchChange = (value: string) => {};
  const handleDeleteBtn = () => {};

  useEffect(() => {
    const forderInfoResult = handleLoadFolderInfo();
    //handleLoadInfo();
  }, [folderId]);

  return (
    <>
      <S.SharedInfoWrap>
        <BookMark ownerInfo={bookMarkOwner} folderName={folderInfo} />
      </S.SharedInfoWrap>
      <S.ContentSection>
        <S.ContentWrap>
          <SearchBar
            value=""
            onChangeEvent={handleSearchChange}
            onClickDeleteBtn={handleDeleteBtn}
          />
          <LinkList listInfo={linkList} />
        </S.ContentWrap>
      </S.ContentSection>
    </>
  );
};

export default Shared;
