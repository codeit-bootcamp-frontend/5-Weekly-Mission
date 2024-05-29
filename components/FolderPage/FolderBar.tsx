import styled from "styled-components";
import { GRAY4, PRIMARY, WHITE } from "../color";
import FolderNameBar from "@/components/FolderPage/FolderNameBar";
import { MouseEvent, ReactNode, useState } from "react";
import Portal from "../../Portal/Portal";
import ModalAddFolder from "../Modal/ModalAddFolder";
import { FolderType } from "../../pages/folder/[[...folderid]]";

const FolderBlock = ({
  itemId,
  clicked,
  children,
}: {
  itemId: number;
  clicked: boolean;
  children: ReactNode;
}) => {
  return (
    <Block name={String(itemId)} $clicked={clicked} type="button">
      {children}
    </Block>
  );
};

const FolderIndex = ({
  items,
  onClick,
  selectedId,
}: {
  items: { [Folders: string]: any };
  onClick: (e: any) => void;
  selectedId: number;
}) => {
  return (
    <FolderList onClick={onClick}>
      <li key={-1}>
        <FolderBlock itemId={-1} clicked={selectedId ? false : true}>
          전체
        </FolderBlock>
      </li>
      {items?.map(function (item: FolderType) {
        return (
          <li key={item?.id}>
            <FolderBlock itemId={item.id} clicked={item?.id === selectedId}>
              {item?.name}
            </FolderBlock>
          </li>
        );
      })}
    </FolderList>
  );
};

function FolderBar({
  folderInfo,
  onClick,
  selectedFolder,
}: {
  folderInfo: any;
  onClick: (e: MouseEvent<any, MouseEvent>) => void;
  selectedFolder?: FolderType;
}) {
  const [addFolder, setAddFolder] = useState(false);
  const selectedId = Number(selectedFolder?.id);

  const handleAddFolder = () => {
    setAddFolder(!addFolder);
  };

  return (
    <>
      <Bar>
        <FolderIndex
          onClick={onClick}
          items={folderInfo}
          selectedId={selectedId}
        />
        <AddFolder type="button" onClick={handleAddFolder}>
          폴더 추가
        </AddFolder>
      </Bar>
      <FolderNameBar selectedFolder={selectedFolder} />
      <Portal elementId="modal-root">
        {addFolder && <ModalAddFolder onClick={handleAddFolder} />}
      </Portal>
    </>
  );
}

export default FolderBar;

const Block = styled.button<{ $clicked: boolean }>`
  display: flex;
  align-items: center;
  height: 35px;
  font-family: Pretendard;
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid ${PRIMARY};

  &:hover {
    background-color: ${GRAY4};
    transition: all 300ms ease-in-out;
  }

  @media (max-width: 767px) {
    padding: 6px 10px;
    font-size: 14px;
    height: 29px;
  }

  ${({ $clicked }) =>
    $clicked &&
    `background-color: ${PRIMARY};
    color: ${WHITE};
    &:hover{
      background-color: ${PRIMARY};
    }`}
`;

const FolderList = styled.ul`
  display: flex;
  gap: 12px 8px;
  flex-wrap: wrap;
`;

const Bar = styled.div`
  display: flex;
  column-gap: 12px;
  justify-content: space-between;
  align-items: center;
`;

const AddFolder = styled.button`
  color: ${PRIMARY};
  display: flex;
  align-items: center;
  font-family: Pretendard;
  flex-shrink: 0;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.3px;

  &::after {
    content: "";
    background-image: url("/add.svg");
    background-size: cover;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: 4px;
  }

  @media (max-width: 767px) {
    color: ${WHITE};
    padding: 8px 24px;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 101px;
    border-radius: 20px;
    border: 1px solid ${WHITE};
    background: ${PRIMARY};
    z-index: 4;

    &::after {
      background-image: url("/addWhite.svg");
    }
  }
`;
