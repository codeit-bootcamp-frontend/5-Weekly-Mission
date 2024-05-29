import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import * as S from './FolderButtonContainer.styled';
import FolderButton from '../FolderButton/FolderButton';
import { useModal } from '../../contexts/ModalContext';
import { Folders } from '../../hooks/useGetFolderList';
import ModalPortal from '@/Portal';
import AddFolderModal from '../Modal/AddFolderModal/AddFolderModal';
import Link from 'next/link';

function FolderButtonContainer({
  link,
  setOnSelect,
}: {
  link: Folders;
  setOnSelect: Dispatch<SetStateAction<{ id: string; name: string }>>;
}) {
  const [linkSelected, setLinkSelected] = useState<string[]>([]);
  const [totalBtn, setTotalBtn] = useState(true);
  const { modalState, openModal } = useModal();

  const handleMenuClick = (index: number) => {
    const booleanArr: string[] = new Array(link.length).fill('white');
    booleanArr[index] = 'select';
    setLinkSelected(booleanArr);
    setTotalBtn(false);
  };

  const handleClickTotalButton = () => {
    const totalArr: string[] = new Array(link.length).fill('white');
    setLinkSelected(totalArr);
    setOnSelect({ id: '', name: '' });
    setTotalBtn(true);
  };

  return (
    <S.FolderMenu>
      <S.FolderButtons>
        <Link href={'/folder'}>
          <S.TotalFolderButton
            onClick={handleClickTotalButton}
            $select={totalBtn}
          >
            전체
          </S.TotalFolderButton>
        </Link>
        {link
          ? link.map((item, index: number) => (
              <FolderButton
                item={item}
                key={item.name}
                setOnSelect={setOnSelect}
                isSelected={linkSelected[index]}
                handleMenuClick={handleMenuClick}
                index={index}
              />
            ))
          : null}
      </S.FolderButtons>
      <S.AddFolderButton onClick={() => openModal('addFolder')}>
        폴더 추가
        <S.PlusIcon />
      </S.AddFolderButton>
      {modalState.addFolder && (
        <ModalPortal>
          <AddFolderModal setOnSelect={setOnSelect} />
        </ModalPortal>
      )}
    </S.FolderMenu>
  );
}

export default FolderButtonContainer;
