import React from "react";
import "../static/assets/Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <img src="/logo192.png" alt="Logo" className="footer-logo" />
      <div className="footer-info">
        <p>Trung tâm Điều trị Hiếm Muộn Care</p>
        <p>Địa chỉ: 123 Đường Hy Vọng, Quận Bình An, TP. Hạnh Phúc</p>
        <p>Hotline: 1800 1234 | Email: info@hiemmuoncare.vn</p>
        <div className="footer-social">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
        <p className="footer-copyright">
          &copy; 2024 Hiếm Muộn Care. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
