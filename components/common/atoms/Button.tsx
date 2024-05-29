'use client';
import { ButtonHTMLAttributes } from 'react';
import { ButtonModule } from './buttonStyle';
interface IButtonModule {
  children: React.ReactNode;
  btnClass?: string;
  $beforeIcon?: string;
  id?: string;
  $afterIcon?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onclick?: () => void;
}

export default function Button({ children, btnClass, type = 'button', $beforeIcon, $afterIcon, onclick }: IButtonModule) {
  return (
    <ButtonModule
      className={btnClass}
      type={type}
      $beforeIcon={$beforeIcon || ''}
      $afterIcon={$afterIcon || ''}
      onClick={onclick}>
      {children}
    </ButtonModule>
  );
}
