import * as S from '../EditModal/EditModal.styled';
import BaseModal from '../BaseModal/BaseModal';
import Input from '@/components/Input/Input';
import { postFolder } from '@/api/api';
import { Controller, useForm } from 'react-hook-form';
import { Dispatch, SetStateAction } from 'react';
import { useModal } from '@/contexts/ModalContext';
import { useRouter } from 'next/router';

function AddFolderModal({
  setOnSelect,
}: {
  setOnSelect: Dispatch<
    SetStateAction<{
      id: string;
      name: string;
    }>
  >;
}) {
  const { handleSubmit, control } = useForm();
  const { closeModal } = useModal();
  const router = useRouter();

  const addFolder = async (data: any) => {
    const result = await postFolder(data.folder);
    router.push(`/folder/${result[0].id}`);
    closeModal('addFolder');
  };

  return (
    <BaseModal state={'addFolder'}>
      <S.ModalForm onSubmit={handleSubmit(addFolder)}>
        <S.Title>폴더 추가</S.Title>
        <Controller
          name="folder"
          control={control}
          rules={{
            required: '내용을 입력해주세요!',
            maxLength: { value: 10, message: '10자 이하로 입력해주세요!' },
          }}
          render={({ field, fieldState: { error } }) => (
            <Input
              field={field}
              type="text"
              placeholder="폴더 이름을 입력해주세요!"
              size="sm"
              error={error}
            />
          )}
        />
        <S.ModalButton>추가하기</S.ModalButton>
      </S.ModalForm>
    </BaseModal>
  );
}

export default AddFolderModal;
