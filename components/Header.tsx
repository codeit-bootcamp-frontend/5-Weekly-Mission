import styled from "styled-components";
import { GRAY5 } from "./color";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useUser } from "@/contexts/UserContext";

interface UserProfileProps {
  email?: string;
  img?: string;
}

export interface UserData {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

interface HeaderProps {
  fixed: boolean;
}

const UserProfile = ({ email, img }: UserProfileProps) => {
  if (!img) return;
  return (
    <Profile>
      <PorfileImage
        className="profileImg"
        src={img}
        alt="프로필"
        width={28}
        height={28}
      />
      <span className="Span_email"> {email}</span>
    </Profile>
  );
};

const Header = ({ fixed }: HeaderProps) => {
  const { user: userData, isLogin: isLogIn } = useUser();
  const [img, setImg] = useState<string>();
  const [email, setEmail] = useState<string>();

  useEffect(() => {
    if (userData) {
      setEmail(userData.data[0].email);
      setImg(userData.data[0].image_source);
    }
  }, [userData]);

  return (
    <Heading $headerFixed={fixed}>
      <HeaderContent>
        <Link href="/">
          <H1Logo>
            <Image
              className="linkbararyLogo"
              src={"/logo.svg"}
              alt="Linkbrary"
              width={133}
              height={24}
              priority={true}
            />
          </H1Logo>
        </Link>
        {isLogIn ? (
          <UserProfile email={email} img={img} />
        ) : (
          <Button type="button">로그인</Button>
        )}
      </HeaderContent>
    </Heading>
  );
};

export default Header;

const Heading = styled.header<{ $headerFixed: boolean }>`
  position: ${({ $headerFixed }) => ($headerFixed ? "fixed" : "static")};
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  height: 93px;
  padding: 20px 200px;
  justify-content: center;
  background-color: ${GRAY5};
  z-index: 5;

  @media (max-width: 1199px) {
    padding: 20px 32px;
  }

  @media (max-width: 767px) {
    padding: 13px 32px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  max-width: 1520px;

  @media (max-width: 1199px) {
    max-width: 800px;
  }

  @media (max-width: 767px) {
    padding: 13px 32px;
  }
`;

const Button = styled.button`
  display: flex;
  width: 128px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  color: #f5f5f5;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;

  @media (max-width: 767px) {
    padding: 13px 32px;
    width: 80px;
    padding: 10px 16px;
    font-size: 14px;
  }
`;

const H1Logo = styled.h1`
  width: 133px;
  height: 24px;

  @media (max-width: 767px) {
    width: 89px;
    height: 16px;
  }

  & .linkbararyLogo {
    width: 100%;
    height: 100%;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
  font-size: 14px;

  & .profileImg {
    height: 28px;
    width: 28px;
  }

  & .Span_email {
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

const PorfileImage = styled(Image)`
  border-radius: 9999px;
  border: 0px;
`;
