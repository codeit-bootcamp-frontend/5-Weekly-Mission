import styles from "./ShareModal.module.scss";
import classNames from "classnames/bind";
import {
  Template,
  ContentBox,
  ContentDescription,
  ContentTitle,
} from "../parts";
import { KeyboardEventHandler, MouseEventHandler } from "react";
import { KakaoIcon, FacebookIcon, LinkIcon } from "./constant";

const cx = classNames.bind(styles);

type ShareModalProps = {
  isOpen: boolean;
  folderName: string;
  onKakaoClick: MouseEventHandler<HTMLButtonElement>;
  onFacebookClick: MouseEventHandler<HTMLButtonElement>;
  onLinkCopyClick: MouseEventHandler<HTMLButtonElement>;
  onCloseClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
};

/**
 * ShareModal 컴포넌트는 폴더를 공유하는 모달 창을 렌더링합니다.
 *
 * @component
 * @example
 * const folderName = "공유할 폴더";
 * const isOpen = true;
 *
 * return (
 *   <ShareModal
 *     isOpen={isOpen}
 *     folderName={folderName}
 *     onKakaoClick={() => console.log("Kakao Clicked")}
 *     onFacebookClick={() => console.log("Facebook Clicked")}
 *     onLinkCopyClick={() => console.log("Link Copy Clicked")}
 *     onCloseClick={() => console.log("Close Clicked")}
 *     onKeyDown={(e) => console.log("Key Down", e)}
 *   />
 * );
 *
 * @param {Object} props - 속성 객체입니다.
 * @param {boolean} props.isOpen - 모달 창의 열림 상태를 나타냅니다.
 * @param {string} props.folderName - 모달 창에 표시될 폴더 이름입니다.
 * @param {MouseEventHandler<HTMLButtonElement>} props.onKakaoClick - 카카오톡 공유 버튼 클릭 시 호출되는 함수입니다.
 * @param {MouseEventHandler<HTMLButtonElement>} props.onFacebookClick - 페이스북 공유 버튼 클릭 시 호출되는 함수입니다.
 * @param {MouseEventHandler<HTMLButtonElement>} props.onLinkCopyClick - 링크 복사 버튼 클릭 시 호출되는 함수입니다.
 * @param {MouseEventHandler<HTMLDivElement | HTMLButtonElement>} props.onCloseClick - 모달 창 닫기 버튼 클릭 시 호출되는 함수입니다.
 * @param {KeyboardEventHandler<HTMLDivElement>} props.onKeyDown - 모달 창에서 키보드 이벤트 처리 함수입니다.
 *
 * @returns {JSX.Element} 폴더를 공유하는 모달 창을 렌더링하는 컴포넌트입니다.
 */

export const ShareModal = ({
  isOpen,
  folderName,
  onKakaoClick,
  onFacebookClick,
  onLinkCopyClick,
  onCloseClick,
  onKeyDown,
}: ShareModalProps) => {
  return (
    <Template
      isOpen={isOpen}
      onBackdropClick={onCloseClick}
      onKeyDown={onKeyDown}
    >
      <ContentBox
        header={
          <div className={cx("modal-header")}>
            <ContentTitle>폴더 공유</ContentTitle>
            <ContentDescription>{folderName}</ContentDescription>
          </div>
        }
        content={
          <div className={cx("modal-content")}>
            <button className={cx("button")} onClick={onKakaoClick}>
              <KakaoIcon />
              <span>카카오톡</span>
            </button>
            <button className={cx("button")} onClick={onFacebookClick}>
              <FacebookIcon />
              <span>페이스북</span>
            </button>
            <button className={cx("button")} onClick={onLinkCopyClick}>
              <LinkIcon />
              <span>링크 복사</span>
            </button>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Template>
  );
};
