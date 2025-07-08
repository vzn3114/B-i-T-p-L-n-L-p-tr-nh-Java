import React, { useState, useEffect } from "react";
import AdminNavbar from "./Navbar";
import "../../static/assets/AdminDashboard.css";
import { Bar, Pie } from "react-chartjs-2";
import { fetchWithAuth } from "./admin";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  PointElement,
  LineElement
);

// Biểu đồ cột: Số ca điều trị, IUI, IVF, tỷ lệ thành công từng tháng
const barData = {
  labels: [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
  ],
  datasets: [
    {
      label: "Tổng ca điều trị",
      data: [30, 45, 50, 60, 55, 70, 80],
      backgroundColor: "rgba(79, 140, 255, 0.85)",
      borderRadius: 14,
      maxBarThickness: 32,
    },
    {
      label: "IUI",
      data: [10, 15, 18, 20, 22, 25, 28],
      backgroundColor: "rgba(110, 214, 255, 0.85)",
      borderRadius: 14,
      maxBarThickness: 32,
    },
    {
      label: "IVF",
      data: [8, 12, 15, 18, 20, 22, 25],
      backgroundColor: "rgba(255, 107, 129, 0.85)",
      borderRadius: 14,
      maxBarThickness: 32,
    },
    {
      label: "Tỷ lệ thành công (%)",
      data: [60, 62, 65, 68, 70, 72, 75],
      backgroundColor: "rgba(255, 209, 102, 0.85)",
      borderRadius: 14,
      maxBarThickness: 32,
      type: "line",
      order: 2,
      borderColor: "#ffd166",
      borderWidth: 3,
      pointBackgroundColor: "#ffd166",
      fill: false,
      tension: 0.4,
      yAxisID: "y1",
    },
  ],
};

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        font: { size: 14, family: "Segoe UI", weight: "bold" },
        color: "#222",
        boxWidth: 16,
        boxHeight: 16,
        padding: 12,
      },
    },
    title: {
      display: false,
    },
    tooltip: {
      backgroundColor: "#fff",
      titleColor: "#4f8cff",
      bodyColor: "#222",
      borderColor: "#4f8cff",
      borderWidth: 1,
      padding: 12,
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: {
        color: "#222",
        font: { size: 14, family: "Segoe UI" },
        maxRotation: 0,
        minRotation: 0,
      },
    },
    y: {
      grid: { color: "#e3f0ff" },
      beginAtZero: true,
      ticks: {
        color: "#888",
        font: { size: 13, family: "Segoe UI" },
        stepSize: 20,
      },
      title: {
        display: true,
        text: "Số ca",
        color: "#222",
        font: { size: 13, family: "Segoe UI", weight: "bold" },
      },
    },
    y1: {
      position: "right",
      grid: { drawOnChartArea: false },
      min: 0,
      max: 100,
      ticks: {
        color: "#ffd166",
        font: { size: 12, family: "Segoe UI" },
        callback: function (value) {
          return value + "%";
        },
        maxRotation: 0,
        minRotation: 0,
      },
      title: {
        display: true,
        text: "Tỷ lệ thành công (%)",
        color: "#ffd166",
        font: { size: 12, family: "Segoe UI", weight: "bold" },
      },
    },
  },
  layout: {
    padding: 10,
  },
  backgroundColor: "#e3f2fd",
};

// Biểu đồ tròn: Tỷ lệ bệnh nhân theo nhóm tuổi
const pieData = {
  labels: ["Dưới 30", "30-35", "36-40", "Trên 40"],
  datasets: [
    {
      data: [25, 40, 22, 13],
      backgroundColor: ["#4f8cff", "#ff6b81", "#6ed6ff", "#ffd166"],
      borderRadius: 10,
      borderWidth: 2,
      borderColor: "#fff",
    },
  ],
};

const pieOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
};

const SIDEBAR_TABS = [
  { key: "overview", label: "Tổng quan" },
  { key: "appointments", label: "Lịch hẹn" },
  { key: "patients", label: "Bệnh nhân" },
  { key: "doctors", label: "Bác sĩ" },
  { key: "services", label: "Dịch vụ" },
  { key: "reports", label: "Báo cáo" },
  { key: "other", label: "Khác" },
];

