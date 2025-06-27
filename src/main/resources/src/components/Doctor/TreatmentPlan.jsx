import React from "react";
import DoctorNavbar from "./Navbar";
import "../../static/assets/TreatmentPlan.css";

const TreatmentPlan = () => (
  <>
    <DoctorNavbar />
    <div className="treatment-plan-container">
      <h2>Cập nhật kế hoạch điều trị</h2>
      <form className="treatment-plan-form">
        <label>
          Chỉ định mũi tiêm tiếp theo{" "}
          <span role="img" aria-label="syringe">
            💉
          </span>
          :
        </label>
        <input type="text" placeholder="Nhập chỉ định..." />
        <label>
          Hẹn lịch tái khám{" "}
          <span role="img" aria-label="calendar">
            📅
          </span>
          :
        </label>
        <input type="date" />
        <button type="submit">Lưu kế hoạch</button>
      </form>
    </div>
  </>
);

export default TreatmentPlan;
