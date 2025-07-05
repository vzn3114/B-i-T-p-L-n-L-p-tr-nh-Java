import React, { useState } from "react";
import "../../static/assets/Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleExpand = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="services-page">
      <div className="services-header">
        <h2>Dịch vụ hỗ trợ sinh sản</h2>
        <p className="services-subtitle">
          Chúng tôi cung cấp các phương pháp điều trị hiếm muộn hiện đại, giúp
          các cặp vợ chồng thực hiện ước mơ làm cha mẹ
        </p>
      </div>

      {/* IUI Service */}
      <div className="service-detail">
        <div className="service-header">
          <div className="service-detail-icon">🧬</div>
          <div className="service-title-section">
            <h3>IUI - Thụ tinh nhân tạo</h3>
            <p className="service-subtitle">
              Phương pháp hỗ trợ sinh sản đơn giản và hiệu quả
            </p>
          </div>
        </div>

        <div className="service-summary">
          <p>
            IUI là phương pháp đưa tinh trùng đã được xử lý trực tiếp vào tử
            cung vào thời điểm rụng trứng, tăng cơ hội thụ thai tự nhiên.
          </p>
        </div>

        <div className="service-highlights">
          <div className="highlight-item">
            <span className="highlight-icon">✓</span>
            <span>Tỷ lệ thành công: 10-20% mỗi chu kỳ</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon">✓</span>
            <span>Chi phí phải chăng</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon">✓</span>
            <span>Ít xâm lấn, thực hiện ngoại trú</span>
          </div>
        </div>

        <button className="expand-btn" onClick={() => toggleExpand("iui")}>
          {expandedService === "iui" ? "Thu gọn" : "Xem chi tiết"} ▼
        </button>

        {expandedService === "iui" && (
          <div className="service-expanded">
            <div className="expanded-section">
              <h4>🎯 Phù hợp với:</h4>
              <ul>
                <li>Vô sinh không rõ nguyên nhân</li>
                <li>Rối loạn rụng trứng nhẹ</li>
                <li>Chất lượng tinh trùng giảm nhẹ</li>
                <li>Vấn đề về niêm dịch cổ tử cung</li>
                <li>Rối loạn chức năng tình dục</li>
              </ul>
            </div>

            <div className="expanded-section">
              <h4>📋 Quy trình thực hiện:</h4>
              <ol>
                <li>Theo dõi chu kỳ rụng trứng</li>
                <li>Kích thích rụng trứng (nếu cần)</li>
                <li>Thu thập và xử lý tinh trùng</li>
                <li>Đưa tinh trùng vào tử cung</li>
                <li>Theo dõi kết quả sau 2 tuần</li>
              </ol>
            </div>

            <div className="expanded-section">
              <h4>⏱️ Thời gian:</h4>
              <p>Thủ thuật chỉ mất 5-10 phút, không cần gây tê</p>
            </div>
          </div>
        )}

        <div className="service-actions">
          <Link to="/register" className="service-register-btn primary">
            Đăng ký tư vấn
          </Link>
          <Link to="/contact" className="service-register-btn secondary">
            Liên hệ ngay
          </Link>
        </div>
      </div>

      {/* IVF Service */}
      <div className="service-detail">
        <div className="service-header">
          <div className="service-detail-icon">
            <img src="/logo512.png" alt="IVF" className="service-img" />
          </div>
          <div className="service-title-section">
            <h3>IVF - Thụ tinh trong ống nghiệm</h3>
            <p className="service-subtitle">
              Công nghệ hỗ trợ sinh sản hiện đại nhất
            </p>
          </div>
        </div>

        <div className="service-summary">
          <p>
            IVF là phương pháp thụ tinh trứng và tinh trùng ngoài cơ thể, sau đó
            chuyển phôi chất lượng cao vào tử cung.
          </p>
        </div>

        <div className="service-highlights">
          <div className="highlight-item">
            <span className="highlight-icon">✓</span>
            <span>Tỷ lệ thành công: 40-50% (dưới 35 tuổi)</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon">✓</span>
            <span>Giải quyết nhiều nguyên nhân vô sinh</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon">✓</span>
            <span>Có thể kết hợp ICSI, PGT</span>
          </div>
        </div>

        <button className="expand-btn" onClick={() => toggleExpand("ivf")}>
          {expandedService === "ivf" ? "Thu gọn" : "Xem chi tiết"} ▼
        </button>

        {expandedService === "ivf" && (
          <div className="service-expanded">
            <div className="expanded-section">
              <h4>🎯 Phù hợp với:</h4>
              <ul>
                <li>Tắc nghẽn vòi trứng</li>
                <li>Vô sinh do yếu tố nam giới nặng</li>
                <li>Thất bại IUI nhiều lần</li>
                <li>Tuổi cao (trên 35)</li>
                <li>Bệnh lý buồng trứng</li>
                <li>Cần sàng lọc di truyền</li>
              </ul>
            </div>

            <div className="expanded-section">
              <h4>📋 Quy trình 7 bước:</h4>
              <ol>
                <li>Kích thích buồng trứng (8-12 ngày)</li>
                <li>Theo dõi phát triển nang trứng</li>
                <li>Lấy trứng (thủ thuật 15-20 phút)</li>
                <li>Thu thập tinh trùng</li>
                <li>Thụ tinh trong phòng lab</li>
                <li>Nuôi cấy phôi (3-5 ngày)</li>
                <li>Chuyển phôi vào tử cung</li>
              </ol>
            </div>

            <div className="expanded-section">
              <h4>🔬 Kỹ thuật bổ trợ:</h4>
              <div className="tech-grid">
                <div className="tech-item">
                  <strong>ICSI:</strong> Tiêm tinh trùng vào trứng
                </div>
                <div className="tech-item">
                  <strong>PGT:</strong> Sàng lọc di truyền phôi
                </div>
                <div className="tech-item">
                  <strong>Đông lạnh phôi:</strong> Bảo quản phôi dư thừa
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="service-actions">
          <Link to="/register" className="service-register-btn primary">
            Đăng ký tư vấn
          </Link>
          <Link to="/contact" className="service-register-btn secondary">
            Liên hệ ngay
          </Link>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="comparison-section">
        <h3>🔍 So sánh IUI và IVF</h3>
        <div className="comparison-table">
          <div className="comparison-row header">
            <div>Tiêu chí</div>
            <div>IUI</div>
            <div>IVF</div>
          </div>
          <div className="comparison-row">
            <div>Tỷ lệ thành công</div>
            <div>10-20%</div>
            <div>40-50%</div>
          </div>
          <div className="comparison-row">
            <div>Chi phí</div>
            <div>Thấp</div>
            <div>Cao hơn</div>
          </div>
          <div className="comparison-row">
            <div>Độ phức tạp</div>
            <div>Đơn giản</div>
            <div>Phức tạp</div>
          </div>
          <div className="comparison-row">
            <div>Thời gian điều trị</div>
            <div>1-2 tuần</div>
            <div>4-6 tuần</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h3>Sẵn sàng bắt đầu hành trình làm cha mẹ?</h3>
        <p>
          Đội ngũ chuyên gia của chúng tôi sẽ tư vấn phương pháp phù hợp nhất
          cho bạn
        </p>
        <div className="cta-buttons">
          <Link to="/register" className="cta-btn primary">
            📞 Đặt lịch tư vấn miễn phí
          </Link>
          <Link to="/introduction/doctors" className="cta-btn secondary">
            👥 Tìm hiểu về đội ngũ y bác sĩ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
