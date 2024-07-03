import { FieldError } from 'react-hook-form';
import * as S from './Input.styled';
import { useEffect, useState } from 'react';

export interface FormValueTypes {
  edit?: string;
  folder?: string;
}

export interface InputProps {
  placeholder: string;
  type: string;
  size: 'sm' | 'md' | 'lg';
  error: FieldError | undefined;
  value?: string;
  onChange: (...event: any[]) => void;
  onBlur?: () => void;
}

function Input({
  placeholder,
  type,
  size,
  error,
  onChange,
  onBlur,
  value,
}: InputProps) {
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
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      <S.TextArea>
        {error && <S.WarningMessage>{error.message}</S.WarningMessage>}
      </S.TextArea>
    </S.InputModal>
  );
}

export default Input;
