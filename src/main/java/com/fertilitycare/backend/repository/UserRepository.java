package com.fertilitycare.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fertilitycare.backend.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    List<User> findByUsernameContainingIgnoreCase(String keyword);

    List<User> findByFullNameContainingIgnoreCase(String keyword);

    List<User> findByRoles_Name(String roleName);

    Optional<User> findByEmail(String email);
}
