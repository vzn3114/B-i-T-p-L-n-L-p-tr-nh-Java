import React from "react";
import { Link } from "react-router-dom";
import "../../static/assets/Navbar.css";

const AdminNavbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <Link to="/admin/dashboard">Quản trị viên</Link>
    </div>
    <ul className="navbar-links">
      <li>
        <Link to="/admin/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/admin/users">Quản lý người dùng</Link>
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

export default AdminNavbar;
