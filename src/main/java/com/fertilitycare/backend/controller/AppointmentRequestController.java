package com.fertilitycare.backend.controller;

import com.fertilitycare.backend.entity.AppointmentRequest;
import com.fertilitycare.backend.service.AppointmentRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;

@RestController
@RequestMapping("/api/appointment-requests")
@CrossOrigin(origins = "*")
public class AppointmentRequestController {
    private final AppointmentRequestService service;

    @Autowired
    public AppointmentRequestController(AppointmentRequestService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody AppointmentRequest request, @AuthenticationPrincipal UserDetails userDetails) {
        if (userDetails == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Bạn cần đăng nhập để đặt lịch!");
        }
        if (request.getFullName() == null || request.getPhone() == null) {
            return ResponseEntity.badRequest().body("Missing required fields");
        }
        request.setUsername(userDetails.getUsername());
        AppointmentRequest saved = service.save(request);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }
} 