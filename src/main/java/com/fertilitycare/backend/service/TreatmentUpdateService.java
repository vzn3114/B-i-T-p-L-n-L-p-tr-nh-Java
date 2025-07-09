package com.fertilitycare.backend.service;

import java.util.List;

import com.fertilitycare.backend.entity.TreatmentUpdate;

public interface TreatmentUpdateService {
    TreatmentUpdate save(TreatmentUpdate update);
    List<TreatmentUpdate> getByTreatmentId(Long treatmentId);
    List<TreatmentUpdate> getByDoctorId(Long doctorId);
}
