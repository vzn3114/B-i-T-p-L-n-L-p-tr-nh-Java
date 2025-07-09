package com.fertilitycare.backend.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.fertilitycare.backend.DTO.PatientDTO;
import com.fertilitycare.backend.entity.Treatment;
import com.fertilitycare.backend.entity.User;
import com.fertilitycare.backend.repository.TreatmentRepository;
import com.fertilitycare.backend.service.TreatmentService;

@Service
public class TreatmentServiceImpl implements TreatmentService {
    private static final Logger logger = LoggerFactory.getLogger(TreatmentServiceImpl.class);

    private final TreatmentRepository treatmentRepo;

    public TreatmentServiceImpl(TreatmentRepository treatmentRepo) {
        this.treatmentRepo = treatmentRepo;
    }

    @Override
    public Treatment create(Treatment treatment) {
        return treatmentRepo.save(treatment);
    }

    @Override
    public Treatment update(Long id, Treatment treatment) {
        Treatment existing = treatmentRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Not found"));
        existing.setStatus(treatment.getStatus());
        existing.setMethod(treatment.getMethod());
        existing.setStartDate(treatment.getStartDate());
        return treatmentRepo.save(existing);
    }

    @Override
    public List<Treatment> getAll() {
        return treatmentRepo.findAll();
    }

    @Override
    public List<Treatment> getByCustomer(User customer) {
        logger.info("Fetching treatments for customer ID: {}", customer.getId());
        List<Treatment> treatments = treatmentRepo.findByCustomer(customer);
        logger.info("Found {} treatments", treatments.size());
        return treatments;
    }

    @Override
    public List<Treatment> getByDoctor(User doctor) {
        return treatmentRepo.findByDoctor(doctor);
    }

    @Override
    public Treatment getById(Long id) {
        return treatmentRepo.findById(id).orElse(null);
    }

    @Override
    public List<Object[]> getStatisticsByStatus() {
        return treatmentRepo.countByStatus();
    }

    @Override
    public List<Object[]> getStatisticsByMethod() {
        return treatmentRepo.countByMethod();
    }

    @Override
    public Treatment updateStatus(Long id, String status) {
        Treatment treatment = treatmentRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Treatment not found"));
        treatment.setStatus(status);
        return treatmentRepo.save(treatment);
    }

    @Override
    public List<PatientDTO> getPatientsByDoctorId(Long doctorId) {
        return List.of();
    }
}