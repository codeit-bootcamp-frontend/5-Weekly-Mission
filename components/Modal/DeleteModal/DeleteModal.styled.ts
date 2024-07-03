import { Cta } from '@/components/Button/Button.styled';
import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Name = styled.span`
  color: var(--Linkbrary-gray60);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.2rem; /* 157.143% */
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const ModalInput = styled.input`
  display: flex;
  width: 28rem;
  padding: 1.8rem 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  border: 1px solid var(--Primary);
  background: #fff;
`;

export const ModalButton = styled(Cta)<{ disabled: boolean }>`
  background: ${(props) =>
    props.disabled ? 'var(--Linkbrary-gray60)' : 'var(--ErrorMessage)'};
  color: var(--Gray-cta);
`;
