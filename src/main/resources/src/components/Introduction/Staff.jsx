import React from "react";
import "../../static/assets/Staff.css";
import { Link } from "react-router-dom";

const Staff = () => (
  <div className="staff-container">
    <section className="staff-intro">
      <h2>Đội Ngũ Bác Sĩ</h2>
      <p>
        Đội ngũ bác sĩ giàu kinh nghiệm, tận tâm và chuyên nghiệp, luôn đồng
        hành cùng các cặp vợ chồng trên hành trình tìm con.
      </p>
    </section>

    <section className="staffs-preview">
      <div className="staffs-list">
        <div className="staff-card">
          <div className="staff-icon">👩‍⚕️</div>
          <h3>BS.CKII Nguyễn Thị Minh Hương</h3>
          <p>
            Trưởng khoa Hỗ trợ sinh sản - 15 năm kinh nghiệm. Chuyên gia hàng
            đầu về IVF với tỷ lệ thành công 65%.
          </p>
        </div>
        <div className="staff-card">
          <div className="staff-icon">👨‍⚕️</div>
          <h3>BS.CKI Trần Văn Đức</h3>
          <p>
            Bác sĩ chuyên khoa Nam học - 12 năm kinh nghiệm. Chuyên gia về vô
            sinh nam và nghiên cứu chất lượng tinh trùng.
          </p>
        </div>
        <div className="staff-card">
          <div className="staff-icon">👩‍⚕️</div>
          <h3>BS.CKII Lê Thị Lan Anh</h3>
          <p>
            Phó trưởng khoa Sản phụ khoa - 18 năm kinh nghiệm. Chuyên gia siêu
            âm hàng đầu và IUI.
          </p>
        </div>
        <div className="staff-card">
          <div className="staff-icon">👨‍⚕️</div>
          <h3>BS.CKI Phạm Minh Tuấn</h3>
          <p>
            Bác sĩ chuyên khoa Phẫu thuật - 10 năm kinh nghiệm. Chuyên gia phẫu
            thuật nội soi và điều trị lạc nội mạc tử cung.
          </p>
        </div>
      </div>
    </section>

    <section className="commitment-preview">
      <h2>Cam kết của chúng tôi</h2>
      <ul>
        <li>
          <Link to="/about/staffs">
            🎯 Chuyên nghiệp - Áp dụng kỹ thuật tiên tiến nhất
          </Link>
        </li>
        <li>
          <Link to="/about/staffs">
            ❤️ Tận tâm - Đồng hành suốt quá trình điều trị
          </Link>
        </li>
        <li>
          <Link to="/about/staffs">
            🏆 Hiệu quả - Tỷ lệ thành công cao với chi phí hợp lý
          </Link>
        </li>
        <li>
          <Link to="/about/staffs">
            🤝 Tin cậy - Minh bạch quy trình và chi phí
          </Link>
        </li>
      </ul>
    </section>
  </div>
);

export default Staff;
