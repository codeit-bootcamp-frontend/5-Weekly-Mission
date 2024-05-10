import { getUserInfo } from "../api/getUserInfo";
import { useAsync } from "../api/useAsync";
import { useState, useEffect } from "react";
import "./Profile.css";
import { getUserFolder } from "../api/getUserFolder";
import React from "react";

function Profile() {
  const { userInfo, userFolder, loading, error } = useAsync();

  // 로딩 중일 때
  if (loading) {
    return <div>Loading...</div>;
  }

  // 에러 발생 시
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // 사용자 정보가 없을 때
  if (!userInfo || !userFolder) {
    return null;
  }
  // 사용자 정보 출력
  return (
    <div className="Profile">
      <img
        className="Profile-img"
        src={userFolder.folder.owner.profileImageSource}
        alt="Profile"
      />
      <p className="Profile-name">{userFolder.folder.owner.name}</p>
      <p className="Profile-folderName">{userFolder.folder.name}</p>
    </div>
  );
}

export default Profile;
