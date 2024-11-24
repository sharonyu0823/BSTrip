// 使用者登入資料
import React from "react";
import Login from "./Login";
import NotLogin from "./NotLogin";

function Profile() {
  return (
    <div>
      <h1>Profile Info</h1>
      <Login />
      <NotLogin />
    </div>
  );
}

export default Profile;