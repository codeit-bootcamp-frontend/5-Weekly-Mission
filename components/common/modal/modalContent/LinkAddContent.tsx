import * as S from "./LinkAddContent.styled";
import { useState, useEffect, useRef, useContext } from "react";
import Button from "@/components/common/Button";
import { addLink, getFolderNavInfo } from "@/api/folder";
import checkIcon from "@/public/image/icon/check.svg";
import { INavItem } from "@/types/FolderNav";
import Image from "next/image";
import { UserInfoContext } from "@/context/User";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import useModal from "@/hooks/useModal";

interface ILinkAddContentProps {
  linkUrl: string;
}

const LinkAddContent = ({ linkUrl }: ILinkAddContentProps) => {
  const [navList, setNavList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSelectedFolder, setFolder] = useState<number>();
  const selectedFoler: React.MutableRefObject<any> = useRef({});
  const userInfo = useContext(UserInfoContext);
  const router = useRouter();
  const { closeModal } = useModal();

  useEffect(() => {
    const folderNavInfo = async () => {
      try {
        setIsLoading(true);

        if (!userInfo) return;
        const response = await getFolderNavInfo(userInfo?.id);

        if (response !== null) {
          setNavList(response);
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

  const handleLinkAdd = useMutation({
    mutationFn: () => {
      if (!userInfo || !userInfo.token) {
        return Promise.reject(new Error("UserToken Error!"));
      } else if (!currentSelectedFolder) {
        return Promise.reject(new Error("No Seleted Folder!"));
      }
      return addLink(linkUrl, currentSelectedFolder, userInfo.token);
    },
    onSuccess: () => {
      alert("링크 생성 성공");
      closeModal();
      router.push(`/folder/${currentSelectedFolder}`);
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  const handleLinkAddBtnClick = () => {
    if (!currentSelectedFolder) {
      alert("폴더를 선택해주세요.");
      return;
    } else if (linkUrl === "") {
      alert("url을 입력해주세요.");
      return;
    }
    handleLinkAdd.mutate();
  };

  return (
    <S.Content>
      <S.FolderList>
        {navList.map((navItem: INavItem, i) => {
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
                <S.LinkCount>{navItem.link_count}개 링크</S.LinkCount>
              </p>
              {selectedFoler.current[i] === currentSelectedFolder && (
                <Image src={checkIcon} alt="폴더 선택 아이콘" />
              )}
            </li>
          );
        })}
      </S.FolderList>
      {isLoading && <div>폴더 목록 불러오는중...</div>}
      {isLoading || (
        <Button type="linkAdd_modal" handleButtonClick={handleLinkAddBtnClick}>
          추가하기
        </Button>
      )}
    </S.Content>
  );
};

export default LinkAddContent;
