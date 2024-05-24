import { Folder } from "./data-access-types";

export interface ModalProps {
  isOpen: boolean;
  title: string;
  onCloseClick: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;
}

export interface AlertModalProps extends ModalProps {
  buttonText: string;
  selectedLinkUrl: string | null;
}

export interface AddLinkModalProps extends ModalProps {
  buttonText: string;
  selectedLinkUrl: string | null;
  folders: Folder[] | null;
  selectedFolderId: number | null;
  setSelectedFolderId: React.Dispatch<React.SetStateAction<number | null>>;
  onAddClick: () => void; //TODO: 링크추가 기능 구현 시 완성할 것
}

export interface ShareModalProps extends ModalProps {
  folderName: string;
  onKakaoClick?: undefined; // TODO: 공유기능 구현 시 명확히 지정
  onFacebookClick?: undefined;
  onLinkCopyClick?: undefined;
}

export interface DeleteModalProps extends ModalProps {
  buttonText: string;
  folderName: string;
}

export interface InputModalProps extends ModalProps {
  placeholder: string;
  buttonText: string;
  value?: undefined; //TODO : 아직 UI밖에 구현 안함. 기능 구현 시 명확히 지정
  onChange?: undefined;
}
