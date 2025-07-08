import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../static/assets/TreatmentTimeline.css";

const TreatmentTimeline = () => {
  const [treatments, setTreatments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  // Fetch treatments from API
  useEffect(() => {
    const fetchTreatments = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:8080/api/treatments/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTreatments(response.data);
        setLoading(false);
      } catch (err) {
        setError("Không thể tải dữ liệu điều trị. Vui lòng thử lại.");
        setLoading(false);
      }
    };

    fetchTreatments();
  }, []);

  // Map phase to icon
  const getTimelineIcon = (phase) => {
    switch (phase) {
      case "Tiêm thuốc kích trứng":
        return "🧪";
      case "Xét nghiệm nội tiết":
        return "💉";
      case "Thăm khám siêu âm":
        return "🩺";
      case "Kích thích buồng trứng":
        return (
          <img
            src="/logo192.png"
            alt="Fertilization"
            className="timeline-img"
          />
        );
      default:
        return "❓";
    }
  };

  // Map status to badge color
  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case "hoàn thành":
        return "badge badge-success";
      case "đang thực hiện":
        return "badge badge-progress";
      case "chưa bắt đầu":
        return "badge badge-pending";
      default:
        return "badge badge-default";
    }
  };

  // Toggle expanded details
  const toggleDetails = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (loading) return <div className="loading">Đang tải...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="timeline-container">
      <h2>Timeline Điều Trị</h2>
      <ul className="timeline-list">
        {treatments.map((treatment) => (
          <li key={treatment.id} className="timeline-item">
            <span className="timeline-icon">
              {getTimelineIcon(treatment.phase)}
            </span>
            <div className="timeline-content">
              <div
                className="timeline-header"
                onClick={() => toggleDetails(treatment.id)}
              >
                <div>
                  <strong>{treatment.phase}</strong>
                  <p>
                    {new Date(treatment.startDate).toLocaleDateString("vi-VN")}{" "}
                    -{" "}
                    <span className={getStatusBadge(treatment.status)}>
                      {treatment.status}
                    </span>
                  </p>
                </div>
                <span
                  className={`toggle-icon ${
                    expandedId === treatment.id ? "expanded" : ""
                  }`}
                >
                  ▼
                </span>
              </div>
              {expandedId === treatment.id && (
                <div className="timeline-details">
                  <p>
                    <strong>Ghi chú:</strong>{" "}
                    {treatment.notes || "Không có ghi chú."}
                  </p>
                  <p>
                    <strong>Bác sĩ phụ trách:</strong>{" "}
                    {treatment.doctor || "Chưa chỉ định."}
                  </p>
                  {treatment.endDate && (
                    <p>
                      <strong>Ngày kết thúc:</strong>{" "}
                      {new Date(treatment.endDate).toLocaleDateString("vi-VN")}
                    </p>
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TreatmentTimeline;
