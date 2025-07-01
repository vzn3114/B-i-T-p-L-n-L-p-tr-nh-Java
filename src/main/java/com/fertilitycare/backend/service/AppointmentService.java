package com.fertilitycare.backend.service;

import java.util.List;

import com.fertilitycare.backend.entity.Appointment;
import com.fertilitycare.backend.entity.User;

public interface AppointmentService {
    Appointment create(Appointment appointment, User customer);

    List<Appointment> getByCustomer(User customer);

    List<Appointment> getAll(); // Dành cho admin

    void cancel(Long id, User customer);

    List<Appointment> getByDoctor(User doctor);

}
