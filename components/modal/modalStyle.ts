import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const ModalWrap = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 20px;
  z-index: 100;
`;
export const ModalDim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;
export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 32px 40px;
  width: 100%;
  max-width: 360px;
  border-radius: 15px;
  transform: translate(-50%, -50%);
  background-color: ${theme.color.white};
  z-index: 2;
  .button--modal-close {
    top: 30px;
  }
`;
export const ModalHead = styled.div`
  .desc {
    padding-top: 8px;
    color: ${theme.color.gray9};
    line-height: 1.375rem;
    text-align: center;
  }
`;
export const ModalBody = styled.div`
  padding-top: 24px;
`;
export const ModalFoot = styled.div`
  padding-top: 24px;
`;
