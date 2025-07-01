package com.fertilitycare.backend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    // Cho phép ADMIN, CUSTOMER, DOCTOR xem danh sách dịch vụ
    @GetMapping
    @PreAuthorize("hasAnyRole('ADMIN', 'CUSTOMER', 'DOCTOR')")
    public List<InfertilityService> getAllServices() {
        return service.getAll();
    }

    // Chỉ ADMIN được phép tạo dịch vụ mới
    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public InfertilityService createService(@RequestBody InfertilityService request) {
        return service.create(request);
    }

    // Chỉ ADMIN được phép cập nhật dịch vụ
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<InfertilityService> update(@PathVariable Long id, @RequestBody InfertilityService updated) {
        return ResponseEntity.ok(service.update(id, updated));
    }

    // Chỉ ADMIN được phép xóa dịch vụ
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.ok().build();
    }
}
