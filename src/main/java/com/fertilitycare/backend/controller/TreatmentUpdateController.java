package com.fertilitycare.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fertilitycare.backend.entity.TreatmentUpdate;
import com.fertilitycare.backend.service.TreatmentUpdateService;

@RestController
@RequestMapping("/api/treatment-updates")
public class TreatmentUpdateController {
    private final TreatmentUpdateService service;

    public TreatmentUpdateController(TreatmentUpdateService service) {
        this.service = service;
    }

    @PostMapping
    public TreatmentUpdate create(@RequestBody TreatmentUpdate update) {
        return service.save(update);
    }

    @GetMapping("/treatment/{treatmentId}")
    public List<TreatmentUpdate> getByTreatment(@PathVariable Long treatmentId) {
        return service.getByTreatmentId(treatmentId);
    }

    @GetMapping("/doctor/{doctorId}")
    public List<TreatmentUpdate> getByDoctor(@PathVariable Long doctorId) {
        return service.getByDoctorId(doctorId);
    }
}
