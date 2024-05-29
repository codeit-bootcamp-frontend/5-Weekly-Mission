import styled from "styled-components";
import { MouseEvent, useState } from "react";
import Image from "next/image";

const EyeButton = ({
  setShow,
}: {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [hide, setHide] = useState<boolean>(true);

  const eyeClick = (e: MouseEvent) => {
    setHide(!hide);
    setShow((prev) => !prev);
  };

  return (
    <Button type="button" onClick={eyeClick}>
      {hide ? (
        <Image src="/eye-on.svg" fill alt="숨김상태" />
      ) : (
        <Image src="/eye-off.svg" fill alt="보임상태" />
      )}
    </Button>
  );
};

export default EyeButton;

const Button = styled.button`
  position: absolute;
  top: 22px;
  right: 15px;
  height: 16px;
  width: 16px;
`;
