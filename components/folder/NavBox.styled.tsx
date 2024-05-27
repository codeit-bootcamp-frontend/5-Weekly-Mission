import styled from "styled-components";

export const NavWrapBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    display: flex;
    flex-shrink: 0;
    .pc {
      display: block;
    }
    .mo {
      display: none;
    }
  }

  & span {
    font-size: 16px;
    color: #6d6afe;
    line-height: 19.09px;
    letter-spacing: -0.3px;
    font-weight: 500;
    padding-right: 4px;
  }

  @media (max-width: 767px) {
    > button {
      display: flex;
      align-items: center;
      position: fixed;
      bottom: 50px;
      left: 50%;
      transform: translate(-50%, 0);
      background-color: #6d6afe;
      z-index: 9999;
      padding: 8px 24px;
      border-radius: 20px;
      .pc {
        display: none;
      }
      .mo {
        display: block;
      }
    }

    & span {
      color: white;
    }
  }
`;

export const NavList = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const NavSettingBox = styled.div`
  padding-top: 24px;
  display: flex;
  justify-content: space-between;

  > span {
    font-weight: 600;
    font-size: 24px;
    line-height: 28.8px;
    letter-spacing: -0.2px;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  & button {
    display: flex;
    align-items: center;
    gap: 0.5px;
    padding: 0;

    > span {
      font-size: 14px;
      font-weight: 600;
      line-height: 16.71px;
      color: #9fa6b2;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
`;
