import { font24 } from '@/styles/commonStyle';
import { theme } from '@/styles/theme';
import Link from 'next/link';
import styled from 'styled-components';

export const LinkModule = styled(Link)`
  position: relative;
  display: block;
  text-align: center;
  &.link {
    &--gradient {
      color: #fff;
      font-weight: 600;
      text-align: center;
      background: ${theme.bgColor.gradient};
      border-radius: 8px;
    }
    &--login {
      width: 128px;
      font-size: 18px;
      @media screen and (max-width: ${theme.screenSize.moLarge}) {
        width: 80px;
      }
    }
    &--title {
      &-text {
        ${font24}
      }
    }
  }
  &.full {
    width: 100% !important;
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
    width: 80px;
    font-size: 14px;
    line-height: 37px;
    font-weight: 600;
  }
`;
