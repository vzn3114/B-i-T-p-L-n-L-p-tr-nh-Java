import React from "react";
import { useNavigate } from "react-router-dom";
import "../../static/assets/CustomerDashboard.css";

const CustomerDashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="customer-dashboard">
        {/* Phần header */}
        <div className="dashboard-header">
          <img src="/logo192.png" alt="avatar" className="dashboard-avatar" />
          <h2>
            Xin chào, Nguyễn Văn A!{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h2>
          <p>Chúc bạn một ngày tốt lành và điều trị thành công!</p>
        </div>

        {/* Phần trạng thái */}
        <div className="dashboard-status">
          <h3>Trạng thái điều trị</h3>

          <div className="status-card">
            <span className="status-icon">🩺</span>
            <div>
              <strong>Đang điều trị:</strong> IVF - Giai đoạn chuyển phôi
              <br />
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

        {/* Phần hành động */}
        <div className="dashboard-actions">
          <button
            className="dashboard-btn"
            onClick={() => navigate("/customer/timeline")}
          >
            Xem timeline điều trị
          </button>
          <button
            className="dashboard-btn"
            onClick={() => navigate("/customer/profile")}
          >
            Cập nhật hồ sơ
          </button>
          <button
            className="dashboard-btn"
            onClick={() => navigate("/customer/feedback")}
          >
            Gửi đánh giá
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomerDashboard;
