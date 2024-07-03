import React from 'react';
import * as S from './DeleteModal.styled';
import BaseModal from '../BaseModal/BaseModal';
import { deleteFolder } from '@/service/api';
import { useModal } from '@/contexts/ModalContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';

function DeleteModal({
  folderName,
  folderId,
}: {
  folderName: string;
  folderId: string;
}) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (folderId: string) => deleteFolder(folderId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['folder'] });
    },
    onSettled: () => {
      closeModal('delete');
      router.replace('/folder');
    },
  });
  const { closeModal } = useModal();

  const isDeleteModal = async (e: React.MouseEvent<HTMLButtonElement>) => {
    mutate(folderId);
  };

  return (
    <BaseModal state={'delete'}>
      <S.Title>폴더 삭제</S.Title>
      <S.Name>{folderName}</S.Name>
      <S.ModalButton size="md" onClick={isDeleteModal} disabled={isPending}>
        삭제하기
      </S.ModalButton>
    </BaseModal>
  );
}

export default DeleteModal;
