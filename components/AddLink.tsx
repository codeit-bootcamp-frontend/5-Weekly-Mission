import styled from "styled-components";
import { PRIMARY, WHITE } from "./color";
import { FormEvent, useRef, useState } from "react";
import Portal from "../Portal/Portal";
import ModalAddLink from "./Modal/ModalAddLink/ModalAddLink";
import { useInView } from "react-intersection-observer";

const BAR_COLOR = WHITE;
const BAR_BORDER_RADIUS = "15px";
const LinkPlaceHolder = "링크를 추가해 보세요";

const AddLink = ({ folder, footView }: { folder: any; footView: boolean }) => {
  const AddLink = useRef<HTMLInputElement>(null);
  const [add, setAdd] = useState(false);
  const [url, setUrl] = useState<string>();
  const [target, inView] = useInView();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAdd(!add);
    setUrl(AddLink.current?.value);
    console.log(folder);
  };

  return (
    <>
      <Div className={`${inView ? "" : "foot"} ${footView ? "unseen" : ""}`}>
        <AddlinkBar onSubmit={handleSubmit}>
          <LinkLabel htmlFor="AddLink">링크 추가</LinkLabel>
          <LinkInput
            type="text"
            id="AddLink"
            ref={AddLink}
            placeholder={LinkPlaceHolder}
          />
          <AddLinkButton type="submit">추가하기</AddLinkButton>
          <Portal elementId="modal-root">
            {add && (
              <ModalAddLink onClick={handleSubmit} url={url} folder={folder} />
            )}
          </Portal>
        </AddlinkBar>
      </Div>
      <Observed ref={target} className={inView ? "" : "big"}></Observed>
    </>
  );
};

export default AddLink;

const Div = styled.div`
  display: flex;
  padding: 24px 0;
  margin-top: 40px;
  width: 100%;
  justify-content: center;
  align-items: center;

  &.foot {
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 3;
    padding: 24px 32px;
    margin: 0;
    background-color: #f0f6ff;
  }

  &.unseen {
    display: none;
  }

  @media (max-width: 767px) {
    margin-top: 14px;
  }
`;

const AddlinkBar = styled.form`
  display: flex;
  padding: 16px 20px;
  width: 100%;
  max-width: 800px;
  min-width: 336px;

  border-radius: ${BAR_BORDER_RADIUS};
  background-color: ${BAR_COLOR};
  border: 1px solid ${PRIMARY};
  align-items: center;

  &::before {
    content: "";
    background-image: url("/linkIcon.svg");
    background-size: cover;
    width: 20px;
    height: 20px;

    @media (max-width: 767px) {
      width: 16px;
      height: 16px;
    }
  }

  @media (min-width: 1200px) {
    box-shadow: 2px 2px 2px rgb(0 0 0 /20%);
  }

  @media (max-width: 767px) {
    padding: 8px 10px;
  }
`;

const LinkLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  border: 0;
  clip: rect(0 0 0 0);
`;

const LinkInput = styled.input`
  margin-left: 12px;
  font-size: 16px;
  flex-grow: 1;
  outline: none;

  @media (max-width: 767px) {
    font-size: 14px;
    margin-left: 8px;
  }
`;

const AddLinkButton = styled.button`
  width: 80px;
  height: 37px;
  padding: 10px 16px;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  color: #f5f5f5;
  font-size: 14px;
  font-weight: 600;
  font-family: Pretendard, san-serif;
  white-space: nowrap;
`;

const Observed = styled.div`
  height: 1px;
  margin-bottom: 53px;
  &.big {
    height: 137px;

    @media (max-width: 767px) {
      height: 105px;
    }
  }
`;
