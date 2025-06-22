import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <Link to="/">Hiếm Muộn Care</Link>
    </div>
    <ul className="navbar-links">
      <li><Link to="/">Trang chủ</Link></li>
      <li><Link to="/services">Dịch vụ</Link></li>
      <li><Link to="/articles">Bài viết</Link></li>
      <li><Link to="/login">Đăng nhập</Link></li>
      <li><Link to="/register">Đăng ký</Link></li>
    </ul>
  </nav>
);

export default Navbar; 