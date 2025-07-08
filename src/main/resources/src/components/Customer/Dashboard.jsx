import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../static/assets/CustomerDashboard.css";
import axios from "axios";

const CustomerDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [treatments, setTreatments] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!token) {
          throw new Error("Vui lòng đăng nhập để xem bảng điều khiển.");
        }

        const axiosInstance = axios.create({
          baseURL: "http://localhost:8080/api",
          headers: { Authorization: `Bearer ${token}` },
        });

        const userResponse = await axiosInstance.get("/users/me");
        setUser(userResponse.data);

        if (userRole !== "CUSTOMER") {
          throw new Error(
            "Truy cập bị từ chối: Bảng điều khiển này chỉ dành cho khách hàng."
          );
        }

        const treatmentResponse = await axiosInstance.get("/treatments/me");
        setTreatments(treatmentResponse.data);

        const appointmentResponse = await axiosInstance.get("/appointments/me");
        setAppointments(appointmentResponse.data);
      } catch (error) {
        console.error(
          "Lỗi khi lấy dữ liệu:",
          error.response ? error.response.data : error.message
        );
        if (error.response?.status === 401) {
          setError("Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.");
          setTimeout(handleLogout, 2000);
        } else if (error.response?.status === 403) {
          setError("Truy cập bị từ chối. Vui lòng liên hệ quản trị viên.");
        } else {
          setError(
            error.message || "Lỗi khi lấy dữ liệu. Vui lòng thử lại sau."
          );
        }
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchData();
    } else {
      setError("Vui lòng đăng nhập để xem bảng điều khiển.");
      setLoading(false);
    }
  }, [token, navigate]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Đang tải...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <button className="error-button" onClick={handleLogout}>
          Đăng nhập
        </button>
      </div>
    );
  }

  const latestTreatment =
    treatments.length > 0
      ? treatments.sort(
          (a, b) => new Date(b.startDate) - new Date(a.startDate)
        )[0]
      : null;

  const nextAppointment =
    appointments.length > 0
      ? appointments
          .filter((appt) => appt.status === "SCHEDULED")
          .sort(
            (a, b) => new Date(a.appointmentTime) - new Date(b.appointmentTime)
          )[0]
      : null;

  return (
    <div className="customer-dashboard">
      <div className="dashboard-header">
        <img src="/logo192.png" alt="avatar" className="dashboard-avatar" />
        <h2 className="dashboard-title">
          Xin chào, {user?.fullName || "Khách hàng"}!{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h2>
        <p className="dashboard-subtitle">
          Chúc bạn một ngày tốt lành và điều trị thành công!
        </p>
      </div>

      {/* <div className="dashboard-status">
        <h3 className="status-title">Trạng thái điều trị</h3>
        <div className="status-grid">
          <div className="status-card">
            <span className="status-icon">🩺</span>
            <div className="status-content">
              <h4>Điều trị hiện tại</h4>
              {latestTreatment ? (
                <>
                  <p className="status-primary">
                    {latestTreatment.method} - {latestTreatment.serviceName}
                  </p>
                  <p className="status-secondary">
                    Bắt đầu:{" "}
                    {new Date(latestTreatment.startDate).toLocaleDateString(
                      "vi-VN"
                    )}
                  </p>
                </>
              ) : (
                <p className="status-empty">Chưa có thông tin điều trị.</p>
              )}
            </div>
          </div>

          <div className="status-card">
            <span className="status-icon">📅</span>
            <div className="status-content">
              <h4>Lịch hẹn tiếp theo</h4>
              {nextAppointment ? (
                <>
                  <p className="status-primary">
                    {new Date(nextAppointment.appointmentTime).toLocaleString(
                      "vi-VN"
                    )}
                  </p>
                  <p className="status-secondary">
                    {nextAppointment.serviceName}
                  </p>
                </>
              ) : (
                <p className="status-empty">Chưa có lịch hẹn sắp tới.</p>
              )}
            </div>
          </div>
        </div>
      </div> */}

      <div className="dashboard-actions">
        <button
          className="dashboard-btn"
          onClick={() => navigate("/customer/timeline")}
        >
          Xem timeline điều trị
        </button>

        <button
          className="dashboard-btn"
          onClick={() => navigate("/customer/timeline")}
        >
          Xem thông báo điều trị
        </button>

        {/* <button
          className="dashboard-btn"
          onClick={() => navigate("/customer/profile")}
        >
          Cập nhật hồ sơ
        </button> */}

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
