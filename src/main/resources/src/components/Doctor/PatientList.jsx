import React from 'react';
import DoctorNavbar from './Navbar';
import '../../assets/PatientList.css';

const PatientList = () => (
  <>
    <DoctorNavbar />
    <div className="patient-list-container">
      <h2>Danh sách bệnh nhân điều trị</h2>
      <table className="patient-table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Họ tên bệnh nhân</th>
            <th>Dịch vụ</th>
            <th>Ngày khám</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="/logo192.png" alt="avatar" className="patient-avatar" /></td>
            <td>Nguyễn Văn A</td>
            <td>IUI</td>
            <td>10/06/2024</td>
            <td><span className="status ongoing">Đang điều trị</span></td>
          </tr>
          <tr>
            <td><img src="/logo192.png" alt="avatar" className="patient-avatar" /></td>
            <td>Trần Thị B</td>
            <td>IVF</td>
            <td>12/06/2024</td>
            <td><span className="status success">Thành công</span></td>
          </tr>
          <tr>
            <td><img src="/logo192.png" alt="avatar" className="patient-avatar" /></td>
            <td>Lê Văn C</td>
            <td>IVF</td>
            <td>13/06/2024</td>
            <td><span className="status failed">Thất bại</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

export default PatientList; 