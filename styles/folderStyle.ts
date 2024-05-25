import styled, { css } from 'styled-components';
import { ContainBodyInner, ContainHead, ContainHeadInner, DFlaxAlignCenter, dflexCenterBtw, innerLarge } from '@/styles/commonStyle';
import { theme } from '@/styles/theme';

export const ShareHeadInner = styled(ContainHeadInner)`
  img {
    width: 3.75rem;
  }
  p {
    line-height: 1.5rem;
    padding-top: 0.75rem;
  }
  h2 {
    line-height: 3rem;
    padding-top: 1.25rem;
  }
`;

export const FolderContainHead = styled(ContainHead)`
  padding: 36px 0 66px;

  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    padding: 4px auto 24px;
  }
`;

export const LinkAddHeadInner = styled.div`
  padding: 24px 32px;
  background: ${theme.color.grayf};

  .folder--fix-inner {
    position: relative;
    margin: 0 auto;
    max-width: 800px;
  }

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 100;
  }

  .button--gradient.medium {
    position: absolute;
    right: 20px;
    top: 50%;
    width: 80px;
    transform: translateY(-50%);
  }

  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    padding: 16px 32px;

    .button--gradient.medium {
      right: 12px;
    }
  }
`;

export const BodyInner = styled(ContainBodyInner)`
  ${innerLarge}
`;

export const PostCardWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5625rem 1.25rem;

  @media screen and (max-width: 1124px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem 1.5rem;
  }

  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.25rem;
  }
`;

export const EmptyBox = styled.div`
  padding: 41px 0 35px;
  line-height: 24px;
  text-align: center;
`;

export const FolderBtnBox = css`
  ${dflexCenterBtw}
  padding-bottom: 24px;
  gap: 0 32px;
`;

export const BookmarkBox = styled.div`
  ${FolderBtnBox}

  .button--icon-after.button--folder-add {
    color: ${theme.color.primary};
    font-weight: 500;
  }

  @media screen and (max-width: 500px) {
    padding-bottom: 28px;

    .button--icon-after.button--folder-add {
      position: fixed;
      bottom: 101px;
      left: 50%;
      padding-right: 16px;
      width: 127px;
      line-height: 33px;
      color: ${theme.color.white};
      border: 1px solid ${theme.color.white};
      border-radius: 50em;
      background: ${theme.color.primary} url('/assets/icon/icon_white_add.svg') no-repeat;
      background-position: right 18px center;
      transform: translateX(-50%);
      z-index: 5;
    }
  }
`;

export const ShareBox = styled.div`
  ${FolderBtnBox}
  a {
    font-size: 1.5rem;
    line-height: 1.8125rem;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 20px;
    h3 {
      padding-bottom: 12px;
    }
  }
`;

export const BookMarkBtnList = styled(DFlaxAlignCenter)`
  flex: 1;
  flex-shrink: 0;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ShareListBtn = styled(DFlaxAlignCenter)`
  gap: 0 12px;

  .button--icon-before {
    font-size: 14px;
    font-weight: 600;
    line-height: 29px;
    color: ${theme.color.gray9};
  }
`;

export const BoxLinkSearch = styled.div`
  position: relative;
  margin-bottom: 40px;

  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    margin-bottom: 32px;
  }
`;

export const SearchResults = styled.div`
  margin-top: 40px;
  color: ${theme.color.grayc};
  text-align: left;
  font-size: 32px;
  font-weight: 600;
  span {
    font-weight: 600;
  }
`;
