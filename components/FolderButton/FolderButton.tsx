import React, { Dispatch, SetStateAction } from 'react';
import * as S from './FolderButton.styled';
import { Folder } from '@/hooks/useGetFolderList';
import Link from 'next/link';

function FolderButton({
  item,
  isSelected,
  handleMenuClick,
  index,
  setOnSelect,
}: {
  item: Folder;
  isSelected: string;
  handleMenuClick: (index: number) => void;
  index: number;
  setOnSelect: Dispatch<SetStateAction<{ id: string; name: string }>>;
}) {
  const changeFolder = () => {
    setOnSelect({ id: item.id, name: item.name });
    handleMenuClick(index);
  };

  return (
    <Link href={`/folder/${item.id}`}>
      <S.FolderName onClick={changeFolder} $select={isSelected}>
        {item.name}
      </S.FolderName>
    </Link>
  );
}

export default FolderButton;
