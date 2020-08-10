package com.cognizant.emergencyHelpline.services.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import com.cognizant.emergencyHelpline.collections.HospitalDetails;
import com.cognizant.emergencyHelpline.dto.HospitalSearchRequestDTO;
import com.cognizant.emergencyHelpline.dto.HospitalSearchResponseDTO;
import com.cognizant.emergencyHelpline.repositories.HospitalRepository;
import com.cognizant.emergencyHelpline.services.HospitalDetailsService;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class HospitalDetailsServiceImpl implements HospitalDetailsService{
	private static final Logger log = LoggerFactory.getLogger(HospitalDetailsServiceImpl.class);

	@Autowired
	private HospitalRepository hospitalRepository;

	@Override
	public List<HospitalSearchResponseDTO> getHospitalDetails() {
		log.info(String.format("Get all Hospital Details"));
		List<HospitalSearchResponseDTO> hospitalDetailsListResponse = new ArrayList<>();
		List<HospitalDetails> hospitalListDetails =  hospitalRepository.findAll();
		for(HospitalDetails hospitalDetails : hospitalListDetails) {
			HospitalSearchResponseDTO resp = new HospitalSearchResponseDTO(hospitalDetails.getHospitalRegnNo(),
					hospitalDetails.getHospitalName(), hospitalDetails.getContactNumber(),
					hospitalDetails.getHospitalType(), hospitalDetails.getEmail(), hospitalDetails.getAddress(),
					hospitalDetails.getCity(), hospitalDetails.getPincode(), hospitalDetails.getState(),
					hospitalDetails.getCountry(), hospitalDetails.getLatitude(), hospitalDetails.getLongitude(),
					hospitalDetails.getIsMultiSpeciality(), hospitalDetails.getIsAmbulanceAvailable(), hospitalDetails.getIsBloodBankAvailable(),
					hospitalDetails.getIsScanAvailable(), hospitalDetails.getIsInsuranceAvailable(),
					hospitalDetails.getBedCapacity(), hospitalDetails.getBedAvailable(),
					hospitalDetails.getIsVentilatorAvailable(), hospitalDetails.getVentilatorCapacity(),
					hospitalDetails.getVentilatorAvailable(), hospitalDetails.getCovidSpeciality(),
					hospitalDetails.getHeartSpeciality(), hospitalDetails.getAccidentSpeciality(),
					hospitalDetails.getOrthoSpeciality(), hospitalDetails.getNeuroSpeciality());
			hospitalDetailsListResponse.add(resp);
		}
		log.info(String.format("received list of Hospital details :  %s", hospitalDetailsListResponse));
		return hospitalDetailsListResponse;
	}

	@Override
	public HospitalSearchResponseDTO findByHospitalRegnNo(String hospitalRegnNo) {
		log.info(String.format("Get patient Details by Mobile Number"));
		HospitalDetails hospitalDetails =  hospitalRepository.findByHospitalRegnNo(hospitalRegnNo);
		HospitalSearchResponseDTO response = new HospitalSearchResponseDTO(hospitalDetails.getHospitalRegnNo(),
					hospitalDetails.getHospitalName(), hospitalDetails.getContactNumber(),
					hospitalDetails.getHospitalType(), hospitalDetails.getEmail(), hospitalDetails.getAddress(),
					hospitalDetails.getCity(), hospitalDetails.getPincode(), hospitalDetails.getState(),
					hospitalDetails.getCountry(), hospitalDetails.getLatitude(), hospitalDetails.getLongitude(),
					hospitalDetails.getIsMultiSpeciality(), hospitalDetails.getIsAmbulanceAvailable(), hospitalDetails.getIsBloodBankAvailable(),
					hospitalDetails.getIsScanAvailable(), hospitalDetails.getIsInsuranceAvailable(),
					hospitalDetails.getBedCapacity(), hospitalDetails.getBedAvailable(),
					hospitalDetails.getIsVentilatorAvailable(), hospitalDetails.getVentilatorCapacity(),
					hospitalDetails.getVentilatorAvailable(), hospitalDetails.getCovidSpeciality(),
					hospitalDetails.getHeartSpeciality(), hospitalDetails.getAccidentSpeciality(),
					hospitalDetails.getOrthoSpeciality(), hospitalDetails.getNeuroSpeciality());
		log.info(String.format("received patient details %s", hospitalDetails));
		return response;
	}	

	/*@Override
	public List<HospitalSearchResponseDTO> getHospitalDetails(HospitalSearchRequestDTO searchData) {
		List<HospitalSearchResponseDTO> hospitalDetailsListResponse = new ArrayList<>();
		HospitalDetails request= new HospitalDetails();
		request.setState(searchData.getState());
		request.setCity(searchData.getCity());
		request.setPincode(searchData.getPincode());
		if(searchData.getSpeciality().equals("covid")) {
			request.setCovidSpeciality("Y");
		} else if(searchData.getSpeciality().equals("Neuro")) {
			request.setNeuroSpeciality("Y");
		} else if(searchData.getSpeciality().equals("Ortho")) {
			request.setOrthoSpeciality("Y");
		} else if(searchData.getSpeciality().equals("heart")) {
			request.setHeartSpeciality("Y");
		} else if(searchData.getSpeciality().equals("accident")) {
			request.setAccidentSpeciality("Y");
		} 
		List<HospitalDetails> hospitalDetailsList =  hospitalRepository.searchHospital(request);
		for(HospitalDetails hospitalDetails : hospitalDetailsList) {
		HospitalSearchResponseDTO response = new HospitalSearchResponseDTO(hospitalDetails.getHospitalRegnNo(),
				hospitalDetails.getHospitalName(), hospitalDetails.getContactNumber(),
				hospitalDetails.getHospitalType(), hospitalDetails.getEmail(), hospitalDetails.getAddress(),
				hospitalDetails.getCity(), hospitalDetails.getPincode(), hospitalDetails.getState(),
				hospitalDetails.getCountry(), hospitalDetails.getLatitude(), hospitalDetails.getLongitude(),
				hospitalDetails.getIsMultiSpeciality(), hospitalDetails.getIsAmbulanceAvailable(), hospitalDetails.getIsBloodBankAvailable(),
				hospitalDetails.getIsScanAvailable(), hospitalDetails.getIsInsuranceAvailable(),
				hospitalDetails.getBedCapacity(), hospitalDetails.getBedAvailable(),
				hospitalDetails.getIsVentilatorAvailable(), hospitalDetails.getVentilatorCapacity(),
				hospitalDetails.getVentilatorAvailable(), hospitalDetails.getCovidSpeciality(),
				hospitalDetails.getHeartSpeciality(), hospitalDetails.getAccidentSpeciality(),
				hospitalDetails.getOrthoSpeciality(), hospitalDetails.getNeuroSpeciality());
		hospitalDetailsListResponse.add(response);
		}
		return hospitalDetailsListResponse;
	}*/
	
	public String saveHospitalDetails(HospitalSearchResponseDTO hospitalProfileDTO) {		
		log.info(String.format("Save Patient Details"));
		HospitalDetails request = new HospitalDetails();
		request.setAccidentSpeciality(hospitalProfileDTO.getAccidentSpeciality());
		request.setAddress(hospitalProfileDTO.getAmbulanceAvailability());
		request.setBedAvailable(hospitalProfileDTO.getBedAvailable());
		request.setBedCapacity(hospitalProfileDTO.getBedCapacity());
		request.setCity(hospitalProfileDTO.getCity());
		request.setContactNumber(hospitalProfileDTO.getContactNumber());
		request.setCountry(hospitalProfileDTO.getCountry());
		request.setCovidSpeciality(hospitalProfileDTO.getCovidSpeciality());
		request.setEmail(hospitalProfileDTO.getEmail());
		request.setHeartSpeciality(hospitalProfileDTO.getHeartSpeciality());
		request.setHospitalName(hospitalProfileDTO.getHospitalName());
		request.setHospitalRegnNo(hospitalProfileDTO.getHospitalRegnNo());
		request.setHospitalType(hospitalProfileDTO.getHospitalType());
		request.setIsAmbulanceAvailable(hospitalProfileDTO.getAmbulanceAvailability());
		request.setIsBloodBankAvailable(hospitalProfileDTO.getBloodBankAvailability());
		request.setIsInsuranceAvailable(hospitalProfileDTO.getInsuranceAvailability());
		request.setIsMultiSpeciality(hospitalProfileDTO.getMultiSpeciality());
		request.setIsVentilatorAvailable(hospitalProfileDTO.getVentilatorAvailable());
		request.setLastUpdDt(new Date());
		request.setLatitude(hospitalProfileDTO.getLatitude());
		request.setLongitude(hospitalProfileDTO.getLongitude());
		request.setNeuroSpeciality(hospitalProfileDTO.getNeuroSpeciality());
		request.setOrthoSpeciality(hospitalProfileDTO.getOrthoSpeciality());
		request.setIsScanAvailable(hospitalProfileDTO.getScanAvailability());
		request.setPincode(hospitalProfileDTO.getPincode());
		request.setState(hospitalProfileDTO.getState());
		request.setVentilatorAvailable(hospitalProfileDTO.getVentilatorAvailable());
		request.setVentilatorCapacity(hospitalProfileDTO.getVentilatorCapacity());		
		HospitalDetails message =  hospitalRepository.save(request);		
		log.info(String.format("save patient details %s", message));
		return ObjectUtils.isEmpty(message) ? "Error in saving data" : "Hospital Information saved successfully";
	}



}
