import styled from 'styled-components';

export const Background = styled.div`
  z-index: 50;
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Body = styled.div`
  position: relative;
  width: 36rem;
  height: fit-content;
  display: flex;
  padding: 3.2rem 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  border-radius: 1.5rem;
  border: 1px solid var(--Linkbrary-gray20);
  background: #fff;
`;

export const CloseIcon = styled.img`
  cursor: pointer;
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  width: 2.4rem;
  height: 2.4rem;
  z-index: 20;
`;
