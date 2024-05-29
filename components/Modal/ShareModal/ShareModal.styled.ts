import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  p {
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  span {
    color: var(--Linkbrary-gray60);
    text-align: center;
    font-family: Pretendard;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.2rem; /* 157.143% */
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3.2rem;
`;

export const ShareButtonBody = styled.div<{ $color: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  p {
    color: var(--Linkbrary-gray100);
    text-align: center;
    font-family: Inter;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 115.385% */
  }

  span {
    display: flex;
    padding: 1.2rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-radius: 50%;
    background-color: ${(props) => props.$color};
  }
`;

export const Toast = styled.div`
  position: absolute;
  bottom: -4rem;
`;
