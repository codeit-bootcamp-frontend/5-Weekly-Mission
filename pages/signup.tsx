import * as S from '@/styles/signin.styled';
import { useState } from 'react';
import Input from '@/components/Input/Input';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/Button/Button';
import { postCheckEmail, postSignUp } from '../api/api';
import { Controller, useForm } from 'react-hook-form';
import { emailPattern } from '@/util/util';

function SignUp() {
  const { handleSubmit, control, watch } = useForm();
  const [textHidden, setTextHidden] = useState(true);

  const formAction = async (data: any) => {
    const result = await postCheckEmail(data.id);
    if (result) {
      const signUp = await postSignUp(data.id, data.password);
      if (signUp) {
        window.location.href = '/';
      }
    }
  };

  const hiddenText = () => {
    setTextHidden(!textHidden);
  };

  return (
    <S.SignBody>
      <S.SignContent>
        <S.SignFormBody>
          <S.FormLogo>
            <Link href="/">
              <Image src="/logo.svg" alt="메인로고" width={210} height={38} />
            </Link>
            <S.Question>
              <span>이미 회원이신가요?</span>
              <Link href="/signin" style={{ textDecoration: 'none' }}>
                <p>로그인하기</p>
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
                  minLength: { value: 8, message: '최소 8자를 입력해주세요!' },
                  deps: ['confirmPassword'],
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
            <S.InputModal>
              <label htmlFor="password">비밀번호 확인</label>
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  required: '비밀번호를 입력해주세요!',
                  validate: (value) => {
                    return value === watch('password')
                      ? true
                      : '비밀번호가 일치하지 않습니다!';
                  },
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
              회원가입
            </Button>
          </S.SignForm>
        </S.SignFormBody>
        <S.SnsLogin>
          다른 방식으로 가입하기
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
  );
}

export default SignUp;
