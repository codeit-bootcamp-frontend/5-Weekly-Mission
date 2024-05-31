import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import styled from 'styled-components';
import { UserData } from '@/common/api';
import { SIZE } from '@/constants/size';
import noImage from '@/assets/images/noImage.jpg';

const LogoImg = styled(Image)`
  @media screen and (min-width: ${SIZE.tablet.minWidth}) {
    width: 133px;
    height: 25px;
  }

  @media screen and (max-width: ${SIZE.mobile.maxWidth}) {
    width: 89px;
    height: 16px;
  }
`;
const ProfileImg = styled(Image)`
  height: 28px;
  border-radius: 50%;
`;
const FlexDiv = styled.div`
  display: flex;
`;
const VerticalCenterSpan = styled.span`
  line-height: 28px;
  margin-left: 5px;
  @media screen and (max-width: ${SIZE.mobile.maxWidth}) {
    display: none;
  }
`;
const InnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  @media screen and (min-width: ${SIZE.PC.minWidth}) {
    width: 1060px;
  }

  @media screen and (min-width: ${SIZE.tablet.minWidth}) and (max-width: ${SIZE.tablet.maxWidth}) {
    width: 700px;
  }

  @media screen and (max-width: ${SIZE.mobile.maxWidth}) {
    width: 100%;
    padding: 0px 32px 0px 32px;
  }
`;
const StyledNav = styled.nav`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f6ff;

  @media screen and (min-width: ${SIZE.tablet.minWidth}) {
    height: 93px;
  }

  @media screen and (max-width: ${SIZE.mobile.maxWidth}) {
    height: 63px;
  }
`;

const StickyNav = styled(StyledNav)`
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
`;

const LoginButton = styled.button`
  display: inline-block;
  width: 128px;
  height: 53px;
  border-radius: 8px;
  background: linear-gradient(90deg, rgb(109, 106, 254), rgb(106, 227, 254));
  color: white;
  text-align: center;
  line-height: 53px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;

  @media screen and (max-width: ${SIZE.mobile.maxWidth}) {
    width: 80px;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
  }
`;

interface NavProps {
  userData?: { data?: UserData | null; loading?: boolean; error?: Error | null };
}

function Nav({ userData }: NavProps) {
  const { data, loading, error } = userData ?? {};

  return (
    <StickyNav>
      <InnerDiv>
        <Link href='/'>
          <LogoImg src={logo} width={133} height={25} priority alt='LogoImage' fetchPriority='high' />
        </Link>
        {userData ? (
          !loading &&
          error === null && (
            <FlexDiv>
              <ProfileImg
                src={data?.image_source || noImage}
                width={28}
                height={28}
                fetchPriority='high'
                alt='프로필'
              />
              <VerticalCenterSpan>{data?.email}</VerticalCenterSpan>
            </FlexDiv>
          )
        ) : (
          <Link href='/signin'>
            <LoginButton>로그인</LoginButton>
          </Link>
        )}
      </InnerDiv>
    </StickyNav>
  );
}

export default Nav;
