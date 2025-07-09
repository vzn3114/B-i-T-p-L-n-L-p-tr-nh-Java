package com.fertilitycare.backend.entity;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "treatment_updates")
public class TreatmentUpdate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "treatment_id")
    private Long treatmentId;

    @Column(name = "doctor_id")
    private Long doctorId;

    @Column(name = "update_time")
    private Timestamp updateTime;

    private String nextInjection;
    private Timestamp nextAppointment;
    private String notes;

    // Getters and Setters
}
