import styled from 'styled-components';
import { ButtonProps } from './Button';

const buttonSize = {
  xs: '4.8',
  sm: '10',
  md: '28',
  lg: '40',
};

export const Cta = styled.button<ButtonProps>`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  background: var(--Gradient-purpleblue-to-skyblue);
  color: var(--Gray-cta);
  padding: 1.6rem 2rem;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: ${({ size }) => buttonSize[size]}rem;
  position: relative;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 1rem 1.6rem;
    width: ${({ size }) => (size === 'lg' ? '100%' : `${buttonSize[size]}rem`)};
  }
`;
