import styled from "styled-components";
import { ReactNode, useEffect } from "react";

interface ModalProps {
  children: ReactNode;
  name: string;
  onClick: () => void;
}

const ModalFrame = ({ children, name, onClick }: ModalProps) => {
  useEffect(() => {
    document.body.style.cssText = `
    position: fixed;
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <Modal>
      <Frame>
        <Close onClick={onClick} type="button"></Close>
        <Title>{name}</Title>
        {children}
      </Frame>
    </Modal>
  );
};

export default ModalFrame;

const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Frame = styled.div`
  display: flex;
  position: relative;
  padding: 32px 40px;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #ccd5e3;
  background: #fff;
  width: 360px;
`;

const Close = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 16px;
  right: 16px;
  background: url("/close.png") center no-repeat;
  background-size: contain;
`;

const Title = styled.h3`
  color: #373740;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
`;
