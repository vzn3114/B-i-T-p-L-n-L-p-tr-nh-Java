import React, { useEffect, useState } from "react";
import ManagerNavbar from "./Navbar";
import "../../static/assets/ServiceManagement.css";

const ServiceManagement = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    name: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    fetch("/api/services", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // Thêm dịch vụ mới
  const handleAdd = () => {
    fetch("/api/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        setServices([...services, data]);
        setNewService({ name: "", price: "", description: "" });
      });
  };

  // Xóa dịch vụ
  const handleDelete = (id) => {
    fetch(`/api/services/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then(() => setServices(services.filter((s) => s.id !== id)));
  };

  return (
    <>
      <ManagerNavbar />
      <div className="service-management-container">
        <h2>Quản lý dịch vụ điều trị</h2>
        <table className="service-table">
          <thead>
            <tr>
              <th>Tên dịch vụ</th>
              <th>Bảng giá</th>
              <th>Mô tả</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td>{service.name}</td>
                <td>{service.price}đ</td>
                <td>{service.description}</td>
                <td>
                  {/* Có thể thêm nút sửa ở đây */}
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(service.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <input
                  value={newService.name}
                  onChange={(e) =>
                    setNewService({ ...newService, name: e.target.value })
                  }
                  placeholder="Tên dịch vụ"
                />
              </td>
              <td>
                <input
                  value={newService.price}
                  onChange={(e) =>
                    setNewService({ ...newService, price: e.target.value })
                  }
                  placeholder="Giá"
                  type="number"
                />
              </td>
              <td>
                <input
                  value={newService.description}
                  onChange={(e) =>
                    setNewService({
                      ...newService,
                      description: e.target.value,
                    })
                  }
                  placeholder="Mô tả"
                />
              </td>
              <td>
                <button className="add-btn" onClick={handleAdd}>
                  Thêm
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ServiceManagement;
