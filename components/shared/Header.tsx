import styled from 'styled-components';
import { UserData } from '@/common/api';
import { SIZE } from '@/constants/size';
import Image from 'next/image';
import noImage from '@/assets/images/noImage.jpg';

const StyledHeader = styled.header`
  width: 100%;
  background-color: #f0f6ff;
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${SIZE.tablet.minWidth}) {
    height: 244px;
  }

  @media screen and (max-width: ${SIZE.mobile.maxWidth}) {
    height: 161px;
  }
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProfileImg = styled(Image)`
  border-radius: 50%;
  margin-bottom: 15px;
  @media screen and (min-width: ${SIZE.tablet.minWidth}) {
    width: 60px;
    height: 60px;
  }

  @media screen and (max-width: ${SIZE.mobile.maxWidth}) {
    width: 40px;
    height: 40px;
  }
`;
const UserNameSpan = styled.span`
  margin-bottom: 20px;
  @media screen and (min-width: ${SIZE.tablet.minWidth}) {
    font-size: 16px;
  }

  @media screen and (max-width: ${SIZE.mobile.maxWidth}) {
    font-size: 14px;
  }
`;
const FolderNameSpan = styled.span`
  @media screen and (min-width: ${SIZE.tablet.minWidth}) {
    font-size: 48px;
  }

  @media screen and (max-width: ${SIZE.mobile.maxWidth}) {
    font-size: 38px;
  }
`;

interface HeaderProps {
  userData: { data?: UserData | null; loading?: boolean; error?: Error | null };
  folderName?: string;
}

function Header({ userData, folderName }: HeaderProps) {
  const { data, loading, error } = userData;

  return (
    <StyledHeader>
      <StyledDiv>
        {!loading && error === null ? (
          <>
            <ProfileImg src={data?.image_source || noImage} width={60} height={60} alt='프로필' />
            <UserNameSpan>{data?.name}</UserNameSpan>
            <FolderNameSpan>{folderName}</FolderNameSpan>
          </>
        ) : (
          <div></div>
        )}
      </StyledDiv>
    </StyledHeader>
  );
}

export default Header;
