package com.fertilitycare.backend.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Treatment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String method; // IUI, IVF, v.v.
    private LocalDate startDate;
    private String status; // Đang điều trị, Đã hoàn tất, Hủy, ...
    private String phase; // Giai đoạn điều trị

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User customer; // Người điều trị

    @ManyToOne
    @JoinColumn(name = "doctor_id")
    private User doctor; // Bác sĩ phụ trách (nếu có)

    @ManyToOne
    @JoinColumn(name = "service_id")
    private InfertilityService service; // Dịch vụ liên quan

    public Treatment() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPhase() {
        return phase;
    }

    public void setPhase(String phase) {
        this.phase = phase;
    }

    public User getCustomer() {
        return customer;
    }

    public void setCustomer(User customer) {
        this.customer = customer;
    }

    public User getDoctor() {
        return doctor;
    }

    public void setDoctor(User doctor) {
        this.doctor = doctor;
    }

    public InfertilityService getService() {
        return service;
    }

    public void setService(InfertilityService service) {
        this.service = service;
    }
}