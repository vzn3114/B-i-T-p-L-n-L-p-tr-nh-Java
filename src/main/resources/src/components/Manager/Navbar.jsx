import React from "react";
import { Link } from "react-router-dom";
import "../../static/assets/Navbar.css";

const ManagerNavbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <Link to="/manager/services">Quản lý</Link>
    </div>
    <ul className="navbar-links">
      <li>
        <Link to="/manager/services">Quản lý dịch vụ</Link>
      </li>
      <li>
        <Link to="/manager/doctors">Quản lý bác sĩ</Link>
      </li>

      <li>
        <Link to="/login">Đăng xuất</Link>
      </li>
    </ul>
  </nav>
);

export default ManagerNavbar;
