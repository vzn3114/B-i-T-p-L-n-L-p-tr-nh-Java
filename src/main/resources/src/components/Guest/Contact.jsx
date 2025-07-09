import React, { useState } from 'react';
import "../../static/assets/Contact.css";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const username = localStorage.getItem("username");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const token = localStorage.getItem("token");
    try {
      const res = await fetch("/api/appointment-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token ? `Bearer ${token}` : undefined
        },
        body: JSON.stringify({ fullName, phone, address })
      });
      if (res.ok) {
        setMessage("Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.");
        setFullName(""); setPhone(""); setAddress("");
      } else {
        const err = await res.text();
        console.log("Lỗi backend:", err);
        setMessage("Vui lòng đăng nhập tài khoản để thực hiện! " + err);
      }
    } catch (err) {
      setMessage("Lỗi kết nối máy chủ!");
    }
    setLoading(false);
  };

  return (
    <div className="contact-container contact-bg">
      <h1 className="contact-title">Đặt lịch khám tại Bệnh viện Hiếm muộn Care</h1>
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
        {username ? (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-info-title">Đăng ký lịch khám</div>
            <input type="text" placeholder="Họ và tên" required value={fullName} onChange={e => setFullName(e.target.value)} />
            <input type="tel" placeholder="Số điện thoại" required value={phone} onChange={e => setPhone(e.target.value)} />
            <input type="text" placeholder="Địa chỉ" required value={address} onChange={e => setAddress(e.target.value)} />
            <button type="submit" disabled={loading}>{loading ? "Đang gửi..." : "Đăng ký ngay"}</button>
            {message && <div style={{marginTop:8, color: message.startsWith('Đăng ký thành công') ? 'green' : 'red'}}>{message}</div>}
          </form>
        ) : (
          <div style={{color: 'red', fontWeight: 500, padding: 16, background: '#fff', borderRadius: 8, textAlign: 'center'}}>
            Bạn cần <a href="/guest/login">đăng nhập</a> hoặc <a href="/guest/register">đăng ký tài khoản</a> để sử dụng chức năng đặt lịch khám.
          </div>
        )}
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
