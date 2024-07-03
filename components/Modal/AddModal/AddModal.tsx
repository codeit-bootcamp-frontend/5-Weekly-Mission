import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import * as S from './AddModal.styled';
import BaseModal from '../BaseModal/BaseModal';
import { Folder, Folders } from '../../../hooks/useGetFolderList';
import { Button } from '../../Button/Button';
import Image from 'next/image';
import { postLink } from '@/service/api';
import { useRouter } from 'next/router';
import { useModal } from '@/contexts/ModalContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface AddModalProps {
  link: Folders;
  url: string;
  setUrl: Dispatch<SetStateAction<string>>;
}

function FolderButton({
  item,
  $isSelected,
  index,
  handleMenuClick,
  folderId,
}: {
  item: Folder;
  $isSelected: string;
  index: number;
  handleMenuClick: (index: number, folderId: string) => void;
  folderId: string;
}) {
  return (
    <S.FolderButton
      $isSelected={$isSelected}
      onClick={() => {
        handleMenuClick(index, folderId);
      }}
    >
      <S.FolderInfo>
        <h2>{item.name}</h2>
        <p>{item.link_count}개의 링크</p>
      </S.FolderInfo>
      {$isSelected === 'select' && (
        <Image src="/check.svg" alt="체크 아이콘" width={15} height={15} />
      )}
    </S.FolderButton>
  );
}

function AddModal({ link, url, setUrl }: AddModalProps) {
  const queryClient = useQueryClient();
  const [folderSelected, setFolderSelected] = useState<string[]>([]);
  const [selectedId, setSelectedId] = useState('');
  const { openModal, closeModal } = useModal();
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: (data: { selectedId: string; url: string }) =>
      postLink(data.selectedId, data.url),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['links'] });
      queryClient.invalidateQueries({ queryKey: ['folder'] });
    },
    onSettled: () => {
      setUrl('');
      closeModal('add');
      router.push(`/folder/${selectedId}`);
    },
  });

  const handleMenuClick = (index: number, folderId: string) => {
    const booleanArr: string[] = new Array(link.length).fill('none');
    booleanArr[index] = 'select';
    setFolderSelected(booleanArr);
    setSelectedId(folderId);
  };

  const addLink = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const addLink = { selectedId: selectedId, url: url };
    mutate(addLink);
  };

  return (
    <BaseModal state={'add'}>
      <S.Header>
        <S.Title>폴더에 추가</S.Title>
      </S.Header>
      <S.FolderContainer>
        {link.length > 0 ? (
          link.map((item, index) => (
            <FolderButton
              key={item.id}
              item={item}
              $isSelected={folderSelected[index]}
              index={index}
              handleMenuClick={handleMenuClick}
              folderId={item.id}
            />
          ))
        ) : (
          <S.AddFolder
            onClick={() => {
              closeModal('add');
              openModal('addFolder');
            }}
          >
            폴더 추가
          </S.AddFolder>
        )}
      </S.FolderContainer>
      <S.InputForm onSubmit={addLink}>
        <Button
          size="md"
          type="submit"
          isActive={selectedId && !isPending ? false : true}
        >
          추가하기
        </Button>
      </S.InputForm>
    </BaseModal>
  );
}

export default AddModal;
