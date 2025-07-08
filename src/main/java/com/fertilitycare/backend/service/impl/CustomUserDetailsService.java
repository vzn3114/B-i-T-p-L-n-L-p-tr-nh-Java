package com.fertilitycare.backend.service.impl;

  import java.util.stream.Collectors;

  import org.springframework.security.core.authority.SimpleGrantedAuthority;
  import org.springframework.security.core.userdetails.UserDetails;
  import org.springframework.security.core.userdetails.UserDetailsService;
  import org.springframework.security.core.userdetails.UsernameNotFoundException;
  import org.springframework.stereotype.Service;

  import com.fertilitycare.backend.entity.User;
  import com.fertilitycare.backend.repository.UserRepository;

  import org.slf4j.Logger;
  import org.slf4j.LoggerFactory;

  @Service
  public class CustomUserDetailsService implements UserDetailsService {

      private static final Logger logger = LoggerFactory.getLogger(CustomUserDetailsService.class);

      private final UserRepository userRepo;

      public CustomUserDetailsService(UserRepository userRepo) {
          this.userRepo = userRepo;
      }

      @Override
      public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
          logger.info("Attempting to load user by username: {}", username);
          User user = userRepo.findByUsername(username)
                  .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
          logger.info("Found user: {}, ID: {}", user.getUsername(), user.getId());

          var roles = user.getRoles();
          logger.info("Raw roles from user: {}", roles);
          var authorities = user.getRoles().stream()
                  .map(role -> new SimpleGrantedAuthority("ROLE_" + role.getName()))
                  .collect(Collectors.toList());
          logger.info("Mapped authorities: {}", authorities);

          return new org.springframework.security.core.userdetails.User(
                  user.getUsername(),
                  user.getPassword(),
                  authorities);
      }
  }