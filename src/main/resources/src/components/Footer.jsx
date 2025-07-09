import React from "react";
import "../static/assets/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* Cột 1: Logo + Thông tin liên hệ */}
        <div className="footer-col">
          <div className="footer-logo" style={{ marginBottom: 24 }}>
            <img src="/favicon.ico" alt="Logo" />
            <div>
              <div className="footer-hospital-name">BỆNH VIỆN HIẾM MUỘN CARE</div>
              <div className="footer-hospital-desc">HỖ TRỢ SINH SẢN & NAM HỌC</div> 
            </div>
          </div> 
          <div className="footer-contact">
            <b>BỆNH VIỆN HIẾM MUỘN CARE</b>
            <ul>
              <li>Địa chỉ: 123 Đường Hy Vọng, Quận Bình Thạnh, Tp. Hồ Chí Minh (<a href="#">Xem bản đồ</a>)</li>
              <li>Hotline: <b>1800.1234</b></li>
              <li>Mobile: <b>0901.234.567</b></li>
              <li>SDT Sở Y Tế TP.HCM: 028.3930.9999</li>
              <li>SDT Bộ Y Tế: 1900.8888</li>
              <li>Email: lienhe@hiemmuoncare.vn</li>
            </ul>
          </div>
        </div>
        {/* Cột 2: Đặt lịch khám */}
        <div className="footer-col">
          <div className="footer-section">
            <div className="footer-title">Liên hệ với Bệnh viện Hiếm muộn Care</div>
            <div className="footer-note">
              <i>Gửi liên hệ nhanh*</i> Mọi thông tin của khách hàng sẽ được bảo mật tuyệt đối.
            </div>
            <form className="footer-form">
              <input type="text" placeholder="Họ và tên" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Số điện thoại" required />
              <textarea placeholder="Nội dung liên hệ" rows={4} required></textarea>
              <button type="submit">Gửi liên hệ</button>
            </form>
          </div>
          <div className="footer-section">
            
          </div>
        </div>
        {/* Cột 3: Chính sách hỗ trợ khách hàng */}
        <div className="footer-col">
          <div className="footer-section">
            <div className="footer-title">Lịch làm việc: Thứ 2 - Thứ 7: 7h30 - 17h00 l Chủ Nhật: 7h30 - 12h00 (Chiều nghỉ).</div> 
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
