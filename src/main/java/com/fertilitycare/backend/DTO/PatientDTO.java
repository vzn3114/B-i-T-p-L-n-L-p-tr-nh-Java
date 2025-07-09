package com.fertilitycare.backend.DTO;

public class PatientDTO {
    private Long id;
    private String username;
    private String fullName;
    private String email;
    private String serviceName; // Tên dịch vụ
    private java.time.LocalDate startDate; // Ngày bắt đầu điều trị
    private String status;

    public PatientDTO() {
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public PatientDTO(Long id, String username, String fullName, String email, String serviceName, java.time.LocalDate startDate, String status) {
        this.id = id;
        this.username = username;
        this.fullName = fullName;
        this.email = email;
        this.serviceName = serviceName;
        this.startDate = startDate;
        this.status = status;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getFullName() {
        return fullName;
    }

    public String getEmail() {
        return email;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public java.time.LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(java.time.LocalDate startDate) {
        this.startDate = startDate;
    }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
