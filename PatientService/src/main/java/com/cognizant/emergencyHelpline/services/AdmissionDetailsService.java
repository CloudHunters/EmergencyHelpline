package com.cognizant.emergencyHelpline.services;

import org.springframework.stereotype.Service;

import com.cognizant.emergencyHelpline.dto.SubmitAdmissionRequestDTO;
import com.cognizant.emergencyHelpline.dto.SubmitAdmissionResponseDTO;
import com.cognizant.emergencyHelpline.dto.ViewAdmissionResponseDTO;

@Service
public interface AdmissionDetailsService {
		
	ViewAdmissionResponseDTO viewAdmissionRequest(String mobileNumber);
	SubmitAdmissionResponseDTO submitAdmissionDetails(SubmitAdmissionRequestDTO submitAdmission);

}
