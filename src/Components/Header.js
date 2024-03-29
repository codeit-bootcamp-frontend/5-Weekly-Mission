import logo from "../images/Linkbrary.svg";
// import profileImg from "../images/profile.svg";
import { Link } from "react-router-dom";
import { getProfileData, getFolderData } from "../api.js";
import { useState, useEffect } from "react";

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
      <div className="header__profile">
        <img
          className="profile__img"
          src={profileData.profileImageSource}
          alt="프로필 이미지"
        />
        <p>{profileData.email}</p>
      </div>
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

  return (
    <>
      <img
        className="folder__img"
        src={folderData.folder.owner.profileImageSource}
        alt="폴더 이미지"
      />
      <p>@ {folderData.folder.owner.name}</p>
      <p className="folder__favorite">{folderData.folder.name}</p>
    </>
  );
}

function Header() {
  return (
    <header>
      <div className="header__bar">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Linkbrary 로고" />
        </Link>
        <Profile />
      </div>
      <div className="folder">
        <div className="folder__content">
          <Folder />
        </div>
      </div>
    </header>
  );
}

export default Header;
