package com.fertilitycare.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fertilitycare.backend.entity.InfertilityService;
import com.fertilitycare.backend.repository.InfertilityServiceRepository;
import com.fertilitycare.backend.service.InfertilityServiceService;

@Service
public class InfertilityServiceServiceImpl implements InfertilityServiceService {

    private final InfertilityServiceRepository repository;

    public InfertilityServiceServiceImpl(InfertilityServiceRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<InfertilityService> getAll() {
        return repository.findAll();
    }

    @Override
    public InfertilityService create(InfertilityService service) {
        return repository.save(service);
    }
}
