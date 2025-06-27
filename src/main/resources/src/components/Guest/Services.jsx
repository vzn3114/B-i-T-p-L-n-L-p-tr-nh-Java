import React from "react";
import "../../static/assets/Services.css";
import { Link } from "react-router-dom";

const Services = () => (
  <div className="services-page">
    <h2>Dịch vụ điều trị hiếm muộn</h2>
    <div className="service-detail">
      <div className="service-detail-icon">🧬</div>
      <h3>IUI - Thụ tinh nhân tạo</h3>
      <p>
        IUI là phương pháp bơm tinh trùng vào buồng tử cung, tăng khả năng thụ
        thai tự nhiên cho các cặp vợ chồng hiếm muộn. Phù hợp với các trường hợp
        nhẹ, không rõ nguyên nhân hoặc rối loạn rụng trứng.
      </p>
      <Link to="/register" className="service-register-btn">
        Đăng ký dịch vụ
      </Link>
    </div>
    <div className="service-detail">
      <div className="service-detail-icon">
        <img src="/logo512.png" alt="IVF" className="service-img" />
      </div>
      <h3>IVF - Thụ tinh trong ống nghiệm</h3>
      <p>
        IVF là phương pháp kết hợp trứng và tinh trùng ngoài cơ thể, sau đó
        chuyển phôi vào tử cung. Hiệu quả cao cho các trường hợp tắc vòi trứng,
        tinh trùng yếu, thất bại IUI nhiều lần.
      </p>
      <Link to="/register" className="service-register-btn">
        Đăng ký dịch vụ
      </Link>
    </div>
  </div>
);

export default Services;
