import React from 'react';
import DoctorNavbar from './Navbar';
import '../../assets/VisitRecord.css';

const VisitRecord = () => (
  <>
    <DoctorNavbar />
    <div className="visit-record-container">
      <h2>Ghi nhận dữ liệu thăm khám</h2>
      <form className="visit-record-form">
        <label>Kết quả xét nghiệm (Beta hCG, nội tiết):</label>
        <input type="text" placeholder="Nhập kết quả..." />
        <label>Chỉ số siêu âm:</label>
        <input type="text" placeholder="Nhập chỉ số..." />
        <label>Phản ứng với thuốc:</label>
        <input type="text" placeholder="Nhập phản ứng..." />
        <label>Tiến triển lâm sàng:</label>
        <textarea rows="3" placeholder="Nhập tiến triển..." />
        <button type="submit">Lưu dữ liệu</button>
      </form>
    </div>
  </>
);

export default VisitRecord; 