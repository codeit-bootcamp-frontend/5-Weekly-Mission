import styled from 'styled-components';

export const SectionCard = styled.div`
  display: grid;
  grid-template:
    'header image'
    'description image'
    /29.1rem 55rem;
  row-gap: 1rem;
  column-gap: 15.7rem;
  width: 100%;
  height: fit-content;

  @media (max-width: 1199px) {
    grid-template:
      'header image'
      'description image'
      /26.2rem 38.5rem;
    row-gap: 1rem;
    column-gap: 5.1rem;
  }

  @media (max-width: 768px) {
    grid-template:
      'header'
      'image'
      'description';
    row-gap: 0.5rem;
    column-gap: 2.6rem;
    padding: 4rem 3.2rem;
  }
`;

export const TextBox__title = styled.h2`
  width: 27.2rem;
  font-family: Pretendard;
  font-size: 4.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.3px;
  margin: 0;
  grid-area: header;
  align-self: flex-end;

  @media (max-width: 768px) {
    font-size: 3rem;
    width: 100%;
  }
`;

export const Description = styled.p`
  width: 29.1rem;
  color: var(--Description);
  font-family: Abel;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  margin: 0;
  grid-area: description;
  align-self: flex-start;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    width: 100%;
  }
`;

export const SectionImage = styled.div`
  width: 100%;
  height: 45rem;
  grid-area: image;
  position: relative;

  @media (max-width: 1199px) {
    height: 31.5rem;
  }

  @media (max-width: 768px) {
    aspect-ratio: 1.2/1;
    height: 100%;
  }
`;
