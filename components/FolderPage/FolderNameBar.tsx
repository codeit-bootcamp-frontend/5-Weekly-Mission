import styled from "styled-components";
import Portal from "../../Portal/Portal";
import { useState } from "react";
import ModalDeleteFolder from "../Modal/ModalDeleteFolder";
import ModalEdit from "../Modal/ModalEdit";
import ModalShare from "../Modal/ModalShare";
import { FolderType } from "../../pages/folder/[[...folderid]]";
import { GRAY2 } from "../color";

const ICON_MARGIN = "4px";
const ICON_H_W = "18px";

function FolderNameBar({ selectedFolder }: { selectedFolder?: FolderType }) {
  const [deleteFolder, setDeleteFolder] = useState(false);
  const [nameChange, setNameChange] = useState(false);
  const [share, setShare] = useState(false);

  const handleDel = () => {
    setDeleteFolder(!deleteFolder);
  };

  const handleChange = () => {
    setNameChange(!nameChange);
  };

  const handleShare = () => {
    setShare(!share);
  };

  return (
    <Bar>
      <Name>{selectedFolder?.name ?? "전체"}</Name>
      {selectedFolder?.name && (
        <Tools>
          <ToolShared
            type="button"
            className="Tool_shared"
            onClick={handleShare}
          >
            공유
          </ToolShared>
          <ToolNameChange
            type="button"
            className="Tool_nameChange"
            onClick={handleChange}
          >
            이름 변경
          </ToolNameChange>
          <ToolDelete type="button" className="Tool_delete" onClick={handleDel}>
            삭제
          </ToolDelete>
        </Tools>
      )}
      <Portal elementId="modal-root">
        {deleteFolder && (
          <ModalDeleteFolder info={selectedFolder?.name} onClick={handleDel} />
        )}
        {nameChange && <ModalEdit onClick={handleChange} />}
        {share && <ModalShare onClick={handleShare} info={selectedFolder} />}
      </Portal>
    </Bar>
  );
}

export default FolderNameBar;

const Bar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
  }
`;

const Name = styled.h3`
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

const Tools = styled.div`
  display: flex;
  column-gap: 12px;
`;

const Tool = styled.button`
  color: ${GRAY2};
  display: flex;
  align-items: center;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
`;

const ToolShared = styled(Tool)`
  &::before {
    content: "";
    background-image: url("/share.svg");
    background-size: cover;
    display: inline-block;
    width: ${ICON_H_W};
    height: ${ICON_H_W};
    margin-right: ${ICON_MARGIN};
  }
`;

const ToolNameChange = styled(Tool)`
  &::before {
    content: "";
    background-image: url("/pen.svg");
    background-size: cover;
    display: inline-block;
    width: ${ICON_H_W};
    height: ${ICON_H_W};
    margin-right: ${ICON_MARGIN};
  }
`;

const ToolDelete = styled(Tool)`
  &::before {
    content: "";
    background-image: url("/delete.svg");
    background-size: cover;
    display: inline-block;
    width: ${ICON_H_W};
    height: ${ICON_H_W};
    margin-right: ${ICON_MARGIN};
  }
`;
