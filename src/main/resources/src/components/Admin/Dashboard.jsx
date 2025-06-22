import React from 'react';
import AdminNavbar from './Navbar';
import '../../assets/AdminDashboard.css';

const AdminDashboard = () => (
  <>
    <AdminNavbar />
    <div className="admin-dashboard-container">
      <h2>Dashboard & Thống kê</h2>
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">👨‍⚕️</div>
          <div>
            <h3>120</h3>
            <p>Số ca điều trị</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🧬</div>
          <div>
            <h3>60</h3>
            <p>IUI</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🍼</div>
          <div>
            <h3>60</h3>
            <p>IVF</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div>
            <h3>75%</h3>
            <p>Tỷ lệ thành công</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">👩‍⚕️</div>
          <div>
            <h3>15</h3>
            <p>Bác sĩ hoạt động</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default AdminDashboard; 