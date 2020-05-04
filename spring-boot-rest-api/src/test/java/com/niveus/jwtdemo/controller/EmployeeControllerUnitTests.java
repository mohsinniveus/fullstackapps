package com.niveus.jwtdemo.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.niveus.jwtdemo.model.Employee;
import com.niveus.jwtdemo.repository.EmployeeRepository;

@ExtendWith(MockitoExtension.class)
public class EmployeeControllerUnitTests {
	
	@InjectMocks
	EmployeeController employeeController;
	
	@Mock
	EmployeeRepository employeeRepository;
	
	@Test
	public void testGetAllEmployees() {
		
		Employee employee1 = new Employee("Lokesh", "Gupta", "howtodoinjava@gmail.com");
		Employee employee2 = new Employee("Alex", "Gussin", "example@gmail.com");
		List<Employee> list = new ArrayList<Employee>();
		list.addAll(Arrays.asList(employee1, employee2));

		when(employeeRepository.findAll()).thenReturn(list);
		
		// when
		List<Employee> result = employeeController.getAllEmployees();

		// then
		assertThat(result.size()).isEqualTo(2);
				
		assertThat(result.get(0).getFirstName())
								.isEqualTo(employee1.getFirstName());
				
		assertThat(result.get(1).getFirstName())
								.isEqualTo(employee2.getFirstName());
		
	}

}
