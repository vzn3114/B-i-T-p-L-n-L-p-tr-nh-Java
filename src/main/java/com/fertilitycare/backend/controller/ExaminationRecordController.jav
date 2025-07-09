package com.fertilitycare.backend.controller;

import com.fertilitycare.backend.entity.ExaminationRecord;
import com.fertilitycare.backend.service.ExaminationRecordService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/examinations")
public class ExaminationRecordController {
    private final ExaminationRecordService service;

    public ExaminationRecordController(ExaminationRecordService service) {
        this.service = service;
    }

    @PostMapping
    public ExaminationRecord create(@RequestBody ExaminationRecord record) {
        return service.save(record);
    }

    @GetMapping("/customer/{customerId}")
    public List<ExaminationRecord> getByCustomer(@PathVariable Long customerId) {
        return service.getByPatientId(customerId);
    }

    @GetMapping("/doctor/{doctorId}")
    public List<ExaminationRecord> getByDoctor(@PathVariable Long doctorId) {
        return service.getByDoctorId(doctorId);
    }
}