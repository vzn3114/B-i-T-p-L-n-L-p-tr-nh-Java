import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../static/assets/Register.css";

const Register = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password.length < 6) {
      setMessage("Mật khẩu phải có ít nhất 6 ký tự!");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setMessage("Mật khẩu xác nhận không khớp!");
      return;
    }
    try {
      const username = form.email.split("@")[0];
      await axios.post("http://localhost:8080/api/users/register/customer", {
        username,
        fullName: form.fullName,
        email: form.email,
        password: form.password,
      });
      setMessage("Đăng ký thành công!");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      setMessage(err.response?.data || "Đăng ký thất bại!");
    }
  };

  return (
    <div className="register-page">
      <h2>Đăng ký tài khoản</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>Họ tên</label>
        <input type="text" name="fullName" placeholder="Nhập họ tên" required onChange={handleChange} />
        <label>Email</label>
        <input type="email" name="email" placeholder="Nhập email" required onChange={handleChange} />
        <label>Mật khẩu</label>
        <input type="password" name="password" placeholder="Nhập mật khẩu" required onChange={handleChange} />
        <label>Xác nhận mật khẩu</label>
        <input type="password" name="confirmPassword" placeholder="Nhập lại mật khẩu" required onChange={handleChange} />
        <button type="submit">Đăng ký</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
