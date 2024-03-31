import styled from "styled-components";

const CardContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 34rem);
  grid-template-rows: 33.4rem;
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin: 0 auto;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
`;

const CardImg = styled.img`
  width: 34rem;
  height: 20rem;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const CardTextSection = styled.section`
  padding: 1.5rem 2rem;
`;

const CardCreateAt = styled.div`
  color: #666666;
  font-size: 13px;
`;

const CardTextBody = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
`;

const CardDate = styled.div`
  font-size: 14px;
`;
