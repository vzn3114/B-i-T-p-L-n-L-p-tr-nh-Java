package com.fertilitycare.backend.service;

import java.util.List;

import com.fertilitycare.backend.entity.Treatment;
import com.fertilitycare.backend.entity.User;

public interface TreatmentService {
    Treatment create(Treatment treatment);

    List<Treatment> getAll();

    List<Treatment> getByCustomer(User customer);

    List<Treatment> getByDoctor(User doctor);

}
