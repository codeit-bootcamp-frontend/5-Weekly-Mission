import styled from "styled-components";
import { Button, ButtonLabel } from "components/button";
export const LinkFormTemplate = styled.div`
  background-color: #f0f6ff;
  display: flex;
  justify-content: center;
  padding: 2.4rem 3.2rem 4rem;
  width: 100%;
  flex-direction: row;

  @media (min-width: 768px) {
    padding: 6rem 3.2rem 9rem;
  }
`;

export const FixedLinkFormTemplate = styled.div`
  background-color: #f0f6ff;
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: row;

  position: fixed;
  padding: 1.6rem 3.2rem;
  bottom: 0;
  left: 0;
  z-index: 100;

  @media (min-width: 768px) {
    padding: 2.4rem 3.2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border: 0.1rem solid #6d6afe;
  border-radius: 1.5rem;
  column-gap: 10px;
  display: flex;
  height: 5.3rem;
  max-width: 80rem;
  padding: 0 1rem;
  width: 100%;

  @media (min-width: 768px) {
    column-gap: 20px;
    height: 6.9rem;
    padding: 0 2rem;
  }

  ${Button} {
    height: 3.7rem;
    width: 100px;
  }

  ${ButtonLabel} {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const InputBox = styled.div`
  align-items: center;
  -webkit-column-gap: 0.8rem;
  column-gap: 0.8rem;
  display: flex;
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    column-gap: 1.2rem;
  }
`;

export const InputField = styled.input`
  line-height: 150%;
  width: 100%;
  font-size: 1.4rem;
  height: 5.1rem;

  ::placeholder {
    color: #9fa6b2;
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
    height: 6.7rem;
  }
`;

export const LinkIcon = styled.img`
  height: 1.6rem;
  width: 1.6rem;

  @media (min-width: 768px) {
    height: 2rem;
    width: 2rem;
  }
`;
