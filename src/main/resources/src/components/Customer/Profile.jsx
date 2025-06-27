import React from "react";
import CustomerNavbar from "./Navbar";
import "../../static/assets/Profile.css";

const Profile = () => (
  <>
    <CustomerNavbar />
    <div className="profile-container">
      <h2>Hồ sơ cá nhân</h2>
      <div className="profile-header">
        <img src="/logo192.png" alt="avatar" className="profile-avatar" />
        <div>
          <h3>Nguyễn Văn A</h3>
          <p>Email: nguyenvana@gmail.com</p>
          <p>Ngày sinh: 01/01/1990</p>
          <p>
            Trạng thái:{" "}
            <span className="profile-status success">Đang điều trị</span>
          </p>
        </div>
      </div>
      <button className="profile-edit-btn">Chỉnh sửa hồ sơ</button>
    </div>
  </>
);

export default Profile;
