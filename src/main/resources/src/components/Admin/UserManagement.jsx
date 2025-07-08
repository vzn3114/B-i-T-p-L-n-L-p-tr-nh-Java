import React from "react";
import AdminNavbar from "./Navbar";
import "../../static/assets/UserManagement.css";

const UserManagement = () => (
  <>
    <AdminNavbar />
    <div className="user-management-container">
      <h2>Quản lý hồ sơ người dùng</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Vai trò</th>
            <th>Trạng thái</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="/logo192.png" alt="avatar" className="user-avatar" />
            </td>
            <td>Nguyễn Văn A</td>
            <td>nguyenvana@gmail.com</td>
            <td><span className="role-badge customer">Customer</span></td>
            <td>
              <span className="status active">Hoạt động</span>
            </td>
            <td>
              <button className="role-btn">Phân quyền</button>{" "}
              <button className="delete-btn">Xóa</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src="/logo192.png" alt="avatar" className="user-avatar" />
            </td>
            <td>BS. Trần Văn B</td>
            <td>tranvanb@hospital.com</td>
            <td><span className="role-badge admin">Admin</span></td>
            <td>
              <span className="status active">Hoạt động</span>
            </td>
            <td>
              <button className="role-btn">Phân quyền</button>{" "}
              <button className="delete-btn">Xóa</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src="/logo192.png" alt="avatar" className="user-avatar" />
            </td>
            <td>Quản lý Cơ sở</td>
            <td>manager@hospital.com</td>
            <td><span className="role-badge manager">Manager</span></td>
            <td>
              <span className="status inactive">Khóa</span>
            </td>
            <td>
              <button className="role-btn">Phân quyền</button>{" "}
              <button className="delete-btn">Xóa</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src="/logo192.png" alt="avatar" className="user-avatar" />
            </td>
            <td>Lê Thị C</td>
            <td>lethic@gmail.com</td>
            <td><span className="role-badge auditor">Auditor</span></td>
            <td>
              <span className="status not-logged">Chưa đăng nhập</span>
            </td>
            <td>
              <button className="role-btn">Phân quyền</button>{" "}
              <button className="delete-btn">Xóa</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src="/logo192.png" alt="avatar" className="user-avatar" />
            </td>
            <td>Ngô Minh D</td>
            <td>ngominhd@hospital.com</td>
            <td><span className="role-badge admin">Admin</span> <span className="role-badge auditor">Auditor</span></td>
            <td>
              <span className="status active">Hoạt động</span>
            </td>
            <td>
              <button className="role-btn">Phân quyền</button>{" "}
              <button className="delete-btn">Xóa</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src="/logo192.png" alt="avatar" className="user-avatar" />
            </td>
            <td>Phạm Thị E</td>
            <td>phamthie@gmail.com</td>
            <td><span className="role-badge customer">Customer</span></td>
            <td>
              <span className="status inactive">Khóa</span>
            </td>
            <td>
              <button className="role-btn">Phân quyền</button>{" "}
              <button className="delete-btn">Xóa</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src="/logo192.png" alt="avatar" className="user-avatar" />
            </td>
            <td>Đỗ Văn F</td>
            <td>dovanf@hospital.com</td>
            <td><span className="role-badge manager">Manager</span> <span className="role-badge admin">Admin</span></td>
            <td>
              <span className="status not-logged">Chưa đăng nhập</span>
            </td>
            <td>
              <button className="role-btn">Phân quyền</button>{" "}
              <button className="delete-btn">Xóa</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src="/logo192.png" alt="avatar" className="user-avatar" />
            </td>
            <td>Trịnh Thị G</td>
            <td>trinhthig@gmail.com</td>
            <td><span className="role-badge auditor">Auditor</span></td>
            <td>
              <span className="status active">Hoạt động</span>
            </td>
            <td>
              <button className="role-btn">Phân quyền</button>{" "}
              <button className="delete-btn">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

export default UserManagement;
