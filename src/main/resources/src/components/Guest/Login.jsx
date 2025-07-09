import React, { useState } from "react";
import "../../static/assets/Login.css";
import axios from "axios";

const handleLogin = async (username, password) => {
  try {
    const res = await axios.post("/login", { username, password });
    // TTrả về { token: "..." }
    localStorage.setItem("token", res.data.token);
    // Lưu thêm doctorId
    localStorage.setItem("doctorId", res.data.userId);
    // Chuyển hướng hoặc reload lại trang
  } catch (err) {
    alert("Đăng nhập thất bại!");
  }
};

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const text = await res.text();
      if (!res.ok) {
        setError("Sai tài khoản hoặc mật khẩu! " + text);
        return;
      }
      const data = JSON.parse(text);
      localStorage.setItem("token", data.token);
      // Lưu username vào localStorage
      localStorage.setItem("username", username);

      // Nếu backend trả về "role" là chuỗi
      let role = data.role;

      // Nếu backend trả về "roles" là mảng (phòng trường hợp backend thay đổi)
      if (!role && Array.isArray(data.roles)) {
        role = data.roles[0];
        // Nếu role có tiền tố "ROLE_", thì mới cần replace
        if (role.startsWith("ROLE_")) {
          role = role.replace("ROLE_", "");
        }
      }

      localStorage.setItem("role", role);

      // Điều hướng theo role
      switch (role) {
        case "ADMIN":
          window.location.href = "/admin/dashboard";
          break;
        case "CUSTOMER":
          window.location.href = "/customer/dashboard";
          break;
        case "DOCTOR":
          window.location.href = "/doctor/patients";
          break;
        case "MANAGER":
          window.location.href = "/manager/services";
          break;
        default:
          window.location.href = "/";
      }
    } catch (err) {
      setError("Lỗi kết nối tới server!");
    }
  };

  return (
    <div className="login-page">
      <h2>Đăng nhập</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}

export default Login;
