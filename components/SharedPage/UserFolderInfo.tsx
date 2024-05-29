import Image from "next/image";
import styled from "styled-components";

interface Props {
  name: string | null;
  profileImg: string | null;
  folderName: string | null;
}

const UserFolderInfo = ({ name, profileImg, folderName }: Props) => {
  if (!profileImg) return <Empty></Empty>;
  return (
    <>
      <Info>
        <Image
          className="Info_Img"
          src={profileImg}
          alt="유저이미지"
          height={60}
          width={60}
        />
        <span className="Info_nameSpan">{name}</span>
      </Info>
      <FolderName>{folderName}</FolderName>
    </>
  );
};

export default UserFolderInfo;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;

  & .Info_Img {
    width: 60px;
    height: 60px;
  }

  & .Info_nameSpan {
    line-height: 24px;
  }
`;

const FolderName = styled.h2`
  margin-top: 20px;
  height: 48px;
  font-size: 40px;
  font-weight: 600;
  line-height: normal;
`;

const Empty = styled.div`
  height: 164px;
  width: 100%;
`;
