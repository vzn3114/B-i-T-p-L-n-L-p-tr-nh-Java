import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../static/assets/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

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
        {!isLoggedIn ? (
          <>
            <li>
              <Link to="/login">Đăng nhập</Link>
            </li>
            <li>
              <Link to="/register">Đăng ký</Link>
            </li>
          </>
        ) : (
          <li
            className="dropdown"
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            <span className="dropdown-toggle">
              Hồ sơ <span className="dropdown-arrow">▼</span>
            </span>
            {isAboutDropdownOpen && (
              <ul className="dropdown-menu">
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
                  <Link to="/customer/profile">Thông tin cá nhân</Link>
                </li>
                <li>
                  <Link to="/customer/feedback">Đánh giá</Link>
                </li>
                <li>
                  <Link to="/logout">Đăng xuất</Link>
                </li>
              </ul>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
