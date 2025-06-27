import React from "react";
import CustomerNavbar from "./Navbar";
import "../../static/assets/Notifications.css";

const Notifications = () => (
  <>
    <CustomerNavbar />
    <div className="notifications-container">
      <h2>Thông báo của bạn</h2>
      <ul className="notifications-list">
        <li className="notification-item urgent">
          <span className="notification-icon">⏰</span>
          Nhắc lịch: Tiêm thuốc lúc 8:00 sáng hôm nay
        </li>
        <li className="notification-item">
          <span className="notification-icon">🧪</span>
          Nhắc lịch: Xét nghiệm nội tiết vào ngày 12/06/2024
        </li>
        <li className="notification-item">
          <span className="notification-icon">🩺</span>
          Nhắc lịch: Tái khám siêu âm vào ngày 15/06/2024
        </li>
      </ul>
    </div>
  </>
);

export default Notifications;
