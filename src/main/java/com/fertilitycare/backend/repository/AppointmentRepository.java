package com.fertilitycare.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fertilitycare.backend.entity.Appointment;
import com.fertilitycare.backend.entity.User;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByCustomer(User user);

    List<Appointment> findByServiceDoctor(User doctor);

}
