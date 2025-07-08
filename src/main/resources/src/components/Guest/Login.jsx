import React, { useState } from "react";
import "../../static/assets/Login.css";

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
      localStorage.setItem("userRole", data.role);

      // Điều hướng theo role
      switch (data.role) {
        case "ADMIN":
          window.location.href = "/admin/dashboard";
          break;
        case "MANAGER":
          window.location.href = "/manager/services";
          break;
        case "DOCTOR":
          window.location.href = "/doctor/patients";
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
