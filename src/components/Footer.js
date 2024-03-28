import styled from 'styled-components';
import { BLACK } from './color';
import facebook from '../asset/akar-icons_facebook-fill.svg';
import twitter from '../asset/akar-icons_twitter-fill.svg';
import youtube from '../asset/akar-icons_youtube-fill.svg';
import instagram from '../asset/ant-design_instagram-filled.svg';

const Hlink = styled.a`
  text-decoration: none;
  color: #cfcfcf;
  cursor: pointer;
`;
const Foote = styled.footer`
  display: flex;
  height: 160px;
  padding: 32px 104px 64px 104px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: ${BLACK};

  @media (max-width: 767px) {
    padding: 32px;
  }
`;

const UnderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1716px;
  flex-grow: 1;
  color: #cfcfcf;
  font-family: Acme;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 767px) {
    display: grid;
    grid-template: 1fr 1fr / 181px 1fr 116px;
    row-gap: 60px;
  }
`;

const CopyRight = styled.div`
  @media (max-width: 767px) {
    grid-row: 2/3;
    grid-column: 1/2;
  }
`;

const FaqPolicy = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 767px) {
    grid-row: 1/2;
    grid-column: 1/2;
  }
`;

const LinkIcons = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr 1fr 1fr;
  gap: 12px;

  @media (max-width: 767px) {
    grid-row: 1/2;
    grid-column: 3/4;
  }
`;

const Footer = () => {
  return (
    <Foote>
      <UnderBar>
        <CopyRight>©codeit - 2023</CopyRight>
        <FaqPolicy>
          <Hlink href="https://www.google.com/" rel="noreferrer">
            Privacy Policy
          </Hlink>
          <Hlink href="https://www.naver.com/" rel="noreferrer">
            FAQ
          </Hlink>
        </FaqPolicy>
        <LinkIcons>
          <Hlink href="http://facebook.com" target="_blank" rel="noreferrer">
            <img src={facebook} alt="페이스북" />
          </Hlink>
          <Hlink href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img src={twitter} alt="트위터X" />
          </Hlink>
          <Hlink
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={youtube} alt="유튜브" />
          </Hlink>
          <Hlink href="http://instagram.com" target="_blank" rel="noreferrer">
            <img src={instagram} alt="인스타그램" />
          </Hlink>
        </LinkIcons>
      </UnderBar>
    </Foote>
  );
};

export default Footer;
