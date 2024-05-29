import * as S from '@/styles/signin.styled';
import { useState } from 'react';
import Input from '@/components/Input/Input';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/Button/Button';
import { postSignIn } from '../api/api';
import { Controller, useForm } from 'react-hook-form';
import { emailPattern } from '@/util/util';

function SignIn() {
  const [textHidden, setTextHidden] = useState(true);
  const { handleSubmit, control } = useForm();

  const formAction = async (data: any) => {
    const result = await postSignIn(data.id, data.password);
    if (result) {
      window.location.href = '/';
    }
  };

  const hiddenText = () => {
    setTextHidden(!textHidden);
  };

  return (
    <>
      <S.SignBody>
        <S.SignContent>
          <S.SignFormBody>
            <S.FormLogo>
              <Link href="/">
                <Image src="/logo.svg" alt="메인로고" width={210} height={38} />
              </Link>
              <S.Question>
                <span>회원이 아니신가요?</span>
                <Link href="/signup" style={{ textDecoration: 'none' }}>
                  <p>회원 가입하기</p>
                </Link>
              </S.Question>
            </S.FormLogo>
            <S.SignForm onSubmit={handleSubmit(formAction)}>
              <S.InputModal>
                <label htmlFor="email">이메일</label>
                <Controller
                  name="id"
                  control={control}
                  rules={{
                    required: '이메일을 입력해주세요!',
                    pattern: {
                      value: emailPattern,
                      message: '이메일 형식이 아닙니다!',
                    },
                  }}
                  render={({ field, fieldState: { error } }) => (
                    <Input
                      field={field}
                      type="text"
                      placeholder="이메일"
                      size="md"
                      error={error}
                    />
                  )}
                />
              </S.InputModal>
              <S.InputModal>
                <label htmlFor="password">비밀번호</label>
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: '비밀번호를 입력해주세요!',
                  }}
                  render={({ field, fieldState: { error } }) => (
                    <Input
                      field={field}
                      type={textHidden ? 'password' : 'text'}
                      placeholder="비밀번호"
                      size="md"
                      error={error}
                    />
                  )}
                />
                <S.TextHiddenButton $hidden={textHidden} onClick={hiddenText} />
              </S.InputModal>
              <Button size={'lg'} type="submit">
                로그인
              </Button>
            </S.SignForm>
          </S.SignFormBody>
          <S.SnsLogin>
            소셜 로그인
            <S.SnsIcons>
              <S.Google href="https://www.google.com/" target="_blank">
                <Image
                  src="/googleIcon.png"
                  alt="구글아이콘"
                  width={22}
                  height={22}
                />
              </S.Google>
              <S.Kakao href="https://www.kakaocorp.com/page/" target="_blank">
                <Image
                  src="/Kakao.svg"
                  alt="카카오아이콘"
                  width={26}
                  height={24}
                />
              </S.Kakao>
            </S.SnsIcons>
          </S.SnsLogin>
        </S.SignContent>
      </S.SignBody>
    </>
  );
}

export default SignIn;
