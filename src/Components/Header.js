import logo from "../images/Linkbrary.svg";
import { Link } from "react-router-dom";
import { getProfileData, getFolderData } from "../api.js";
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledHeaderContainer = styled.header`
  background-color: #f0f6ff;
  width: 100%;
  height: 336px;
`;

const StyledHeaderBar = styled.div`
  display: flex;
  width: auto;
  height: 92px;
  align-items: center;
  justify-content: space-between;
  padding: 32px 200px;
  gap: 8px;
`;
const StyledHeaderLogo = styled.img`
  width: 132px;
  height: 24px;
`;
const StyledHeaderProfile = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;
const StyledProfileImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

const StyledHeaderFolder = styled.div`
  width: auto;
  height: 244px;
  padding: 20px 200px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledHeaderFolderContent = styled.div`
  width: 188px;
  height: 164px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const StyledHeaderFolderImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 47px;
`;

const StyledHeaderFolderFavorite = styled.p`
  width: auto;
  height: 48px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
`;

function Profile() {
  const [profileData, setProfileData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProfileData();
        setProfileData(data);
      } catch (error) {
        alert("프로필 불러오기 에러", error);
      }
    }
    fetchData();
  }, []);
  if (!profileData) {
    return <button>로그인</button>;
  }

  return (
    <>
      <StyledHeaderProfile>
        <StyledProfileImg
          src={profileData.profileImageSource}
          alt="프로필 이미지"
        />
        <p>{profileData.email}</p>
      </StyledHeaderProfile>
    </>
  );
}

function Folder() {
  const [folderData, setFolderData] = useState(null);

  useEffect(() => {
    async function folderFetchData() {
      try {
        const folder = await getFolderData();
        setFolderData(folder);
      } catch (error) {
        console.log("Error", error);
      }
    }
    folderFetchData();
  }, []);
  if (!folderData) {
    return;
  }

  const folder = folderData.folder;

  return (
    <>
      <StyledHeaderFolderImg
        src={folder.owner.profileImageSource}
        alt="폴더 이미지"
      />
      <p>@ {folder.owner.name}</p>
      <StyledHeaderFolderFavorite>{folder.name}</StyledHeaderFolderFavorite>
    </>
  );
}

function Header() {
  return (
    <StyledHeaderContainer>
      <StyledHeaderBar>
        <Link to="/">
          <StyledHeaderLogo src={logo} alt="Linkbrary 로고" />
        </Link>
        <Profile />
      </StyledHeaderBar>
      <StyledHeaderFolder>
        <StyledHeaderFolderContent>
          <Folder />
        </StyledHeaderFolderContent>
      </StyledHeaderFolder>
    </StyledHeaderContainer>
  );
}

export default Header;
