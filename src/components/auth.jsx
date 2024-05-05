import React from "react";
import styled from "styled-components";
import LogoImgSrc from "../images/Linkbrary.svg";
import GoogleLogo from "../images/google_logo.svg";
import KakaoLogo from "../images/kakao_logo.svg";
import { Link } from "react-router-dom";
import { Button } from "./button";

export const Content = styled.div`
  position: absolute;
  top: 238px;
  max-width: 400px;
  width: 100%;
  gap: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const Template = styled.div`
  background-color: #f0f6ff;
  width: 100%;
  height: 982px;
  margin: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LinkArea = function ({ children }) {
  return (
    <LinkFrame>
      <Link2Home to="/">
        <img src={LogoImgSrc} alt={"Link-brary 로고"} />
      </Link2Home>
      {children}
    </LinkFrame>
  );
};
const LinkFrame = styled.div`
  max-width: 218px;
  width: 100%;
  height: 78px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Link2Home = styled(Link)`
  max-width: 210px;
  width: 100%;
  height: 38px;
  img {
    max-width: 210px;
    width: 100%;
    height: 38px;
  }
`;
export const To = styled.div`
  max-width: 220px;
  width: 100%;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  div {
    max-width: 123px;
    width: 100%;
    height: 24px;
    font-weight: 400;
    font-size: 14px;
    font-family: "Pretendard";
    line-height: 24px;
    letter-spacing: -1px;
  }

  a {
    max-width: 90px;
    width: 100%;
    height: 19px;
    font-weight: 600;
    font-size: 15px;
    font-family: "Pretendard";
    line-height: 19px;
    color: #6d6afe;
    letter-spacing: -1.2px;
    word-spacing: -1px;
  }
`;
const SocialTemplate = styled.div`
  width: 100%;
  height: 66px;
  background-color: #e7effb;
  border-radius: 8px;
  border: 1px solid #ccd5e3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px 12px 24px;
`;
const SocialLabel = styled.div`
  color: #373740;
`;
const SocialLink = styled.div`
  max-width: 100px;
  width: 100%;
  height: 42px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Social = function ({ children }) {
  return (
    <SocialTemplate>
      <SocialLabel>{children}</SocialLabel>
      <SocialLink>
        <a href="https://www.google.com/">
          <img src={GoogleLogo} alt="구글 sns 링크" />
        </a>
        <a href="https://www.kakaocorp.com/page/">
          <img src={KakaoLogo} alt="카카오 sns 링크" />
        </a>
      </SocialLink>
    </SocialTemplate>
  );
};
export const InputFrame = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const SubmitButton = styled(Button)`
  max-width: 400px;
  width: 100%;
  height: 53px;
  padding: 16px 20px 16px 20px;
  gap: 10px;
`;
const InputEntry = styled.div`
  max-width: 400px;
  width: 100%;
  height: 112px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const InputLabel = styled.div`
  font-weight: 400;
  font-size: 14px;
  font-family: "Pretendard";
  line-height: 17px;
`;
const InputWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  height: 83px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const InputBinder = styled.div`
  width: 100%;
  height: 60px;
  position: relative;

  i {
    position: absolute;
    left: 90%;
    top: 40%;
  }
`;
const InputField = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  border: 1px solid;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  padding: 18px 15px 18px 15px;
  border-color: ${(props) =>
    props.border === "Error" ? "#ff5b56" : "#ccd5e3"};
  &:focus {
    border-color: #6d6afe;
    outline: none;
  }
`;
const ErrorMessage = styled.div`
  color: #ff5b56;
  font-size: 14px;
  font-weight: 400;
  font-family: "Pretendard";
  height: 17px;
`;

export const Input = function ({
  type,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  errorMessage,
  children,
}) {
  let border = "";
  if (errorMessage === "") {
    border = "Default";
  } else {
    border = "Error";
  }
  return (
    <InputEntry>
      <InputLabel>{label}</InputLabel>
      <InputWrapper>
        <InputBinder>
          <InputField
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
			onFocus={onFocus}
            placeholder={label}
            border={border}
          ></InputField>
          {children}
        </InputBinder>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </InputWrapper>
    </InputEntry>
  );
};
