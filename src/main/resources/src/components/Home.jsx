import React from 'react';
import '../assets/Home.css';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home-container">
    <section className="hero">
      <img src="/logo512.png" alt="Hiếm Muộn Care" className="hero-img" />
      <h1>Chào mừng đến với Trung tâm Điều trị Hiếm Muộn</h1>
      <p>Chúng tôi đồng hành cùng bạn trên hành trình tìm kiếm hạnh phúc.<br />
        <span role="img" aria-label="heart">❤️</span> <span role="img" aria-label="family">👨‍👩‍👧‍👦</span>
      </p>
      <Link to="/register" className="hero-btn">Đăng ký ngay</Link>
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
          <p>Thụ tinh trong ống nghiệm (IVF) - giải pháp cho nhiều cặp vợ chồng hiếm muộn.</p>
          <Link to="/services">Tìm hiểu thêm</Link>
        </div>
      </div>
    </section>
    <section className="articles-preview">
      <h2>Bài viết chia sẻ kinh nghiệm</h2>
      <ul>
        <li><Link to="/articles">Hành trình IVF thành công của gia đình chị Lan</Link></li>
        <li><Link to="/articles">Những lưu ý khi điều trị IUI</Link></li>
      </ul>
    </section>
  </div>
);

export default Home;
