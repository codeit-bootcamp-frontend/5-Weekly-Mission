import * as S from "@/styles/pages/Sign.styled";
import Image from "next/image";
import signLogo from "@/public/image/icon/sign_logo.svg";
import Link from "next/link";
import SignInputBox from "@/components/sign/SignInputBox";
import Button from "@/components/common/Button";
import SignSns from "@/components/sign/SignSns";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { postSign } from "@/api/user";
import { useRouter } from "next/router";
import { FormValues } from "@/types/Sign";
import { UserSetTokenContext } from "@/context/User";
import useIsTokenRedirect from "@/hooks/useIsTokenRedirect";

export const getStaticProps = async () => {
  return {
    props: {
      layoutType: "removeLayout",
    },
  };
};

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>({ mode: "onBlur" });
  const router = useRouter();
  const setUserToken = useContext(UserSetTokenContext);

  useIsTokenRedirect();

  const handleSiginIn: SubmitHandler<FormValues> = async (data) => {
    const result = await postSign("auth/sign-in", data);
    console.log("result::", result);
    if (result.error) {
      alert("로그인 실패");
      return;
    }

    localStorage.setItem("userToken", result.accessToken);
    setUserToken(result.accessToken);
    router.push(`/folder`);
  };

  return (
    <S.MainWrap>
      <S.MainContent>
        <S.WrapHeadBox>
          <h1>
            <Link href="/">
              <Image src={signLogo} alt="로고" />
            </Link>
          </h1>
          <S.SignBox>
            <span>회원이 아니신가요?</span>
            <Link href="./signup">회원 가입하기</Link>
          </S.SignBox>
        </S.WrapHeadBox>

        <form onSubmit={handleSubmit(handleSiginIn)}>
          <S.EmailBox>
            <S.LoginBoxSpan>이메일</S.LoginBoxSpan>
            <SignInputBox
              pageType="signIn"
              type="email"
              register={register}
              errors={errors}
            />
          </S.EmailBox>

          <S.PassWordBox>
            <S.LoginBoxSpan>비밀번호</S.LoginBoxSpan>
            <SignInputBox
              pageType="signIn"
              type="password"
              register={register}
              errors={errors}
            />
          </S.PassWordBox>

          <Button btnType="submit" type="sign" disabled={isSubmitting}>
            로그인
          </Button>
        </form>

        <S.SnsBox>
          <span>소셜로그인</span>
          <SignSns />
        </S.SnsBox>
      </S.MainContent>
    </S.MainWrap>
  );
};

export default Signin;
