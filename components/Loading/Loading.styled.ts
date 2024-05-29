import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  from{
    transform: rotate(0deg)
  }
  to{
    transform: rotate(360deg)
  }
`;

export const LoadingBody = styled.div`
  position: fixed;
  background-color: #fff;
  opacity: 0.9;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingImage = styled.div`
  animation: ${rotation} 2s linear infinite;
  width: 100px;
  height: 100px;
`;
