package com.fertilitycare.backend.DTO;

public class AppointmentStatsDTO {
    private final String serviceName;
    private final long totalAppointments;

    public AppointmentStatsDTO(String serviceName, long totalAppointments) {
        this.serviceName = serviceName;
        this.totalAppointments = totalAppointments;
    }

    public String getServiceName() {
        return serviceName;
    }

    public long getTotalAppointments() {
        return totalAppointments;
    }
}
