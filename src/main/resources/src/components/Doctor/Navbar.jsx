import React from "react";
import { Link } from "react-router-dom";
import "../../static/assets/Navbar.css";

const DoctorNavbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <Link to="/doctor/patients">Bác sĩ</Link>
    </div>
    <ul className="navbar-links">
      <li>
        <Link to="/doctor/patients">Danh sách bệnh nhân</Link>
      </li>
      <li>
        <Link to="/doctor/treatment-plan">Kế hoạch điều trị</Link>
      </li>
      <li>
        <Link to="/doctor/visit-record">Ghi nhận thăm khám</Link>
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

export default DoctorNavbar;
