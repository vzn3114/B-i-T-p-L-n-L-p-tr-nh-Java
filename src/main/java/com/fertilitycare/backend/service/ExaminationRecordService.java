package com.fertilitycare.backend.service;

import java.util.List;

import com.fertilitycare.backend.entity.ExaminationRecord;

public interface ExaminationRecordService {
    ExaminationRecord save(ExaminationRecord record);
    List<ExaminationRecord> getByPatientId(Long patientId);
    List<ExaminationRecord> getByDoctorId(Long doctorId);
}
