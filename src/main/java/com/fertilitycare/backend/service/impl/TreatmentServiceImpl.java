package com.fertilitycare.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fertilitycare.backend.entity.Treatment;
import com.fertilitycare.backend.entity.User;
import com.fertilitycare.backend.repository.TreatmentRepository;
import com.fertilitycare.backend.service.TreatmentService;

@Service
public class TreatmentServiceImpl implements TreatmentService {

    private final TreatmentRepository repository;

    public TreatmentServiceImpl(TreatmentRepository repository) {
        this.repository = repository;
    }

    @Override
    public Treatment create(Treatment treatment) {
        return repository.save(treatment);
    }

    @Override
    public List<Treatment> getAll() {
        return repository.findAll();
    }

    @Override
    public List<Treatment> getByCustomer(User customer) {
        return repository.findByCustomer(customer);
    }

    @Override
    public List<Treatment> getByDoctor(User doctor) {
        return repository.findByDoctor(doctor);
    }

}
