package com.example.backend;


import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@AllArgsConstructor
@RestController
@RequestMapping("/api")
public class UserController {

  private UserRepository repository;
  private UserService service;


  @GetMapping("/users")
  public List<User> users() {

    return repository.findAll();
  }

  @PostMapping("/user")
  public void add(@RequestBody User user) {
    User usernew = User.builder()
            .nom(user.getNom())
            .number(user.getNumber())
            .numTel(user.getNumTel())
            .sex(user.getSex())
            .prenom(user.getPrenom())
            .build();
    repository.save(usernew);
  }


  @DeleteMapping("/user/{id}")
  public void deletebyNumber(@PathVariable String id) {
    repository.deleteById(id);
  }

}
