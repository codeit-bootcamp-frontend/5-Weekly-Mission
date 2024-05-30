'use client';

import Button from '@/components/Button/Button';
import styles from '@/styles/AuthForm.module.scss';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import ShowTextToggle from '@/components/ShowTextToggle/ShowTextToggle';
import { SignInFormSchema, SignInFormFields } from '@/app/lib/definitions';
import { useAuth } from '@/contexts/AuthContext';

const schema = SignInFormSchema;

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
    setError,
  } = useForm<SignInFormFields>({
    resolver: zodResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const { submitSignIn } = useAuth();

  const handleToggleClick = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (data: any) => {
    try {
      await submitSignIn(data);
    } catch (error) {
      setError('email', { message: '이메일을 확인해주세요' });
      setError('password', { message: '비밀번호를 확인해주세요' });
    }
  };

  return (
    <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputBox}>
        <label htmlFor='email'>이메일</label>
        <div
          className={`${styles.inputWrapper} ${
            errors.email && styles.errorInput
          }`}
        >
          <input
            {...register('email')}
            type='text'
            placeholder='Email'
            className={styles.authInput}
            onBlur={() => trigger('email')}
          />
        </div>
        {errors.email && (
          <div className={styles.errorMessage}>{errors.email.message}</div>
        )}
      </div>
      <div className={styles.inputBox}>
        <label htmlFor='password'>비밀번호</label>
        <div
          className={`${styles.inputWrapper} ${
            errors.password && styles.errorInput
          }`}
        >
          <input
            {...register('password')}
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            className={styles.authInput}
            onBlur={() => trigger('password')}
          />
          <ShowTextToggle showText={showPassword} onClick={handleToggleClick} />
        </div>
        {errors.password && (
          <div className={styles.errorMessage}>{errors.password.message}</div>
        )}
      </div>
      <Button
        className={styles.signUpButton}
        type='submit'
        disabled={isSubmitting}
      >
        로그인
      </Button>
    </form>
  );
}
