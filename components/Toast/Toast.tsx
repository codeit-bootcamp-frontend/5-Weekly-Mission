import { Dispatch, SetStateAction, useEffect } from 'react';
import * as S from './Toast.styled';

interface ToastProps {
  setToast: Dispatch<SetStateAction<boolean>>;
  text: string;
}

function Toast({ setToast, text }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <S.ToastBody>
      <p>{text}</p>
    </S.ToastBody>
  );
}

export default Toast;
