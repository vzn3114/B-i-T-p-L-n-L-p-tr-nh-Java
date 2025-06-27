import React from "react";
import "../static/assets/Home.css";
import background from "../static/images/home-background.png";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="home-container">
    <section className="hero">
      <img src={background} alt="Hiếm Muộn Care" className="hero-img" />
    </section>
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
    <section className="articles-preview">
      <h2>Bài viết chia sẻ kinh nghiệm</h2>
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
  </div>
);

export default Home;
