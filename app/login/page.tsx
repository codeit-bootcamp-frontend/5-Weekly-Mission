import Image from "next/image";
import Link from "next/link";
import LoginForm from "./_components/loginForm";
import LogoIcon from "@/public/logo.svg";
import kakaoIcon from "@/public/Kakao.svg";
import googleIcon from "@/public/googleIcon.png";

export default function Login() {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center bg-[--Background] p-[3.2rem]">
      <div className="flex flex-col content-center items-center gap-[3.2rem]">
        <div className="flex flex-col items-center justify-center gap-[3rem]">
          <div className="flex flex-col justify-center gap-[1.6rem]">
            <Link href="/">
              <Image src={LogoIcon} alt="메인로고" width={210} height={38} />
            </Link>
            <div className="flex items-center justify-center gap-[0.8rem]">
              <span className="text-[1.6rem]">회원이 아니신가요?</span>
              <Link href="/signup" style={{ textDecoration: "none" }}>
                <p className="text-[1.6rem] font-[600] text-[--Primary]">
                  회원 가입하기
                </p>
              </Link>
            </div>
          </div>
          <LoginForm />
        </div>
        <div className="flex w-[40rem] items-center justify-between rounded-[0.8rem] border border-solid border-[--Linkbrary-gray20] bg-[--Linkbrary-gray10] px-[2.4rem] py-[1.2rem]">
          <p className="text-[1.4rem] font-[--Linkbrary-gray100]">
            소셜 로그인
          </p>
          <div className="flex items-center justify-normal gap-[1.6rem]">
            <Link
              href="https://www.google.com/"
              target="_blank"
              className="flex h-[4.2rem] w-[4.2rem] items-center justify-center rounded-full bg-[--Section-white]"
            >
              <Image src={googleIcon} alt="구글아이콘" width={22} height={22} />
            </Link>
            <Link
              href="https://www.kakaocorp.com/page/"
              target="_blank"
              className="flex h-[4.2rem] w-[4.2rem] items-center justify-center rounded-full bg-[--Kakao-logo-color]"
            >
              <Image
                src={kakaoIcon}
                alt="카카오아이콘"
                width={26}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
