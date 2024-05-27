import styled from "styled-components";

export const MainWrap = styled.div`
  width: 100%;

  @media (max-width: 464px) {
    width: calc(100% - 64px);
    padding: 0 32px;
  }
`;

export const MainContent = styled.div`
  width: 400px;
  margin: 238px auto 20px;

  @media (max-width: 1199px) {
    margin: 200px auto;
  }
  @media (max-width: 464px) {
    width: 100%;
    margin: 120px auto;
  }
`;

export const WrapHeadBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const SignBox = styled.div`
  display: flex;
  gap: 8px;
  margin: 16px 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 24px;

  > a {
    color: var(--main-color);
    position: relative;
    top: -4px;
    border-bottom: 1px solid var(--main-color);
  }
`;

export const EmailBox = styled.div`
  margin-top: 24px;
`;

export const PassWordBox = styled.div`
  margin: 24px 0 0;
`;

export const LoginBoxSpan = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 16.71px;
`;

export const SnsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e7effb;
  border: 1px solid var(--border-gray);
  border-radius: 8px;
  padding: 12px 24px;
  margin: 32px 0 0;

  > span {
    font-size: 0.875rem;
    font-weight: 400;
  }
`;

export const validation = styled.div`
  padding-top: 6px;
  font-size: 14px;
  font-weight: 400;
  color: var(--var-test-red);
  line-height: 16.8px;
`;
