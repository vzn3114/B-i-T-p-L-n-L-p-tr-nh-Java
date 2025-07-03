import React from "react";
import "../../static/assets/TreatmentTimeline.css";

const TreatmentTimeline = () => (
  <>
    <div className="timeline-container">
      <h2>Timeline điều trị</h2>
      <ul className="timeline-list">
        <li className="timeline-item">
          <span className="timeline-icon">💉</span>
          <div>
            <strong>Tiêm thuốc kích trứng</strong>
            <p>Ngày 10/06/2024 - Đã hoàn thành</p>
          </div>
        </li>
        <li className="timeline-item">
          <span className="timeline-icon">🧪</span>
          <div>
            <strong>Xét nghiệm nội tiết</strong>
            <p>Ngày 12/06/2024 - Đã hoàn thành</p>
          </div>
        </li>
        <li className="timeline-item">
          <span className="timeline-icon">🩺</span>
          <div>
            <strong>Thăm khám siêu âm</strong>
            <p>Ngày 15/06/2024 - Sắp tới</p>
          </div>
        </li>
        <li className="timeline-item">
          <span className="timeline-icon">
            <img
              src="/logo192.png"
              alt="Fertilization"
              className="timeline-img"
            />
          </span>
          <div>
            <strong>Ngày thụ tinh</strong>
            <p>Dự kiến: 18/06/2024</p>
          </div>
        </li>
      </ul>
    </div>
  </>
);

export default TreatmentTimeline;
