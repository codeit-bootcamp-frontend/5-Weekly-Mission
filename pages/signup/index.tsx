import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo_big.png';
import kakaoButton from '@/assets/images/buttons/kakao.png';
import googleButton from '@/assets/images/buttons/google.png';
import eyeOn from '@/assets/images/eye-on.png';
import eyeOff from '@/assets/images/eye-off.png';
import {
  Back,
  Container,
  Icons,
  Logo,
  PositionDiv,
  SocialDiv,
  StyledButton,
  StyledDiv,
  StyledLabel,
  TypeChanger,
  ErrorMsg,
  StyledInput,
} from '../signin';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { API_INFO } from '@/common/api';
import useFetch from '@/hooks/useFetch';
import { useRouter } from 'next/router';

const { baseUrl, endpoints } = API_INFO;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: 'onBlur' });
  const [pwType, setPwType] = useState<string>('password');
  const [pwCheckType, setPwCheckType] = useState<string>('password');
  const { sendRequest, data, loading, error } = useFetch<any>({});
  const router = useRouter();

  useEffect(() => {
    if (localStorage.accessToken) router.push('folder');
  }, []);

  useEffect(() => {
    if (loading !== true && error === null && data.data?.accessToken) {
      localStorage.accessToken = data.data.accessToken;
      router.push('folder');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading, error]);

  const checkDuplicate = async (value: string) => {
    try {
      const res = await fetch(baseUrl + endpoints.checkEmail.url, {
        method: endpoints.checkEmail.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: value.toString(),
        }),
      });

      if (res.status === 200) {
        return true;
      }

      if (res.status === 409) {
        return '이미 사용 중인 이메일입니다.';
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        return error.message;
      } else {
        return 'Unexpected error';
      }
    }

    return true;
  };

  const handleSignUp = (data: any) => {
    sendRequest({
      url: baseUrl + endpoints.signup.url,
      method: endpoints.signup.method,
      body: { email: data.email, password: data.password },
    });
  };

  return (
    <Back>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <Container>
          <Logo src={logo} width={210} height={38} alt='Logo' />
          <StyledDiv>
            회원이 아니신가요?<Link href={'signin'}>로그인 하기</Link>
          </StyledDiv>
          <StyledLabel>이메일</StyledLabel>
          <PositionDiv>
            <StyledInput
              placeholder='이메일을 입력해 주세요.'
              $padding='18px 15px'
              $margin='0 0 24px'
              $hasError={errors.email !== undefined}
              {...register('email', {
                required: '이메일을 입력해 주세요.',
                pattern: {
                  value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: '올바른 이메일 주소가 아닙니다.',
                },
                validate: (value) => {
                  return checkDuplicate(value);
                },
              })}
            />
            {errors.email && typeof errors.email.message === 'string' && <ErrorMsg>{errors.email.message}</ErrorMsg>}
          </PositionDiv>
          <StyledLabel>비밀번호</StyledLabel>
          <PositionDiv>
            <StyledInput
              placeholder='영문, 숫자를 조합해 8자 이상 입력해 주세요.'
              $padding='18px 15px'
              $margin='0 0 24px'
              {...register('password', {
                required: '비밀번호를 입력해 주세요.',
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/,
                  message: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
                },
              })}
              type={pwType}
            />
            <TypeChanger
              src={pwType === 'password' ? eyeOff : eyeOn}
              width={16}
              height={16}
              alt=''
              onClick={() => {
                setPwType(pwType === 'password' ? 'text' : 'password');
              }}
            />
            {errors.password && typeof errors.password.message === 'string' && (
              <ErrorMsg>{errors.password.message}</ErrorMsg>
            )}
          </PositionDiv>
          <StyledLabel>비밀번호 확인</StyledLabel>
          <PositionDiv>
            <StyledInput
              placeholder='비밀번호와 일치하는 값을 입력해 주세요.'
              $padding='18px 15px'
              $margin='0 0 30px'
              type={pwCheckType}
              {...register('passwordCheck', {
                validate: () => {
                  if (watch('password') !== watch('passwordCheck')) {
                    return '비밀번호가 일치하지 않습니다';
                  }

                  return true;
                },
              })}
            />
            <TypeChanger
              src={pwCheckType === 'password' ? eyeOff : eyeOn}
              width={16}
              height={16}
              alt=''
              onClick={() => {
                setPwCheckType(pwCheckType === 'password' ? 'text' : 'password');
              }}
            />
            {errors.passwordCheck && typeof errors.passwordCheck.message === 'string' && (
              <ErrorMsg>{errors.passwordCheck.message}</ErrorMsg>
            )}
          </PositionDiv>
          <StyledButton type='submit'>회원가입</StyledButton>
          <SocialDiv>
            <div>다른 방식으로 가입하기</div>
            <Icons>
              <Link href='https://www.google.com'>
                <Image src={googleButton} width={42} height={42} alt='google button' />
              </Link>
              <Link href='https://www.kakaocorp.com/page'>
                <Image src={kakaoButton} width={42} height={42} alt='kakao button' />
              </Link>
            </Icons>
          </SocialDiv>
        </Container>
      </form>
    </Back>
  );
}
