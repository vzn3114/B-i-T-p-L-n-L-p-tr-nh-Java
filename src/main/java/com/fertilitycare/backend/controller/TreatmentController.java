package com.fertilitycare.backend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fertilitycare.backend.entity.Treatment;
import com.fertilitycare.backend.entity.User;
import com.fertilitycare.backend.repository.UserRepository;
import com.fertilitycare.backend.service.TreatmentService;

@RestController
@RequestMapping("/api/treatments")
@CrossOrigin(origins = "*")
public class TreatmentController {

    private final TreatmentService treatmentService;
    private final UserRepository userRepo;

    public TreatmentController(TreatmentService treatmentService, UserRepository userRepo) {
        this.treatmentService = treatmentService;
        this.userRepo = userRepo;
    }

    @PostMapping
    @PreAuthorize("hasRole('DOCTOR') or hasRole('ADMIN')")
    public Treatment createTreatment(@RequestBody Treatment treatment, Authentication authentication) {
        String username = authentication.getName();
        User currentUser = userRepo.findByUsername(username).orElseThrow();
        treatment.setCustomer(currentUser);

        // Gán bác sĩ nếu có id
        if (treatment.getDoctor() != null && treatment.getDoctor().getId() != null) {
            User doctor = userRepo.findById(treatment.getDoctor().getId())
                    .orElseThrow(() -> new RuntimeException("Doctor not found"));
            treatment.setDoctor(doctor);
        }

        return treatmentService.create(treatment);
    }

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public List<Treatment> getAllTreatments() {
        return treatmentService.getAll();
    }

    @GetMapping("/me")
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<List<Treatment>> getMyTreatments(Authentication authentication) {
        String username = authentication.getName();
        User currentUser = userRepo.findByUsername(username).orElseThrow();
        return ResponseEntity.ok(treatmentService.getByCustomer(currentUser));
    }

    @GetMapping("/doctor/me")
    @PreAuthorize("hasRole('DOCTOR')")
    public ResponseEntity<List<Treatment>> getTreatmentsForDoctor(Authentication authentication) {
        String username = authentication.getName();
        User currentDoctor = userRepo.findByUsername(username).orElseThrow();
        return ResponseEntity.ok(treatmentService.getByDoctor(currentDoctor));
    }

    @GetMapping("/statistics/status")
    @PreAuthorize("hasRole('ADMIN')")
    public List<Object[]> statsByStatus() {
        return treatmentService.getStatisticsByStatus();
    }

    @GetMapping("/statistics/method")
    @PreAuthorize("hasRole('ADMIN')")
    public List<Object[]> statsByMethod() {
        return treatmentService.getStatisticsByMethod();
    }

}
