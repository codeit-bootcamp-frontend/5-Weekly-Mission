import { useAsync } from "../api/useAsync";
import NavProfile from "./NavProfile";
import "./NavigationBar.css";
import React from "react";

function NavigationBar({ position }: any) {
  const { userInfo, userFolder, loading, error } = useAsync();

  return (
    <nav className="NavigationBar">
      <div className="NavigationBar-items" style={{ position: position }}>
        <a href="/">
          <img
            className="NavigationBar-logo"
            src="../assets/Linkbrary.svg"
            alt="로고"
          ></img>
        </a>
        <div className="NavigationBar-profile">
          {userInfo ? (
            <NavProfile></NavProfile>
          ) : (
            <button className="NavigationBar-LoginButton">로그인</button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
