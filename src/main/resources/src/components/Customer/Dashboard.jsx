import React from 'react';
import CustomerNavbar from './Navbar';
import '../../assets/CustomerDashboard.css';

const CustomerDashboard = () => (
  <>
    <CustomerNavbar />
    <div className="customer-dashboard">
      <div className="dashboard-header">
        <img src="/logo192.png" alt="avatar" className="dashboard-avatar" />
        <h2>Xin chào, Nguyễn Văn A! <span role="img" aria-label="wave">👋</span></h2>
        <p>Chúc bạn một ngày tốt lành và điều trị thành công!</p>
      </div>
      <div className="dashboard-status">
        <h3>Trạng thái điều trị</h3>
        <div className="status-card">
          <span className="status-icon">🩺</span>
          <div>
            <strong>Đang điều trị:</strong> IVF - Giai đoạn chuyển phôi<br/>
            <small>Ngày bắt đầu: 10/06/2024</small>
          </div>
        </div>
        <div className="status-card">
          <span className="status-icon">📅</span>
          <div>
            <strong>Lịch hẹn tiếp theo:</strong> 15/06/2024 - Tái khám siêu âm
          </div>
        </div>
      </div>
      <div className="dashboard-actions">
        <button className="dashboard-btn">Xem timeline điều trị</button>
        <button className="dashboard-btn">Cập nhật hồ sơ</button>
        <button className="dashboard-btn">Gửi đánh giá</button>
      </div>
    </div>
  </>
);

export default CustomerDashboard; 