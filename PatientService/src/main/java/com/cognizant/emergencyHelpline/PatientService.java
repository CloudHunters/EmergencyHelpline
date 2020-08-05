package com.cognizant.emergencyHelpline;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class PatientService {

	public static void main(String[] args) {
		SpringApplication.run(PatientService.class, args);
	}

}
