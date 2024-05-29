import React from 'react';
import * as S from '../DeleteModal/DeleteModal.styled';
import BaseModal from '../BaseModal/BaseModal';
import { deleteLink } from '@/api/api';
import { useRouter } from 'next/router';

function DeleteLinkModal({ id }: { id: number }) {
  const router = useRouter();

  const isDeleteLink = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    await deleteLink(id);
    router.reload();
  };

  return (
    <BaseModal state={'deleteLink'}>
      <S.Header>
        <S.Title>링크 삭제</S.Title>
      </S.Header>
      <S.ModalButton size="md" onClick={isDeleteLink}>
        삭제하기
      </S.ModalButton>
    </BaseModal>
  );
}

export default DeleteLinkModal;
