package com.niveus.jwtdemo.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.niveus.jwtdemo.config.JwtTokenUtil;
import com.niveus.jwtdemo.model.Employee;

@SpringBootTest(webEnvironment=WebEnvironment.RANDOM_PORT)
@EnableAutoConfiguration
public class EmployeeControllerIntegrationTests {

	@LocalServerPort
    int randomServerPort;
	
	@Autowired
	private JwtTokenUtil jwtTokenUtil;
     
    @Test
    public void testGetAllEmployeesSuccess() throws URISyntaxException 
    {
    	Map<String, Object> claims = new HashMap<>();
    	JwtTokenUtil jwtTokenUtil = new JwtTokenUtil();
    	String token = jwtTokenUtil.doGenerateToken(claims, "test");
        RestTemplate restTemplate = new RestTemplate();
        final String baseUrl = "http://localhost:"+randomServerPort+"/spring-boot-rest-api/api/v1/employees/";
        URI uri = new URI(baseUrl);         
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer "+token); 
        
        HttpEntity request = new HttpEntity(headers);
        ResponseEntity<Employee[]> response = restTemplate.exchange(
                uri,
                HttpMethod.GET,
                request,
                Employee[].class
        );
        
        Assertions.assertEquals(200, response.getStatusCodeValue());
        
    }   
	    
}

