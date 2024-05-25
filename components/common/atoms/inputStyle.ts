import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const InputModule = styled.input<{ beforeIcon: string }>`
  padding: 0 15px;
  width: 100%;
  line-height: 58px;
  border: 1px solid ${theme.color.primary};
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 16px;
  &::placeholder {
    color: #9fa6b2;
  }
  &:-moz-placeholder {
    color: #9fa6b2;
  }
  &:-ms-placeholder {
    color: #9fa6b2;
  }
  &.input {
    &__link {
      &--search {
        padding: 0 1rem 0 2.625rem;
        width: 100%;
        line-height: 54px;
        color: ${theme.color.gray6};
        border-radius: 0.625rem;
        background: #f5f5f5 url(${({ beforeIcon }) => beforeIcon || ''}) no-repeat left 1rem center;
        background-size: 1rem 1rem;
        box-sizing: border-box;
        @media screen and (max-width: ${theme.screenSize.moLarge}) {
          line-height: 43px;
          font-size: 14px;
        }
      }
      &--add {
        width: 100%;
        padding: 0 120px 0 52px;
        line-height: 67px;
        background: #fff url(${({ beforeIcon }) => beforeIcon || ''}) no-repeat left 20px center;
        border-radius: 15px;
        @media screen and (max-width: ${theme.screenSize.moLarge}) {
          padding: 0 100px 0 34px;
          background-position: left 10px center;
          line-height: 51px;
          font-size: 14px;
        }
      }
    }
  }
`;
