package com.fertilitycare.backend.service;

import java.util.List;

import com.fertilitycare.backend.entity.User;

public interface UserService {
    User registerUser(User user, String roleName);

    User findByUsername(String username);

    List<User> getAllUsers();

    void deleteUserById(Long id);

    boolean existsById(Long id);

    User updateCurrentUser(User updatedData, String username);

    List<User> searchByUsername(String keyword);

    List<User> searchByFullName(String keyword);

    List<User> filterByRole(String roleName);

    User updateUser(Long id, User user);
}
