import { Button } from "../Button/Button";
import * as S from "./Nav.styled";
import Link from "next/link";
import { Dispatch, useState } from "react";
import Image from "next/image";
import { User, useLoadUser } from "@/contexts/UserContext";
import { signOut } from "next-auth/react";

function NavUser({
  user,
  toggle,
  setToggle,
}: {
  user: User;
  toggle: boolean;
  setToggle: Dispatch<React.SetStateAction<boolean>>;
}) {
  const isLogout = () => {
    signOut();
  };

  return (
    <S.ProfileBody>
      <S.UserPicture>
        <Image src={user.image_source} alt="userPicture" fill />
      </S.UserPicture>
      <p onClick={() => setToggle(!toggle)}>{user.email}</p>
      {toggle && (
        <S.ToggleMenu>
          <p onClick={isLogout}>로그아웃</p>
        </S.ToggleMenu>
      )}
    </S.ProfileBody>
  );
}

function Nav() {
  const [toggleNav, setToggleNav] = useState(false);
  const { user } = useLoadUser();

  return (
    <S.NavBar>
      <S.NavModal>
        <Link href="/folder">
          <Image
            src="/logo.svg"
            alt="네이게이션 로고"
            width={133}
            height={24}
          />
        </Link>
        <S.UserProfile>
          {user ? (
            <NavUser user={user} toggle={toggleNav} setToggle={setToggleNav} />
          ) : (
            <Link href="/login" style={{ textDecoration: "none" }}>
              <Button size="sm" isActive={false}>
                로그인
              </Button>
            </Link>
          )}
        </S.UserProfile>
      </S.NavModal>
    </S.NavBar>
  );
}

export default Nav;
