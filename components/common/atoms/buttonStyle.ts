import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const ButtonModule = styled.button<{
  afterIcon: string;
  beforeIcon: string;
}>`
  &.button {
    &--outlined {
      padding: 0 12px;
      line-height: 33px;
      background-color: transparent;
      border: 1px solid ${theme.color.primary};
      border-radius: 5px;
      &:hover {
        background-color: ${theme.color.graye};
      }
      &.active {
        color: ${theme.color.white};
        background-color: ${theme.color.primary};
      }
      @media screen and (max-width: ${theme.screenSize.moLarge}) {
        padding: 0 10px;
        font-size: 14px;
        line-height: 27px;
      }
    }
    &--icon-before {
      display: inline-block;
      padding-left: 22px;
      background: url(${({ beforeIcon }) => beforeIcon || ''}) no-repeat left center;
      background-size: 18px 18px;
    }
    &--icon-after {
      display: inline-block;
      padding-right: 20px;
      background: url(${({ afterIcon }) => afterIcon || ''}) no-repeat right center;
      background-size: 18px 18px;
    }
    &--gradient {
      width: 100%;
      color: #fff;
      font-weight: 600;
      text-align: center;
      background: ${theme.bgColor.gradient};
      border-radius: 8px;
    }
    &--red {
      width: 100%;
      color: ${theme.color.white};
      border-radius: 8px;
      background-color: ${theme.color.red};
    }
    &--modal-close {
      position: absolute;
      width: auto;
      top: 50%;
      right: 16px;
      transform: translateY(-50%);
    }
    &--sns-share {
      display: flex;
      align-items: center;
      flex-direction: column;
      .share--text {
        padding-top: 10px;
      }
    }
    &--input {
      &-password {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        padding: 1rem;
        z-index: 1;
      }
    }
  }

  &.large {
    font-size: 18px;
    line-height: 53px;
    font-weight: 600;
    @media screen and (max-width: ${theme.screenSize.moLarge}) {
      font-size: 14px;
      line-height: 37px;
    }
  }
  &.medium {
    font-size: 14px;
    line-height: 37px;
    font-weight: 600;
  }
`;
