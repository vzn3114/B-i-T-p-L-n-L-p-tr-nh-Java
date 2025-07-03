import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../static/assets/Navbar.css";

const Navbar = () => {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const handleAboutMouseEnter = () => {
    setIsAboutDropdownOpen(true);
  };

  const handleAboutMouseLeave = () => {
    setIsAboutDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Hiếm Muộn Care</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Trang chủ</Link>
        </li>
        <li>
          <Link to="/services">Dịch vụ</Link>
        </li>
        <li
          className="dropdown"
          onMouseEnter={handleAboutMouseEnter}
          onMouseLeave={handleAboutMouseLeave}
        >
          <Link to="/introduction/visionmission" className="dropdown-toggle">
            Giới thiệu
            <span className="dropdown-arrow">▼</span>
          </Link>
          {isAboutDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/introduction/doctors">Đội ngũ bác sĩ</Link>
              </li>
              <li>
                <Link to="/introduction/facilities">Cơ sở vật chất</Link>
              </li>
              <li>
                <Link to="/introduction/visionmission">Tầm nhìn - Sứ mệnh</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/articles">Bài viết</Link>
        </li>
        <li>
          <Link to="/login">Đăng nhập</Link>
        </li>
        <li>
          <Link to="/register">Đăng ký</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
