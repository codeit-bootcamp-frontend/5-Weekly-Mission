import styled from "styled-components";

export const SharedInfoWrap = styled.section`
  & div {
    background-color: rgb(240, 246, 255);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 0 60px;
  }
`;

export const ContentSection = styled.section`
  min-height: calc(100vh - 691px);
`;

export const ContentWrap = styled.div`
  max-width: 1060px;
  margin: 40px auto;

  @media screen and (max-width: 1124px) {
    padding: 0 32px;
  }
`;
