import styled from 'styled-components';
import Logo from '../asset/logo.svg';
import { GRAY5 } from './color';

const Heade = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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
  align-self: stretch;
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
  cursor: pointer;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;

  & img {
    height: 28px;
    width: 28px;
  }
`;

const UserProfile = ({ email, img }) => {
  return (
    <Profile>
      <img src={img} alt="프로필 이미지" />
      <span> {email}</span>
    </Profile>
  );
};

const Header = ({ isLogIn, email, img }) => {
  return (
    <Heade>
      <HeaderContent>
        <H1Logo>
          <img src={Logo} alt="Linkbrary" />
        </H1Logo>
        {isLogIn ? (
          <UserProfile email={email} img={img} />
        ) : (
          <Button type="button">로그인</Button>
        )}
      </HeaderContent>
    </Heade>
  );
};

export default Header;
