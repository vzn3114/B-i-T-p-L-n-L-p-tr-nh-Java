import React, { useState } from "react";
import DoctorNavbar from "./Navbar";
import "../../static/assets/PatientList.css";

const PatientList = () => {
  const [selectedService, setSelectedService] = useState("all");
  const [selectedDate, setSelectedDate] = useState("");
  const [showExaminationModal, setShowExaminationModal] = useState(false);
  const [showTreatmentModal, setShowTreatmentModal] = useState(false);
  const [showPrescriptionModal, setShowPrescriptionModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [activeTab, setActiveTab] = useState("patients");
  const [examinationData, setExaminationData] = useState({
    betaHCG: "",
    hormones: "",
    ultrasound: "",
    medicationReaction: "",
    clinicalProgress: ""
  });
  const [treatmentPlan, setTreatmentPlan] = useState({
    nextInjection: "",
    nextAppointment: "",
    notes: ""
  });
  const [prescriptionData, setPrescriptionData] = useState({
    patientId: "",
    treatmentService: "IUI",
    startDate: new Date().toISOString().split('T')[0],
    medicationProtocol: "",
    doctorNotes: ""
  });

  const patients = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      service: "IUI",
      appointmentDate: "2024-06-10",
      status: "ongoing",
      avatar: "/logo192.png"
    },
    {
      id: 2,
      name: "Trần Thị B",
      service: "IVF",
      appointmentDate: "2024-06-12",
      status: "success",
      avatar: "/logo192.png"
    },
    {
      id: 3,
      name: "Lê Văn C",
      service: "IVF",
      appointmentDate: "2024-06-13",
      status: "failed",
      avatar: "/logo192.png"
    },
    {
      id: 4,
      name: "Phạm Thị D",
      service: "IUI",
      appointmentDate: "2024-06-15",
      status: "ongoing",
      avatar: "/logo192.png"
    },
    {
      id: 5,
      name: "Hoàng Thị E",
      service: "IVF",
      appointmentDate: "2024-06-16",
      status: "ongoing",
      avatar: "/logo192.png"
    },
    {
      id: 6,
      name: "Vũ Văn F",
      service: "IUI",
      appointmentDate: "2024-06-17",
      status: "success",
      avatar: "/logo192.png"
    },
    {
      id: 7,
      name: "Đỗ Thị G",
      service: "IVF",
      appointmentDate: "2024-06-18",
      status: "ongoing",
      avatar: "/logo192.png"
    },
    {
      id: 8,
      name: "Ngô Văn H",
      service: "IUI",
      appointmentDate: "2024-06-19",
      status: "failed",
      avatar: "/logo192.png"
    },
    {
      id: 9,
      name: "Lý Thị I",
      service: "IVF",
      appointmentDate: "2024-06-20",
      status: "ongoing",
      avatar: "/logo192.png"
    },
    {
      id: 10,
      name: "Bùi Văn K",
      service: "IUI",
      appointmentDate: "2024-06-21",
      status: "success",
      avatar: "/logo192.png"
    },
    {
      id: 11,
      name: "Đặng Thị L",
      service: "IVF",
      appointmentDate: "2024-06-22",
      status: "ongoing",
      avatar: "/logo192.png"
    },
    {
      id: 12,
      name: "Hồ Văn M",
      service: "IUI",
      appointmentDate: "2024-06-23",
      status: "ongoing",
      avatar: "/logo192.png"
    },
    {
      id: 13,
      name: "Dương Thị N",
      service: "IVF",
      appointmentDate: "2024-06-24",
      status: "success",
      avatar: "/logo192.png"
    },
    {
      id: 14,
      name: "Tô Văn O",
      service: "IUI",
      appointmentDate: "2024-06-25",
      status: "failed",
      avatar: "/logo192.png"
    },
    {
      id: 15,
      name: "Mai Thị P",
      service: "IVF",
      appointmentDate: "2024-06-26",
      status: "ongoing",
      avatar: "/logo192.png"
    }
  ];

  const examinationRecords = [
    {
      id: 1,
      patientName: "Nguyễn Văn A",
      service: "IUI",
      date: "10/06/2024",
      betaHCG: "25.5 mIU/mL",
      hormones: "FSH: 8.2, LH: 6.1, E2: 45.2",
      ultrasound: "Nang trứng 18mm, niêm mạc 8mm",
      medicationReaction: "Tốt, không có tác dụng phụ",
      clinicalProgress: "Đáp ứng tốt với kích thích"
    },
    {
      id: 2,
      patientName: "Trần Thị B",
      service: "IVF",
      date: "12/06/2024",
      betaHCG: "156.8 mIU/mL",
      hormones: "Progesterone: 25.3, E2: 180.5",
      ultrasound: "Thai 6 tuần, tim thai (+)",
      medicationReaction: "Tốt, đáp ứng đều",
      clinicalProgress: "Thai phát triển bình thường"
    },
    {
      id: 3,
      patientName: "Lê Văn C",
      service: "IVF",
      date: "13/06/2024",
      betaHCG: "0.5 mIU/mL",
      hormones: "FSH: 12.5, LH: 8.3, E2: 35.1",
      ultrasound: "Không có nang trứng phát triển",
      medicationReaction: "Đáp ứng kém với thuốc",
      clinicalProgress: "Chu kỳ thất bại, cần điều chỉnh"
    },
    {
      id: 4,
      patientName: "Phạm Thị D",
      service: "IUI",
      date: "15/06/2024",
      betaHCG: "18.2 mIU/mL",
      hormones: "FSH: 7.8, LH: 5.9, E2: 42.8",
      ultrasound: "Nang trứng 16mm, niêm mạc 7.5mm",
      medicationReaction: "Tốt, đáp ứng đều",
      clinicalProgress: "Tiến triển tốt, chuẩn bị IUI"
    },
    {
      id: 5,
      patientName: "Hoàng Thị E",
      service: "IVF",
      date: "16/06/2024",
      betaHCG: "89.3 mIU/mL",
      hormones: "Progesterone: 18.7, E2: 145.2",
      ultrasound: "Thai 5 tuần, túi thai (+), tim thai chưa rõ",
      medicationReaction: "Tốt, không có tác dụng phụ",
      clinicalProgress: "Thai sớm, cần theo dõi thêm"
    },
    {
      id: 6,
      patientName: "Vũ Văn F",
      service: "IUI",
      date: "17/06/2024",
      betaHCG: "45.6 mIU/mL",
      hormones: "FSH: 6.9, LH: 4.8, E2: 38.5",
      ultrasound: "Nang trứng 20mm, niêm mạc 9mm",
      medicationReaction: "Tốt, đáp ứng tốt",
      clinicalProgress: "Thành công, thai 4 tuần"
    },
    {
      id: 7,
      patientName: "Đỗ Thị G",
      service: "IVF",
      date: "18/06/2024",
      betaHCG: "0.8 mIU/mL",
      hormones: "FSH: 11.2, LH: 7.5, E2: 32.1",
      ultrasound: "Nang trứng nhỏ, niêm mạc mỏng",
      medicationReaction: "Đáp ứng chậm",
      clinicalProgress: "Cần tăng liều thuốc"
    },
    {
      id: 8,
      patientName: "Ngô Văn H",
      service: "IUI",
      date: "19/06/2024",
      betaHCG: "0.3 mIU/mL",
      hormones: "FSH: 9.8, LH: 6.7, E2: 28.5",
      ultrasound: "Không có nang trứng phát triển",
      medicationReaction: "Đáp ứng kém",
      clinicalProgress: "Chu kỳ thất bại"
    },
    {
      id: 9,
      patientName: "Lý Thị I",
      service: "IVF",
      date: "20/06/2024",
      betaHCG: "67.2 mIU/mL",
      hormones: "Progesterone: 22.1, E2: 165.8",
      ultrasound: "Thai 5 tuần, túi thai (+), tim thai (+)",
      medicationReaction: "Tốt, đáp ứng đều",
      clinicalProgress: "Thai phát triển bình thường"
    },
    {
      id: 10,
      patientName: "Bùi Văn K",
      service: "IUI",
      date: "21/06/2024",
      betaHCG: "32.8 mIU/mL",
      hormones: "FSH: 7.2, LH: 5.3, E2: 41.6",
      ultrasound: "Nang trứng 19mm, niêm mạc 8.5mm",
      medicationReaction: "Tốt, không có tác dụng phụ",
      clinicalProgress: "Thành công, thai 3 tuần"
    }
  ];

  const treatmentPlans = [
    {
      id: 1,
      patientName: "Nguyễn Văn A",
      service: "IUI",
      status: "ongoing",
      nextInjection: "Gonal-F 75IU ngày mai",
      nextAppointment: "15/06/2024 - 9:00 AM",
      notes: "Theo dõi nang trứng, chuẩn bị IUI"
    },
    {
      id: 2,
      patientName: "Phạm Thị D",
      service: "IUI",
      status: "upcoming",
      nextInjection: "Menopur 75IU trong 3 ngày",
      nextAppointment: "18/06/2024 - 2:00 PM",
      notes: "Bắt đầu chu kỳ mới, theo dõi đáp ứng"
    },
    {
      id: 3,
      patientName: "Hoàng Thị E",
      service: "IVF",
      status: "ongoing",
      nextInjection: "Progesterone 100mg/ngày",
      nextAppointment: "25/06/2024 - 10:00 AM",
      notes: "Theo dõi thai sớm, siêu âm kiểm tra"
    },
    {
      id: 4,
      patientName: "Đỗ Thị G",
      service: "IVF",
      status: "ongoing",
      nextInjection: "Gonal-F 150IU + Menopur 75IU",
      nextAppointment: "22/06/2024 - 3:00 PM",
      notes: "Tăng liều thuốc, theo dõi đáp ứng"
    },
    {
      id: 5,
      patientName: "Lý Thị I",
      service: "IVF",
      status: "ongoing",
      nextInjection: "Progesterone 200mg/ngày",
      nextAppointment: "27/06/2024 - 11:00 AM",
      notes: "Thai phát triển tốt, tiếp tục hỗ trợ"
    },
    {
      id: 6,
      patientName: "Đặng Thị L",
      service: "IVF",
      status: "upcoming",
      nextInjection: "Bắt đầu chu kỳ mới",
      nextAppointment: "28/06/2024 - 9:00 AM",
      notes: "Chuẩn bị cho chu kỳ IVF mới"
    },
    {
      id: 7,
      patientName: "Hồ Văn M",
      service: "IUI",
      status: "ongoing",
      nextInjection: "Gonal-F 100IU",
      nextAppointment: "24/06/2024 - 2:00 PM",
      notes: "Theo dõi nang trứng, chuẩn bị IUI"
    },
    {
      id: 8,
      patientName: "Dương Thị N",
      service: "IVF",
      status: "completed",
      nextInjection: "Không cần",
      nextAppointment: "30/06/2024 - 10:00 AM",
      notes: "Thai thành công, chuyển sang chăm sóc thai"
    },
    {
      id: 9,
      patientName: "Mai Thị P",
      service: "IVF",
      status: "ongoing",
      nextInjection: "Gonal-F 125IU + Lupron",
      nextAppointment: "26/06/2024 - 1:00 PM",
      notes: "Chuẩn bị cho chọc trứng"
    },
    {
      id: 10,
      patientName: "Trần Thị Q",
      service: "IUI",
      status: "upcoming",
      nextInjection: "Clomid 50mg/ngày",
      nextAppointment: "29/06/2024 - 11:00 AM",
      notes: "Bắt đầu chu kỳ IUI mới"
    }
  ];

  const filteredPatients = patients.filter(patient => {
    const serviceMatch = selectedService === "all" || patient.service === selectedService;
    const dateMatch = !selectedDate || patient.appointmentDate === selectedDate;
    return serviceMatch && dateMatch;
  });

  const handleExaminationRecord = (patient) => {
    setSelectedPatient(patient);
    setShowExaminationModal(true);
  };

  const handleTreatmentUpdate = (patient) => {
    setSelectedPatient(patient);
    setShowTreatmentModal(true);
  };

  const handleExaminationSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Examination data for patient:", selectedPatient.name, examinationData);
    setShowExaminationModal(false);
    setExaminationData({
      betaHCG: "",
      hormones: "",
      ultrasound: "",
      medicationReaction: "",
      clinicalProgress: ""
    });
  };

  const handleTreatmentSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Treatment plan for patient:", selectedPatient.name, treatmentPlan);
    setShowTreatmentModal(false);
    setTreatmentPlan({
      nextInjection: "",
      nextAppointment: "",
      notes: ""
    });
  };

  const handlePrescriptionSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Prescription data:", prescriptionData);
    setShowPrescriptionModal(false);
    setPrescriptionData({
      patientId: "",
      treatmentService: "IUI",
      startDate: new Date().toISOString().split('T')[0],
      medicationProtocol: "",
      doctorNotes: ""
    });
  };

  const renderPatientsTab = () => (
    <div className="tab-content">
      <h2>Danh sách bệnh nhân điều trị</h2>
      
      {/* Filter Section */}
      <div className="filter-section">
        <div className="filter-group">
          <label htmlFor="service-filter">Lọc theo dịch vụ:</label>
          <select
            id="service-filter"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            <option value="all">Tất cả</option>
            <option value="IUI">IUI</option>
            <option value="IVF">IVF</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label htmlFor="date-filter">Lọc theo ngày khám:</label>
          <input
            type="date"
            id="date-filter"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <button
            className="btn btn-primary prescription-btn"
            onClick={() => setShowPrescriptionModal(true)}
          >
            💊 Chỉ định điều trị
          </button>
        </div>
      </div>

      <table className="patient-table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Họ tên bệnh nhân</th>
            <th>Dịch vụ</th>
            <th>Ngày khám</th>
            <th>Trạng thái</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient) => (
            <tr key={patient.id}>
            <td>
                <img src={patient.avatar} alt="avatar" className="patient-avatar" />
            </td>
              <td>{patient.name}</td>
              <td>{patient.service}</td>
              <td>{new Date(patient.appointmentDate).toLocaleDateString('vi-VN')}</td>
              <td>
                <span className={`status ${patient.status}`}>
                  {patient.status === 'ongoing' && 'Đang điều trị'}
                  {patient.status === 'success' && 'Thành công'}
                  {patient.status === 'failed' && 'Thất bại'}
                </span>
            </td>
              <td>
                <div className="action-buttons">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleExaminationRecord(patient)}
                  >
                    Ghi nhận khám
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleTreatmentUpdate(patient)}
                  >
                    Cập nhật điều trị
                  </button>
                </div>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderExaminationRecordsTab = () => (
    <div className="tab-content">
      <h2>Hồ sơ thăm khám</h2>
      <div className="records-container">
        {examinationRecords.map((record) => (
          <div key={record.id} className="record-card">
            <div className="record-header">
              <h3>{record.patientName} - {record.service}</h3>
              <span className="record-date">{record.date}</span>
            </div>
            <div className="record-content">
              <div className="record-item">
                <strong>Beta hCG:</strong> {record.betaHCG}
              </div>
              <div className="record-item">
                <strong>Nội tiết:</strong> {record.hormones}
              </div>
              <div className="record-item">
                <strong>Siêu âm:</strong> {record.ultrasound}
              </div>
              <div className="record-item">
                <strong>Phản ứng thuốc:</strong> {record.medicationReaction}
              </div>
              <div className="record-item">
                <strong>Tiến triển:</strong> {record.clinicalProgress}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTreatmentPlansTab = () => (
    <div className="tab-content">
      <h2>Kế hoạch điều trị</h2>
      <div className="plans-container">
        {treatmentPlans.map((plan) => (
          <div key={plan.id} className="plan-card">
            <div className="plan-header">
              <h3>{plan.patientName} - {plan.service}</h3>
              <span className={`plan-status ${plan.status}`}>
                {plan.status === 'ongoing' && 'Đang thực hiện'}
                {plan.status === 'upcoming' && 'Sắp tới'}
                {plan.status === 'completed' && 'Hoàn thành'}
              </span>
            </div>
            <div className="plan-content">
              <div className="plan-item">
                <strong>Mũi tiêm tiếp theo:</strong> {plan.nextInjection}
              </div>
              <div className="plan-item">
                <strong>Lịch tái khám:</strong> {plan.nextAppointment}
              </div>
              <div className="plan-item">
                <strong>Ghi chú:</strong> {plan.notes}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <DoctorNavbar />
      <div className="patient-list-container">
        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button
            className={`tab-btn ${activeTab === 'patients' ? 'active' : ''}`}
            onClick={() => setActiveTab('patients')}
          >
            <i className="tab-icon">👥</i>
            Danh sách bệnh nhân
          </button>
          <button
            className={`tab-btn ${activeTab === 'examinations' ? 'active' : ''}`}
            onClick={() => setActiveTab('examinations')}
          >
            <i className="tab-icon">📋</i>
            Hồ sơ thăm khám
          </button>
          <button
            className={`tab-btn ${activeTab === 'treatments' ? 'active' : ''}`}
            onClick={() => setActiveTab('treatments')}
          >
            <i className="tab-icon">💊</i>
            Kế hoạch điều trị
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'patients' && renderPatientsTab()}
        {activeTab === 'examinations' && renderExaminationRecordsTab()}
        {activeTab === 'treatments' && renderTreatmentPlansTab()}

        {/* Examination Modal */}
        {showExaminationModal && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h3>Ghi nhận dữ liệu thăm khám - {selectedPatient?.name}</h3>
                <button
                  className="close-btn"
                  onClick={() => setShowExaminationModal(false)}
                >
                  ×
                </button>
              </div>
              <form onSubmit={handleExaminationSubmit}>
                <div className="form-group">
                  <label>Kết quả xét nghiệm Beta hCG:</label>
                  <input
                    type="text"
                    value={examinationData.betaHCG}
                    onChange={(e) => setExaminationData({...examinationData, betaHCG: e.target.value})}
                    placeholder="Nhập kết quả Beta hCG"
                  />
                </div>
                <div className="form-group">
                  <label>Kết quả xét nghiệm nội tiết:</label>
                  <textarea
                    value={examinationData.hormones}
                    onChange={(e) => setExaminationData({...examinationData, hormones: e.target.value})}
                    placeholder="Nhập kết quả xét nghiệm nội tiết"
                  />
                </div>
                <div className="form-group">
                  <label>Chỉ số siêu âm:</label>
                  <textarea
                    value={examinationData.ultrasound}
                    onChange={(e) => setExaminationData({...examinationData, ultrasound: e.target.value})}
                    placeholder="Nhập chỉ số siêu âm"
                  />
                </div>
                <div className="form-group">
                  <label>Phản ứng với thuốc:</label>
                  <textarea
                    value={examinationData.medicationReaction}
                    onChange={(e) => setExaminationData({...examinationData, medicationReaction: e.target.value})}
                    placeholder="Nhập phản ứng với thuốc"
                  />
                </div>
                <div className="form-group">
                  <label>Tiến triển lâm sàng:</label>
                  <textarea
                    value={examinationData.clinicalProgress}
                    onChange={(e) => setExaminationData({...examinationData, clinicalProgress: e.target.value})}
                    placeholder="Nhập tiến triển lâm sàng"
                  />
                </div>
                <div className="modal-actions">
                  <button type="submit" className="btn btn-primary">Lưu dữ liệu</button>
                  <button type="button" className="btn btn-secondary" onClick={() => setShowExaminationModal(false)}>
                    Hủy
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Treatment Plan Modal */}
        {showTreatmentModal && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h3>Cập nhật kế hoạch điều trị - {selectedPatient?.name}</h3>
                <button
                  className="close-btn"
                  onClick={() => setShowTreatmentModal(false)}
                >
                  ×
                </button>
              </div>
              <form onSubmit={handleTreatmentSubmit}>
                <div className="form-group">
                  <label>Chỉ định mũi tiêm tiếp theo:</label>
                  <textarea
                    value={treatmentPlan.nextInjection}
                    onChange={(e) => setTreatmentPlan({...treatmentPlan, nextInjection: e.target.value})}
                    placeholder="Nhập chỉ định mũi tiêm tiếp theo"
                  />
                </div>
                <div className="form-group">
                  <label>Hẹn lịch tái khám:</label>
                  <input
                    type="datetime-local"
                    value={treatmentPlan.nextAppointment}
                    onChange={(e) => setTreatmentPlan({...treatmentPlan, nextAppointment: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Ghi chú:</label>
                  <textarea
                    value={treatmentPlan.notes}
                    onChange={(e) => setTreatmentPlan({...treatmentPlan, notes: e.target.value})}
                    placeholder="Nhập ghi chú bổ sung"
                  />
                </div>
                <div className="modal-actions">
                  <button type="submit" className="btn btn-primary">Cập nhật kế hoạch</button>
                  <button type="button" className="btn btn-secondary" onClick={() => setShowTreatmentModal(false)}>
                    Hủy
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Prescription Modal */}
        {showPrescriptionModal && (
          <div className="modal-overlay">
            <div className="modal prescription-modal">
              <div className="modal-header">
                <h3>💊 Chỉ định điều trị cho bệnh nhân</h3>
                <button
                  className="close-btn"
                  onClick={() => setShowPrescriptionModal(false)}
                >
                  ×
                </button>
              </div>
              <form onSubmit={handlePrescriptionSubmit}>
                <div className="form-group">
                  <label>Chọn bệnh nhân:</label>
                  <select
                    value={prescriptionData.patientId}
                    onChange={(e) => setPrescriptionData({...prescriptionData, patientId: e.target.value})}
                    required
                  >
                    <option value="">-- Chọn bệnh nhân --</option>
                    {patients.map((patient) => (
                      <option key={patient.id} value={patient.id}>
                        {patient.name} - {patient.service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Dịch vụ điều trị:</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="treatmentService"
                        value="IUI"
                        checked={prescriptionData.treatmentService === "IUI"}
                        onChange={(e) => setPrescriptionData({...prescriptionData, treatmentService: e.target.value})}
                      />
                      <span className="radio-text">IUI</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="treatmentService"
                        value="IVF"
                        checked={prescriptionData.treatmentService === "IVF"}
                        onChange={(e) => setPrescriptionData({...prescriptionData, treatmentService: e.target.value})}
                      />
                      <span className="radio-text">IVF</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label>Ngày bắt đầu điều trị:</label>
                  <input
                    type="date"
                    value={prescriptionData.startDate}
                    onChange={(e) => setPrescriptionData({...prescriptionData, startDate: e.target.value})}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phác đồ thuốc ban đầu:</label>
                  <input
                    type="text"
                    value={prescriptionData.medicationProtocol}
                    onChange={(e) => setPrescriptionData({...prescriptionData, medicationProtocol: e.target.value})}
                    placeholder="Ví dụ: Gonal-F 75IU/ngày"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Ghi chú của bác sĩ:</label>
                  <textarea
                    value={prescriptionData.doctorNotes}
                    onChange={(e) => setPrescriptionData({...prescriptionData, doctorNotes: e.target.value})}
                    placeholder="Nhận xét, lưu ý đặc biệt về bệnh nhân"
                    rows="4"
                  />
                </div>

                <div className="modal-actions">
                  <button type="submit" className="btn btn-primary">
                    ✅ Xác nhận điều trị
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={() => setShowPrescriptionModal(false)}>
                    Hủy
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
    </div>
  </>
);
};

export default PatientList;
