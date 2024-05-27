import Link from "next/link";
import styled from "styled-components";

export const NavItem = styled(Link)`
  display: block;
  border: solid 1px #6d6afe;
  border-radius: 5px;
  padding: 8px 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.09px;

  &:hover {
    cursor: pointer;
  }

  &.current-nav {
    background-color: #6d6afe;
    color: #ffffff;
  }
`;
