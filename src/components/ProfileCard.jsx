import React from "react";
import profileImg from "../assets/profile.jpg";

const ProfileCard = () => {
  return (
    <div className="profile">
      <img src={profileImg} width="300px" alt="프로필" />
      <div className="profile-info">
        <h3>이형우</h3>
        <p>안녕하세요! 저는 동국대학교 정보통신공학전공 2020112142 이형우라고 합니다.</p>
      </div>
    </div>
  );
};

export default ProfileCard; 