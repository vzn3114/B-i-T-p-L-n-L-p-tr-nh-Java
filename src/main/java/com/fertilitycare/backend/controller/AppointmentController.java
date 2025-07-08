package com.fertilitycare.backend.controller;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fertilitycare.backend.DTO.AppointmentDTO;
import com.fertilitycare.backend.DTO.AppointmentStatsDTO;
import com.fertilitycare.backend.entity.Appointment;
import com.fertilitycare.backend.entity.User;
import com.fertilitycare.backend.repository.UserRepository;
import com.fertilitycare.backend.service.AppointmentService;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "http://localhost:3000")
public class AppointmentController {

    private final AppointmentService appointmentService;
    private final UserRepository userRepo;

    public AppointmentController(AppointmentService appointmentService, UserRepository userRepo) {
        this.appointmentService = appointmentService;
        this.userRepo = userRepo;
    }

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<Appointment>> getAllAppointments() {
        return ResponseEntity.ok(appointmentService.getAll());
    }

    @PostMapping
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<Appointment> book(@RequestBody Appointment request,
            @AuthenticationPrincipal UserDetails userDetails) {
        User customer = userRepo.findByUsername(userDetails.getUsername()).orElseThrow(() -> new RuntimeException("User not found"));
        Appointment booked = appointmentService.create(request, customer);
        return ResponseEntity.ok(booked);
    }

    @GetMapping("/me")
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<List<AppointmentDTO>> myAppointments(@AuthenticationPrincipal UserDetails userDetails) {
        User customer = userRepo.findByUsername(userDetails.getUsername()).orElseThrow(() -> new RuntimeException("User not found"));
        List<Appointment> appointments = appointmentService.getByCustomer(customer);
        List<AppointmentDTO> dtos = appointments.stream().map(appt -> new AppointmentDTO(
            appt.getId(),
            appt.getAppointmentTime() != null ? appt.getAppointmentTime().toString() : null,
            appt.getService() != null ? appt.getService().getName() : "N/A",
            appt.getAppointmentType(),
            appt.getDoctor() != null ? appt.getDoctor().getFullName() : "N/A",
            appt.getStatus()
        )).collect(Collectors.toList());
        return ResponseEntity.ok(dtos);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('CUSTOMER')")
    public ResponseEntity<?> cancel(@PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails) {
        User customer = userRepo.findByUsername(userDetails.getUsername()).orElseThrow(() -> new RuntimeException("User not found"));
        appointmentService.cancel(id, customer);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/doctor/me")
    @PreAuthorize("hasRole('DOCTOR')")
    public ResponseEntity<List<Appointment>> getMyAppointmentsAsDoctor(
            @AuthenticationPrincipal UserDetails userDetails) {
        User doctor = userRepo.findByUsername(userDetails.getUsername()).orElseThrow(() -> new RuntimeException("User not found"));
        return ResponseEntity.ok(appointmentService.getByDoctor(doctor));
    }

    @PutMapping("/doctor/{id}/status")
    @PreAuthorize("hasRole('DOCTOR')")
    public ResponseEntity<Appointment> doctorUpdateStatus(@PathVariable Long id,
            @RequestBody StatusRequest request,
            @AuthenticationPrincipal UserDetails userDetails) {
        User doctor = userRepo.findByUsername(userDetails.getUsername()).orElseThrow(() -> new RuntimeException("User not found"));
        Appointment updated = appointmentService.updateStatus(id, request.status(), doctor);
        return ResponseEntity.ok(updated);
    }

    @PutMapping("/admin/{id}/status")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> adminUpdateStatus(
            @PathVariable Long id,
            @RequestBody Map<String, String> body) {
        String newStatus = body.get("status");
        appointmentService.updateStatus(id, newStatus);
        return ResponseEntity.ok("Cập nhật trạng thái thành công");
    }

    public record StatusRequest(String status) {}

    @GetMapping("/admin/statistics/status")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> statsByStatus() {
        return ResponseEntity.ok(appointmentService.getStatisticsByStatus());
    }

    @GetMapping("/admin/statistics/date")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> statsByDate() {
        return ResponseEntity.ok(appointmentService.getStatisticsByDate());
    }

    @PutMapping("/{appointmentId}/doctor-note")
    @PreAuthorize("hasRole('DOCTOR')")
    public ResponseEntity<?> updateDoctorNote(
            @PathVariable("appointmentId") Long appointmentId,
            @RequestBody Map<String, String> body,
            @AuthenticationPrincipal UserDetails userDetails) {
        User doctor = userRepo.findByUsername(userDetails.getUsername()).orElseThrow(() -> new RuntimeException("User not found"));
        String note = body.get("note");
        appointmentService.updateDoctorNote(appointmentId, note, doctor);
        return ResponseEntity.ok("Cập nhật kết quả khám thành công");
    }

    @GetMapping("/stats")
    @PreAuthorize("hasRole('ADMIN')")
    public AppointmentStatsDTO getStats() {
        return appointmentService.getAppointmentStats();
    }
}