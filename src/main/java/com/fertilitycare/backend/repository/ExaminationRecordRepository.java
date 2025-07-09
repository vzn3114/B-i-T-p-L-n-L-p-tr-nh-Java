package com.fertilitycare.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fertilitycare.backend.entity.ExaminationRecord;

public interface ExaminationRecordRepository extends JpaRepository<ExaminationRecord, Long> {
    List<ExaminationRecord> findByPatientId(Long patientId);
    List<ExaminationRecord> findByDoctorId(Long doctorId);
}
