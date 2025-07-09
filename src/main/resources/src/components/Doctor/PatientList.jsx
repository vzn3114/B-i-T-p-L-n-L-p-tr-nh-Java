import React, { useState, useEffect } from "react";
import axios from "axios";
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
    clinicalProgress: "",
  });
  const [treatmentPlan, setTreatmentPlan] = useState({
    nextInjection: "",
    nextAppointment: "",
    notes: "",
  });
  const [prescriptionData, setPrescriptionData] = useState({
    patientId: "",
    treatmentService: "IUI",
    startDate: new Date().toISOString().split("T")[0],
    medicationProtocol: "",
    doctorNotes: "",
  });
  const [patients, setPatients] = useState([]);
  const [examinationRecords, setExaminationRecords] = useState([]);
  const [treatmentPlans, setTreatmentPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      setLoading(true);
      try {
        const doctorId = localStorage.getItem("doctorId") || 2;
        const token = localStorage.getItem("token");
        const res = await axios.get(`/api/users/doctor/${doctorId}/customers`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPatients(res.data);
        console.log("Danh sách bệnh nhân:", res.data);
      } catch (err) {
        setError("Lỗi khi lấy danh sách bệnh nhân");
        console.error(err);
      }
      setLoading(false);
    };
    fetchPatients();
  }, []);

  const filteredPatients = patients.filter((patient) => {
    return (
      (!selectedService || selectedService === "all") && (!selectedDate || true) // Không filter theo ngày khám nữa
    );
  });

  const handleExaminationRecord = async (patient) => {
    setSelectedPatient(patient);
    setShowExaminationModal(true);
    try {
      const res = await axios.get(`/api/examinations/customer/${patient.id}`);
      setExaminationRecords(res.data);
      console.log(`Hồ sơ thăm khám của ${patient.fullName}:`, res.data);
    } catch (err) {
      setError("Lỗi khi lấy hồ sơ thăm khám");
      console.error(err);
    }
  };

  const handleTreatmentUpdate = async (patient) => {
    setSelectedPatient(patient);
    setShowTreatmentModal(true);
    try {
      // Lấy treatment của customer
      const res = await axios.get(`/api/treatments?customerId=${patient.id}`);
      if (res.data && res.data.length > 0) {
        const treatment = res.data[0]; // lấy treatment mới nhất
        // Lấy treatment update
        const updateRes = await axios.get(
          `/api/treatment-updates/treatment/${treatment.id}`
        );
        setTreatmentPlans(updateRes.data);
        console.log(
          `Kế hoạch điều trị của ${patient.fullName}:`,
          updateRes.data
        );
      }
    } catch (err) {
      setError("Lỗi khi lấy kế hoạch điều trị");
      console.error(err);
    }
  };

  const handleExaminationSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        patientId: selectedPatient.id,
        doctorId: 2, // hoặc lấy từ localStorage
        appointmentId: null, // hoặc lấy id lịch hẹn nếu có
        date: new Date().toISOString(),
        ...examinationData,
      };
      const res = await axios.post("/api/examinations", payload);
      console.log("Ghi nhận thăm khám thành công:", res.data);
      setShowExaminationModal(false);
      // Reload lại hồ sơ thăm khám
      const reload = await axios.get(
        `/api/examinations/customer/${selectedPatient.id}`
      );
      setExaminationRecords(reload.data);
    } catch (err) {
      setError("Lỗi khi ghi nhận thăm khám");
      console.error(err);
    }
  };

  const handleTreatmentSubmit = async (e) => {
    e.preventDefault();
    try {
      // Lấy treatmentId của bệnh nhân
      const treatmentRes = await axios.get(
        `/api/treatments?customerId=${selectedPatient.id}`
      );
      const treatmentId = treatmentRes.data[0]?.id;
      const payload = {
        treatmentId,
        doctorId: 2, // hoặc lấy từ localStorage
        updateTime: new Date().toISOString(),
        ...treatmentPlan,
      };
      const res = await axios.post("/api/treatment-updates", payload);
      console.log("Cập nhật điều trị thành công:", res.data);
      setShowTreatmentModal(false);
      // Reload lại treatment plan
      const reload = await axios.get(
        `/api/treatment-updates/treatment/${treatmentId}`
      );
      setTreatmentPlans(reload.data);
    } catch (err) {
      setError("Lỗi khi cập nhật điều trị");
      console.error(err);
    }
  };

  const handlePrescriptionSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Prescription data:", prescriptionData);
    setShowPrescriptionModal(false);
    setPrescriptionData({
      patientId: "",
      treatmentService: "IUI",
      startDate: new Date().toISOString().split("T")[0],
      medicationProtocol: "",
      doctorNotes: "",
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
            <th>Email</th>
            <th>Dịch vụ</th>
            <th>Ngày bắt đầu</th>
            <th>Trạng thái</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient) => (
            <tr key={patient.id}>
              <td>
                <img
                  src={patient.avatar || "/logo192.png"}
                  alt="avatar"
                  className="patient-avatar"
                />
              </td>
              <td>{patient.fullName}</td>
              <td>{patient.email}</td>
              <td>{patient.serviceName || "Chưa có"}</td>
              <td>
                {patient.startDate
                  ? new Date(patient.startDate).toLocaleDateString("vi-VN")
                  : "Chưa có"}
              </td>
              <td>{patient.status || "-"}</td>
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
              <h3>
                {record.patientName} - {record.service}
              </h3>
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
              <h3>
                {plan.patientName} - {plan.service}
              </h3>
              <span className={`plan-status ${plan.status}`}>
                {plan.status === "ongoing" && "Đang thực hiện"}
                {plan.status === "upcoming" && "Sắp tới"}
                {plan.status === "completed" && "Hoàn thành"}
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

  if (loading) return <div>Đang tải dữ liệu...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <>
      <DoctorNavbar />
      <div className="patient-list-container">
        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button
            className={`tab-btn ${activeTab === "patients" ? "active" : ""}`}
            onClick={() => setActiveTab("patients")}
          >
            <i className="tab-icon">👥</i>
            Danh sách bệnh nhân
          </button>
          <button
            className={`tab-btn ${
              activeTab === "examinations" ? "active" : ""
            }`}
            onClick={() => setActiveTab("examinations")}
          >
            <i className="tab-icon">📋</i>
            Hồ sơ thăm khám
          </button>
          <button
            className={`tab-btn ${activeTab === "treatments" ? "active" : ""}`}
            onClick={() => setActiveTab("treatments")}
          >
            <i className="tab-icon">💊</i>
            Kế hoạch điều trị
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "patients" && renderPatientsTab()}
        {activeTab === "examinations" && renderExaminationRecordsTab()}
        {activeTab === "treatments" && renderTreatmentPlansTab()}

        {/* Examination Modal */}
        {showExaminationModal && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h3>
                  Ghi nhận dữ liệu thăm khám - {selectedPatient?.fullName}
                </h3>
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
                    onChange={(e) =>
                      setExaminationData({
                        ...examinationData,
                        betaHCG: e.target.value,
                      })
                    }
                    placeholder="Nhập kết quả Beta hCG"
                  />
                </div>
                <div className="form-group">
                  <label>Kết quả xét nghiệm nội tiết:</label>
                  <textarea
                    value={examinationData.hormones}
                    onChange={(e) =>
                      setExaminationData({
                        ...examinationData,
                        hormones: e.target.value,
                      })
                    }
                    placeholder="Nhập kết quả xét nghiệm nội tiết"
                  />
                </div>
                <div className="form-group">
                  <label>Chỉ số siêu âm:</label>
                  <textarea
                    value={examinationData.ultrasound}
                    onChange={(e) =>
                      setExaminationData({
                        ...examinationData,
                        ultrasound: e.target.value,
                      })
                    }
                    placeholder="Nhập chỉ số siêu âm"
                  />
                </div>
                <div className="form-group">
                  <label>Phản ứng với thuốc:</label>
                  <textarea
                    value={examinationData.medicationReaction}
                    onChange={(e) =>
                      setExaminationData({
                        ...examinationData,
                        medicationReaction: e.target.value,
                      })
                    }
                    placeholder="Nhập phản ứng với thuốc"
                  />
                </div>
                <div className="form-group">
                  <label>Tiến triển lâm sàng:</label>
                  <textarea
                    value={examinationData.clinicalProgress}
                    onChange={(e) =>
                      setExaminationData({
                        ...examinationData,
                        clinicalProgress: e.target.value,
                      })
                    }
                    placeholder="Nhập tiến triển lâm sàng"
                  />
                </div>
                <div className="modal-actions">
                  <button type="submit" className="btn btn-primary">
                    Lưu dữ liệu
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowExaminationModal(false)}
                  >
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
                <h3>
                  Cập nhật kế hoạch điều trị - {selectedPatient?.fullName}
                </h3>
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
                    onChange={(e) =>
                      setTreatmentPlan({
                        ...treatmentPlan,
                        nextInjection: e.target.value,
                      })
                    }
                    placeholder="Nhập chỉ định mũi tiêm tiếp theo"
                  />
                </div>
                <div className="form-group">
                  <label>Hẹn lịch tái khám:</label>
                  <input
                    type="datetime-local"
                    value={treatmentPlan.nextAppointment}
                    onChange={(e) =>
                      setTreatmentPlan({
                        ...treatmentPlan,
                        nextAppointment: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Ghi chú:</label>
                  <textarea
                    value={treatmentPlan.notes}
                    onChange={(e) =>
                      setTreatmentPlan({
                        ...treatmentPlan,
                        notes: e.target.value,
                      })
                    }
                    placeholder="Nhập ghi chú bổ sung"
                  />
                </div>
                <div className="modal-actions">
                  <button type="submit" className="btn btn-primary">
                    Cập nhật kế hoạch
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowTreatmentModal(false)}
                  >
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
                    onChange={(e) =>
                      setPrescriptionData({
                        ...prescriptionData,
                        patientId: e.target.value,
                      })
                    }
                    required
                  >
                    <option value="">-- Chọn bệnh nhân --</option>
                    {patients.map((patient) => (
                      <option key={patient.id} value={patient.id}>
                        {patient.fullName} - {patient.email}
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
                        onChange={(e) =>
                          setPrescriptionData({
                            ...prescriptionData,
                            treatmentService: e.target.value,
                          })
                        }
                      />
                      <span className="radio-text">IUI</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="treatmentService"
                        value="IVF"
                        checked={prescriptionData.treatmentService === "IVF"}
                        onChange={(e) =>
                          setPrescriptionData({
                            ...prescriptionData,
                            treatmentService: e.target.value,
                          })
                        }
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
                    onChange={(e) =>
                      setPrescriptionData({
                        ...prescriptionData,
                        startDate: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phác đồ thuốc ban đầu:</label>
                  <input
                    type="text"
                    value={prescriptionData.medicationProtocol}
                    onChange={(e) =>
                      setPrescriptionData({
                        ...prescriptionData,
                        medicationProtocol: e.target.value,
                      })
                    }
                    placeholder="Ví dụ: Gonal-F 75IU/ngày"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Ghi chú của bác sĩ:</label>
                  <textarea
                    value={prescriptionData.doctorNotes}
                    onChange={(e) =>
                      setPrescriptionData({
                        ...prescriptionData,
                        doctorNotes: e.target.value,
                      })
                    }
                    placeholder="Nhận xét, lưu ý đặc biệt về bệnh nhân"
                    rows="4"
                  />
                </div>

                <div className="modal-actions">
                  <button type="submit" className="btn btn-primary">
                    ✅ Xác nhận điều trị
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowPrescriptionModal(false)}
                  >
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
