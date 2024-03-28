import styled from 'styled-components';
import { GRAY5 } from './color';

const Container = styled.div`
  padding: 20px 0 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  background-color: ${GRAY5};

  & h2 {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 40px;
    font-weight: 600;
    line-height: normal;
  }

  @media (max-width: 767px) {
    padding: 10px - 40px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  & img {
    width: 60px;
  }

  & span {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;

const UserInfo = ({ name, profileImg }) => {
  return (
    <Info>
      <img src={profileImg} alt="유저 이미지입니다." />
      <span>{name}</span>
    </Info>
  );
};

const Top = ({ ownerName, profileImg, folderName }) => {
  return (
    <Container>
      <UserInfo name={ownerName} profileImg={profileImg} />
      <h2>{folderName}</h2>
    </Container>
  );
};

export default Top;
