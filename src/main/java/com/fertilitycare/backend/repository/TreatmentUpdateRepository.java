package com.fertilitycare.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fertilitycare.backend.entity.TreatmentUpdate;

public interface TreatmentUpdateRepository extends JpaRepository<TreatmentUpdate, Long> {
    List<TreatmentUpdate> findByTreatmentId(Long treatmentId);
    List<TreatmentUpdate> findByDoctorId(Long doctorId);
}
