package com.fertilitycare.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fertilitycare.backend.entity.TreatmentUpdate;
import com.fertilitycare.backend.repository.TreatmentRepository;
import com.fertilitycare.backend.repository.TreatmentUpdateRepository;
import com.fertilitycare.backend.service.TreatmentUpdateService;

@Service
public class TreatmentUpdateServiceImpl implements TreatmentUpdateService {
    private final TreatmentUpdateRepository repository;
    private final TreatmentRepository treatmentRepository;

    public TreatmentUpdateServiceImpl(TreatmentUpdateRepository repository, TreatmentRepository treatmentRepository) {
        this.repository = repository;
        this.treatmentRepository = treatmentRepository;
    }

    @Override
    public TreatmentUpdate save(TreatmentUpdate update) {
        return repository.save(update);
    }

    @Override
    public List<TreatmentUpdate> getByTreatmentId(Long treatmentId) {
        return repository.findByTreatmentId(treatmentId);
    }

    @Override
    public List<TreatmentUpdate> getByDoctorId(Long doctorId) {
        return repository.findByDoctorId(doctorId);
    }

    // public List<PatientDTO> getPatientsByDoctorId(Long doctorId) {
    // return treatmentRepository.findPatientsByDoctorId(doctorId);
    // }
}
