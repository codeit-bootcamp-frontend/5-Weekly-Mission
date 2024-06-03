import styles from "./InputModal.module.scss";
import classNames from "classnames/bind";
import { Input } from "@/src/components-common/ui-input";
import { Modal } from "@/src/components-common/ui-modal";
import { ModalContentBox } from "@/src/components-common/ui-modal-content-box";
import { ModalContentButton } from "@/src/components-common/ui-modal-content-button";
import { ModalContentTitle } from "@/src/components-common/ui-modal-content-title";
import React from "react";
import type { InputModalProps } from "../../../types/modal-prop-types";

const cx = classNames.bind(styles);

export const InputModal: React.FC<InputModalProps> = ({
  isOpen,
  title,
  placeholder,
  buttonText,
  onCloseClick,
  onKeyDown,
  value,
  onChange,
}) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={<ModalContentTitle>{title}</ModalContentTitle>}
        content={
          <div className={cx("modal-content")}>
            <Input
              value={value}
              onChange={onChange}
              placeholder={placeholder}
            />
            <ModalContentButton>{buttonText}</ModalContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
