
package com.fertilitycare.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fertilitycare.backend.entity.User;
import com.fertilitycare.backend.repository.UserRepository;
import com.fertilitycare.backend.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final UserService userService;
    private final UserRepository userRepository;

    public UserController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    @PostMapping("/register/{role}")
    public User register(@RequestBody User user, @PathVariable String role) {
        return userService.registerUser(user, role.toUpperCase());
    }

    @PostMapping("/register/customer")
    public ResponseEntity<?> registerCustomer(@RequestBody User user) {
        Optional<User> userByUsername = userRepository.findByUsername(user.getUsername());
        if (userByUsername.isPresent()) {
            return ResponseEntity.badRequest().body("Username đã tồn tại!");
        }
        Optional<User> userByEmail = userRepository.findByEmail(user.getEmail());
        if (userByEmail.isPresent()) {
            return ResponseEntity.badRequest().body("Email đã tồn tại!");
        }
        userService.registerUser(user, "CUSTOMER");
        return ResponseEntity.ok("Đăng ký thành công!");
    }

    @GetMapping("/me")
    public ResponseEntity<User> getCurrentUser(Authentication authentication) {
        String username = authentication.getName(); // Lấy username từ token
        Optional<User> user = userRepository.findByUsername(username);
        return user.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        if (!userService.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        userService.deleteUserById(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/me")
    public ResponseEntity<User> updateCurrentUser(
            @RequestBody User updatedData,
            Authentication authentication) {

        String username = authentication.getName();
        User updated = userService.updateCurrentUser(updatedData, username);
        return ResponseEntity.ok(updated);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/search/username")
    public ResponseEntity<List<User>> searchByUsername(@RequestParam String q) {
        return ResponseEntity.ok(userService.searchByUsername(q));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/search/fullname")
    public ResponseEntity<List<User>> searchByFullName(@RequestParam String q) {
        return ResponseEntity.ok(userService.searchByFullName(q));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/filter/role")
    public ResponseEntity<List<User>> filterByRole(@RequestParam String role) {
        return ResponseEntity.ok(userService.filterByRole(role));
    }
}
