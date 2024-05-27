import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 101;
`;

export const ModalContent = styled.div`
  width: 360px;
  background-color: white;
  border: 1px solid #dee2e6;
  border-radius: 15px;
  position: relative;
`;

export const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 16px;
  right: 20px;
`;

export const FolerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 32px 40px 0 40px;
  > p {
    font-weight: 700;
    font-size: 20px;
    line-height: 23.87px;
  }
  > span {
    color: #9fa6b2;
    line-height: 22px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
  }
`;

export const ShareInfo = styled.div`
  padding: 24px 34px 32px;
  display: flex;
  justify-content: center;
  gap: 32px;
`;
