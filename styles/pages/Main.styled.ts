import Link from "next/link";
import styled from "styled-components";

interface SpanOrder {
  order: string;
}

export const HeaderSection = styled.section`
  background-color: #f0f6ff;
  width: 100%;
  //height: 953px;
  position: relative;

  > div {
    margin-top: 20px;
    text-align: center;
  }
  > div:first-of-type {
    margin-top: 0;
  }

  & h2 {
    font-size: 4rem;
    font-weight: 700;
    line-height: 80px;
    text-align: center;
    padding: 70px;

    > span {
      background: linear-gradient(90deg, #6d6afe, #ff9f9f);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  }

  @media screen and (max-width: 1199px) {
    //height: 756px;

    & h2 {
      width: 90%;
      margin: 0 auto;
      padding: 40px 0;
    }
  }

  @media (max-width: 767px) {
    height: auto;

    & h2 {
      font-size: 2rem;
      line-height: 2.625rem;
      padding: 28px 0 24px;
    }
  }
`;

export const AddLinkPage = styled(Link)`
  font-size: 1.125rem;
  color: #f5f5f5;
  text-align: center;
  background: linear-gradient(90deg, #6d6afe, #6ae3fe);
  border-radius: 8px;
  border: none;
  text-decoration: none;
  padding: 16px 126px;
`;

export const LinkAddImgWrap = styled.div`
  width: 100%;
  //position: absolute;
  //bottom: -2px;

  @media screen and (max-width: 1250px) {
    > img {
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 767px) {
    //position: relative;

    > img {
      height: auto;
      top: 3px;
      position: relative;
    }
  }
`;

export const ContentSection = styled.section`
  & li {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-child(1) {
      margin-top: 70px;
    }

    @media (max-width: 767px) {
      & li:nth-child(1) {
        margin-top: 0;
      }
    }
  }

  @media (max-width: 767px) {
    padding: 0 32px;
  }
`;

export const ContentSectionWrap = styled.div`
  width: 998px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  & h2 {
    padding-bottom: 20px;
    font-size: 3rem;
    font-weight: 700;
    line-height: 3.6rem;
    letter-spacing: -0.3px;
  }

  @media screen and (max-width: 1199px) {
    width: 698px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 20px;
    margin: 40px 0;

    & h2 {
      position: static;
      font-size: 1.5rem;
      line-height: 1.79rem;
    }
  }
`;

export const ReverseContentSectionWrap = styled(ContentSectionWrap)`
  flex-direction: row-reverse;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ContentItem = styled.div`
  position: relative;
  width: 291px;
  height: 198px;

  > span {
    //position: absolute;
    //bottom: 0px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }

  @media screen and (max-width: 1199px) {
    width: 262px;
    height: 198px;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: auto;

    & br {
      display: inline-block;
      content: " ";
      padding: 0 2px;
    }

    > span {
      position: static;
    }
  }
`;

export const ContentGradient = styled.span<SpanOrder>`
  background: ${(props) => {
    switch (props.order) {
      case "1":
        return "linear-gradient(90deg,#FE8A8A,#A4CEFF);";
      case "2":
        return "linear-gradient(90deg,#6FBAFF,#FFD88B);";
      case "3":
        return "linear-gradient(90deg,#6D7CCD,#528885);";
      case "4":
        return "linear-gradient(90deg,#00d4ff,#328394);";
    }
  }};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const SecondSectionImg = styled.div`
  width: 550px;
  height: 450px;

  @media screen and (max-width: 1199px) {
    width: 385px;
    height: 315px;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    padding-bottom: 16px;
  }
`;

// export const ShowOnMobile = styled(SecondSectionImg)`
//   display: none;

//   @media (max-width: 767px) {
//     display: inline-block;
//   }
// `;
export const ShowOnPc = styled(SecondSectionImg)`
  /* @media (max-width: 767px) {
    display: none;
  } */
  & img {
    width: 100%;
    height: auto;
  }
`;
