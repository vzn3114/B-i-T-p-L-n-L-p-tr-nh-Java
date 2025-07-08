package com.fertilitycare.backend.DTO;

public class AppointmentStatsDTO {
    private long totalAppointments;
    private long totalIUI;
    private long totalIVF;
    private double successRate;

    public AppointmentStatsDTO() {}
    public AppointmentStatsDTO(long totalAppointments, long totalIUI, long totalIVF, double successRate) {
        this.totalAppointments = totalAppointments;
        this.totalIUI = totalIUI;
        this.totalIVF = totalIVF;
        this.successRate = successRate;
    }
    public long getTotalAppointments() { return totalAppointments; }
    public void setTotalAppointments(long totalAppointments) { this.totalAppointments = totalAppointments; }
    public long getTotalIUI() { return totalIUI; }
    public void setTotalIUI(long totalIUI) { this.totalIUI = totalIUI; }
    public long getTotalIVF() { return totalIVF; }
    public void setTotalIVF(long totalIVF) { this.totalIVF = totalIVF; }
    public double getSuccessRate() { return successRate; }
    public void setSuccessRate(double successRate) { this.successRate = successRate; }
}
