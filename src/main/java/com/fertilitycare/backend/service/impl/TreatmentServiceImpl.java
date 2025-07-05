package com.fertilitycare.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fertilitycare.backend.entity.Treatment;
import com.fertilitycare.backend.entity.User;
import com.fertilitycare.backend.repository.TreatmentRepository;
import com.fertilitycare.backend.service.TreatmentService;

@Service
public class TreatmentServiceImpl implements TreatmentService {
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
        // cập nhật các trường khác nếu cần
        return treatmentRepo.save(existing);
    }

    @Override
    public List<Treatment> getAll() {
        return treatmentRepo.findAll();
    }

    @Override
    public List<Treatment> getByCustomer(User customer) {
        return treatmentRepo.findByCustomer(customer);
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
}
