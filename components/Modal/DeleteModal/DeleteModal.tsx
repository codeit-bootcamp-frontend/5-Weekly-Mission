import React, { Dispatch, SetStateAction } from 'react';
import * as S from './DeleteModal.styled';
import BaseModal from '../BaseModal/BaseModal';
import { deleteFolder } from '@/api/api';
import { useModal } from '@/contexts/ModalContext';

function DeleteModal({
  folderName,
  folderId,
  setOnSelect,
}: {
  folderName: string;
  folderId: string;
  setOnSelect: Dispatch<
    SetStateAction<{
      id: string;
      name: string;
    }>
  >;
}) {
  const { closeModal } = useModal();

  const isDeleteModal = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await deleteFolder(folderId);
    window.location.href = '/folder';
    closeModal('delete');
  };

  return (
    <BaseModal state={'delete'}>
      <S.Title>폴더 삭제</S.Title>
      <S.Name>{folderName}</S.Name>
      <S.ModalButton size="md" onClick={isDeleteModal}>
        삭제하기
      </S.ModalButton>
    </BaseModal>
  );
}

export default DeleteModal;
