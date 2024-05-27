import React, { useContext, useEffect, useState } from "react";
import { getFolderNavInfo } from "@/api/folder";
import * as S from "./NavBox.styled";
import useModal from "@/hooks/useModal";
import NavItem from "./NavItem";
import add from "@/public/image/icon/add.svg";
import addMobile from "@/public/image/icon/add-mobile.svg";
import shareIcon from "@/public/image/icon/share.svg";
import penIcon from "@/public/image/icon/pen.svg";
import deleteIcon from "@/public/image/icon/delete.svg";
import { ModalParam } from "@/types/Modal";
import { INavItem } from "@/types/FolderNav";
import Image from "next/image";
import { UserInfoContext } from "@/context/User";

interface FolderNav {
  pageNavId?: string | string[];
}

const NavBox = ({ pageNavId }: FolderNav) => {
  const { openModal } = useModal();
  const [navList, setNavList] = useState<INavItem[]>([]);
  const [currentNav, setCurrentNav] = useState("전체");
  const userInfo = useContext(UserInfoContext);

  const handleGetNavData = async () => {
    if (!userInfo) return;
    const folderNavInfo = await getFolderNavInfo(userInfo.id);

    if (folderNavInfo !== null) {
      setNavList(folderNavInfo.data.folder);
    }
  };

  useEffect(() => {
    handleGetNavData();
  }, [userInfo]);

  useEffect(() => {
    if (!pageNavId) {
      setCurrentNav("전체");
    }

    navList.forEach((navListItem: INavItem) => {
      if (
        navListItem.name &&
        pageNavId &&
        navListItem.id === parseInt(pageNavId[0])
      )
        setCurrentNav(navListItem.name);
    });
  }, [pageNavId]);

  const handleOpenModal = ({ type, props }: ModalParam) => {
    openModal({ type, props });
  };

  return (
    <>
      <S.NavWrapBox>
        <S.NavList>
          <NavItem navName="전체" isCurrentNav={!pageNavId} />
          {navList &&
            navList.map((navItem) => {
              return (
                <NavItem
                  key={navItem.id}
                  navName={navItem.name}
                  navId={navItem.id}
                  isCurrentNav={
                    pageNavId && navItem.id?.toString() === pageNavId[0]
                      ? true
                      : false
                  }
                />
              );
            })}
        </S.NavList>
        <button
          onClick={() =>
            handleOpenModal({
              type: "folderAdd",
              props: { title: "폴더 추가" },
            })
          }
        >
          <span>폴더 추가</span>
          <Image src={add} alt="추가 아이콘" className="pc" />
          <Image src={addMobile} alt="추가 아이콘" className="mo" />
        </button>
      </S.NavWrapBox>
      <S.NavSettingBox>
        <span>{currentNav}</span>
        {pageNavId && (
          <div>
            <button
              onClick={() =>
                handleOpenModal({
                  type: "share",
                  props: { title: "폴더 공유", subTitle: currentNav },
                })
              }
            >
              <Image src={shareIcon} alt="공유 아이콘" />
              <span>공유</span>
            </button>
            <button
              onClick={() =>
                handleOpenModal({
                  type: "folderNameChange",
                  props: { title: "폴더 이름 변경" },
                })
              }
            >
              <Image src={penIcon} alt="이름 변경 아이콘" />
              <span>이름 변경</span>
            </button>
            <button
              onClick={() =>
                handleOpenModal({
                  type: "folderDelete",
                  props: { title: "폴더 삭제", subTitle: currentNav },
                })
              }
            >
              <Image src={deleteIcon} alt="삭제 아이콘" />
              <span>삭제</span>
            </button>
          </div>
        )}
      </S.NavSettingBox>
    </>
  );
};

export default NavBox;
