import styled from "styled-components";

export const KebabButton = styled.button`
  background-image: url("../assets/kebab.png");
  width: 1.4rem;
  height: 1.4rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: absolute;
  top: 13%;
  right: 7%;
  z-index: 999;
`;

export const KebabContainer = styled.div`
  position: relative;
`;

export const KebabMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  display: none;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 5px;
  z-index: 1;
`;
