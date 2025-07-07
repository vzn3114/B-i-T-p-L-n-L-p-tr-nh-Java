import React, { useState } from "react";
import DoctorNavbar from "./Navbar";
import "../../static/assets/TreatmentPlan.css";

const TreatmentPlan = () => {
  const [injection, setInjection] = useState("");
  const [appointment, setAppointment] = useState("");
  const [notes, setNotes] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi dữ liệu lên backend ở đây nếu cần
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
    setInjection("");
    setAppointment("");
    setNotes("");
  };

  return (
    <>
      <DoctorNavbar />
      <div className="treatment-plan-container">
        <h2>Cập nhật kế hoạch điều trị</h2>
        <form className="treatment-plan-form" onSubmit={handleSubmit}>
          <label htmlFor="injection">
            <span className="label-icon" role="img" aria-label="syringe">💉</span>
            Chỉ định mũi tiêm tiếp theo:
          </label>
          <input
            id="injection"
            type="text"
            placeholder="Nhập chỉ định mũi tiêm, liều lượng, thuốc..."
            value={injection}
            onChange={e => setInjection(e.target.value)}
            required
          />

          <label htmlFor="appointment">
            <span className="label-icon" role="img" aria-label="calendar">📅</span>
            Hẹn lịch tái khám:
          </label>
          <input
            id="appointment"
            type="datetime-local"
            value={appointment}
            onChange={e => setAppointment(e.target.value)}
            required
          />

          <label htmlFor="notes">
            <span className="label-icon" role="img" aria-label="note">📝</span>
            Ghi chú bổ sung:
          </label>
          <textarea
            id="notes"
            placeholder="Nhập ghi chú thêm (nếu có)..."
            value={notes}
            onChange={e => setNotes(e.target.value)}
            rows={3}
          />

          <button type="submit">Lưu kế hoạch</button>
          {success && <div className="success-message">✔️ Lưu kế hoạch thành công!</div>}
        </form>
      </div>
    </>
  );
};

export default TreatmentPlan;
