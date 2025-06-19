package com.fertilitycare.backend.service;

import com.fertilitycare.backend.entity.User;

public interface UserService {
    User registerUser(User user, String roleName);

    User findByUsername(String username);
}
