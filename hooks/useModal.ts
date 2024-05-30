import { FolderObj } from '@/utils/interfaces';
import { useState } from 'react';
import {
  AddToFolderModal,
  ShareModal,
  DeleteModal,
  FolderInputModal,
} from '@/components/ModalContents';
import { createElement } from 'react';

interface args {
  headerText?: string;
  subHeaderText?: string;
  buttonText?: string;
  folders?: FolderObj[];
  folderNum?: number;
  initialValue?: string;
}

export default function useModal() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactElement | null>(
    null
  );

  const setModal = (type: string, args: args) => {
    setShowModal(true);
    switch (type) {
      case 'input':
        setModalContent(
          createElement(FolderInputModal, {
            ...args,
          })
        );

        break;
      case 'delete':
        setModalContent(
          createElement(DeleteModal, {
            ...args,
          })
        );
        break;
      case 'share':
        setModalContent(createElement(ShareModal, { ...args }));
        break;
      case 'add':
        setModalContent(createElement(AddToFolderModal, { ...args }));
        break;
    }
  };

  return { showModal, modalContent, setModal, setShowModal };
}
