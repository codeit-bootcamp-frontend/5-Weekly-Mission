import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import logo from '@/assets/images/logo_big.png';
import kakaoButton from '@/assets/images/buttons/kakao.png';
import googleButton from '@/assets/images/buttons/google.png';
import eyeOn from '@/assets/images/eye-on.png';
import eyeOff from '@/assets/images/eye-off.png';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import useFetch from '@/hooks/useFetch';
import { API_INFO } from '@/common/api';

export const Back = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f0f6ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 540px) {
    width: 100%;
    padding: 0 40px;
  }
`;

export const Logo = styled(Image)``;

export const StyledDiv = styled.div`
  margin-top: 16px;
  margin-bottom: 30px;
`;

export const StyledLabel = styled.label`
  width: 100%;
  font-size: 14px;
  margin-bottom: 12px;
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 53px;
  border-radius: 8px;
  background: linear-gradient(90deg, rgb(109, 106, 254), rgb(106, 227, 254));
  color: white;
  text-align: center;
  line-height: 53px;
  font-size: 18px;
  font-weight: 700;
  outline: none;
  border: none;
  cursor: pointer;
  margin-bottom: 32px;
`;

export const SocialDiv = styled.div`
  width: 100%;
  height: 66px;
  box-sizing: border-box;
  padding: 12px 24px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 40px;
  background-color: #e7effb;
  border: 1px solid #ccd5e3;
`;

export const PositionDiv = styled.div`
  position: relative;
  width: 100%;
`;

export const TypeChanger = styled(Image)`
  position: absolute;
  top: 22px;
  right: 15px;
  cursor: pointer;
`;

export const ErrorMsg = styled.span`
  position: absolute;
  top: 60px;
  left: 0;
  color: red;
`;

export const Icons = styled.div`
  display: flex;
  gap: 16px;
`;

interface StyledInputProps {
  $margin?: string;
  $padding?: string;
  $hasError?: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #ccd5e3;
  font-size: 16px;
  line-height: 24px;
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  border: ${(props) => (props.$hasError ? '1px solid red !important' : '1px solid #ccd5e3 !important')};
  outline-color: ${(props) => (props.$hasError ? 'red !important' : '')};

  &:hover {
    border: 1px solid #6d6afe;
  }

  &:focus {
    outline: 1px solid #6d6afe;
  }
`;

const { baseUrl, endpoints } = API_INFO;

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ mode: 'onBlur' });
  const [pwType, setPwType] = useState<string>('password');
  const { sendRequest, data, loading, error } = useFetch<any>({});
  const router = useRouter();

  useEffect(() => {
    if (localStorage.accessToken) router.push('folder');
  }, []);

  useEffect(() => {
    if (loading !== true && error === null) {
      if (data.data) {
        localStorage.accessToken = data.data.accessToken;
        router.push('folder');
      }

      if (data.error) {
        setError('email', { message: '이메일을 확인해 주세요.' });
        setError('password', { message: '비밀번호를 확인해 주세요.' });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading, error]);

  const handleEyeClick = () => {
    setPwType(pwType === 'password' ? 'text' : 'password');
  };

  const handleSignIn = (data: any) => {
    sendRequest({
      url: baseUrl + endpoints.signin.url,
      method: endpoints.signin.method,
      body: { email: data.email, password: data.password },
    });
  };

  return (
    <form onSubmit={handleSubmit(handleSignIn)}>
      <Back>
        <Container>
          <Logo src={logo} width={210} height={38} alt='Logo' />
          <StyledDiv>
            회원이 아니신가요?<Link href={'signup'}>회원 가입하기</Link>
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
              })}
            />
            {errors.email && typeof errors.email.message === 'string' && <ErrorMsg>{errors.email.message}</ErrorMsg>}
          </PositionDiv>
          <StyledLabel>비밀번호</StyledLabel>
          <PositionDiv>
            <StyledInput
              placeholder='비밀번호를 입력해 주세요.'
              $padding='18px 15px'
              $margin='0 0 30px'
              $hasError={errors.password !== undefined}
              {...register('password', {
                required: '비밀번호를 입력해 주세요.',
              })}
              type={pwType}
            />
            <TypeChanger
              src={pwType === 'password' ? eyeOff : eyeOn}
              width={16}
              height={16}
              alt=''
              onClick={handleEyeClick}
            />
            {errors.password && typeof errors.password.message === 'string' && (
              <ErrorMsg>{errors.password.message}</ErrorMsg>
            )}
          </PositionDiv>
          <StyledButton type='submit'>로그인</StyledButton>
          <SocialDiv>
            <div>소셜 로그인</div>
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
      </Back>
    </form>
  );
}
