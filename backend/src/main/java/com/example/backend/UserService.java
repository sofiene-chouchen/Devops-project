package com.example.backend;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@Transactional
@NoArgsConstructor
@AllArgsConstructor
public class UserService {
  private UserRepository repository;

  public void delete(int number){
    repository.deleteByNumber(number);
  }

}
