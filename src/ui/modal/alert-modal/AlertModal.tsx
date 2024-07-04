import styles from "./AlertModal.module.scss";
import classNames from "classnames/bind";
import { KeyboardEventHandler, MouseEventHandler } from "react";
import {
  Template,
  ContentBox,
  ContentButton,
  ContentDescription,
  ContentTitle,
} from "../parts";

const cx = classNames.bind(styles);

type AlertModalProps = {
  isOpen: boolean;
  title: string;
  description: string;
  buttonText: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  onCloseClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
};

/**
 * AlertModal 컴포넌트는 경고 메시지를 표시하는 모달 창을 렌더링합니다.
 * 이 프로젝트에서는 폴더나 링크 삭제 기능 사용 시 경고하는 용도로 사용됩니다.
 *
 * @component
 * @example
 * const title = "경고";
 * const description = "이 작업을 진행하시겠습니까?";
 * const buttonText = "확인";
 * const isOpen = true;
 *
 * return (
 *   <AlertModal
 *     isOpen={isOpen}
 *     title={title}
 *     description={description}
 *     buttonText={buttonText}
 *     onClick={() => console.log("Button Clicked")}
 *     onCloseClick={() => console.log("Close Clicked")}
 *     onKeyDown={(e) => console.log("Key Down", e)}
 *   />
 * );
 *
 * @param {Object} props - 속성 객체입니다.
 * @param {boolean} props.isOpen - 모달 창의 열림 상태를 나타냅니다.
 * @param {string} props.title - 모달 창의 제목입니다.
 * @param {string} props.description - 모달 창에 표시될 설명입니다.
 * @param {string} props.buttonText - 버튼에 표시될 텍스트입니다.
 * @param {MouseEventHandler<HTMLButtonElement>} props.onClick - 버튼 클릭 시 호출되는 함수입니다.
 * @param {MouseEventHandler<HTMLDivElement | HTMLButtonElement>} props.onCloseClick - 모달 창 닫기 버튼 클릭 시 호출되는 함수입니다.
 * @param {KeyboardEventHandler<HTMLDivElement>} props.onKeyDown - 모달 창에서 키보드 이벤트 처리 함수입니다.
 *
 * @returns {JSX.Element} 경고 메시지를 표시하는 모달 창을 렌더링하는 컴포넌트입니다.
 */

export const AlertModal = ({
  isOpen,
  title,
  description,
  buttonText,
  onClick,
  onCloseClick,
  onKeyDown,
}: AlertModalProps) => {
  return (
    <Template
      isOpen={isOpen}
      onBackdropClick={onCloseClick}
      onKeyDown={onKeyDown}
    >
      <ContentBox
        header={
          <div className={cx("modal-header")}>
            <ContentTitle>{title}</ContentTitle>
            <ContentDescription>{description}</ContentDescription>
          </div>
        }
        content={
          <ContentButton onClick={onClick} themeColor="red">
            {buttonText}
          </ContentButton>
        }
        onCloseClick={onCloseClick}
      />
    </Template>
  );
};
