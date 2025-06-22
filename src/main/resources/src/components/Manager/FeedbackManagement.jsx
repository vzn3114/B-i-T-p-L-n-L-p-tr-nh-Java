import React from 'react';
import ManagerNavbar from './Navbar';
import '../../assets/FeedbackManagement.css';

const FeedbackManagement = () => (
  <>
    <ManagerNavbar />
    <div className="feedback-management-container">
      <h2>Quản lý đánh giá</h2>
      <table className="feedback-table">
        <thead>
          <tr>
            <th>Tên bệnh nhân</th>
            <th>Dịch vụ</th>
            <th>Nội dung</th>
            <th>Trạng thái</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nguyễn Văn A</td>
            <td>IVF</td>
            <td>"Bác sĩ tận tâm, dịch vụ tốt!"</td>
            <td><span className="status pending">Chờ duyệt</span></td>
            <td><button className="approve-btn">Duyệt</button> <button className="delete-btn">Xóa</button></td>
          </tr>
          <tr>
            <td>Trần Thị B</td>
            <td>IUI</td>
            <td>"Quy trình nhanh chóng, nhân viên thân thiện."</td>
            <td><span className="status approved">Đã duyệt</span></td>
            <td><button className="delete-btn">Xóa</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

export default FeedbackManagement; 