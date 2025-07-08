import React, { useState } from "react";
import "../../static/assets/Services.css";
import { Link } from "react-router-dom";
import { IUIServiceData } from "../../data/IUIServiceData";
import { IVFServiceData } from "../../data/IVFServiceData";

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleExpand = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const ServiceCard = ({ serviceData }) => {
    const isExpanded = expandedService === serviceData.id;

    return (
      <div className="service-detail">
        <div className="service-header">
          <div className="service-detail-icon">{serviceData.icon}</div>
          <div className="service-title-section">
            <h3>{serviceData.title}</h3>
            <p className="service-subtitle">{serviceData.subtitle}</p>
          </div>
        </div>

        <div className="service-summary">
          <p>{serviceData.overview.description}</p>
        </div>

        <div className="service-highlights">
          {serviceData.overview.keyBenefits.map((benefit, index) => (
            <div key={index} className="highlight-item">
              <span className="highlight-icon">✓</span>
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        <button
          className="expand-btn"
          onClick={() => toggleExpand(serviceData.id)}
        >
          {isExpanded ? "Thu gọn" : "Xem chi tiết"} ▼
        </button>

        {isExpanded && (
          <div className="service-expanded">
            {/* Phù hợp với ai */}
            <div className="expanded-section">
              <h4>🎯 {serviceData.details.suitableFor.title}</h4>
              <ul>
                {serviceData.details.suitableFor.conditions.map(
                  (condition, index) => (
                    <li key={index}>
                      <strong>{condition.condition}:</strong>{" "}
                      {condition.description}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Quy trình thực hiện */}
            <div className="expanded-section">
              <h4>📋 Quy trình thực hiện</h4>
              {serviceData.id === "iui" ? (
                <ol>
                  {serviceData.details.process.steps.map((step, index) => (
                    <li key={index}>
                      <strong>{step.title}</strong>
                      <p>{step.description}</p>
                      {step.duration && (
                        <small>Thời gian: {step.duration}</small>
                      )}
                    </li>
                  ))}
                </ol>
              ) : (
                <div>
                  {serviceData.details.process.phases.map(
                    (phase, phaseIndex) => (
                      <div key={phaseIndex} className="process-phase">
                        <h5>
                          {phase.phase} ({phase.duration})
                        </h5>
                        {phase.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="process-step">
                            <strong>{step.step}:</strong> {step.description}
                          </div>
                        ))}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Kỹ thuật bổ trợ (chỉ cho IVF) */}
            {serviceData.id === "ivf" && (
              <div className="expanded-section">
                <h4>🔬 Kỹ thuật bổ trợ</h4>
                <div className="tech-grid">
                  {serviceData.details.techniques.techniques.map(
                    (tech, index) => (
                      <div key={index} className="tech-item">
                        <strong>{tech.name}:</strong> {tech.description}
                        <br />
                        <small>Tỷ lệ: {tech.successRate}</small>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {/* Yếu tố thành công */}
            <div className="expanded-section">
              <h4>📊 Yếu tố ảnh hưởng đến tỷ lệ thành công</h4>
              <ul>
                {serviceData.details.successFactors.factors.map(
                  (factor, index) => (
                    <li key={index}>
                      <strong>{factor.factor}:</strong>{" "}
                      {factor.description || factor.details?.[0]}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Chi phí */}
            <div className="expanded-section">
              <h4>💰 Chi phí điều trị</h4>
              <p>
                <strong>Tổng chi phí:</strong>{" "}
                {serviceData.details.costs.totalRange}
              </p>
              <p>
                <small>{serviceData.details.costs.insurance}</small>
              </p>
            </div>

            {/* FAQs */}
            <div className="expanded-section">
              <h4>❓ Câu hỏi thường gặp</h4>
              {serviceData.faqs.slice(0, 3).map((faq, index) => (
                <div key={index} className="faq-item">
                  <strong>Q: {faq.question}</strong>
                  <p>A: {faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="service-actions">
          {/* <Link to="/login" className="service-register-btn primary">
            Đăng ký tư vấn
          </Link> */}
          <Link to="/contact" className="service-register-btn secondary">
            Liên hệ ngay
          </Link>
        </div>
      </div>
    );
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
      <ServiceCard serviceData={IUIServiceData} />

      {/* IVF Service */}
      <ServiceCard serviceData={IVFServiceData} />

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
            <div>5-10 triệu VNĐ</div>
            <div>40-80 triệu VNĐ</div>
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
          <div className="comparison-row">
            <div>Phù hợp với</div>
            <div>Vô sinh nhẹ</div>
            <div>Vô sinh phức tạp</div>
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
          <Link to="/contact" className="cta-btn primary">
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
