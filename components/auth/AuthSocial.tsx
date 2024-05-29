import styled from "styled-components";
import { GRAY3, GRAY4 } from "../color";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const AuthSocial = ({ children }: { children: ReactNode }) => {
  return (
    <Div>
      {children}
      <SnsButtons>
        <GoogleButton href="https://www.google.com">
          <Image src="/google.png" width={22} height={22} alt=""></Image>
        </GoogleButton>
        <KaKaoButton href="https://www.kakaocorp.com/page">
          <Image src="/KaKaoforAuth.svg" width={26} height={24} alt=""></Image>
        </KaKaoButton>
      </SnsButtons>
    </Div>
  );
};

export default AuthSocial;

const Div = styled.div`
  display: flex;
  margin-top: 32px;
  max-width: 400px;
  width: 100%;
  padding: 12px 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${GRAY3};
  background: ${GRAY4};
  color: #373740;
  font-size: 14px;
`;

const SnsButtons = styled.div`
  display: flex;
  column-gap: 16px;
`;

const GoogleButton = styled(Link)`
  padding: 9px;
  width: 42px;
  height: 42px;
  background-color: white;
  border: 1px solid #d3d4dd;
  border-radius: 9999px;
`;

const KaKaoButton = styled(GoogleButton)`
  padding: 9px 7px 7px;
  border: 1px solid #f5e14b;
  background-color: #f5e14b;
`;
