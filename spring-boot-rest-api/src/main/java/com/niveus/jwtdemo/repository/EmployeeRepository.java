package com.niveus.jwtdemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.niveus.jwtdemo.model.Employee;


@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
