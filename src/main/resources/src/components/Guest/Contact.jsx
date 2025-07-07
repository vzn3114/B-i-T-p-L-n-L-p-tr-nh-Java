import React from 'react';
import "../../static/assets/Contact.css";


export default function Contact() {
  return (
    <div className="contact-container contact-bg">
      <h1 className="contact-title">Liên hệ với Bệnh viện Hiếm muộn Care</h1>
      <div className="contact-info-grid">
        <div className="contact-info-block">
          <h2>🏥 Trụ sở chính</h2>
          <p>123 Đường Hy Vọng, Quận Bình An, TP. Hạnh Phúc</p>
          <p>Hotline: <a href="tel:18001234">1800 1234</a></p>
          <p>Email: <a href="mailto:info@hiemmuoncare.vn">info@hiemmuoncare.vn</a></p>
        </div>
        <div className="contact-info-block">
          <h2>🕒 Thời gian làm việc</h2>
          <p>Thứ 2 - Thứ 7: 7h30 - 17h30</p>
          <p>Chủ nhật: 8h00 - 12h00</p>
        </div>
      </div>
      <div className="contact-form-map">
        <form className="contact-form">
          <div className="contact-info-title">Gửi liên hệ nhanh</div>
          <input type="text" placeholder="Họ và tên" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Số điện thoại" required />
          <textarea placeholder="Nội dung liên hệ" rows={4} required></textarea>
          <button type="submit">Gửi liên hệ</button>
        </form>
      </div>
      <div className="contact-map-box">
        <iframe
          title="Bản đồ bệnh viện Care"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.123456789!2d105.123456789!3d21.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2z!5e0!3m2!1svi!2s!4v1610000000000!5m2!1svi!2s"
          width="100%"
          height="260"
          style={{ border: 0, borderRadius: '14px' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
