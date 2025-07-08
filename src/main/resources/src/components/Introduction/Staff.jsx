import React, { useState } from "react";
import "../../static/assets/Staff.css";

const Staff = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const doctors = [
    {
      id: 1,
      name: "TS.BS Nguyễn Thị Nhã",
      image: "/images/doctors/bac-si-thi-nha.jpg",
      specialty: "Trưởng khoa Hỗ trợ sinh sản - 20 năm kinh nghiệm",
      achievements: [
        "Giám đốc Trung tâm Hỗ trợ sinh sản, BV Từ Dũ",
        "Tỷ lệ thành công IVF lên đến 68% trong năm 2024",
        "Thực hiện hơn 3000 ca IVF và 1500 ca IUI",
        "Chứng chỉ đào tạo IVF tại Singapore",
        "Tác giả 30 bài báo khoa học về hỗ trợ sinh sản",
      ],
    },
    {
      id: 2,
      name: "PGS.TS.BS Hồ Mạnh Tường",
      image: "/images/doctors/bac-si-ho-manh-tuong.jpg",
      specialty: "Chuyên gia Hỗ trợ sinh sản và Nam học - 25 năm kinh nghiệm",
      achievements: [
        "Tổng thư ký Hội Nội tiết sinh sản và Vô sinh TP.HCM",
        "Chuyên gia hàng đầu về IVF và IUI tại Việt Nam",
        "Thực hiện hơn 4000 ca IVF thành công",
        "Đào tạo chuyên sâu tại Úc và Nhật Bản",
        "Nghiên cứu cải tiến kỹ thuật chuyển phôi",
      ],
    },
    {
      id: 3,
      name: "BS.CKII Trần Thị Kim Xuyến",
      image: "/images/doctors/bac-gi-3.png",
      specialty: "Bác sĩ Sản phụ khoa, chuyên sâu IVF - 18 năm kinh nghiệm",
      achievements: [
        "Chuyên gia IVF tại BV Phụ sản Quốc tế",
        "Tỷ lệ thành công IUI đạt 45% trong năm 2023",
        "Thực hiện 2500+ ca chọc hút noãn",
        "Chứng chỉ đào tạo IVF tại Thái Lan",
        "Giảng viên thỉnh giảng tại Đại học Y Dược TP.HCM",
      ],
    },
    {
      id: 4,
      name: "TS.BS Vũ Nhật Khang",
      image: "/images/doctors/bac-si-4.png",
      specialty: "Chuyên gia Hỗ trợ sinh sản - 15 năm kinh nghiệm",
      achievements: [
        "Chuyên gia phôi học và IVF tại BV Hùng Vương",
        "Tỷ lệ thành công IVF đạt 62% trong năm 2024",
        "Thực hiện 2000+ ca chuyển phôi tươi và đông lạnh",
        "Nghiên cứu tối ưu hóa môi trường nuôi cấy phôi",
        "Chứng chỉ phôi học từ Anh Quốc",
      ],
    },
    {
      id: 5,
      name: "BS.CKII Nguyễn Thanh Tâm",
      image: "/images/doctors/bac-gi-5.png",
      specialty: "Bác sĩ Sản phụ khoa, chuyên sâu IUI - 16 năm kinh nghiệm",
      achievements: [
        "Chuyên gia IUI tại BV Phụ sản Trung ương",
        "Tỷ lệ thành công IUI đạt 42% trong năm 2023",
        "Thực hiện 1800+ ca IUI và tư vấn vô sinh",
        "Chứng chỉ đào tạo IUI tại Hàn Quốc",
        "Thành viên Hội Sản phụ khoa Việt Nam",
      ],
    },
    {
      id: 6,
      name: "PGS.TS.BS Lê Hoàng",
      image: "/images/doctors/doctor6.webp",
      specialty: "Chuyên gia Hỗ trợ sinh sản và Nội tiết - 22 năm kinh nghiệm",
      achievements: [
        "Phó giám đốc Trung tâm IVF An Sinh",
        "Tỷ lệ thành công IVF đạt 65% trong năm 2024",
        "Thực hiện hơn 3500 ca IVF và IUI",
        "Nghiên cứu về kích thích buồng trứng hiệu quả",
        "Chứng chỉ nội tiết sinh sản từ Mỹ",
      ],
    },
  ];

  const handleViewDetails = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleCloseModal = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="staff-container">
      <section className="staff-intro">
        <h2>Đội Ngũ Bác Sĩ</h2>
        <p>
          Đội ngũ bác sĩ chuyên gia hàng đầu trong lĩnh vực hỗ trợ sinh sản, với
          kinh nghiệm phong phú trong IUI và IVF, cam kết mang lại tỷ lệ thành
          công cao nhất cho các cặp vợ chồng.
        </p>
      </section>

      <section className="staffs-preview">
        <div className="staffs-list">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="staff-card">
              <div className="staff-image">
                <img src={doctor.image} alt={doctor.name} />
              </div>
              <h3>{doctor.name}</h3>
              <p className="staff-specialty">{doctor.specialty}</p>
              <div className="button-group">
                <button
                  className="view-details-btn"
                  onClick={() => handleViewDetails(doctor)}
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="commitment-preview">
        <h2>Cam kết của chúng tôi</h2>
        <ul>
          <li>🎯 Chuyên nghiệp - Áp dụng kỹ thuật IUI và IVF tiên tiến</li>
          <li>
            ❤️ Tận tâm - Đồng hành cùng các cặp vợ chồng trên hành trình tìm con
          </li>
          <li>🏆 Hiệu quả - Tối ưu hóa tỷ lệ thành công IVF và IUI</li>
          <li>🤝 Tin cậy - Minh bạch quy trình và chi phí điều trị</li>
        </ul>
      </section>

      {/* Modal hiển thị chi tiết bác sĩ */}
      {selectedDoctor && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseModal}>
              ×
            </button>
            <div className="modal-header">
              <img src={selectedDoctor.image} alt={selectedDoctor.name} />
              <h2>{selectedDoctor.name}</h2>
              <p className="modal-specialty">{selectedDoctor.specialty}</p>
            </div>
            <div className="modal-body">
              <h3>Thành tựu nổi bật:</h3>
              <ul className="achievements-list">
                {selectedDoctor.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Staff;
