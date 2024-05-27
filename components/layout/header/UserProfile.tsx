import * as S from "@/components/layout/header/UserProfile.styled";
import Image from "next/image";
import { IUserData } from "@/types/User";
import { useState } from "react";
import { useRouter } from "next/router";

interface IUser {
  user: IUserData | null;
}

const UserProfile = ({ user }: IUser) => {
  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);

  if (!user) {
    return (
      <S.LoginBtn href="/signin" className="btn">
        로그인
      </S.LoginBtn>
    );
  }
  const { email, image_source } = user;

  const openUserMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    window.localStorage.removeItem("userToken");

    router.reload();
  };

  return (
    <>
      <S.UserProfileWrap onClick={openUserMenu}>
        <Image src={image_source} width={50} height={50} alt="유저 프로필" />
        <span>{email}</span>
        {isMenuOpen && (
          <S.UserMenu>
            <li onClick={handleLogout}>로그아웃</li>
          </S.UserMenu>
        )}
      </S.UserProfileWrap>
    </>
  );
};

export default UserProfile;
