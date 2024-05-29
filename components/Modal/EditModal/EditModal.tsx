import * as S from './EditModal.styled';
import BaseModal from '../BaseModal/BaseModal';
import { Button } from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import { Controller, useForm } from 'react-hook-form';
import { putFolder } from '@/api/api';
import { useRouter } from 'next/router';

function EditModal({ folderId }: { folderId: string }) {
  const { handleSubmit, control } = useForm();
  const router = useRouter();

  const editFolder = async (data: any) => {
    await putFolder(folderId, data.edit);
    router.reload();
  };

  return (
    <BaseModal state={'edit'}>
      <S.ModalForm onSubmit={handleSubmit(editFolder)}>
        <S.Title>폴더이름 변경</S.Title>
        <Controller
          name="edit"
          control={control}
          rules={{
            required: '내용을 입력해주세요!',
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
        <Button size="md" onClick={(e) => e.preventDefault()}>
          변경하기
        </Button>
      </S.ModalForm>
    </BaseModal>
  );
}

export default EditModal;
