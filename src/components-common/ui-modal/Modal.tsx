import styles from "./Modal.module.scss";
import classNames from "classnames/bind";
import { Portal } from "@/src/components-common/ui-portal/Portal";
import React from "react";

const cx = classNames.bind(styles);

type ModalProps = React.PropsWithChildren<{
  isOpen: boolean;
  disableScrollLock?: boolean;
  hideBackdrop?: boolean;
  onBackdropClick: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;
}>;

export const Modal: React.FC<ModalProps> = ({
  children,
  isOpen = false,
  disableScrollLock = false,
  hideBackdrop = false,
  onBackdropClick,
  onKeyDown,
}) => {
  const handleBackdropClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div
        className={cx(["container", "backdrop"], { backdrop: !hideBackdrop })}
        onClick={handleBackdropClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {children}
      </div>
    </Portal>
  );
};
