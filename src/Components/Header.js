import { useFetch } from "../useFetch";
import logoImg from "../images/Linkbrary.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeaderContainer = styled.div`
  background-color: #f0f6ff;
  width: 100%;
  height: 336px;
`;

const StyledNavBar = styled.div`
  background-color: #f0f6ff;
  display: flex;
  width: 100%;
  height: 92px;
  align-items: center;
  justify-content: space-between;
  padding: 32px 200px;
  gap: 8px;
  position: fixed;
  z-index: 1;

  @media (max-width: 1124px) {
    width: 100%;
    padding: 32px;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: 63px;
    padding: 18px 32px;
  }
`;

const StyledHeaderLogo = styled.img`
  width: 132px;
  height: 24px;
`;
const StyledUserProfile = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const StyledUserProfileImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

const StyledFolderInfoContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 200px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledFolderInfo = styled.div`
  width: 188px;
  height: 164px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const StyledFolderImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 47px;
`;

const StyledFolderOwnerName = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

const StyledFolderName = styled.p`
  width: auto;
  height: 48px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
`;

const url = "https://bootcamp-api.codeit.kr/api/sample";

function Nav() {
  const Userprofile = useFetch(`${url}/user`);

  return (
    <>
      <StyledNavBar>
        <Link to="/">
          <StyledHeaderLogo src={logoImg} alt="Linkbrary 로고" />
        </Link>
        {Userprofile ? (
          <StyledUserProfile>
            <StyledUserProfileImg
              src={Userprofile.profileImageSource}
              alt="유저 프로필사진"
            />
            <p>{Userprofile.email}</p>
          </StyledUserProfile>
        ) : (
          <button>로그인</button>
        )}
      </StyledNavBar>
    </>
  );
}

function FolderData() {
  const folderData = useFetch(`${url}/folder`);

  return (
    <StyledFolderInfoContent>
      {folderData && (
        <StyledFolderInfo>
          <StyledFolderImg
            src={folderData.folder.owner.profileImageSource}
            alt="프로필"
          />
          <StyledFolderOwnerName>
            @{folderData.folder.owner.name}
          </StyledFolderOwnerName>
          <StyledFolderName>{folderData.folder.name}</StyledFolderName>
        </StyledFolderInfo>
      )}
    </StyledFolderInfoContent>
  );
}

function Header() {
  return (
    <StyledHeaderContainer>
      <Nav />
      <FolderData />
    </StyledHeaderContainer>
  );
}

export default Header;
