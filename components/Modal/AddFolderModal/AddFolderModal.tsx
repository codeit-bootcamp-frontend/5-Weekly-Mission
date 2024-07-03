import * as S from '../EditModal/EditModal.styled';
import BaseModal from '../BaseModal/BaseModal';
import Input, { FormValueTypes } from '@/components/Input/Input';
import { postFolder } from '@/service/api';
import { Controller, useForm } from 'react-hook-form';
import { useModal } from '@/contexts/ModalContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/Button/Button';
function AddFolderModal() {
  const queryClient = useQueryClient();
  const { handleSubmit, control } = useForm<FormValueTypes>();
  const { mutate, isPending } = useMutation({
    mutationFn: (name: string) => postFolder(name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['folder'] });
    },
    onSettled: () => {
      closeModal('addFolder');
    },
  });
  const { closeModal } = useModal();

  const addFolder = async (data: FormValueTypes) => {
    if (!data.folder) return;
    mutate(data.folder);
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
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <Input
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              type="text"
              placeholder="폴더 이름을 입력해주세요!"
              size="sm"
              error={error}
            />
          )}
        />
        <Button
          size="md"
          onClick={(e) => e.preventDefault()}
          isActive={isPending}
        >
          추가하기
        </Button>
      </S.ModalForm>
    </BaseModal>
  );
}

export default AddFolderModal;
