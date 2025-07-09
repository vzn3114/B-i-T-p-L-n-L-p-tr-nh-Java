DROP TABLE IF EXISTS appointments;
CREATE TABLE appointments (
  id BIGINT NOT NULL AUTO_INCREMENT,
  customer_id BIGINT DEFAULT NULL,
  doctor_id BIGINT DEFAULT NULL,
  service_id BIGINT DEFAULT NULL,
  appointment_time TIMESTAMP NOT NULL,
  status VARCHAR(50) NOT NULL,
  doctor_note TEXT,
  appointment_type VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id),
  KEY service_id (service_id),
  KEY idx_customer_id (customer_id),
  KEY idx_doctor_id (doctor_id),
  KEY idx_appointment_time (appointment_time),
  FOREIGN KEY (customer_id) REFERENCES users (id) ON DELETE CASCADE,
  FOREIGN KEY (doctor_id) REFERENCES users (id) ON DELETE SET NULL,
  FOREIGN KEY (service_id) REFERENCES infertility_services (id) ON DELETE SET NULL
);
INSERT INTO appointments VALUES
(1, 3, 2, 2, '2025-07-10 03:00:00', 'SCHEDULED', NULL, 'Tái khám siêu âm');

DROP TABLE IF EXISTS infertility_services;
CREATE TABLE infertility_services (
  id BIGINT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id)
);
INSERT INTO infertility_services VALUES
(1, 'IUI Service', 'Dịch vụ thụ tinh trong tử cung', 500.00),
(2, 'IVF Service', 'Dịch vụ thụ tinh trong ống nghiệm', 5000.00);

DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
  id BIGINT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY name (name)
);
INSERT INTO roles VALUES
(1, 'ADMIN'),
(3, 'CUSTOMER'),
(2, 'DOCTOR'),
(4, 'MANAGER');

DROP TABLE IF EXISTS service_doctors;
CREATE TABLE service_doctors (
  service_id BIGINT NOT NULL,
  doctor_id BIGINT NOT NULL,
  PRIMARY KEY (service_id, doctor_id),
  KEY doctor_id (doctor_id),
  FOREIGN KEY (service_id) REFERENCES infertility_services (id) ON DELETE CASCADE,
  FOREIGN KEY (doctor_id) REFERENCES users (id) ON DELETE CASCADE
);
INSERT INTO service_doctors VALUES
(1, 2),
(2, 2);

DROP TABLE IF EXISTS treatment_phases;
CREATE TABLE treatment_phases (
  id BIGINT NOT NULL AUTO_INCREMENT,
  treatment_id BIGINT NOT NULL,
  phase_name VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE DEFAULT NULL,
  notes TEXT,
  PRIMARY KEY (id),
  KEY fk_treatment_id (treatment_id),
  FOREIGN KEY (treatment_id) REFERENCES treatments (id) ON DELETE CASCADE
);
INSERT INTO treatment_phases VALUES
(1, 1, 'Giai đoạn chuyển phôi', '2025-07-01', NULL, 'Chuyển phôi thành công');

