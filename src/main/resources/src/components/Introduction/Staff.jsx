import React, { useState } from "react";
import "../../static/assets/Staff.css";
import { Link } from "react-router-dom";

const Staff = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [selectedDoctorForAppointment, setSelectedDoctorForAppointment] =
    useState(null);
  const [appointmentData, setAppointmentData] = useState({
    patientName: "",
    patientPhone: "",
    patientAddress: "",
    appointmentDate: "",
    appointmentTime: "",
    patientNote: "",
  });

  const doctors = [
    {
      id: 1,
      name: "BS.CKII Nguyễn Thị Minh Hương",
      image: "/images/doctors/bac-si.jpg",
      specialty: "Trưởng khoa Hỗ trợ sinh sản - 15 năm kinh nghiệm",
      achievements: [
        "Tỷ lệ thành công IVF 65% - cao nhất trong khu vực",
        "Thực hiện thành công hơn 2000 ca IVF",
        "Chứng chỉ chuyên gia sinh sản quốc tế",
        "Tác giả 25 bài báo khoa học về hỗ trợ sinh sản",
        "Giảng viên thỉnh giảng tại Đại học Y Hà Nội",
      ],
    },
    {
      id: 2,
      name: "BS.CKI Trần Văn Đức",
      image: "/images/doctors/bac-si.jpg",
      specialty: "Bác sĩ chuyên khoa Nam học - 12 năm kinh nghiệm",
      achievements: [
        "Chuyên gia hàng đầu về vô sinh nam",
        "Nghiên cứu chất lượng tinh trùng tiên tiến",
        "Thành viên Hội Nam học Việt Nam",
        "Điều trị thành công 1500+ ca vô sinh nam",
        "Chứng chỉ chuyên sâu về vi phẫu thuật nam khoa",
      ],
    },
    {
      id: 3,
      name: "BS.CKII Lê Thị Lan Anh",
      image: "/images/doctors/bac-si.jpg",
      specialty: "Phó trưởng khoa Sản phụ khoa - 18 năm kinh nghiệm",
      achievements: [
        "Chuyên gia siêu âm hàng đầu",
        "Tỷ lệ thành công IUI 40%",
        "Thực hiện 3000+ ca siêu âm chẩn đoán",
        "Giải thưởng bác sĩ xuất sắc năm 2023",
        "Chứng chỉ chuyên gia siêu âm 4D quốc tế",
      ],
    },
    {
      id: 4,
      name: "BS.CKI Phạm Minh Tuấn",
      image: "/images/doctors/bac-si.jpg",
      specialty: "Bác sĩ chuyên khoa Phẫu thuật - 10 năm kinh nghiệm",
      achievements: [
        "Chuyên gia phẫu thuật nội soi",
        "Điều trị lạc nội mạc tử cung hiệu quả",
        "Thực hiện 800+ ca phẫu thuật nội soi",
        "Chứng chỉ phẫu thuật nội soi châu Âu",
        "Tỷ lệ thành công phẫu thuật 95%",
      ],
    },
  ];

  const handleViewDetails = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleCloseModal = () => {
    setSelectedDoctor(null);
    setShowAppointmentModal(false);
    setSelectedDoctorForAppointment(null);
  };
  const handleAppointmentClick = (doctor) => {
    setSelectedDoctorForAppointment(doctor);
    setShowAppointmentModal(true);
    // Reset form data
    setAppointmentData({
      patientName: "",
      patientPhone: "",
      patientAddress: "",
      appointmentDate: "",
      appointmentTime: "",
      patientNote: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitAppointment = (e) => {
    e.preventDefault();

    // Validation
    if (
      !appointmentData.patientName ||
      !appointmentData.patientPhone ||
      !appointmentData.appointmentDate
    ) {
      alert("Vui lòng điền đầy đủ thông tin bắt buộc!");
      return;
    }

    const submissionData = {
      ...appointmentData,
      doctorId: selectedDoctorForAppointment.id,
      doctorName: selectedDoctorForAppointment.name,
      createdAt: new Date().toISOString(),
    };

    // Log dữ liệu để kiểm tra
    console.log("Appointment Data:", submissionData);

    // Hiển thị thông báo thành công
    alert(
      `Đặt lịch hẹn thành công với ${selectedDoctorForAppointment.name}!\nChúng tôi sẽ liên hệ với bạn sớm nhất.`
    );

    // Đóng modal
    handleCloseModal();
  };

  // Lấy thời gian thực để set minimum date
  const today = new Date().toISOString().split("T")[0];

  return (
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
          {doctors.map((doctor) => (
            <div key={doctor.id} className="staff-card">
              <div className="staff-image">
                <img src={doctor.image} alt={doctor.name} />
              </div>
              <h3>{doctor.name}</h3>
              <p className="staff-specialty">{doctor.specialty}</p>
              <button
                className="view-details-btn"
                onClick={() => handleViewDetails(doctor)}
              >
                Xem chi tiết
              </button>
              <button
                className="appointment-btn"
                onClick={() => handleAppointmentClick(doctor)}
              >
                Đặt Lịch Hẹn
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="commitment-preview">
        <h2>Cam kết của chúng tôi</h2>
        <ol>
          <li>🎯 Chuyên nghiệp - Áp dụng kỹ thuật tiên tiến nhất</li>
          <li>❤️ Tận tâm - Đồng hành suốt quá trình điều trị</li>
          <li>🏆 Hiệu quả - Tỷ lệ thành công cao với chi phí hợp lý</li>
          <li>🤝 Tin cậy - Minh bạch quy trình và chi phí</li>
        </ol>
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

      {/* Modal đặt lịch hẹn */}
      {showAppointmentModal && selectedDoctorForAppointment && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseModal}>
              ×
            </button>
            <div className="appointment-form">
              <h3>Đặt Lịch Hẹn với {selectedDoctorForAppointment.name}</h3>
              <form onSubmit={handleSubmitAppointment}>
                <div className="form-group">
                  <label htmlFor="patientName">Họ tên *</label>
                  <input
                    type="text"
                    id="patientName"
                    name="patientName"
                    value={appointmentData.patientName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="patientPhone">Điện thoại *</label>
                  <input
                    type="tel"
                    id="patientPhone"
                    name="patientPhone"
                    value={appointmentData.patientPhone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="patientAddress">Địa chỉ</label>
                  <input
                    type="text"
                    id="patientAddress"
                    name="patientAddress"
                    value={appointmentData.patientAddress}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="appointmentDate">Ngày khám mong muốn *</label>
                  <input
                    type="date"
                    id="appointmentDate"
                    name="appointmentDate"
                    value={appointmentData.appointmentDate}
                    onChange={handleInputChange}
                    min={today}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="appointmentTime">Giờ khám mong muốn</label>
                  <select
                    id="appointmentTime"
                    name="appointmentTime"
                    value={appointmentData.appointmentTime}
                    onChange={handleInputChange}
                  >
                    <option value="">Chọn giờ</option>
                    <option value="08:00">08:00</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="patientNote">
                    Nhu cầu khám bệnh (không bắt buộc)
                  </label>
                  <textarea
                    id="patientNote"
                    name="patientNote"
                    value={appointmentData.patientNote}
                    onChange={handleInputChange}
                    placeholder="Mô tả triệu chứng hoặc nhu cầu khám..."
                  />
                </div>
                <div className="form-buttons">
                  <button type="submit" className="submit-btn">
                    Đặt Lịch Hẹn
                  </button>
                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={handleCloseModal}
                  >
                    Hủy
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Staff;
