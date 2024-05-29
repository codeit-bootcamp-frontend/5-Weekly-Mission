import Image from 'next/image';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import * as S from './FolderModals.styled';
import { useModal } from '@/contexts/ModalContext';
import ModalPortal from '@/Portal';
import ShareModal from '../Modal/ShareModal/ShareModal';
import EditModal from '../Modal/EditModal/EditModal';
import DeleteModal from '../Modal/DeleteModal/DeleteModal';

function FolderIcon({
  image,
  children,
  onOpen,
  state,
}: {
  image: string;
  children: ReactNode;
  onOpen: (modalName: string) => void;
  state: string;
}) {
  return (
    <S.FolderModalIcon onClick={() => onOpen(`${state}`)}>
      <Image src={image} alt={`${image}`} width={20} height={20} />
      {children}
    </S.FolderModalIcon>
  );
}

function FolderModals({
  id,
  name,
  setOnSelect,
}: {
  id: string;
  name: string;
  setOnSelect: Dispatch<
    SetStateAction<{
      id: string;
      name: string;
    }>
  >;
}) {
  const { modalState, openModal } = useModal();

  return (
    <S.FolderModal>
      <FolderIcon image="/share.svg" onOpen={openModal} state={'share'}>
        공유
      </FolderIcon>
      <FolderIcon image="/pen.svg" onOpen={openModal} state={'edit'}>
        이름 변경
      </FolderIcon>
      <FolderIcon image="/Group36.svg" onOpen={openModal} state={'delete'}>
        삭제
      </FolderIcon>
      {modalState.share && (
        <ModalPortal>
          <ShareModal folderName={name} folderId={id} />
        </ModalPortal>
      )}
      {modalState.edit && (
        <ModalPortal>
          <EditModal folderId={id} />
        </ModalPortal>
      )}
      {modalState.delete && (
        <ModalPortal>
          <DeleteModal
            folderName={name}
            folderId={id}
            setOnSelect={setOnSelect}
          />
        </ModalPortal>
      )}
    </S.FolderModal>
  );
}

export default FolderModals;
