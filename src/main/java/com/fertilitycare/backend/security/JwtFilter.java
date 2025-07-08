package com.fertilitycare.backend.security;

     import java.io.IOException;
     import java.util.List;
     import java.util.stream.Collectors;

     import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
     import org.springframework.security.core.context.SecurityContextHolder;
     import org.springframework.security.core.userdetails.UserDetails;
     import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
     import org.springframework.stereotype.Component;
     import org.springframework.web.filter.OncePerRequestFilter;

     import com.fertilitycare.backend.service.impl.CustomUserDetailsService;

     import jakarta.servlet.FilterChain;
     import jakarta.servlet.ServletException;
     import jakarta.servlet.http.HttpServletRequest;
     import jakarta.servlet.http.HttpServletResponse;
     import org.springframework.security.core.authority.SimpleGrantedAuthority;
     import org.slf4j.Logger;
     import org.slf4j.LoggerFactory;

     @Component
     public class JwtFilter extends OncePerRequestFilter {

         private static final Logger logger = LoggerFactory.getLogger(JwtFilter.class);

         private final JwtUtils jwtUtils;
         private final CustomUserDetailsService userDetailsService;

         public JwtFilter(JwtUtils jwtUtils, CustomUserDetailsService userDetailsService) {
             this.jwtUtils = jwtUtils;
             this.userDetailsService = userDetailsService;
         }

         @Override
         protected void doFilterInternal(HttpServletRequest request,
                 HttpServletResponse response,
                 FilterChain filterChain) throws ServletException, IOException {
             final String authHeader = request.getHeader("Authorization");
             final String token;
             final String username;

             if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                 logger.warn("No Authorization header or not Bearer type");
                 filterChain.doFilter(request, response);
                 return;
             }

             token = authHeader.substring(7);

             if (!jwtUtils.validateJwtToken(token)) {
                 logger.warn("Invalid JWT Token");
                 filterChain.doFilter(request, response);
                 return;
             }

             username = jwtUtils.getUsernameFromJwtToken(token);
             logger.info("Valid JWT Token, username: {}", username);

             if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                 UserDetails userDetails = userDetailsService.loadUserByUsername(username);
                 List<SimpleGrantedAuthority> authorities = jwtUtils.getRolesFromJwtToken(token)
                     .stream()
                     .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                     .collect(Collectors.toList());

                 logger.info("Loaded userDetails, roles: {}", authorities);

                 UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                         userDetails,
                         null,
                         authorities);

                 authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                 SecurityContextHolder.getContext().setAuthentication(authToken);
                 logger.info("[JwtFilter] Username from token: {}, Authorities: {}", username, authorities);
             }

             filterChain.doFilter(request, response);
         }
     }