const OverviewTab = ({ stats, barData, barOptions, pieData, pieOptions }) => (
  <div className="tab-content">
    <h2 className="tab-title">Trung tâm hỗ trợ hiếm muộn - Thống kê</h2>
    <div className="dashboard-stats-row">
      <div className="stat-card">
        <div className="stat-icon">🧬</div>
        <div>
          <h3>{stats ? stats.totalAppointments : "..."}</h3>
          <p>Tổng ca điều trị</p>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon">🧪</div>
        <div>
          <h3>{stats ? stats.totalIUI : "..."}</h3>
          <p>IUI</p>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon">🍼</div>
        <div>
          <h3>{stats ? stats.totalIVF : "..."}</h3>
          <p>IVF</p>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon">✅</div>
        <div>
          <h3>{stats ? `${stats.successRate}%` : "..."}</h3>
          <p>Tỷ lệ thành công</p>
        </div>
      </div>
    </div>
    <div
      className="dashboard-widgets-row"
      style={{ display: "flex", gap: 32, marginBottom: 32 }}
    >
      <div
        className="widget payments-history"
        style={{ flex: 1, minWidth: 260 }}
      >
        <h4>Lịch sử điều trị nổi bật</h4>
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th
                style={{ textAlign: "left", color: "#1976d2", fontWeight: 700 }}
              >
                Họ tên
              </th>
              <th
                style={{ textAlign: "left", color: "#1976d2", fontWeight: 700 }}
              >
                Kết quả
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: "#1976d2", fontWeight: 600 }}>
                Nguyễn Thị A
              </td>
              <td style={{ color: "#4f8cff" }}>IUI thành công (Tháng 3)</td>
            </tr>
            <tr>
              <td style={{ color: "#1976d2", fontWeight: 600 }}>Trần Văn B</td>
              <td style={{ color: "#4f8cff" }}>IVF thành công (Tháng 5)</td>
            </tr>
            <tr>
              <td style={{ color: "#1976d2", fontWeight: 600 }}>Lê Thị C</td>
              <td style={{ color: "#4f8cff" }}>IUI thất bại (Tháng 6)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className="widget upcoming-appointments"
        style={{ flex: 1, minWidth: 260 }}
      >
        <h4>Lịch hẹn sắp tới</h4>
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th
                style={{ textAlign: "left", color: "#1976d2", fontWeight: 700 }}
              >
                Họ tên
              </th>
              <th
                style={{ textAlign: "left", color: "#1976d2", fontWeight: 700 }}
              >
                Dịch vụ/Thời gian
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: "#1976d2", fontWeight: 600 }}>
                Nguyễn Văn D
              </td>
              <td style={{ color: "#4f8cff" }}>Tư vấn hiếm muộn (10:00)</td>
            </tr>
            <tr>
              <td style={{ color: "#1976d2", fontWeight: 600 }}>Trần Thị E</td>
              <td style={{ color: "#4f8cff" }}>Khám IUI (10:30)</td>
            </tr>
            <tr>
              <td style={{ color: "#1976d2", fontWeight: 600 }}>Lê Văn F</td>
              <td style={{ color: "#4f8cff" }}>Khám IVF (11:00)</td>
            </tr>
            <tr>
              <td style={{ color: "#1976d2", fontWeight: 600 }}>Phạm Thị G</td>
              <td style={{ color: "#4f8cff" }}>Tái khám (11:30)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="dashboard-bottom-row">
      <div className="widget doctor-list">
        <h4>Chuyên gia hỗ trợ</h4>
        <ul className="tab-list">
          <li>
            <span className="tab-label">BS. Nguyễn Văn H</span>{" "}
            <span className="tab-desc">Chuyên gia IVF</span>
          </li>
          <li>
            <span className="tab-label">BS. Trần Thị I</span>{" "}
            <span className="tab-desc">Chuyên gia IUI</span>
          </li>
          <li>
            <span className="tab-label">BS. Lê Văn K</span>{" "}
            <span className="tab-desc">Tư vấn tâm lý</span>
          </li>
        </ul>
      </div>
      <div className="widget balance">
        <h4>Thống kê bệnh nhân</h4>
        <div className="balance-income">
          Bệnh nhân mới
          <br />
          <b>32</b>
        </div>
        <div className="balance-outcome">
          Tái khám
          <br />
          <b>18</b>
        </div>
      </div>
      <div className="widget appointments-overview">
        <h4>Tỷ lệ bệnh nhân theo nhóm tuổi</h4>
        <div className="pie-chart-placeholder">
          <Pie data={pieData} options={pieOptions} height={70} />
        </div>
        <ul className="legend">
          <li>
            <span className="dot male"></span>Dưới 30
          </li>
          <li>
            <span className="dot female"></span>30-35
          </li>
          <li>
            <span className="dot child"></span>36-40
          </li>
          <li>
            <span className="dot germany"></span>Trên 40
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const AppointmentsTab = () => (
  <div className="tab-content">
    <div className="tab-title">Lịch hẹn điều trị hiếm muộn</div>
    <table className="appointment-table">
      <thead>
        <tr>
          <th>Thời gian</th>
          <th>Bệnh nhân</th>
          <th>Dịch vụ</th>
          <th>Bác sĩ</th>
          <th>Trạng thái</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10:00</td>
          <td>Nguyễn Văn D</td>
          <td>Tư vấn hiếm muộn</td>
          <td>BS. Lê Văn K</td>
          <td>
            <span className="patient-status follow">Chờ khám</span>
          </td>
        </tr>
        <tr>
          <td>10:30</td>
          <td>Trần Thị E</td>
          <td>Khám IUI</td>
          <td>BS. Trần Thị I</td>
          <td>
            <span className="patient-status done">Đã xác nhận</span>
          </td>
        </tr>
        <tr>
          <td>11:00</td>
          <td>Lê Văn F</td>
          <td>Khám IVF</td>
          <td>BS. Nguyễn Văn H</td>
          <td>
            <span className="patient-status follow">Chờ khám</span>
          </td>
        </tr>
        <tr>
          <td>11:30</td>
          <td>Phạm Thị G</td>
          <td>Tái khám</td>
          <td>BS. Lê Văn K</td>
          <td>
            <span className="patient-status done">Đã hoàn thành</span>
          </td>
        </tr>
        <tr>
          <td>13:00</td>
          <td>Vũ Thị H</td>
          <td>IUI</td>
          <td>BS. Trần Thị I</td>
          <td>
            <span className="patient-status done">Đã xác nhận</span>
          </td>
        </tr>
        <tr>
          <td>13:30</td>
          <td>Ngô Văn Q</td>
          <td>IVF</td>
          <td>BS. Nguyễn Văn H</td>
          <td>
            <span className="patient-status follow">Chờ khám</span>
          </td>
        </tr>
        <tr>
          <td>14:00</td>
          <td>Đỗ Thị T</td>
          <td>Tư vấn</td>
          <td>BS. Lê Văn K</td>
          <td>
            <span className="patient-status done">Đã xác nhận</span>
          </td>
        </tr>
        <tr>
          <td>14:30</td>
          <td>Trịnh Văn U</td>
          <td>Tái khám</td>
          <td>BS. Lê Văn K</td>
          <td>
            <span className="patient-status repeat">Đã hoàn thành</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const PatientsTab = () => (
  <div className="tab-content">
    <div className="tab-title">Danh sách bệnh nhân hiếm muộn</div>
    <table className="patient-table">
      <thead>
        <tr>
          <th>Họ tên</th>
          <th>Tuổi</th>
          <th>Dịch vụ</th>
          <th>Trạng thái</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nguyễn Thị A</td>
          <td>30</td>
          <td>IUI</td>
          <td>
            <span className="patient-status done">Đã điều trị</span>
          </td>
        </tr>
        <tr>
          <td>Trần Văn B</td>
          <td>35</td>
          <td>IVF</td>
          <td>
            <span className="patient-status done">Đã điều trị</span>
          </td>
        </tr>
        <tr>
          <td>Lê Thị C</td>
          <td>32</td>
          <td>Tư vấn</td>
          <td>
            <span className="patient-status follow">Đang theo dõi</span>
          </td>
        </tr>
        <tr>
          <td>Phạm Thị G</td>
          <td>29</td>
          <td>Tái khám</td>
          <td>
            <span className="patient-status repeat">Đã tái khám</span>
          </td>
        </tr>
        <tr>
          <td>Vũ Thị H</td>
          <td>28</td>
          <td>IUI</td>
          <td>
            <span className="patient-status done">Đã điều trị</span>
          </td>
        </tr>
        <tr>
          <td>Ngô Văn Q</td>
          <td>38</td>
          <td>IVF</td>
          <td>
            <span className="patient-status done">Đã điều trị</span>
          </td>
        </tr>
        <tr>
          <td>Đỗ Thị T</td>
          <td>34</td>
          <td>Tư vấn</td>
          <td>
            <span className="patient-status follow">Đang theo dõi</span>
          </td>
        </tr>
        <tr>
          <td>Trịnh Văn U</td>
          <td>31</td>
          <td>Tái khám</td>
          <td>
            <span className="patient-status repeat">Đã tái khám</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const DoctorsTab = () => (
  <div className="tab-content">
    <div className="tab-title">Chuyên gia hỗ trợ hiếm muộn</div>
    <div className="expert-list">
      <div className="expert-card">
        <div className="expert-avatar">👨‍⚕️</div>
        <div className="expert-info">
          <div className="expert-name">BS. Nguyễn Văn H</div>
          <div className="expert-desc">Chuyên gia IVF, 200+ ca thành công</div>
        </div>
      </div>
      <div className="expert-card">
        <div className="expert-avatar">👩‍⚕️</div>
        <div className="expert-info">
          <div className="expert-name">BS. Trần Thị I</div>
          <div className="expert-desc">Chuyên gia IUI, 150+ ca thành công</div>
        </div>
      </div>
      <div className="expert-card">
        <div className="expert-avatar">🧑‍⚕️</div>
        <div className="expert-info">
          <div className="expert-name">BS. Lê Văn K</div>
          <div className="expert-desc">
            Tư vấn tâm lý, hỗ trợ 100+ bệnh nhân
          </div>
        </div>
      </div>
      <div className="expert-card">
        <div className="expert-avatar">👨‍⚕️</div>
        <div className="expert-info">
          <div className="expert-name">BS. Phạm Quốc M</div>
          <div className="expert-desc">Chuyên gia nội tiết, 120+ ca hỗ trợ</div>
        </div>
      </div>
      <div className="expert-card">
        <div className="expert-avatar">👩‍⚕️</div>
        <div className="expert-info">
          <div className="expert-name">BS. Đặng Thị N</div>
          <div className="expert-desc">
            Chuyên gia phôi học, 90+ ca thành công
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ServicesTab = () => (
  <div className="tab-content">
    <div className="tab-title">Dịch vụ hỗ trợ sinh sản</div>
    <div className="service-list">
      <div className="service-card">
        <div className="service-icon">🧬</div>
        <div className="service-info">
          <div className="service-name">IVF</div>
          <div className="service-desc">
            Thụ tinh trong ống nghiệm, tỷ lệ thành công cao
          </div>
        </div>
      </div>
      <div className="service-card">
        <div className="service-icon">🧪</div>
        <div className="service-info">
          <div className="service-name">IUI</div>
          <div className="service-desc">
            Bơm tinh trùng vào buồng tử cung, ít xâm lấn
          </div>
        </div>
      </div>
      <div className="service-card">
        <div className="service-icon">💬</div>
        <div className="service-info">
          <div className="service-name">Tư vấn tâm lý</div>
          <div className="service-desc">
            Hỗ trợ tinh thần cho các cặp vợ chồng
          </div>
        </div>
      </div>
      <div className="service-card">
        <div className="service-icon">🔬</div>
        <div className="service-info">
          <div className="service-name">Xét nghiệm, chẩn đoán</div>
          <div className="service-desc">Đánh giá nguyên nhân hiếm muộn</div>
        </div>
      </div>
      <div className="service-card">
        <div className="service-icon">🩺</div>
        <div className="service-info">
          <div className="service-name">Khám tổng quát</div>
          <div className="service-desc">
            Kiểm tra sức khỏe sinh sản toàn diện
          </div>
        </div>
      </div>
      <div className="service-card">
        <div className="service-icon">🧑‍🔬</div>
        <div className="service-info">
          <div className="service-name">Hỗ trợ di truyền</div>
          <div className="service-desc">
            Tư vấn, xét nghiệm di truyền cho các cặp vợ chồng
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ReportsTab = () => (
  <div className="tab-content">
    <div className="tab-title">Báo cáo & Thống kê</div>
    <div className="report-list">
      <div className="report-item">
        <span className="report-icon">📊</span>
        <span className="report-label">Tổng ca điều trị</span>
        <span className="report-value">120 ca (năm nay)</span>
      </div>
      <div className="report-item">
        <span className="report-icon">✅</span>
        <span className="report-label">Tỷ lệ thành công</span>
        <span className="report-value">75%</span>
      </div>
      <div className="report-item">
        <span className="report-icon">🧑‍🤝‍🧑</span>
        <span className="report-label">Bệnh nhân mới</span>
        <span className="report-value">32 người</span>
      </div>
      <div className="report-item">
        <span className="report-icon">🔁</span>
        <span className="report-label">Tái khám</span>
        <span className="report-value">18 người</span>
      </div>
      <div className="report-item">
        <span className="report-icon">📅</span>
        <span className="report-label">Lịch hẹn trong tháng</span>
        <span className="report-value">42 lịch hẹn</span>
      </div>
      <div className="report-item">
        <span className="report-icon">🧑‍⚕️</span>
        <span className="report-label">Số bác sĩ</span>
        <span className="report-value">8 chuyên gia</span>
      </div>
      <div className="report-item">
        <span className="report-icon">💰</span>
        <span className="report-label">Doanh thu tháng</span>
        <span className="report-value">320 triệu VNĐ</span>
      </div>
      <div className="report-item">
        <span className="report-icon">📈</span>
        <span className="report-label">Tăng trưởng</span>
        <span className="report-value">+12% so với tháng trước</span>
      </div>
    </div>
    <div style={{ marginTop: 16 }}>
      <span className="tab-label">Biểu đồ nhóm tuổi:</span>
      <div style={{ maxWidth: 300, marginTop: 8 }}>
        <Pie
          data={{
            labels: ["Dưới 30", "30-35", "36-40", "Trên 40"],
            datasets: [
              {
                data: [25, 40, 22, 13],
                backgroundColor: ["#4f8cff", "#ff6b81", "#6ed6ff", "#ffd166"],
                borderRadius: 10,
                borderWidth: 2,
                borderColor: "#fff",
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: { legend: { display: false } },
          }}
          height={120}
        />
      </div>
    </div>
  </div>
);

const OtherTab = () => (
  <div className="tab-content">
    <div className="tab-title">Thông tin khác</div>
    <div className="contact-list">
      <div className="contact-item">
        <span className="contact-icon">📞</span>
        <span className="contact-label">Liên hệ</span>
        <span className="contact-value">Hotline: 1900 1234</span>
      </div>
      <div className="contact-item">
        <span className="contact-icon">✉️</span>
        <span className="contact-label">Email</span>
        <span className="contact-value">support@hiemmuon.vn</span>
      </div>
      <div className="contact-item">
        <span className="contact-icon">📚</span>
        <span className="contact-label">Tài liệu tham khảo</span>
        <span className="contact-value">
          Hướng dẫn điều trị, chăm sóc, tài liệu IVF/IUI, video tư vấn
        </span>
      </div>
      <div className="contact-item">
        <span className="contact-icon">💬</span>
        <span className="contact-label">Hỗ trợ trực tuyến</span>
        <span className="contact-value">
          Chat với chuyên gia, đặt lịch tư vấn online
        </span>
      </div>
      <div className="contact-item">
        <span className="contact-icon">🌐</span>
        <span className="contact-label">Website</span>
        <span className="contact-value">www.hiemmuon.vn</span>
      </div>
      <div className="contact-item">
        <span className="contact-icon">🏥</span>
        <span className="contact-label">Địa chỉ</span>
        <span className="contact-value">123 Đường IVF, Quận 1, TP.HCM</span>
      </div>
    </div>
  </div>
);

const TAB_COMPONENTS = {
  overview: (props) => <OverviewTab {...props} />,
  appointments: AppointmentsTab,
  patients: PatientsTab,
  doctors: DoctorsTab,
  services: ServicesTab,
  reports: ReportsTab,
  other: OtherTab,
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [stats, setStats] = useState(null);
  const userRole = localStorage.getItem("role");
  if (userRole !== "ADMIN") {
    // báo lỗi hoặc chuyển hướng
  }
  useEffect(() => {
    fetchWithAuth("http://localhost:8080/api/appointments/stats")
      .then((data) => setStats(data))
      .catch(() => setStats(null));
  }, []);
  return (
    <div className="dashboard-wrapper">
      <main className="dashboard-main" style={{ width: "100%" }}>
        <AdminNavbar />
        <div className="dashboard-content">
          {activeTab === "overview" ? (
            <OverviewTab
              stats={stats}
              barData={barData}
              barOptions={barOptions}
              pieData={pieData}
              pieOptions={pieOptions}
            />
          ) : (
            TAB_COMPONENTS[activeTab]({
              barData,
              barOptions,
              pieData,
              pieOptions,
            })
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
