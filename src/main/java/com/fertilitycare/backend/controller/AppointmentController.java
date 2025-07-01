package com.fertilitycare.backend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fertilitycare.backend.entity.Appointment;
import com.fertilitycare.backend.entity.User;
import com.fertilitycare.backend.repository.UserRepository;
import com.fertilitycare.backend.service.AppointmentService;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "*")
public class AppointmentController {

    private final AppointmentService appointmentService;
    private final UserRepository userRepo;

    public AppointmentController(AppointmentService appointmentService, UserRepository userRepo) {
        this.appointmentService = appointmentService;
        this.userRepo = userRepo;
    }

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public List<Appointment> getAllAppointments() {
        return appointmentService.getAll();
    }

    @PostMapping
    public ResponseEntity<Appointment> book(@RequestBody Appointment request,
            @AuthenticationPrincipal UserDetails userDetails) {
        User customer = userRepo.findByUsername(userDetails.getUsername()).orElseThrow();
        Appointment booked = appointmentService.create(request, customer);
        return ResponseEntity.ok(booked);
    }

    @GetMapping("/me")
    public ResponseEntity<List<Appointment>> myAppointments(@AuthenticationPrincipal UserDetails userDetails) {
        User customer = userRepo.findByUsername(userDetails.getUsername()).orElseThrow();
        return ResponseEntity.ok(appointmentService.getByCustomer(customer));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> cancel(@PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails) {
        User customer = userRepo.findByUsername(userDetails.getUsername()).orElseThrow();
        appointmentService.cancel(id, customer);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<Appointment>> allAppointments() {
        return ResponseEntity.ok(appointmentService.getAll());
    }

    // DOCTOR xem lịch của mình
    @GetMapping("/doctor/me")
    @PreAuthorize("hasRole('DOCTOR')")
    public ResponseEntity<Object> getMyAppointmentsAsDoctor(
            @AuthenticationPrincipal UserDetails userDetails) {
        User doctor = userRepo.findByUsername(userDetails.getUsername()).orElseThrow();
        return ResponseEntity.ok(appointmentService.getByDoctor(doctor));
    }

}
