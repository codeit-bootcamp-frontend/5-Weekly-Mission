import styles from "./InputModal.module.scss";
import classNames from "classnames/bind";
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
} from "react";
import { Template, ContentBox, ContentButton, ContentTitle } from "../parts";
import { Input } from "@/src/ui";

const cx = classNames.bind(styles);

type InputModalProps = {
  isOpen: boolean;
  title: string;
  placeholder: string;
  buttonText: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  onCloseClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

/**
 * InputModal 컴포넌트는 사용자가 입력할 수 있는 모달 창을 렌더링합니다.
 * 이 프로젝트에서는 폴더 추가 기능에 사용됩니다.
 *
 * @component
 * @example
 * const title = "제목";
 * const placeholder = "입력하세요";
 * const buttonText = "확인";
 * const isOpen = true;
 * const [value, setValue] = useState("");
 *
 * return (
 *   <InputModal
 *     isOpen={isOpen}
 *     title={title}
 *     placeholder={placeholder}
 *     buttonText={buttonText}
 *     onCloseClick={() => console.log("Close Clicked")}
 *     onKeyDown={(e) => console.log("Key Down", e)}
 *     value={value}
 *     onChange={(e) => setValue(e.target.value)}
 *   />
 * );
 *
 * @param {Object} props - 속성 객체입니다.
 * @param {boolean} props.isOpen - 모달 창의 열림 상태를 나타냅니다.
 * @param {string} props.title - 모달 창의 제목입니다.
 * @param {string} props.placeholder - 입력 필드의 플레이스홀더 텍스트입니다.
 * @param {string} props.buttonText - 버튼에 표시될 텍스트입니다.
 * @param {MouseEventHandler<HTMLDivElement | HTMLButtonElement>} props.onCloseClick - 모달 창 닫기 버튼 클릭 시 호출되는 함수입니다.
 * @param {KeyboardEventHandler<HTMLDivElement>} props.onKeyDown - 모달 창에서 키보드 이벤트 처리 함수입니다.
 * @param {string} props.value - 입력 필드의 값입니다.
 * @param {ChangeEventHandler<HTMLInputElement>} props.onChange - 입력 필드 값이 변경될 때 호출되는 함수입니다.
 *
 * @returns {JSX.Element} 사용자가 입력할 수 있는 모달 창을 렌더링하는 컴포넌트입니다.
 */
export const InputModal = ({
  isOpen,
  title,
  placeholder,
  buttonText,
  onClick,
  onCloseClick,
  onKeyDown,
  value,
  onChange,
}: InputModalProps) => {
  return (
    <Template
      isOpen={isOpen}
      onBackdropClick={onCloseClick}
      onKeyDown={onKeyDown}
    >
      <ContentBox
        header={<ContentTitle>{title}</ContentTitle>}
        content={
          <div className={cx("modal-content")}>
            <Input
              value={value}
              onChange={onChange}
              placeholder={placeholder}
            />
            <ContentButton onClick={onClick}>{buttonText}</ContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Template>
  );
};
