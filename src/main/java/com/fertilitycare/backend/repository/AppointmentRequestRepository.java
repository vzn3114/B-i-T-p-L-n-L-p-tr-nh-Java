package com.fertilitycare.backend.repository;

import com.fertilitycare.backend.entity.AppointmentRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRequestRepository extends JpaRepository<AppointmentRequest, Long> {
} 