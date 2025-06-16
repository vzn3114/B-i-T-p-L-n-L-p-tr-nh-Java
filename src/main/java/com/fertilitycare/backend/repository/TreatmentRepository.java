package com.fertilitycare.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fertilitycare.backend.entity.Treatment;
import com.fertilitycare.backend.entity.User;

public interface TreatmentRepository extends JpaRepository<Treatment, Long> {

    List<Treatment> findByCustomer(User customer); // Lấy điều trị theo bệnh nhân

    List<Treatment> findByDoctor(User doctor); // Lấy điều trị theo bác sĩ

}
