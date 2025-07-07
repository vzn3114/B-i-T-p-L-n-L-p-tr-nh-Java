import React from "react";
import "../../static/assets/Register.css";

const Register = () => (
  <div className="register-page">
    <h2>Đăng ký tài khoản</h2>
    <form className="register-form">
      <label>Họ tên</label>
      <input type="text" placeholder="Nhập họ tên" required />
      <label>Email</label>
      <input type="email" placeholder="Nhập email" required />
      <label>Mật khẩu</label>
      <input type="password" placeholder="Nhập mật khẩu" required />
      <label>Xác nhận mật khẩu</label>
      <input type="password" placeholder="Nhập lại mật khẩu" required />
      <button type="submit">Đăng ký</button>
    </form>
  </div>
);

export default Register;
