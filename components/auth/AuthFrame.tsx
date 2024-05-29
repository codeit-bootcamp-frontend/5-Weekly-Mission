import styled from "styled-components";
import { GRAY5 } from "../color";
import { ReactNode } from "react";

const AuthFrame = ({ children }: { children: ReactNode }) => {
  return <LayOut>{children}</LayOut>;
};

export default AuthFrame;

const LayOut = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${GRAY5};
`;
