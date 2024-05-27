import * as S from "./LinkAddContent.styled";
import { useState, useEffect, useRef, useContext } from "react";
import Button from "@/components/common/Button";
import { getFolderNavInfo } from "@/api/folder";
import checkIcon from "@/public/image/icon/check.svg";
import { INavItem } from "@/types/FolderNav";
import Image from "next/image";
import { UserInfoContext } from "@/context/User";

const LinkAddContent = () => {
  const [navList, setNavList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSelectedFolder, setFolder] = useState(null);
  const selectedFoler: React.MutableRefObject<any> = useRef({});
  const userInfo = useContext(UserInfoContext);

  useEffect(() => {
    const folderNavInfo = async () => {
      try {
        setIsLoading(true);

        if (!userInfo) return;
        const response = await getFolderNavInfo(userInfo?.id);

        if (response !== null) {
          setNavList(response.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    folderNavInfo();
  }, []);

  const handleSelectFolder = (i: number) => {
    setFolder(selectedFoler.current[i]);
  };

  return (
    <S.Content>
      <S.FolderList>
        {navList.map((navItem: INavItem, i) => {
          console.log(navItem);
          return (
            <li
              key={navItem.id}
              onClick={() => handleSelectFolder(i)}
              ref={() => {
                selectedFoler.current[i] = navItem.id;
              }}
              className={
                selectedFoler.current[i] === currentSelectedFolder
                  ? "selected"
                  : ""
              }
            >
              <p>
                <S.NavName>{navItem.name}</S.NavName>
                <S.LinkCount>{navItem.link?.count}개 링크</S.LinkCount>
              </p>
              {selectedFoler.current[i] === currentSelectedFolder && (
                <Image src={checkIcon} alt="폴더 선택 아이콘" />
              )}
            </li>
          );
        })}
      </S.FolderList>
      {isLoading && <div>폴더 목록 불러오는중...</div>}
      {isLoading || <Button type="linkAdd_modal">추가하기</Button>}
    </S.Content>
  );
};

export default LinkAddContent;