DROP TABLE IF EXISTS treatments;
CREATE TABLE treatments (
  id BIGINT NOT NULL AUTO_INCREMENT,
  customer_id BIGINT DEFAULT NULL,
  doctor_id BIGINT DEFAULT NULL,
  service_id BIGINT DEFAULT NULL,
  method VARCHAR(255) DEFAULT NULL,
  status VARCHAR(255) DEFAULT NULL,
  start_date DATE NOT NULL,
  phase VARCHAR(255) DEFAULT NULL,
  user_id BIGINT DEFAULT NULL,
  PRIMARY KEY (id),
  KEY service_id (service_id),
  KEY idx_customer_id (customer_id),
  KEY idx_doctor_id (doctor_id),
  KEY FKkcuat58mifrgqvy08n2eokwa5 (user_id),
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (customer_id) REFERENCES users (id) ON DELETE CASCADE,
  FOREIGN KEY (doctor_id) REFERENCES users (id) ON DELETE SET NULL,
  FOREIGN KEY (service_id) REFERENCES infertility_services (id) ON DELETE SET NULL
);
INSERT INTO treatments VALUES
(1, 3, 2, 2, 'IVF', 'Đang điều trị', '2025-07-28', 'Giai đoạn chuyển phôi', NULL),
(2, 3, 2, 2, 'IVF', 'Đã hoàn thành', '2025-06-22', 'Ngày thụ tinh (Fertilization)', NULL),
(3, 3, 2, 2, 'IVF', 'Đã hoàn thành', '2024-06-18', 'Kích thích buồng trứng', NULL),
(4, 3, 2, 2, 'IVF', 'Đã hoàn thành', '2024-06-13', 'Tiêm thuốc kích trứng', NULL),
(5, 3, 2, 2, 'IVF', 'Đã hoàn thành', '2024-06-12', 'Thăm khám siêu âm', NULL),
(6, 3, 2, 2, 'IVF', 'Đã hoàn thành', '2025-06-10', 'Xét nghiệm nội tiết', NULL);

DROP TABLE IF EXISTS user_roles;
CREATE TABLE user_roles (
  user_id BIGINT NOT NULL,
  role_id BIGINT NOT NULL,
  PRIMARY KEY (user_id, role_id),
  KEY role_id (role_id),
  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
  FOREIGN KEY (role_id) REFERENCES roles (id) ON DELETE CASCADE
);
INSERT INTO user_roles VALUES
(1, 1),
(2, 2),
(5, 2),
(6, 2),
(7, 2),
(3, 3),
(4, 4);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id BIGINT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) DEFAULT NULL,
  email VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY username (username),
  UNIQUE KEY email (email),
  KEY idx_username (username),
  KEY idx_email (email)
);
INSERT INTO users VALUES
(1, 'admin1', '$2a$12$FDfu.a6o5xp/gI79nq2MzuUV87FBfj3hW2KWpPBsbmwdgK0FrETgi', 'Admin One', 'admin1@fertilitycare.com'),
(2, 'doctor1', '$2a$12$FDfu.a6o5xp/gI79nq2MzuUV87FBfj3hW2KWpPBsbmwdgK0FrETgi', 'Dr. John Doe', 'doctor1@fertilitycare.com'),
(3, 'customer1', '$2a$12$FDfu.a6o5xp/gI79nq2MzuUV87FBfj3hW2KWpPBsbmwdgK0FrETgi', 'Nguyễn Văn Xô Bin', 'customer1@fertilitycare.com'),
(4, 'manager1', '$2a$12$FDfu.a6o5xp/gI79nq2MzuUV87FBfj3hW2KWpPBsbmwdgK0FrETgi', 'Quản lý 1', 'manager1@fertilitycare.com'),
(5, 'doctor2', '$2a$12$FDfu.a6o5xp/gI79nq2MzuUV87FBfj3hW2KWpPBsbmwdgK0FrETgi', 'Dr. A', 'doctor2@fertilitycare.com'),
(6, 'doctor3', '$2a$12$FDfu.a6o5xp/gI79nq2MzuUV87FBfj3hW2KWpPBsbmwdgK0FrETgi', 'Dr. B', 'doctor3@fertilitycare.com'),
(7, 'doctor4', '$2a$12$FDfu.a6o5xp/gI79nq2MzuUV87FBfj3hW2KWpPBsbmwdgK0FrETgi', 'Dr. C', 'doctor4@fertilitycare.com');

DROP TABLE IF EXISTS appointment_requests;

CREATE TABLE appointment_requests (
  id BIGINT NOT NULL AUTO_INCREMENT,
  full_name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  address TEXT,
  username VARCHAR(255), -- nếu người dùng đã đăng nhập thì lưu tên tài khoản
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);
