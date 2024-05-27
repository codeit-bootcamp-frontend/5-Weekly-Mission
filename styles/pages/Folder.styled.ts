import styled from "styled-components";

export const LinkAddWrap = styled.section`
  background-color: rgb(240, 246, 255);
  padding: 60px 0 90px 0;
  display: flex;
  justify-content: center;
`;

export const ContentSection = styled.section`
  min-height: calc(100vh - 611px);
`;

export const ContentBox = styled.div`
  max-width: 1060px;
  margin: 40px auto;
  @media screen and (max-width: 1124px) {
    padding: 0 32px;
  }
`;

export const FolderBox = styled.div`
  padding-top: 40px;
`;

export const ContentItemBox = styled.div`
  padding-top: 24px;
  @media screen and (max-width: 1124px) {
    padding-top: 0;
  }
`;
