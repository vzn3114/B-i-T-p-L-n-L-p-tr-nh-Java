import React, { useEffect, useState } from "react";
import ManagerNavbar from "./Navbar";
import "../../static/assets/DoctorManagement.css";

const DoctorManagement = () => {
  const [doctors, setDoctors] = useState([]);
  const [newDoctor, setNewDoctor] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    specialty: "",
    degree: "",
    schedule: "",
    avatarUrl: "",
  });
  const [showAddForm, setShowAddForm] = useState(false);

  const [editDoctor, setEditDoctor] = useState(null); // null hoặc object bác sĩ đang sửa

  useEffect(() => {
    fetch("/api/users/filter/role?role=DOCTOR", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error("HTTP " + res.status + ": " + text);
        }
        return res.json();
      })
      .then((data) => setDoctors(data))
      .catch((err) => alert(err.message));
  }, []);

  const handleDelete = (id) => {
    fetch(`/api/users/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Xóa thất bại");
        setDoctors(doctors.filter((doc) => doc.id !== id));
      })
      .catch((err) => alert(err.message));
  };

  const handleAddDoctor = (doctorData) => {
    fetch("/api/users/register/doctor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(doctorData),
    })
      .then(async (res) => {
        const text = await res.text();
        if (!res.ok) throw new Error(text || "Thêm bác sĩ thất bại");
        alert("Thêm bác sĩ thành công!");
        // reload lại danh sách bác sĩ
        fetch("/api/users/filter/role?role=DOCTOR", {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })
          .then((res) => res.json())
          .then((data) => setDoctors(data));
      })
      .catch((err) => alert(err.message));
  };

  const handleEditDoctor = (doctorId, doctorData) => {
    fetch(`/api/users/${doctorId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(doctorData),
    })
      .then(async (res) => {
        const text = await res.text();
        if (!res.ok) throw new Error(text || "Sửa bác sĩ thất bại");
        alert("Sửa bác sĩ thành công!");
        // reload lại danh sách bác sĩ
        fetch("/api/users/filter/role?role=DOCTOR", {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })
          .then((res) => res.json())
          .then((data) => setDoctors(data));
      })
      .catch((err) => alert(err.message));
  };

  return (
    <>
      <ManagerNavbar />
      <div className="doctor-management-container">
        <h2>Quản lý bác sĩ</h2>
        {showAddForm && (
          <div
            className="doctor-form"
            style={{
              background: "#f9f9f9",
              borderRadius: 8,
              padding: 20,
              marginBottom: 24,
              boxShadow: "0 2px 8px #eee",
              maxWidth: 900,
            }}
          >
            <h3 style={{ marginBottom: 12 }}>Thêm bác sĩ mới</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <div style={{ flex: 1, minWidth: 180 }}>
                <label>Họ tên</label>
                <input
                  style={{ width: "100%" }}
                  placeholder="Họ tên"
                  value={newDoctor.fullName}
                  onChange={(e) =>
                    setNewDoctor({ ...newDoctor, fullName: e.target.value })
                  }
                />
              </div>
              <div style={{ flex: 1, minWidth: 180 }}>
                <label>Username</label>
                <input
                  style={{ width: "100%" }}
                  placeholder="Username"
                  value={newDoctor.username}
                  onChange={(e) =>
                    setNewDoctor({ ...newDoctor, username: e.target.value })
                  }
                />
              </div>
              <div style={{ flex: 1, minWidth: 180 }}>
                <label>Email</label>
                <input
                  style={{ width: "100%" }}
                  placeholder="Email"
                  value={newDoctor.email}
                  onChange={(e) =>
                    setNewDoctor({ ...newDoctor, email: e.target.value })
                  }
                />
              </div>
              <div style={{ flex: 1, minWidth: 180 }}>
                <label>Password</label>
                <input
                  style={{ width: "100%" }}
                  placeholder="Password"
                  type="password"
                  value={newDoctor.password}
                  onChange={(e) =>
                    setNewDoctor({ ...newDoctor, password: e.target.value })
                  }
                />
              </div>
              <div style={{ flex: 1, minWidth: 180 }}>
                <label>Chuyên môn</label>
                <input
                  style={{ width: "100%" }}
                  placeholder="Chuyên môn"
                  value={newDoctor.specialty}
                  onChange={(e) =>
                    setNewDoctor({ ...newDoctor, specialty: e.target.value })
                  }
                />
              </div>
              <div style={{ flex: 1, minWidth: 180 }}>
                <label>Bằng cấp</label>
                <input
                  style={{ width: "100%" }}
                  placeholder="Bằng cấp"
                  value={newDoctor.degree}
                  onChange={(e) =>
                    setNewDoctor({ ...newDoctor, degree: e.target.value })
                  }
                />
              </div>
              <div style={{ flex: 1, minWidth: 180 }}>
                <label>Lịch làm việc</label>
                <input
                  style={{ width: "100%" }}
                  placeholder="Lịch làm việc"
                  value={newDoctor.schedule}
                  onChange={(e) =>
                    setNewDoctor({ ...newDoctor, schedule: e.target.value })
                  }
                />
              </div>
              <div style={{ flex: 1, minWidth: 180 }}>
                <label>Avatar URL</label>
                <input
                  style={{ width: "100%" }}
                  placeholder="Avatar URL"
                  value={newDoctor.avatarUrl}
                  onChange={(e) =>
                    setNewDoctor({ ...newDoctor, avatarUrl: e.target.value })
                  }
                />
              </div>
            </div>
            <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
              <button
                style={{
                  padding: "6px 18px",
                  background: "#1976d2",
                  color: "#fff",
                  border: "none",
                  borderRadius: 4,
                }}
                onClick={() => {
                  handleAddDoctor(newDoctor);
                  setShowAddForm(false);
                  setNewDoctor({
                    fullName: "",
                    username: "",
                    email: "",
                    password: "",
                    specialty: "",
                    degree: "",
                    schedule: "",
                    avatarUrl: "",
                  });
                }}
              >
                Lưu
              </button>
              <button
                style={{
                  padding: "6px 18px",
                  background: "#eee",
                  color: "#333",
                  border: "none",
                  borderRadius: 4,
                }}
                onClick={() => setShowAddForm(false)}
              >
                Hủy
              </button>
            </div>
          </div>
        )}
        {editDoctor && (
          <div
            className="doctor-form"
            style={{
              background: "#f9f9f9",
              borderRadius: 8,
              padding: 20,
              marginBottom: 24,
              boxShadow: "0 2px 8px #eee",
              maxWidth: 900,
            }}
          >
            <h3 style={{ marginBottom: 12 }}>Sửa bác sĩ</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <div style={{ flex: 1, minWidth: 180 }}>
                <label>Họ tên</label>
                <input
                  style={{ width: "100%" }}
                  placeholder="Họ tên"
                  value={editDoctor.fullName}
                  onChange={(e) =>
                    setEditDoctor({ ...editDoctor, fullName: e.target.value })
                  }
                />
              </div>
              <div style={{ flex: 1, minWidth: 180 }}>
                <label>Username</label>
                <input
                  style={{ width: "100%" }}
                  placeholder="Username"
                  value={editDoctor.username}
                  onChange={(e) =>
                    setEditDoctor({ ...editDoctor, username: e.target.value })
                  }
                />
              </div>
              <div style={{ flex: 1, minWidth: 180 }}>
                <label>Email</label>
                <input
                  style={{ width: "100%" }}
                  placeholder="Email"
                  value={editDoctor.email}
                  onChange={(e) =>
                    setEditDoctor({ ...editDoctor, email: e.target.value })
                  }
                />
              </div>
              <div style={{ flex: 1, minWidth: 180 }}>
                <label>Password</label>
                <input
                  style={{ width: "100%" }}
                  placeholder="Password"
                  type="password"
                  value={editDoctor.password || ""}
                  onChange={(e) =>
                    setEditDoctor({ ...editDoctor, password: e.target.value })
                  }
                />
              </div>
              <div style={{ flex: 1, minWidth: 180 }}>
                <label>Chuyên môn</label>
                <input
                  style={{ width: "100%" }}
                  placeholder="Chuyên môn"
                  value={editDoctor.specialty}
                  onChange={(e) =>
                    setEditDoctor({ ...editDoctor, specialty: e.target.value })
                  }
                />
              </div>
              <div style={{ flex: 1, minWidth: 180 }}>
                <label>Bằng cấp</label>
                <input
                  style={{ width: "100%" }}
                  placeholder="Bằng cấp"
                  value={editDoctor.degree}
                  onChange={(e) =>
                    setEditDoctor({ ...editDoctor, degree: e.target.value })
                  }
                />
              </div>
              <div style={{ flex: 1, minWidth: 180 }}>
                <label>Lịch làm việc</label>
                <input
                  style={{ width: "100%" }}
                  placeholder="Lịch làm việc"
                  value={editDoctor.schedule}
                  onChange={(e) =>
                    setEditDoctor({ ...editDoctor, schedule: e.target.value })
                  }
                />
              </div>
              <div style={{ flex: 1, minWidth: 180 }}>
                <label>Avatar URL</label>
                <input
                  style={{ width: "100%" }}
                  placeholder="Avatar URL"
                  value={editDoctor.avatarUrl}
                  onChange={(e) =>
                    setEditDoctor({ ...editDoctor, avatarUrl: e.target.value })
                  }
                />
              </div>
            </div>
            <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
              <button
                style={{
                  padding: "6px 18px",
                  background: "#1976d2",
                  color: "#fff",
                  border: "none",
                  borderRadius: 4,
                }}
                onClick={() => {
                  handleEditDoctor(editDoctor.id, editDoctor);
                  setEditDoctor(null);
                }}
              >
                Lưu
              </button>
              <button
                style={{
                  padding: "6px 18px",
                  background: "#eee",
                  color: "#333",
                  border: "none",
                  borderRadius: 4,
                }}
                onClick={() => setEditDoctor(null)}
              >
                Hủy
              </button>
            </div>
          </div>
        )}
        <table className="doctor-table">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Họ tên</th>
              <th>Chuyên môn</th>
              <th>Bằng cấp</th>
              <th>Lịch làm việc</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td>
                  <img
                    src={doctor.avatarUrl || "/logo192.png"}
                    alt="avatar"
                    className="doctor-avatar"
                  />
                </td>
                <td>{doctor.fullName}</td>
                <td>{doctor.specialty}</td>
                <td>{doctor.degree}</td>
                <td>{doctor.schedule}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => setEditDoctor(doctor)}
                  >
                    Sửa
                  </button>{" "}
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(doctor.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="add-btn" onClick={() => setShowAddForm(true)}>
          Thêm bác sĩ mới
        </button>
      </div>
    </>
  );
};

export default DoctorManagement;
