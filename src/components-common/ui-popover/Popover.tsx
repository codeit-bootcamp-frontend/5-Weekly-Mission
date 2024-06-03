import styles from "./Popover.module.scss";
import classNames from "classnames/bind";
import { useCallback, useMemo, useRef } from "react";
import { Portal } from "@/src/components-common/ui-portal";
import { useBackgroundClick } from "@/src/components-common/util/useBackgroundClick";

const cx = classNames.bind(styles);

type PopoverProps = React.PropsWithChildren<{
  isOpen: boolean;
  anchorRef: React.RefObject<HTMLElement>;
  anchorPosition: Record<string, number | undefined>; // TODO: 맞는지 나중에 한번 더 확인할 것
  onBackgroundClick: () => void;
  disableCloseWithBackgroundClick?: boolean;
}>;

export interface handleBackgroundClickType {
  (event: MouseEvent): void; // NOTE: React MouseEvent 가 아니라 일반 MouseEvent
}

export const Popover: React.FC<PopoverProps> = ({
  children,
  isOpen,
  anchorRef,
  anchorPosition,
  onBackgroundClick,
  disableCloseWithBackgroundClick = false,
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const positionStyle = useMemo(() => {
    return {
      top: anchorPosition?.top ?? "unset",
      right: anchorPosition?.right ?? "unset",
      bottom: anchorPosition?.bottom ?? "unset",
      left: anchorPosition?.left ?? "unset",
    };
  }, [anchorPosition]);
  const handleBackgroundClick: handleBackgroundClickType = useCallback(
    (event) => {
      const target = event.target as HTMLElement | null;
      const isPopover = popoverRef.current?.contains(target);
      const isAnchor = anchorRef.current?.contains(target);
      if (
        !isPopover &&
        !isAnchor &&
        !disableCloseWithBackgroundClick &&
        isOpen
      ) {
        onBackgroundClick();
      }
    },
    [
      popoverRef,
      anchorRef,
      disableCloseWithBackgroundClick,
      isOpen,
      onBackgroundClick,
    ]
  );
  useBackgroundClick(handleBackgroundClick);

  if (!isOpen) {
    return null;
  }

  return (
    /* TODO : 타입 지정 맞는지 확인 필요
    anchorRef 타입 : React.RefObject<HTMLElement>;
    anchorRef.current 타입 : HTMLElement | null
    아마 맞는 것 같다. RefObject 의 current 프로퍼티 타입에 HTMLElement | null 이라고 지정되어 있음.
    */
    <Portal container={anchorRef.current}>
      <div
        className={cx("popover")}
        style={{ ...positionStyle }}
        ref={popoverRef}
      >
        {children}
      </div>
    </Portal>
  );
};
