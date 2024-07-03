import React, { Dispatch, SetStateAction } from 'react';
import * as S from './FolderButton.styled';
import { Folder } from '@/hooks/useGetFolderList';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface FolderButtonProps {
  item: Folder;
}

function FolderButton({ item }: FolderButtonProps) {
  const router = useRouter();
  const folderId = router.query.folderId as string;

  return (
    <Link href={`/folder/${item.id}`}>
      <S.FolderName $select={folderId == item.id ? true : false}>
        {item.name}
      </S.FolderName>
    </Link>
  );
}

export default FolderButton;
