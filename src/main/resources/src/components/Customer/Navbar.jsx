import React from "react";
import { Link } from "react-router-dom";
import "../../static/assets/Navbar.css";

const CustomerNavbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <Link to="/customer/dashboard">Bệnh nhân</Link>
    </div>
    <ul className="navbar-links">
      <li>
        <Link to="/customer/dashboard">Trang tổng quan</Link>
      </li>
      <li>
        <Link to="/customer/timeline">Timeline điều trị</Link>
      </li>
      <li>
        <Link to="/customer/notifications">Thông báo</Link>
      </li>
      <li>
        <Link to="/customer/profile">Hồ sơ</Link>
      </li>
      <li>
        <Link to="/customer/feedback">Đánh giá</Link>
      </li>
      <li>
        <Link to="/">Trang chủ</Link>
      </li>
      <li>
        <Link to="/login">Đăng xuất</Link>
      </li>
    </ul>
  </nav>
);

export default CustomerNavbar;
