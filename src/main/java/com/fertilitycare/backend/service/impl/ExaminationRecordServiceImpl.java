package com.fertilitycare.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fertilitycare.backend.entity.ExaminationRecord;
import com.fertilitycare.backend.repository.ExaminationRecordRepository;
import com.fertilitycare.backend.service.ExaminationRecordService;

@Service
public class ExaminationRecordServiceImpl implements ExaminationRecordService {
    private final ExaminationRecordRepository repository;

    public ExaminationRecordServiceImpl(ExaminationRecordRepository repository) {
        this.repository = repository;
    }

    @Override
    public ExaminationRecord save(ExaminationRecord record) {
        return repository.save(record);
    }

    @Override
    public List<ExaminationRecord> getByPatientId(Long patientId) {
        return repository.findByPatientId(patientId);
    }

    @Override
    public List<ExaminationRecord> getByDoctorId(Long doctorId) {
        return repository.findByDoctorId(doctorId);
    }
}
