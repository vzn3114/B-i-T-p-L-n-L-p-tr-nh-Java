package com.fertilitycare.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fertilitycare.backend.entity.InfertilityService;
import com.fertilitycare.backend.service.InfertilityServiceService;

@RestController
@RequestMapping("/api/services")
@CrossOrigin(origins = "*")
public class InfertilityServiceController {

    private final InfertilityServiceService service;

    public InfertilityServiceController(InfertilityServiceService service) {
        this.service = service;
    }

    @GetMapping
    public List<InfertilityService> getAllServices() {
        return service.getAll();
    }

    @PostMapping
    public InfertilityService createService(@RequestBody InfertilityService request) {
        return service.create(request);
    }
}
