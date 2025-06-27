import React from "react";
import ManagerNavbar from "./Navbar";
import "../../static/assets/ServiceManagement.css";

const ServiceManagement = () => (
  <>
    <ManagerNavbar />
    <div className="service-management-container">
      <h2>Quản lý dịch vụ điều trị</h2>
      <table className="service-table">
        <thead>
          <tr>
            <th>Icon</th>
            <th>Tên dịch vụ</th>
            <th>Bảng giá</th>
            <th>Mô tả</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>🧬</td>
            <td>IUI</td>
            <td>10.000.000đ</td>
            <td>Bơm tinh trùng vào buồng tử cung</td>
            <td>
              <button className="edit-btn">Sửa</button>{" "}
              <button className="delete-btn">Xóa</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src="/logo512.png" alt="IVF" className="service-icon-img" />
            </td>
            <td>IVF</td>
            <td>60.000.000đ</td>
            <td>Thụ tinh trong ống nghiệm</td>
            <td>
              <button className="edit-btn">Sửa</button>{" "}
              <button className="delete-btn">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="add-btn">Thêm dịch vụ mới</button>
    </div>
  </>
);

export default ServiceManagement;
