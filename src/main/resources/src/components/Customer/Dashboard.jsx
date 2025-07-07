import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../static/assets/CustomerDashboard.css";

const CustomerDashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [treatment, setTreatment] = useState(null);
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);

  // Giả sử user_id được lấy từ context, token, hoặc route params
  const userId = 3; // Thay bằng cách lấy user_id động (ví dụ: từ auth context)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lấy thông tin người dùng
        const userResponse = await fetch(
          `http://localhost:8080/api/customer/${userId}`
        );
        if (!userResponse.ok)
          throw new Error("Lỗi khi lấy thông tin người dùng");
        const userData = await userResponse.json();
        setUsername(userData);

        // Lấy trạng thái điều trị
        const treatmentResponse = await fetch(
          `http://localhost:8080/api/customer/${userId}/treatments`
        );
        if (!treatmentResponse.ok)
          throw new Error("Lỗi khi lấy thông tin điều trị");
        const treatmentData = await treatmentResponse.json();
        setTreatment(treatmentData[0]);

        // Lấy lịch hẹn sắp tới
        const appointmentResponse = await fetch(
          `http://localhost:8080/api/customer/${userId}/appointments`
        );
        if (!appointmentResponse.ok)
          throw new Error("Lỗi khi lấy thông tin lịch hẹn");
        const appointmentData = await appointmentResponse.json();
        setAppointment(appointmentData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [userId]);

  if (loading) {
    return <div>Đang tải...</div>;
  }

  return (
    <div className="customer-dashboard">
      {/* Phần header */}
      <div className="dashboard-header">
        <img src="/logo192.png" alt="avatar" className="dashboard-avatar" />
        <h2>
          Xin chào, {username?.full_name || "Khách hàng"}!{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h2>
        <p>Chúc bạn một ngày tốt lành và điều trị thành công!</p>
      </div>

      {/* Phần trạng thái */}
      <div className="dashboard-status">
        <h3>Trạng thái điều trị</h3>

        {treatment ? (
          <div className="status-card">
            <span className="status-icon">🩺</span>
            <div>
              <strong>Đang điều trị:</strong> {treatment.method} -{" "}
              {treatment.service_name}
              <br />
              <small>
                Ngày bắt đầu:{" "}
                {new Date(treatment.start_date).toLocaleDateString("vi-VN")}
              </small>
            </div>
          </div>
        ) : (
          <div>Chưa có thông tin điều trị.</div>
        )}

        {appointment ? (
          <div className="status-card">
            <span className="status-icon">📅</span>
            <div>
              <strong>Lịch hẹn tiếp theo:</strong>{" "}
              {new Date(appointment.appointment_time).toLocaleString("vi-VN")} -{" "}
              {appointment.service_name}
            </div>
          </div>
        ) : (
          <div>Chưa có lịch hẹn sắp tới.</div>
        )}
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
  );
};

export default CustomerDashboard;
