import React from 'react';
import ManagerNavbar from './Navbar';
import '../../assets/DoctorManagement.css';

const DoctorManagement = () => (
  <>
    <ManagerNavbar />
    <div className="doctor-management-container">
      <h2>Quản lý bác sĩ</h2>
      <table className="doctor-table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Họ tên</th>
            <th>Chuyên môn</th>
            <th>Bằng cấp</th>
            <th>Lịch làm việc</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="/logo192.png" alt="avatar" className="doctor-avatar" /></td>
            <td>BS. Trần Văn B</td>
            <td>Hiếm muộn, IVF</td>
            <td>Tiến sĩ Y học</td>
            <td>Thứ 2-6, 8:00-17:00</td>
            <td><button className="edit-btn">Sửa</button> <button className="delete-btn">Xóa</button></td>
          </tr>
          <tr>
            <td><img src="/logo192.png" alt="avatar" className="doctor-avatar" /></td>
            <td>BS. Nguyễn Thị C</td>
            <td>IUI, Nội tiết</td>
            <td>Thạc sĩ Y học</td>
            <td>Thứ 3-7, 9:00-16:00</td>
            <td><button className="edit-btn">Sửa</button> <button className="delete-btn">Xóa</button></td>
          </tr>
        </tbody>
      </table>
      <button className="add-btn">Thêm bác sĩ mới</button>
    </div>
  </>
);

export default DoctorManagement; 