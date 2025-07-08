import React, { useState, useEffect } from "react";
import AdminNavbar from "./Navbar";
import "../../static/assets/UserManagement.css";
import { fetchWithAuth } from "./admin";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [roleEdit, setRoleEdit] = useState({}); // { userId: newRole }

  // Lấy danh sách user
  const fetchUsers = () => {
    setLoading(true);
    fetchWithAuth("http://localhost:8080/api/users")
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Xóa user
  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc muốn xóa user này?")) return;
    try {
      await fetchWithAuth(`http://localhost:8080/api/users/${id}`, {
        method: "DELETE",
      });
      fetchUsers();
    } catch (err) {
      setError("Lỗi khi xóa user: " + err.message);
    }
  };

  // Phân quyền user
  const handleRoleChange = (id, newRole) => {
    setRoleEdit((prev) => ({ ...prev, [id]: newRole }));
  };

  const handleUpdateRole = async (user) => {
    const newRole = roleEdit[user.id];
    if (!newRole) return;
    try {
      // Gọi API cập nhật role (giả sử có endpoint PUT /api/users/{id}/role)
      await fetchWithAuth(`http://localhost:8080/api/users/${user.id}/role`, {
        method: "PUT",
        body: JSON.stringify({ role: newRole }),
        headers: { "Content-Type": "application/json" },
      });
      setRoleEdit((prev) => ({ ...prev, [user.id]: undefined }));
      fetchUsers();
    } catch (err) {
      setError("Lỗi khi cập nhật quyền: " + err.message);
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="user-management-container">
        <h2>Quản lý hồ sơ người dùng</h2>
        {loading ? (
          <p>Đang tải...</p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <table className="user-table">
            <thead>
              <tr>
                {/* <th>Avatar</th> */}
                <th>Họ tên</th>
                <th>Email</th>
                <th>Vai trò</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  {/* <td></td> */}
                  <td>{user.fullName || user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.roles && Array.isArray(user.roles)
                      ? user.roles.map((role, idx) => (
                          <span
                            key={idx}
                            className={`role-badge ${role.name.toLowerCase()}`}
                          >
                            {role.name}
                          </span>
                        ))
                      : ""}
                  </td>
                  <td>
                    {/* Phân quyền */}
                    <select
                      value={
                        roleEdit[user.id] ||
                        (user.roles && user.roles[0]?.name) ||
                        ""
                      }
                      onChange={(e) =>
                        handleRoleChange(user.id, e.target.value)
                      }
                    >
                      <option value="ADMIN">ADMIN</option>
                      <option value="DOCTOR">DOCTOR</option>
                      <option value="CUSTOMER">CUSTOMER</option>
                    </select>
                    <button
                      className="role-btn"
                      onClick={() => handleUpdateRole(user)}
                      disabled={
                        !roleEdit[user.id] ||
                        roleEdit[user.id] ===
                          (user.roles && user.roles[0]?.name)
                      }
                    >
                      Lưu
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(user.id)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default UserManagement;
