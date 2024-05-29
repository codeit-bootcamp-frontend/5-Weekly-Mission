import styled from 'styled-components';

export const ToastBody = styled.div`
  position: absolute;
  bottom: -6rem;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 1.2rem 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  background: var(--Linkbrary-gray100);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  p {
    color: var(--Grayscale-10);
    font-family: Pretendard;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
  }
`;
