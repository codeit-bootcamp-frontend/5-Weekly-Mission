'use client';

import Button from '@/components/Button/Button';
import styles from '@/styles/AuthForm.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import ShowTextToggle from '@/components/ShowTextToggle/ShowTextToggle';
import { SignUpFormSchema, SignUpFormFields } from '@/app/lib/definitions';
import { useAuth } from '@/contexts/AuthContext';

const schema = SignUpFormSchema;

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
    setError,
  } = useForm<SignUpFormFields>({
    resolver: zodResolver(schema),
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showCPW, setShowCPW] = useState<boolean>(false);
  const { checkEmailDuplication, submitSignUp } = useAuth();

  const onSubmit: SubmitHandler<SignUpFormFields> = async (data) => {
    const { email, password } = data;
    try {
      await checkEmailDuplication(email);
    } catch (error) {
      setError('email', { message: '이미 사용중인 이메일입니다' });
      return;
    }
    try {
      submitSignUp(email, password);
    } catch (error) {
      setError('email', { message: '사용할 수 없는 이메일 입니다' });
    }
  };
  const handlePWToggleClick = () => {
    setShowPassword((prev) => !prev);
  };

  const handleCPWToggleClick = () => {
    setShowCPW((prev) => !prev);
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

          <ShowTextToggle
            showText={showPassword}
            onClick={handlePWToggleClick}
          />
        </div>
        {errors.password && (
          <div className={styles.errorMessage}>{errors.password.message}</div>
        )}
      </div>
      <div className={styles.inputBox}>
        <label htmlFor='confirmPassword'>비밀번호 확인</label>
        <div
          className={`${styles.inputWrapper} ${
            errors.confirmPassword && styles.errorInput
          }`}
        >
          <input
            {...register('confirmPassword')}
            type={showCPW ? 'text' : 'password'}
            placeholder='Confirm Password'
            className={styles.authInput}
            onBlur={() => trigger('confirmPassword')}
          />
          <ShowTextToggle showText={showCPW} onClick={handleCPWToggleClick} />
        </div>
        {errors.confirmPassword && (
          <div className={styles.errorMessage}>
            {errors.confirmPassword.message}
          </div>
        )}
      </div>
      <Button
        className={styles.signUpButton}
        type='submit'
        disabled={isSubmitting}
      >
        회원가입
      </Button>
    </form>
  );
}
