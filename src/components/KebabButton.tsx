import { useState } from "react";
import * as S from "./FolderCardListItemStyled";
import styled from "styled-components";
import DeleteModal from "./modal/DeleteModal";
import React from "react";

interface KebabButtonProps {
  onAddToFolder: () => void;
  linkUrl: string;
}

function KebabButton({ onAddToFolder, linkUrl }: KebabButtonProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const togleMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // 이벤트 전파 중단
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDelete = () => {
    setIsMenuOpen(false);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <S_KebabContainer onClick={togleMenu}>
      <S.KebabButton />
      {isMenuOpen && (
        <S_KebabMenu>
          <S_BtnDelete onClick={handleDelete}>삭제하기</S_BtnDelete>
          <S_BtnAddToFolder onClick={onAddToFolder}>
            폴더에 추가
          </S_BtnAddToFolder>
        </S_KebabMenu>
      )}
      {isModalOpen && (
        <DeleteModal linkUrl={linkUrl} onClose={handleModalClose} />
      )}
    </S_KebabContainer>
  );
}

const S_KebabContainer = styled.div`
  position: relative;
`;

const S_KebabMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 64px;
  box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.08);
  position: absolute;
  top: calc(100% + 20px); /* 메뉴를 버튼 아래에 위치하고 약간의 여백을 둠 */
  right: -20%;
  background-color: white;
  text-align: center;
  font-size: 14px;
`;
const S_BtnDelete = styled.div`
  display: flex;
  height: 32px;
  align-items: center;
  justify-content: center;
`;
const S_BtnAddToFolder = styled.div`
  display: flex;
  height: 32px;
  align-items: center;
  justify-content: center;
  background-color: #e7effb;
  color: var(--primary);
`;
export default KebabButton;
