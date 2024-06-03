import styles from "./DeleteModal.module.scss";
import classNames from "classnames/bind";
import { Modal } from "@/src/components-common/ui-modal";
import { ModalContentBox } from "@/src/components-common/ui-modal-content-box";
import { ModalContentButton } from "@/src/components-common/ui-modal-content-button";
import { ModalContentTitle } from "@/src/components-common/ui-modal-content-title";
import { ModalContentDescription } from "@/src/components-common/ui-modal-content-description";
import type { DeleteModalProps } from "../../../types/modal-prop-types";

const cx = classNames.bind(styles);

export const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  title,
  buttonText,
  onCloseClick,
  folderName,
  onKeyDown,
}) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className={cx("modal-header")}>
            <ModalContentTitle>{title}</ModalContentTitle>
            <ModalContentDescription>{folderName}</ModalContentDescription>
          </div>
        }
        content={
          <div className={cx("modal-content")}>
            <ModalContentButton themeColor="red">
              {buttonText}
            </ModalContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
