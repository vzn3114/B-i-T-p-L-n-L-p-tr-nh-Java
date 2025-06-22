import React from 'react';
import CustomerNavbar from './Navbar';
import '../../assets/Feedback.css';

const Feedback = () => (
  <>
    <CustomerNavbar />
    <div className="feedback-container">
      <h2>Gửi đánh giá dịch vụ & bác sĩ</h2>
      <form className="feedback-form">
        <label>Chọn mức độ hài lòng:</label>
        <div className="feedback-stars">
          <span role="img" aria-label="star">⭐</span>
          <span role="img" aria-label="star">⭐</span>
          <span role="img" aria-label="star">⭐</span>
          <span role="img" aria-label="star">⭐</span>
          <span role="img" aria-label="star">⭐</span>
        </div>
        <label>Nhận xét của bạn:</label>
        <textarea placeholder="Nhập nhận xét..." rows="4"></textarea>
        <button type="submit">Gửi đánh giá</button>
      </form>
      <img src="/logo192.png" alt="feedback" className="feedback-img" />
    </div>
  </>
);

export default Feedback; 