import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const CardWrap = styled.div`
  position: relative;
  .card__link {
    display: block;
    position: relative;
    border: 1px solid transparent;
    border-radius: 0.9375rem;
    box-shadow: 0 0.3125rem 1.5625rem rgba(0, 0, 0, 0.08);
    overflow: hidden;
    &:hover {
      border: 1px solid ${theme.color.primary};
      .card__image {
        img {
          transform: scale(1.3);
        }
      }
    }
  }
  .card {
    &__image {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 12.5rem;
      overflow: hidden;
      background-color: #dddfff;
      img {
        object-fit: cover;
        transition: transform 0.3s;
        &.empty {
          opacity: 0.5;
        }
      }
    }
    &__info {
      text-align: left;
      padding: 0.9375rem 1.25rem;
      background-color: ${theme.color.white};
    }
    &__time-ago {
      font-size: ${theme.font.sm};
      line-height: 1.0625rem;
      color: ${theme.color.gray6};
    }
    &__content {
      padding-top: 0.625rem;
      line-height: 1.5rem;
      height: 3.44rem;
      word-break: break-all;
    }
    &__date {
      padding-top: 10px;
      font-size: ${theme.font.s};
      line-height: 1.1875rem;
      color: ${theme.color.gray3};
    }
  }

  &:nth-of-type(3n) {
    .card__dropdown-menu {
      right: -10px;
    }
  }

  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    .card {
      &__image {
        height: 12rem;
      }
    }
  }
`;

export const BookMarkBtn = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  width: 32px;
  height: 32px;
  font-size: 12px;
  color: transparent;
  background: url('/assets/icon/icon_star_off.svg');
  z-index: 1;
  &.active {
    background: url('/assets/icon/icon_star_on.svg');
  }
`;

export const CardMenu = styled.div`
  position: absolute;
  right: 10px;
  top: 205px;
  padding: 10px;
  cursor: pointer;
  z-index: 2;
  .card {
    &__dropdown-content {
      width: 21px;
      height: 17px;
      background: url(/assets/icon/icon_dotted.svg) no-repeat center;
    }
    &__dropdown-menu {
      position: absolute;
      right: -75px;
      top: 15px;
      z-index: 1;
    }
    &__menu-btn {
      line-height: 32px;
      width: 100px;
      background-color: ${theme.color.white};
      &:last-of-type {
        color: ${theme.color.primary};
        background-color: ${theme.color.grayf};
      }
    }
  }
  @media screen and (max-width: ${theme.screenSize.tablet}) {
    .card__dropdown-menu {
      right: -10px;
    }
  }
`;
