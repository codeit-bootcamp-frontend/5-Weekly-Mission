import {
  ControllerRenderProps,
  FieldError,
  FieldValues,
} from 'react-hook-form';
import * as S from './Input.styled';
import { useEffect, useState } from 'react';

export interface InputProps {
  placeholder: string;
  type: string;
  size: 'sm' | 'md' | 'lg';
  field: ControllerRenderProps<FieldValues, any>;
  error: FieldError | undefined;
}

function Input({ placeholder, type, size, field, error }: InputProps) {
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    if (error) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
    }
  }, [error]);

  return (
    <S.InputModal size={size} $error={errorMessage}>
      <input type={type} placeholder={placeholder} {...field} />
      <S.TextArea>
        {error && <S.WarningMessage>{error.message}</S.WarningMessage>}
      </S.TextArea>
    </S.InputModal>
  );
}

export default Input;
