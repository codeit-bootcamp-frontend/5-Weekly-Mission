// 전역 공통 사용 css

import styled, { css } from 'styled-components';
import { theme } from './theme';

// ====  body layout  =====

export const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 5.8125rem;
  background-color: ${theme.color.grayf};
  &.no-header--container {
    padding-top: 0;
  }
  @media screen and (max-width: ${theme.screenSize.pc}) {
    padding-top: 3.9375rem;
  }
`;

// ====  정렬  =====

export const dflex = css`
  display: flex;
`;
export const dflexCenter = css`
  ${dflex}
  align-items: center;
`;
export const dflexCenterBtw = css`
  ${dflexCenter}
  justify-content: space-between;
`;
export const dflexCenterCenter = css`
  ${dflexCenter}
  justify-content: center;
`;
export const DFlaxAlignCenter = styled.div`
  ${dflexCenter}
`;
export const DFlaxAlignStart = styled.div`
  ${dflex}
  align-items: flex-start;
`;
export const DFlaxAlignCenterBtw = styled.div`
  ${dflexCenterBtw}
`;
export const DFlaxAlignCenterCenter = styled.div`
  ${dflexCenterCenter}
`;

// ====  타이틀  ====

export const TitleLs = styled.h2`
  font-size: ${theme.title.ls};
  line-height: 5rem;
  font-weight: 700;
  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    font-size: calc(${theme.title.ls} / 2);
    line-height: 2.625rem;
  }
`;
export const TitleMs = styled.h3`
  font-size: ${theme.title.ms};
  line-height: 3.56rem;
  font-weight: 700;
  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    font-size: calc(${theme.title.ms} / 2);
    line-height: 1.79rem;
  }
`;
export const ModalTitle = styled.h2`
  font-size: ${theme.font.l};
  font-weight: 700;
  text-align: center;
`;
// ====  폰트  ====

export const bold = css`
  font-weight: 700;
`;
export const font13 = css`
  font-size: ${theme.font.s};
`;
export const font14 = css`
  font-size: ${theme.font.sm};
`;
export const font16 = css`
  font-size: ${theme.font.m};
  line-height: 1.5rem;
`;
export const font18 = css`
  font-size: ${theme.font.lm};
  line-height: 1.375rem;
`;
export const font20 = css`
  font-size: ${theme.font.l};
`;
export const font24 = css`
  font-size: ${theme.font.ls};
  line-height: 1.8125rem;
  font-weight: 600;
  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    font-size: ${theme.font.l};
    line-height: 1.5rem;
  }
`;
export const FontS = styled.div`
  ${font13};
`;
export const FontSM = styled.div`
  ${font14};
`;
export const FontM = styled.div`
  ${font16};
`;
export const FontLM = styled.div`
  ${font18};
`;
export const FontL = styled.div`
  ${font20};
`;
export const FontLS = styled.div`
  ${font24};
`;

export interface IFont {
  $fontSize?: number;
  $lineHeight?: number;
  $weight?: string;
  $color?: string;
}

export const customFont = styled.div<IFont>`
  ${({ $weight, $fontSize, $lineHeight, $color }) => `
    font-size: ${$fontSize || theme.font.m}px;
    line-height: ${$lineHeight || 1.2}px;
    font-weight: ${$weight || '400'};
    color:${$color || '#000'};
  `}
`;

// ====  ellipsis  ====

export const EllipsisLine = styled.div<{ $tline?: number }>`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${({ $tline }) => $tline};
  -webkit-box-orient: vertical;
`;

// ====  profile  ====

export interface IProfileImg {
  $bgImageUrl?: string;
}

export const Profile = styled.span<IProfileImg>`
  display: block;
  width: 28px;
  height: 28px;
  border-radius: 50em;
  background-image: url(${({ $bgImageUrl }) => $bgImageUrl || '/assets/icon/icon_user.svg'});
  overflow: hidden;
`;
// ====  section  ====
export const ContainHead = styled.section``;
export const ContainBody = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

// ====  section inner  ====
export const inner = css`
  width: 100%;
  margin: 0 auto;
`;
export const innerLarge = css`
  ${inner}
  max-width: ${theme.innerSize.l};
`;
export const innerMedium = css`
  ${inner}
  max-width: ${theme.innerSize.l};
`;
export const innerSmall = css`
  ${inner}
  max-width: ${theme.innerSize.l};
`;

export const InnerLarge = styled.div`
  ${innerLarge}
`;
export const InnerMedium = styled.div`
  ${innerMedium}
`;
export const InnerSmall = styled.div`
  ${innerSmall}
`;
export const ContainHeadInner = styled.div`
  padding: 1.25rem 2rem 3.75rem;
  text-align: center;
  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    padding: 0.625rem 2rem 2.5rem;
  }
`;
export const ContainBodyInner = styled.div`
  flex: 1;
  padding: 40px 2rem 6.25rem;
  text-align: center;
  @media screen and (max-width: ${theme.screenSize.moLarge}) {
    padding: 1.25rem 2rem 3.75rem;
  }
`;

// ====  position  ====
export const Relative = styled.div`
  position: relative;
`;
