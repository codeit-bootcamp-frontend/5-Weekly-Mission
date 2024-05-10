import React from "react";
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* 배경 흐림 효과 */
  z-index: 1000; /* 다른 요소들보다 위에 위치 */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 193px;
  background-color: white;
  border-radius: 15px;
  padding: 32px 40px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  gap: 5px;
`;

export const EixtButton = styled.button`
  background-image: url("../../assets/Group19.png");
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const urlWrapper = styled.div`
  display: flex;
  flex-direction: column; /* 세로 방향으로 아이템을 정렬 */
  width: 100%;
  overflow-x: hidden; /* 텍스트가 넘치는 부분을 숨김 */
  overflow: hidden;
  justify-content: center;
  text-align: center;
`;

export const LinkUrl = styled.p`
  color: var(--gray60);
  font-size: 14px;
  white-space: nowrap; /* 텍스트가 한 줄에만 표시되도록 함 */
  overflow-y: visible; /* 텍스트가 상하로 자유롭게 표시되도록 함 */
`;

export const DeleteButton = styled.button`
  background-color: var(--red);
  color: white;
  width: 280px;
  height: 51px;
  border-radius: 8px;
  padding: 16px 20px;
  margin-top: 25px;
`;
