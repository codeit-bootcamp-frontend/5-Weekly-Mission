import { useAsync } from "../api/useAsync";
import React from "react";

function NavProfile() {
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
  if (!userInfo) {
    return null;
  }
  return (
    <>
      <img
        className="NavigationBar-profile-img"
        src={userInfo.profileImageSource}
        alt="Profile"
      ></img>
      <span className="NavaigationBar-profile-email">{userInfo.email}</span>
    </>
  );
}
export default NavProfile;
