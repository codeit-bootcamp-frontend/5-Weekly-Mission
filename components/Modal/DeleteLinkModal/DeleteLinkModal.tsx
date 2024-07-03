import React from 'react';
import * as S from '../DeleteModal/DeleteModal.styled';
import BaseModal from '../BaseModal/BaseModal';
import { deleteLink } from '@/service/api';
import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useModal } from '@/contexts/ModalContext';

function DeleteLinkModal({ id }: { id: number }) {
  const router = useRouter();
  const folderId = router.query.folderId as string;
  const queryClient = useQueryClient();
  const { closeModal } = useModal();
  const { mutate, isPending } = useMutation({
    mutationFn: (id: number) => deleteLink(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['links', folderId] });
      queryClient.invalidateQueries({ queryKey: ['folder'] });
    },
    onSettled: () => closeModal('deleteLink'),
  });

  const isDeleteLink = async () => {
    mutate(id);
  };

  return (
    <BaseModal state={'deleteLink'}>
      <S.Header>
        <S.Title>링크 삭제</S.Title>
      </S.Header>
      <S.ModalButton size="md" onClick={isDeleteLink} disabled={isPending}>
        삭제하기
      </S.ModalButton>
    </BaseModal>
  );
}

export default DeleteLinkModal;
