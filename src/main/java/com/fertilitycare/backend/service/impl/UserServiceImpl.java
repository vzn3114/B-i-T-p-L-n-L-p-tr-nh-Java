package com.fertilitycare.backend.service.impl;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fertilitycare.backend.entity.Role;
import com.fertilitycare.backend.entity.User;
import com.fertilitycare.backend.repository.RoleRepository;
import com.fertilitycare.backend.repository.UserRepository;
import com.fertilitycare.backend.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepo;
    private final RoleRepository roleRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepo, RoleRepository roleRepo) {
        this.userRepo = userRepo;
        this.roleRepo = roleRepo;
    }

    @Override
    public User registerUser(User user, String roleName) {
        Role role = roleRepo.findByName(roleName)
                .orElseThrow(() -> new RuntimeException("Role not found: " + roleName));

        // 🔐 Mã hóa password trước khi lưu
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        Set<Role> roles = new HashSet<>();
        roles.add(role);
        user.setRoles(roles);

        return userRepo.save(user);
    }
}
