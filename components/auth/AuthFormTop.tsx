import styled from "styled-components";
import { PRIMARY } from "../color";
import Link from "next/link";

type Auth = "signin" | "signup";

const AuthFormTop = ({ auth }: { auth: Auth }) => {
  return (
    <Div>
      <Logo />
      {auth === "signin" && (
        <span>
          회원이 아니신가요?{" "}
          <StyledLink href="/signup">회원 가입하기</StyledLink>
        </span>
      )}
      {auth === "signup" && (
        <span>
          이미 회원이신가요?
          <StyledLink href="/signin">로그인 하기</StyledLink>
        </span>
      )}
    </Div>
  );
};

export default AuthFormTop;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
  color: #000;
  font-size: 16px;
  line-height: 24px;
`;

const Logo = styled.h3`
  background: url("/logo.svg") center no-repeat;
  background-size: contain;
  width: 210px;
  height: 38px;
`;

const StyledLink = styled(Link)`
  color: ${PRIMARY};
  text-decoration: underline;
`;
