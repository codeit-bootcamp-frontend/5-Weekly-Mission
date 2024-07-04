import styles from "./FolderToolBar.module.scss";
import classNames from "classnames/bind";
import { Folder, SelectedFolderId } from "@/src/type";
import {
  ALL_LINKS_TEXT,
  BUTTONS,
  KAKAO_SHARE_DATA,
  MODALS_ID,
} from "./constant";
import {
  KeyboardEvent,
  useCallback,
  useMemo,
  useReducer,
  memo,
  useState,
} from "react";
import {
  AddFolderButton,
  AlertModal,
  EditFolderButton,
  FolderButton,
  InputModal,
  ShareModal,
} from "@/src/ui";
import { copyToClipboard, useKakaoSdk, ALL_LINKS_ID } from "@/src/util";
import { useRouter } from "next/router";
import {
  useAddFolder,
  useDeleteFolder,
  useUpdateFolderName,
} from "@/src/data-access";
import { ROUTE } from "@/src/util";

const cx = classNames.bind(styles);

type FolderToolBarProps = {
  folders: Folder[];
  selectedFolderId: SelectedFolderId;
  onFolderClick: (folderId: SelectedFolderId) => void;
};

type State = {
  currentModal: string | null;
  inputValue: string;
};

type Action =
  | { type: "SET_MODAL"; payload: string | null }
  | { type: "SET_INPUT_VALUE"; payload: string };

const initialState: State = {
  currentModal: null,
  inputValue: "",
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_MODAL":
      return { ...state, currentModal: action.payload };
    case "SET_INPUT_VALUE":
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
};

const MemoizedFolderButton = memo(FolderButton);
export const FolderToolBar = ({
  folders,
  selectedFolderId,
  onFolderClick,
}: FolderToolBarProps) => {
  const { shareKakao } = useKakaoSdk();
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();
  const { mutate: updateFolderName } = useUpdateFolderName();
  const { mutate: addFolder } = useAddFolder();
  const { mutate: deleteFolder } = useDeleteFolder();
  const [inputValue, setInputValue] = useState<string>("");

  const folderName = useMemo(() => {
    return ALL_LINKS_ID === selectedFolderId
      ? ALL_LINKS_TEXT
      : folders?.find(({ id }) => id === selectedFolderId)?.name ?? "";
  }, [selectedFolderId, folders]);

  const getShareLink = useCallback(() => {
    return `${window.location.origin}/shared?user=1&folder=${selectedFolderId}`;
  }, [selectedFolderId]);

  const closeModal = useCallback(
    () => dispatch({ type: "SET_MODAL", payload: null }),
    []
  );

  const closeInputModal = useCallback(() => {
    closeModal();
    setInputValue("");
  }, [closeModal]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  const handleKakaoClick = useCallback(() => {
    shareKakao({ url: getShareLink(), ...KAKAO_SHARE_DATA });
  }, [getShareLink, shareKakao]);

  const handleFacebookClick = useCallback(() => {
    window?.open(`http://www.facebook.com/sharer.php?u=${getShareLink()}`);
  }, [getShareLink]);

  const handleLinkCopyClick = useCallback(() => {
    copyToClipboard(getShareLink());
  }, [getShareLink]);

  const handleRenameFolderClick = useCallback(() => {
    if (typeof selectedFolderId === "number") {
      updateFolderName(
        { folderId: selectedFolderId, name: inputValue },
        { onSuccess: closeInputModal }
      );
    }
  }, [selectedFolderId, inputValue, updateFolderName, closeInputModal]);

  const handleAddFolderClick = useCallback(() => {
    addFolder(
      { name: inputValue },
      {
        onSuccess: (data) => {
          closeInputModal();
          router.push(`${ROUTE.폴더}/${data?.data?.[0].id ?? ""}`);
        },
      }
    );
  }, [inputValue, addFolder, closeInputModal, router]);

  const handleDeleteFolderClick = useCallback(() => {
    if (typeof selectedFolderId === "number") {
      deleteFolder(
        { folderId: selectedFolderId },
        {
          onSuccess: () => {
            closeModal();
            router.push(ROUTE.폴더);
          },
        }
      );
    }
  }, [selectedFolderId, deleteFolder, closeModal, router]);

  return (
    <div className={cx("container")}>
      <div className={cx("folders")}>
        <MemoizedFolderButton
          key={ALL_LINKS_ID}
          text={ALL_LINKS_TEXT}
          onClick={() => onFolderClick(ALL_LINKS_ID)}
          isSelected={ALL_LINKS_ID === selectedFolderId}
        />
        {folders?.map(({ id, name }) => (
          <MemoizedFolderButton
            key={id}
            text={name}
            onClick={() => onFolderClick(id)}
            isSelected={id === selectedFolderId}
          />
        ))}
      </div>
      <div className={cx("add-button")}>
        <AddFolderButton
          onClick={() =>
            dispatch({ type: "SET_MODAL", payload: MODALS_ID.addFolder })
          }
        />
        <InputModal
          isOpen={state.currentModal === MODALS_ID.addFolder}
          title="폴더 추가"
          placeholder="내용 입력"
          buttonText="추가하기"
          onClick={handleAddFolderClick}
          onCloseClick={closeInputModal}
          onKeyDown={handleKeyDown}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </div>
      <h2 className={cx("folder-name")}>{folderName}</h2>
      {selectedFolderId !== ALL_LINKS_ID && (
        <div className={cx("buttons")}>
          {BUTTONS.map(({ text, iconSource, modalId }) => (
            <EditFolderButton
              key={text}
              text={text}
              iconSource={iconSource}
              onClick={() => dispatch({ type: "SET_MODAL", payload: modalId })}
            />
          ))}
          <ShareModal
            isOpen={state.currentModal === MODALS_ID.share}
            folderName={folderName}
            onKakaoClick={handleKakaoClick}
            onFacebookClick={handleFacebookClick}
            onLinkCopyClick={handleLinkCopyClick}
            onCloseClick={closeModal}
            onKeyDown={handleKeyDown}
          />
          <InputModal
            isOpen={state.currentModal === MODALS_ID.rename}
            title="폴더 이름 변경"
            placeholder="내용 입력"
            buttonText="변경하기"
            onClick={handleRenameFolderClick}
            onCloseClick={closeInputModal}
            onKeyDown={handleKeyDown}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <AlertModal
            isOpen={state.currentModal === MODALS_ID.delete}
            title="폴더 삭제"
            description={folderName}
            buttonText="삭제하기"
            onCloseClick={closeModal}
            onKeyDown={handleKeyDown}
            onClick={handleDeleteFolderClick}
          />
        </div>
      )}
    </div>
  );
};
