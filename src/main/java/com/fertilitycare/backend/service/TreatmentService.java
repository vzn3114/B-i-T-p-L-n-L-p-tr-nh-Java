package com.fertilitycare.backend.service;

import java.util.List;

import com.fertilitycare.backend.DTO.PatientDTO;
import com.fertilitycare.backend.entity.Treatment;
import com.fertilitycare.backend.entity.User;

public interface TreatmentService {
    Treatment create(Treatment treatment);

    Treatment update(Long id, Treatment treatment);

    List<Treatment> getAll();

    List<Treatment> getByCustomer(User customer);

    List<Treatment> getByDoctor(User doctor);

    Treatment getById(Long id);

    List<Object[]> getStatisticsByStatus();

    List<Object[]> getStatisticsByMethod();

    Treatment updateStatus(Long id, String status);

    List<PatientDTO> getPatientsByDoctorId(Long doctorId);
}