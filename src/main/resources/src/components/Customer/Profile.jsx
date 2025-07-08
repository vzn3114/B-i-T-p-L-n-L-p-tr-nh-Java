import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../static/assets/Profile.css";

const Profile = () => {
  const [user, setUser] = useState({
    full_name: "",
    email: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Vui lòng đăng nhập để xem thông tin người dùng");
        }

        const axiosInstance = axios.create({
          baseURL: "http://localhost:8080/api",
          headers: { Authorization: `Bearer ${token}` },
        });

        const response = await axiosInstance.get("/users/me");
        const data = response.data;

        if (!data.full_name || !data.email) {
          throw new Error("Dữ liệu người dùng không đầy đủ");
        }

        setUser({
          full_name: data.full_name,
          email: data.email,
        });
        setFormData({
          full_name: data.full_name,
          email: data.email,
          password: "",
          confirmPassword: "",
        });
      } catch (err) {
        console.error(
          "Chi tiết lỗi:",
          err.response ? err.response.data : err.message
        );
        setError(
          err.response?.data?.message ||
            err.message ||
            "Không thể tải thông tin người dùng"
        );
      }
    };
    fetchUserData();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password && formData.password !== formData.confirmPassword) {
      setError("Mật khẩu xác nhận không khớp");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Vui lòng đăng nhập để cập nhật hồ sơ");
      }

      const updateData = {
        full_name: formData.full_name,
        email: formData.email,
      };
      if (formData.password) {
        updateData.password = formData.password;
      }

      const axiosInstance = axios.create({
        baseURL: "http://localhost:8080/api",
        headers: { Authorization: `Bearer ${token}` },
      });

      const response = await axiosInstance.put("/users/update", updateData);
      const updatedUser = response.data;

      setUser({
        full_name: updatedUser.full_name,
        email: updatedUser.email,
      });
      setSuccess("Cập nhật hồ sơ thành công");
      setIsEditing(false);
      setFormData((prev) => ({ ...prev, password: "", confirmPassword: "" }));
    } catch (err) {
      console.error(
        "Chi tiết lỗi cập nhật:",
        err.response ? err.response.data : err.message
      );
      setError(
        err.response?.data?.message || err.message || "Không thể cập nhật hồ sơ"
      );
    }
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
    setError("");
    setSuccess("");
    setFormData({
      full_name: user.full_name,
      email: user.email,
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="profile-container">
      <h2>Hồ sơ cá nhân</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      {!isEditing ? (
        <div className="profile-header">
          <p className="full_name">
            <strong>Họ và tên:</strong> {user.full_name}
          </p>
          <p className="email">
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label>Họ và tên:</label>
            <input
              type="text"
              name="full_name"
              className="input-full_name"
              value={formData.full_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              className="input-email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu mới (để trống nếu không đổi):</label>
            <input
              type="password"
              name="password"
              className="input-password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Xác nhận mật khẩu:</label>
            <input
              type="password"
              name="confirmPassword"
              className="input-confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="profile-save-btn">
              Lưu
            </button>
            <button
              type="button"
              className="profile-cancel-btn"
              onClick={toggleEdit}
            >
              Hủy
            </button>
          </div>
        </form>
      )}
      {!isEditing && (
        <button className="profile-edit-btn" onClick={toggleEdit}>
          Chỉnh sửa hồ sơ
        </button>
      )}
    </div>
  );
};

export default Profile;
