import React from "react";
import "../static/assets/Home.css";
import background from "../static/images/home-background.png";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="home-container">
    {/* background */}
    <section className="hero">
      <img src={background} alt="Hiếm Muộn Care" className="hero-img" />
    </section>
    {/* Section services-preview */}
    <section className="services-preview">
      <h2>Dịch vụ nổi bật</h2>
      <div className="services-list">
        <div className="service-card">
          <div className="service-icon">🧬</div>
          <h3>IUI</h3>
          <p>Thụ tinh nhân tạo (IUI) giúp tăng khả năng thụ thai tự nhiên.</p>
          <Link to="/services">Tìm hiểu thêm</Link>
        </div>
        <div className="service-card">
          <div className="service-icon">🍼</div>
          <h3>IVF</h3>
          <p>
            Thụ tinh trong ống nghiệm (IVF) - giải pháp cho nhiều cặp vợ chồng
            hiếm muộn.
          </p>
          <Link to="/services">Tìm hiểu thêm</Link>
        </div>
      </div>
    </section>
    {/* Section articles-preview */}
    <section className="articles-preview">
      <h2>BÀI VIẾT CHIA SẺ KINH NGHIỆM</h2>
      <ul>
        <li>
          <Link to="/articles">
            Hành trình IVF thành công của gia đình chị Lan
          </Link>
        </li>
        <li>
          <Link to="/articles">Những lưu ý khi điều trị IUI</Link>
        </li>
      </ul>
    </section>
    {/* Section services-preview */}
    <section className="services-preview">
      <h2>GIÁ TRỊ KHÁC BIỆT & LỢI ÍCH VỀ CHI PHÍ</h2>
      <div className="services-list">
        <div className="service-card">
          <img
            src="/images/doctors/bac-si.jpg"
            alt="Cơ sở vật chất"
            className="hero-img"
          />
          <h3>Cơ Sở Vật Chất - Trang Thiết Bị Hiện Đại</h3>
          <Link to="/introduction/facilities">Chi tiết</Link>
        </div>
        <div className="service-card">
          <img
            src="/images/doctors/bac-si.jpg"
            alt="Đội ngũ bác sĩ chuyên khoa hiếm muộn"
            className="hero-img"
          />
          <h3>Đội Ngũ Bác Sĩ Chuyên Khoa Hiếm Muộn</h3>
          <Link to="/introduction/doctors">Chi tiết</Link>
        </div>
        <div className="service-card">
          <img
            src="/images/doctors/bac-si.jpg"
            alt="Dịch vụ cao cấp - Giá thành hợp lý"
            className="hero-img"
          />
          <h3>Dịch Vụ Cao Cấp - Giá Thành Hợp Lý</h3>
          <Link to="/services">Chi tiết</Link>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
