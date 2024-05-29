import styled from 'styled-components';

export const ModalBody = styled.div`
  position: absolute;
  right: -1rem;
  bottom: 1rem;
  width: 10rem;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

export const ModalButton = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3.1rem;
  padding: 0.7rem 1.2rem;
  color: var(--Linkbrary-gray100);
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    color: var(--Primary);
    background: var(--Linkbarary-gray10);
  }
`;
