import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../static/assets/Navbar.css";
import logo from "../static/images/image.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Thêm useNavigate để chuyển hướng
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    // Kiểm tra token ban đầu
    setIsLoggedIn(!!localStorage.getItem("token"));

    // Theo dõi sự kiện storage để phát hiện thay đổi token
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Handlers cho dropdown Giới thiệu
  const handleAboutMouseEnter = () => {
    setIsAboutDropdownOpen(true);
  };

  const handleAboutMouseLeave = () => {
    setIsAboutDropdownOpen(false);
  };

  // Handlers cho dropdown Hồ sơ
  const handleProfileMouseEnter = () => {
    setIsProfileDropdownOpen(true);
  };

  const handleProfileMouseLeave = () => {
    setIsProfileDropdownOpen(false);
  };

  // Xử lý đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("token"); // Xóa token
    setIsLoggedIn(false); // Cập nhật trạng thái
    navigate("/"); // Chuyển hướng đến trang chủ
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src={logo}
          alt="Hiếm Muộn Care Logo"
          style={{
            height: "40px",
            marginRight: "10px",
            verticalAlign: "middle",
          }}
        />
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
          <Link to="/contact">Đặt lịch khám</Link>
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
            onMouseEnter={handleProfileMouseEnter}
            onMouseLeave={handleProfileMouseLeave}
          >
            <span className="dropdown-toggle">
              Hồ sơ <span className="dropdown-arrow">▼</span>
            </span>
            {isProfileDropdownOpen && (
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
                {/* <li>
                  <Link to="/customer/profile">Thông tin cá nhân</Link>
                </li> */}
                <li>
                  <Link to="/customer/feedback">Đánh giá</Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="logout-button">
                    Đăng xuất
                  </button>
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
