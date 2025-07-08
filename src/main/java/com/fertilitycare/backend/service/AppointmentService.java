package com.fertilitycare.backend.service;

import java.util.List;

import com.fertilitycare.backend.DTO.AppointmentStatsDTO;
import com.fertilitycare.backend.entity.Appointment;
import com.fertilitycare.backend.entity.User;

public interface AppointmentService {
    Appointment create(Appointment appointment, User customer);

    Appointment updateStatus(Long appointmentId, String status, User doctor);

    List<Appointment> getByCustomer(User customer);

    List<Appointment> getAll(); // Dành cho admin

    void cancel(Long id, User customer);

    List<Appointment> getByDoctor(User doctor);

    void updateStatus(Long appointmentId, String newStatus);

    List<Object[]> getStatisticsByStatus();

    List<Object[]> getStatisticsByDate();

    void updateDoctorNote(Long appointmentId, String note, User doctor);

    AppointmentStatsDTO getAppointmentStats();

}
