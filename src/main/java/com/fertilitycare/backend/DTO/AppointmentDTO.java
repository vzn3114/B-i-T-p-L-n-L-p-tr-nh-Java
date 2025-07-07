package com.fertilitycare.backend.DTO;

public record AppointmentDTO(
    Long id,
    String appointmentTime,
    String serviceName,
    String appointmentType,
    String doctorName,
    String status
) {}