package com.fertilitycare.backend.service;

import java.util.List;

import com.fertilitycare.backend.entity.User;

public interface UserService {
    User registerUser(User user, String roleName);

    User findByUsername(String username);
    List<User> getAllUsers();

    void deleteUserById(Long id);

    boolean existsById(Long id);
}
