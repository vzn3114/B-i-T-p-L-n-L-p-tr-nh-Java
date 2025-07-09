package com.fertilitycare.backend.service.impl;

import com.fertilitycare.backend.entity.AppointmentRequest;
import com.fertilitycare.backend.repository.AppointmentRequestRepository;
import com.fertilitycare.backend.service.AppointmentRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppointmentRequestServiceImpl implements AppointmentRequestService {
    private final AppointmentRequestRepository repository;

    @Autowired
    public AppointmentRequestServiceImpl(AppointmentRequestRepository repository) {
        this.repository = repository;
    }

    @Override
    public AppointmentRequest save(AppointmentRequest request) {
        return repository.save(request);
    }
} 