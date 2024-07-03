import { Dispatch, SetStateAction } from 'react';
import * as S from './FolderButtonContainer.styled';
import FolderButton from '../FolderButton/FolderButton';
import { useModal } from '../../contexts/ModalContext';
import { Folders } from '../../hooks/useGetFolderList';
import ModalPortal from '@/Portal';
import AddFolderModal from '../Modal/AddFolderModal/AddFolderModal';
import Link from 'next/link';
import { useRouter } from 'next/router';

function FolderButtonContainer({ link }: { link: Folders }) {
  const router = useRouter();
  const folderId = router.query.folderId as string;
  const { modalState, openModal } = useModal();

  return (
    <S.FolderMenu>
      <S.FolderButtons>
        <Link href={'/folder'}>
          <S.TotalFolderButton $select={folderId ? false : true}>
            전체
          </S.TotalFolderButton>
        </Link>
        {link
          ? link.map((item) => <FolderButton item={item} key={item.id} />)
          : null}
      </S.FolderButtons>
      <S.AddFolderButton onClick={() => openModal('addFolder')}>
        폴더 추가
        <S.PlusIcon />
      </S.AddFolderButton>
      {modalState.addFolder && (
        <ModalPortal>
          <AddFolderModal />
        </ModalPortal>
      )}
    </S.FolderMenu>
  );
}

export default FolderButtonContainer;
