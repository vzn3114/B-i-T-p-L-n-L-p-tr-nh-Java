package com.fertilitycare.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fertilitycare.backend.entity.InfertilityService;

@Repository
public interface InfertilityServiceRepository extends JpaRepository<InfertilityService, Long> {
}
