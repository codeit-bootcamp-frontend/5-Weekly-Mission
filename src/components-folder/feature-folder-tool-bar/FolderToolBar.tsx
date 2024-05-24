import styles from "./FolderToolBar.module.scss";
import classNames from "classnames/bind";
import { FolderButton } from "@/src/components-folder/ui-folder-button";
import { buttons, allLinksText, modalsId } from "./constant";
import { allLinksId } from "@/src/components-shared/data-access-link/constant";
import { AddFolderButton } from "@/src/components-folder/ui-add-folder-button/AddFolderButton";
import React, { useState } from "react";
import { IconAndTextButton } from "@/src/components-common/ui-icon-and-text-button";
import { InputModal } from "@/src/components-common/ui-input-modal/InputModal";
import { DeleteModal } from "@/src/components-common/ui-delete-modal";
import { ShareModal } from "@/src/components-folder/ui-share-modal";
import type { Folder } from "../../../types/data-access-types";

const cx = classNames.bind(styles);

interface FolderToolBarProps {
  folders: Folder[] | null;
  selectedFolderId: number | string;
  setSelectedFolderId: React.Dispatch<React.SetStateAction<number | string>>;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

export const FolderToolBar: React.FC<FolderToolBarProps> = ({
  folders,
  selectedFolderId,
  setSelectedFolderId,
  setKeyword,
}) => {
  const [currentModal, setCurrentModal] = useState<string | null>(null);
  const folderName =
    allLinksId === selectedFolderId
      ? allLinksText
      : (folders?.find(({ id }) => id === selectedFolderId)?.name as string);

  const closeModal = () => {
    setCurrentModal(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "escape") {
      closeModal();
    }
  };

  return (
    <div className={cx("container")}>
      <div className={cx("folders")}>
        <FolderButton
          key={allLinksId}
          text={allLinksText}
          onClick={() => {
            setSelectedFolderId(allLinksId);
            setKeyword("");
          }}
          isSelected={allLinksId === selectedFolderId}
        />
        {folders?.map(({ id, name }) => (
          <FolderButton
            key={id}
            text={name}
            onClick={() => {
              setSelectedFolderId(id);
              setKeyword("");
            }}
            isSelected={id === selectedFolderId}
          />
        ))}
      </div>

      <div className={cx("add-button")}>
        <AddFolderButton
          onClick={() => {
            setCurrentModal(modalsId.addFolder);
          }}
        />
        {/* NOTE: 이런 식으로 팝업 시킬 모달창을 제어할 수 있다 */}
        <InputModal
          isOpen={currentModal === modalsId.addFolder}
          onCloseClick={closeModal}
          title="폴더 추가"
          placeholder="내용 입력"
          buttonText="추가하기"
          onKeyDown={handleKeyDown}
        />
      </div>
      <h2 className={cx("folder-name")}>{folderName}</h2>
      <div className={cx("buttons")}>
        {buttons.map(({ text, iconSource, modalId }) => (
          <IconAndTextButton
            key={modalId}
            text={text}
            iconSource={iconSource}
            onClick={() => setCurrentModal(modalId)}
          />
        ))}
        <ShareModal
          isOpen={currentModal === modalsId.share}
          title="폴더 공유"
          onCloseClick={closeModal}
          onKeyDown={handleKeyDown}
          folderName={folderName}
        />
        <InputModal
          isOpen={currentModal === modalsId.rename}
          title="폴더 이름 변경"
          onCloseClick={closeModal}
          onKeyDown={handleKeyDown}
          placeholder="유용한 팁"
          buttonText="변경하기"
        />
        <DeleteModal
          isOpen={currentModal === modalsId.delete}
          title="폴더 삭제"
          onCloseClick={closeModal}
          onKeyDown={handleKeyDown}
          buttonText="삭제하기"
          folderName={folderName}
        />
      </div>
    </div>
  );
};
