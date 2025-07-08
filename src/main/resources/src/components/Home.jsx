import React from "react";
import "../static/assets/Home.css";
import background from "../static/images/home-background.png";
import logo from "../static/images/image.png";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="home-container">
    {/* Welcome Section */}
    <section className="welcome-section">
      <img src={logo} alt="Hiếm Muộn Care Logo" className="welcome-logo" />
      <div className="welcome-content">
        <h1>Chào mừng đến với Hiếm Muộn Care</h1>
        <p className="slogan">Nơi gửi trọn niềm tin cho hành trình làm cha mẹ</p>
      </div>
    </section>
    {/* Hero background */}
    <section className="hero">
      <img src={background} alt="Hiếm Muộn Care" className="hero-img1" />
    </section>
    {/* Why Choose Us Section */}
    <section className="why-choose-us">
      <h2>Vì sao chọn Hiếm Muộn Care?</h2>
      <div className="choose-list">
        <div className="choose-card">
          <img src="/images/doctors/facilities-1.jpg" alt="Cơ sở hiện đại" className="choose-img" />
          <h3>Cơ sở hiện đại</h3>
          <p>Trang thiết bị tiên tiến, không gian thân thiện, sạch sẽ.</p>
        </div>
        <div className="choose-card">
          <img src="/images/doctors/content-section-1.jpg" alt="Bác sĩ giàu kinh nghiệm" className="choose-img" />
          <h3>Bác sĩ giàu kinh nghiệm</h3>
          <p>Đội ngũ chuyên gia tận tâm, đồng hành cùng bạn trên mọi chặng đường.</p>
        </div>
        <div className="choose-card">
          <img src="/images/doctors/content-section-2.jpg" alt="Tư vấn tận tình" className="choose-img" />
          <h3>Tư vấn tận tình</h3>
          <p>Luôn lắng nghe, chia sẻ và hỗ trợ khách hàng như người thân.</p>
        </div>
      </div>
    </section>
    {/* Services Preview Section (giữ nguyên) */}
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
        {/* Chỗ để thêm hình dịch vụ khác */}
        <div className="service-card">
          <img src="/images/doctors/content-section-3.jpg" alt="Dịch vụ khác" className="service-img" />
          <h3>Dịch vụ hỗ trợ khác</h3>
          <p>Hỗ trợ tâm lý, tư vấn dinh dưỡng, xét nghiệm chuyên sâu...</p>
          <Link to="/services">Tìm hiểu thêm</Link>
        </div>
      </div>
    </section>
    {/* Articles Preview Section (nâng cấp) */}
    <section className="articles-preview">
      <h2>BÀI VIẾT CHIA SẺ KINH NGHIỆM</h2>
      <div className="articles-list">
        <div className="article-card">
          <img src="/images/doctors/content-section-7.jpg" alt="IVF thành công" className="article-img" />
          <div className="article-content">
            <h3>Hành trình IVF thành công của gia đình chị Lan</h3>
            <p className="article-excerpt">“Sau nhiều năm chờ đợi, nhờ sự tận tâm của đội ngũ Hiếm Muộn Care, vợ chồng tôi đã đón con yêu đầu lòng. Quá trình IVF không hề dễ dàng nhưng nhờ sự động viên, hướng dẫn tận tình, chúng tôi đã vượt qua mọi khó khăn.”</p>
            <Link to="/articles">Đọc tiếp</Link>
          </div>
        </div>
        <div className="article-card">
          <img src="/images/doctors/content-section-5.jpg" alt="Lưu ý khi IUI" className="article-img" />
          <div className="article-content">
            <h3>Những lưu ý khi điều trị IUI</h3>
            <p className="article-excerpt">“IUI là phương pháp hỗ trợ sinh sản phổ biến, tuy nhiên cần chuẩn bị tâm lý, sức khỏe và tuân thủ hướng dẫn bác sĩ để đạt kết quả tốt nhất. Đọc bài viết để biết thêm kinh nghiệm thực tế!”</p>
            <Link to="/articles">Đọc tiếp</Link>
          </div>
        </div>
        {/* Có thể thêm nhiều bài viết khác ở đây */}
      </div>
    </section>
    {/* Testimonials Section */}
    <section className="testimonials-section">
      <h2>Cảm nhận khách hàng</h2>
      <div className="testimonials-list">
        <div className="testimonial-card">
          <img src="/images/doctors/content-section-4.jpg" alt="Khách hàng 1" className="testimonial-img" />
          <blockquote>“Nhờ Hiếm Muộn Care, vợ chồng tôi đã có được hạnh phúc làm cha mẹ sau nhiều năm chờ đợi.”</blockquote>
          <p className="testimonial-author">- Chị Lan, Hà Nội</p>
        </div>
        <div className="testimonial-card">
          <img src="/images/doctors/content-section-5.jpg" alt="Khách hàng 2" className="testimonial-img" />
          <blockquote>“Đội ngũ bác sĩ tận tâm, dịch vụ chuyên nghiệp, tôi rất hài lòng!”</blockquote>
          <p className="testimonial-author">- Anh Minh, TP.HCM</p>
        </div>
        {/* Chỗ để thêm hình và cảm nhận khách hàng khác */}
      </div>
    </section>
  </div>
);

export default Home;
