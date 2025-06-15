package com.fertilitycare.backend.service;

import java.util.List;

import com.fertilitycare.backend.entity.InfertilityService;

public interface InfertilityServiceService {
    List<InfertilityService> getAll();

    InfertilityService create(InfertilityService service);
}
