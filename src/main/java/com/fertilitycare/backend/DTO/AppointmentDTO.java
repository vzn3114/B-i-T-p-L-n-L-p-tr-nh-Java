package com.fertilitycare.backend.DTO;

public record AppointmentDTO(
    Long id,
    String patientName,
    String email,
    String serviceName,
    String appointmentTime,
    String status
) {}