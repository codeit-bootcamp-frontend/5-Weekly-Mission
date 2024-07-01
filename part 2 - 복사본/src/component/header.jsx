import "./header.css";
import { useState, useEffect } from "react";
import { getUserData } from "./api/userApi";

const Header = () => {
  const [userData, setUserData] = useState({ userProfile: {} });

  useEffect(() => {
    const resData = async () => {
      const data = await getUserData();
      setUserData(data);
    };
    return resData;
  }, []);

  const email = userData.userProfile?.email;
  const profileImg = userData.userProfile?.profileImageSource;

  return (
    <header>
      <a href="index.html">
        <img className="logo" src="img/logo.svg" alt="logo" />
      </a>
      <div className="user-profile">
        <img className="profile-Img" src={profileImg} alt="profileImg"></img>
        <div className="user-email font6">{email}</div>
        {/* <a href="signin.html">
          <button className="btn-large">로그인</button>
        </a> */}
      </div>
    </header>
  );
};

export default Header;
