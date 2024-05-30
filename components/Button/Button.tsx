import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export default function Button({
  children,
  onClick,
  className,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} ${styles.btn}`}
      type={type}
      disabled={disabled}
    >
      {disabled ? '처리중' : children}
    </button>
  );
}
