import styles from "./AddLink.module.scss";
import classNames from "classnames/bind";
import { Modal } from "@/src/components-common/ui-modal";
import { ModalContentBox } from "@/src/components-common/ui-modal-content-box";
import { ModalContentButton } from "@/src/components-common/ui-modal-content-button";
import { ModalContentTitle } from "@/src/components-common/ui-modal-content-title";
import { ModalContentDescription } from "@/src/components-common/ui-modal-content-description";
import { FolderItem } from "@/src/components-folder/ui-folder-item";
import type { AddLinkModalProps } from "../../../types/modal-prop-types";

const cx = classNames.bind(styles);

export const AddLinkModal: React.FC<AddLinkModalProps> = ({
  isOpen,
  folders,
  title,
  buttonText,
  selectedLinkUrl,
  selectedFolderId,
  setSelectedFolderId,
  onAddClick,
  onCloseClick,
  onKeyDown,
}) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className={cx("modal-header")}>
            <ModalContentTitle>{title}</ModalContentTitle>
            <ModalContentDescription>{selectedLinkUrl}</ModalContentDescription>
          </div>
        }
        content={
          <div className={cx("modal-content")}>
            <div className={cx("folder-list")}>
              {folders?.map(({ id, name, link }) => {
                return (
                  <FolderItem
                    key={id}
                    isSelected={id === selectedFolderId}
                    folderName={name}
                    linkCount={link?.count}
                    onClick={() => {
                      setSelectedFolderId(id);
                    }}
                  />
                );
              })}
            </div>
            <ModalContentButton onClick={onAddClick}>
              {buttonText}
            </ModalContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
