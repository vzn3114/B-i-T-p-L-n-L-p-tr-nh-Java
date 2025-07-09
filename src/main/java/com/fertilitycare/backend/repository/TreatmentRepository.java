package com.fertilitycare.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fertilitycare.backend.entity.Treatment;
import com.fertilitycare.backend.entity.User;

public interface TreatmentRepository extends JpaRepository<Treatment, Long> {

    List<Treatment> findByCustomer(User customer); // Lấy điều trị theo bệnh nhân

    List<Treatment> findByDoctor(User doctor); // Lấy điều trị theo bác sĩ

    @Query("SELECT t.status, COUNT(t) FROM Treatment t GROUP BY t.status")
    List<Object[]> countByStatus();

    @Query("SELECT t.method, COUNT(t) FROM Treatment t GROUP BY t.method")
    List<Object[]> countByMethod();

    Treatment findTopByCustomerOrderByStartDateDesc(User customer);
}
