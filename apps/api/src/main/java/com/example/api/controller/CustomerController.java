package com.example.api.controller;

import com.example.api.model.Customer;
import com.example.api.repository.CustomerRepository;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {
  private final CustomerRepository repository;

  public CustomerController(CustomerRepository repository) {
    this.repository = repository;
  }

  @PostMapping
  public ResponseEntity<?> create(@Valid @RequestBody Customer customer) {
    if (repository.existsByEmail(customer.getEmail())) {
      return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already registered");
    }
    Customer saved = repository.save(customer);
    return ResponseEntity.status(HttpStatus.CREATED).body(saved);
  }

  @GetMapping("/health")
  public ResponseEntity<String> health() {
    return ResponseEntity.ok("OK");
  }
}
