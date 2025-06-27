import React from "react";
import "../static/assets/Login.css";

const Login = () => (
  <div className="login-page">
    <h2>Đăng nhập</h2>
    <form className="login-form">
      <label>Email</label>
      <input type="email" placeholder="Nhập email" required />
      <label>Mật khẩu</label>
      <input type="password" placeholder="Nhập mật khẩu" required />
      <button type="submit">Đăng nhập</button>
    </form>
  </div>
);

export default Login;
