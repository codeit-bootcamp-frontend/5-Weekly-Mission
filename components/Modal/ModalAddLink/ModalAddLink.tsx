import ModalFrame from "../ModalFrame";
import BlueButton from "../BlueButton";
import styled from "styled-components";
import Folder from "./Folder";

interface AddLinkProps {
  url?: string;
  onClick: (...props: any[]) => void;
  folder: any;
}

const ModalAddLink = ({ url, onClick, folder }: AddLinkProps) => {
  const Adding = () => {
    console.log("추가 되는 무언가");
  };
  return (
    <ModalFrame name="폴더에 추가" onClick={onClick}>
      <Span>{url}</Span>
      <Folders>
        {folder.map((item: any) => {
          if (item.id !== 14)
            return <Folder item={item} key={item?.id * -17} />;
        })}
      </Folders>
      <BlueButton onClick={Adding}>추가하기</BlueButton>
    </ModalFrame>
  );
};

export default ModalAddLink;

const Span = styled.span`
  color: #9fa6b2;
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 8px 0 24px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Folders = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  margin-bottom: 24px;
`;
