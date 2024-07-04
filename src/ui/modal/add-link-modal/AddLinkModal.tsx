import styles from "./AddLinkModal.module.scss";
import classNames from "classnames/bind";
import { Folder } from "@/src/type";
import { FolderItem } from "@/src/ui";
import {
  Dispatch,
  KeyboardEventHandler,
  SetStateAction,
  MouseEventHandler,
} from "react";
import {
  Template,
  ContentBox,
  ContentButton,
  ContentDescription,
  ContentTitle,
} from "../parts";

const cx = classNames.bind(styles);

type AddLinkModalProps = {
  isOpen: boolean;
  folders: Folder[];
  description: string;
  selectedFolderId: number | null;
  setSelectedFolderId: Dispatch<SetStateAction<number | null>>;
  onAddClick: MouseEventHandler<HTMLButtonElement>;
  onCloseClick: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
};
/**
 * AddLinkModal 컴포넌트는 링크를 폴더에 추가하는 모달 창을 렌더링합니다.
 *
 * @component
 * @example
 * const folders = [{ id: 1, name: "폴더1", linkCount: 5 }];
 * const description = "폴더를 선택하여 링크를 추가하세요.";
 * const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
 * const isOpen = true;
 *
 * return (
 *   <AddLinkModal
 *     isOpen={isOpen}
 *     folders={folders}
 *     description={description}
 *     selectedFolderId={selectedFolderId}
 *     setSelectedFolderId={setSelectedFolderId}
 *     onAddClick={() => console.log("Add Clicked")}
 *     onCloseClick={() => console.log("Close Clicked")}
 *     onKeyDown={(e) => console.log("Key Down", e)}
 *   />
 * );
 *
 * @param {Object} props - 속성 객체입니다.
 * @param {boolean} props.isOpen - 모달 창의 열림 상태를 나타냅니다.
 * @param {Folder[]} props.folders - 폴더 목록을 나타내는 배열입니다.
 * @param {string} props.description - 모달 창에 표시될 설명입니다.
 * @param {number | null} props.selectedFolderId - 선택된 폴더의 ID입니다.
 * @param {Dispatch<SetStateAction<number | null>>} props.setSelectedFolderId - 선택된 폴더 ID를 설정하는 함수입니다.
 * @param {() => void} props.onAddClick - "추가하기" 버튼 클릭 시 호출되는 함수입니다.
 * @param {() => void} props.onCloseClick - 모달 창 닫기 버튼 클릭 시 호출되는 함수입니다.
 * @param {KeyboardEventHandler<HTMLDivElement>} props.onKeyDown - 모달 창에서 키보드 이벤트 처리 함수입니다.
 *
 * @returns {JSX.Element} 링크를 폴더에 추가하는 모달 창을 렌더링하는 컴포넌트입니다.
 */

export const AddLinkModal = ({
  isOpen,
  folders,
  description,
  selectedFolderId,
  setSelectedFolderId,
  onAddClick,
  onCloseClick,
  onKeyDown,
}: AddLinkModalProps) => {
  return (
    <Template
      isOpen={isOpen}
      onBackdropClick={onCloseClick}
      onKeyDown={onKeyDown}
    >
      <ContentBox
        header={
          <div className={cx("modal-header")}>
            <ContentTitle>폴더에 추가</ContentTitle>
            <ContentDescription>{description}</ContentDescription>
          </div>
        }
        content={
          <div className={cx("modal-content")}>
            <div className={cx("folder-list")}>
              {folders?.map(({ id, name, linkCount }) => (
                <FolderItem
                  key={id}
                  isSelected={id === selectedFolderId}
                  folderName={name}
                  linkCount={linkCount}
                  onClick={() => setSelectedFolderId(id)}
                />
              ))}
            </div>
            <ContentButton onClick={onAddClick}>추가하기</ContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Template>
  );
};
