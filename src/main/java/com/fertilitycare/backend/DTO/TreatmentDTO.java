package com.fertilitycare.backend.DTO;

public record TreatmentDTO(
    Long id,
    String method,
    String status,
    String startDate,
    String phase,
    String serviceName,
    String doctorName
) {}