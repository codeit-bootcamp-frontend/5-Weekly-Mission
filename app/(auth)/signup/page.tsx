'use client';
import Button from '@/components/common/atoms/Button';
import LinkButton from '@/components/common/atoms/LinkButton';
import { ErrorText, FormRowBox, FormWrap } from '@/components/join/formStyle';
import { IJoinForm } from '@/components/join/interface';
import Loading from '@/components/loading/Loading';
import { instance } from '@/lib/axios';
import { FontSM, Relative } from '@/styles/commonStyle';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { JoinAccessControlBox, JoinBody, JoinSocial, JoinTitle, JoinWrap } from '../../../styles/loginStyle';

export default function SignUp() {
  const router = useRouter();
  const [pwVisibility, setPwVisibility] = useState<Boolean>(false);
  const [pwConfirmVisibility, setPwConfirmVisibility] = useState<Boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<IJoinForm>({ mode: 'onBlur' });
  const [isStylesLoaded, setIsStylesLoaded] = useState(false);

  const handleEmailCheck = async (email: IJoinForm['email']) => {
    try {
      const res = await instance.post('/users/1/check-email', { email });
      if (res) {
        return true;
      }
    } catch {
      setError('email', { message: '사용중인 이메일 입니다.' }, { shouldFocus: true });
      return;
    }
  };

  const handlePassWordCheck = (password: IJoinForm['password'], passwordConfirm: IJoinForm['passwordConfirm']) => {
    if (password !== passwordConfirm) {
      setError('passwordConfirm', { message: '비밀번호가 다릅니다.' }, { shouldFocus: true });
      return;
    }
  };

  const handleValid = (data: IJoinForm) => {
    const { password, passwordConfirm } = data;
    // 비밀번호 같은지 확인
    handlePassWordCheck(password, passwordConfirm);
    router.push('/folder');
  };

  useEffect(() => {
    if (localStorage.getItem('linkbrary')) {
      alert('로그인한 상태입니다.');
      router.push('/folder');
    }
    setIsStylesLoaded(true);
  }, [router]);

  if (!isStylesLoaded) return <Loading />;

  return (
    <JoinWrap className='no-header--container signup__wrap'>
      <JoinBody>
        <JoinTitle>
          <LinkButton href={`/`}>
            <Image
              src='/assets/logo/logo.svg'
              alt='linkbrary'
              width={202}
              height={38}
            />
          </LinkButton>
        </JoinTitle>
        <JoinAccessControlBox className='login__sign'>
          <span>이미 회원이신가요?</span>
          <LinkButton href={`/login`}>로그인 하기</LinkButton>
        </JoinAccessControlBox>
        <FormWrap>
          <form onSubmit={handleSubmit(handleValid)}>
            {/* 이메일 */}
            <FormRowBox className='input__id'>
              <label
                htmlFor='input__id-element'
                className='input__id-label'>
                이메일
              </label>
              <input
                {...register('email', {
                  required: '이메일을 입력해 주세요.',
                  pattern: {
                    value: /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/,
                    message: '올바른 이메일 주소가 아닙니다',
                  },
                  onBlur: (e) => handleEmailCheck(e.target.value),
                })}
                type='email'
                id='input__id-element'
                placeholder='이메일을 입력해 주세요.'
                className={errors.email ? 'error' : ''}
              />
              {/* onBlur: (e) => handleEmailCheck(e.target.value) == undefined || '있는 아이디', */}
              <ErrorText className='error__text'>{errors.email?.message}</ErrorText>
            </FormRowBox>
            {/* 비밀번호 */}
            <FormRowBox className='input__password'>
              <label
                htmlFor='input__password-element'
                className='input__password-label'>
                비밀번호
              </label>
              <Relative>
                <input
                  {...register('password', {
                    required: '비밀번호를 입력해 주세요',
                    pattern: {
                      value: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                      message: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
                    },
                  })}
                  type={pwVisibility ? 'text' : 'password'}
                  id='input__password-element'
                  placeholder='비밀번호를 입력해 주세요.'
                  className={errors.password ? 'error' : ''}
                />
                <Button
                  btnClass={'button--input-password'}
                  onclick={() => setPwVisibility((prev) => !prev)}>
                  <Image
                    src={`/assets/icon/icon-eye-${pwVisibility ? 'on' : 'off'}.svg`}
                    alt='비밀번호 보기'
                    width={16}
                    height={16}
                  />
                </Button>
              </Relative>
              <ErrorText className='error__text'>{errors.password?.message}</ErrorText>
            </FormRowBox>
            {/* 비밀번호 확인*/}
            <FormRowBox className='input__password__confilrm'>
              <label
                htmlFor='input__password-confilrm'
                className='input__password-label'>
                비밀번호 확인
              </label>
              <Relative>
                <input
                  {...register('passwordConfirm', {
                    required: '비밀번호를 다시 한번 입력해 주세요',
                    pattern: {
                      value: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                      message: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
                    },
                  })}
                  type={pwConfirmVisibility ? 'text' : 'password'}
                  id='input__password-confilrm'
                  placeholder='비밀번호 확인을 입력해 주세요.'
                  className={errors.passwordConfirm ? 'error' : ''}
                />
                <Button
                  btnClass={'button--input-password'}
                  onclick={() => setPwConfirmVisibility((prev) => !prev)}>
                  <Image
                    src={`/assets/icon/icon-eye-${pwConfirmVisibility ? 'on' : 'off'}.svg`}
                    alt='비밀번호 보기'
                    width={16}
                    height={16}
                  />
                </Button>
              </Relative>
              <ErrorText className='error__text'>{errors.passwordConfirm?.message}</ErrorText>
            </FormRowBox>
            <Button
              type='submit'
              btnClass={`button--gradient large btn_login`}>
              회원가입
            </Button>
          </form>
        </FormWrap>
        <JoinSocial>
          <FontSM as={'h6'}>다른 방식으로 가입하기</FontSM>
          <div className='login__sns'>
            <LinkButton
              href={'https://www.google.co.kr/?hl=ko'}
              target='_blank'>
              <Image
                fill
                src='/assets/icon/icon_google.png'
                alt='구글로고'
              />
            </LinkButton>
            <LinkButton
              href={'https://www.kakaocorp.com/page/'}
              target='_blank'>
              <Image
                fill
                src='/assets/icon/icon_kakao.png'
                alt='카카오로고'
              />
            </LinkButton>
          </div>
        </JoinSocial>
      </JoinBody>
    </JoinWrap>
  );
}
