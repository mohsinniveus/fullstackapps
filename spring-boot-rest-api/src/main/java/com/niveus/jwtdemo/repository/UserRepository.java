package com.niveus.jwtdemo.repository;

import org.springframework.data.repository.CrudRepository;

import com.niveus.jwtdemo.model.User;

public interface UserRepository extends CrudRepository<User, Integer> {
    User findByUsername(String username);
}
