package com.fertilitycare.backend.service.impl;

import java.util.HashSet;
import java.util.List;
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

    @Override
    public User findByUsername(String username) {

        throw new UnsupportedOperationException("Unimplemented method 'findByUsername'");
    }

    @Override
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    @Override
    public void deleteUserById(Long id) {
        userRepo.deleteById(id);
    }

    @Override
    public boolean existsById(Long id) {
        return userRepo.existsById(id);
    }

    @Override
    public User updateCurrentUser(User updatedData, String username) {
        User user = userRepo.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setFullName(updatedData.getFullName());
        user.setEmail(updatedData.getEmail());

        // Nếu có mật khẩu mới, mã hóa rồi lưu lại
        if (updatedData.getPassword() != null && !updatedData.getPassword().isEmpty()) {
            String encodedPassword = passwordEncoder.encode(updatedData.getPassword());
            user.setPassword(encodedPassword);
        }

        return userRepo.save(user);
    }

    @Override
    public List<User> searchByUsername(String keyword) {
        return userRepo.findByUsernameContainingIgnoreCase(keyword);
    }

    @Override
    public List<User> searchByFullName(String keyword) {
        return userRepo.findByFullNameContainingIgnoreCase(keyword);
    }

    @Override
    public List<User> filterByRole(String roleName) {
        return userRepo.findByRoles_Name(roleName.toUpperCase());
    }

    @Override
    public User updateUser(Long id, User user) {
        User existing = userRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
        existing.setFullName(user.getFullName());
        existing.setEmail(user.getEmail());
        return userRepo.save(existing);
    }

}
