import styled from 'styled-components';
import { SectionCard } from '../components/MainSectionCard/MainSectionCard.styled';

export const Main = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main__Header = styled.div`
  background: var(--Background);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 7.2rem;

  @media (max-width: 1199px) {
    padding-top: 4rem;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const Header__contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 4rem;
  width: 100%;

  @media (max-width: 768px) {
    gap: 2.4rem;

    a {
      width: 100%;
      max-width: 40rem;
    }
  }
`;

export const Slogan = styled.h1`
  margin: 0;
  text-align: center;
  font-family: Pretendard;
  font-size: 6.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 8rem; /* 125% */

  @media (max-width: 768px) {
    font-size: 4rem;
    line-height: 5rem; /* 125% */
  }
`;

export const Slogan_gradient = styled.span`
  background: var(--Slogan-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Header__image = styled.div`
  width: 120rem;
  height: 59rem;
  padding: 5rem 4.1rem 0;
  overflow: hidden;

  @media (max-width: 1199px) {
    width: 69.8rem;
    height: 34.3rem;
    padding: 2.9rem 2.4rem 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    aspect-ratio: 2 / 1;
  }
`;

export const HeaderImage = styled.div`
  position: relative;
  height: 65.9rem;
  width: 100%;

  img {
    border-radius: 2.5rem;
    box-shadow: 0px 0.4rem 2.5rem 0px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 1199px) {
    height: 38rem;
  }

  @media (max-width: 768px) {
    aspect-ratio: 1.7 / 1;
    height: auto;
  }
`;

export const Main__contents = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12rem 0;
  background-color: var(--Section-white);
  gap: 10rem;

  ${SectionCard}:nth-child(even) {
    grid-template:
      'image header'
      'image description'
      /55rem 29.1rem;
  }

  @media (max-width: 1199px) {
    padding: 8rem 0 8rem;

    ${SectionCard}:nth-child(even) {
      grid-template:
        'image header'
        'image description'
        /38.5rem 26.2rem;
    }
  }

  @media (max-width: 768px) {
    gap: 0;

    ${SectionCard}:nth-child(even) {
      grid-template:
        'header'
        'image'
        'description';
      row-gap: 0.5rem;
      column-gap: 2.6rem;
      padding: 4rem 3.2rem;
    }
  }
`;
