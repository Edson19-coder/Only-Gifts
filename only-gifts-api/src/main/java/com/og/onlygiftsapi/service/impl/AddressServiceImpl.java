package com.og.onlygiftsapi.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.og.onlygiftsapi.db.domain.request.AddressRequest;
import com.og.onlygiftsapi.db.domain.response.AddressResponse;
import com.og.onlygiftsapi.db.domain.response.list.AddressListResponse;
import com.og.onlygiftsapi.exeptions.ResourceNotFoundException;
import com.og.onlygiftsapi.repository.AddressRepository;
import com.og.onlygiftsapi.service.AddressService;

@Service
public class AddressServiceImpl implements AddressService {

	@Autowired
	AddressRepository addressRepository; 
	
	public ResponseEntity<?> addAddress(AddressRequest request) {
		Boolean response = addressRepository.addAddress(request);
		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	public ResponseEntity<?> editAddress(AddressRequest request) {
		Boolean response = addressRepository.editAddress(request);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	public ResponseEntity<?> dropAddress(AddressRequest request) {
		Boolean response = addressRepository.dropAddress(request);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	public ResponseEntity<?> getAddress(AddressRequest request) {
		List<?> addresses = addressRepository.getAddress(request);
		if(addresses == null || addresses.isEmpty()) {
			throw new ResourceNotFoundException("Address", "address", request.getAddressId());
		}
		AddressListResponse response = new AddressListResponse();
		for(Object o : addresses) {
			Object[] obj = (Object[]) o;
			AddressResponse address = new AddressResponse();
			address.setAddressId(Integer.valueOf(String.valueOf(obj[0])));
			address.setCountry(String.valueOf(obj[1]));
			address.setName(String.valueOf(obj[2]));
			address.setStreetNumber(String.valueOf(obj[3]));
			address.setPostalCode(Integer.valueOf(String.valueOf(obj[4])));
			address.setState(String.valueOf(obj[5]));
			address.setCity(String.valueOf(obj[6]));
			address.setSuburb(String.valueOf(obj[7]));
			address.setPhone(String.valueOf(obj[8]));
			address.setAdditionalInstruction(String.valueOf(obj[9]));
			response.add(address);
		}
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	public ResponseEntity<?> getAddresses(AddressRequest request) {
		List<?> addresses = addressRepository.getAddresses(request);
		if(addresses == null || addresses.isEmpty()) {
			throw new ResourceNotFoundException("Address", "address", request.getAddressId());
		}
		AddressListResponse response = new AddressListResponse();
		for(Object o : addresses) {
			Object[] obj = (Object[]) o;
			AddressResponse address = new AddressResponse();
			address.setAddressId(Integer.valueOf(String.valueOf(obj[0])));
			address.setCountry(String.valueOf(obj[1]));
			address.setName(String.valueOf(obj[2]));
			address.setStreetNumber(String.valueOf(obj[3]));
			address.setPostalCode(Integer.valueOf(String.valueOf(obj[4])));
			address.setState(String.valueOf(obj[5]));
			address.setCity(String.valueOf(obj[6]));
			address.setSuburb(String.valueOf(obj[7]));
			address.setPhone(String.valueOf(obj[8]));
			address.setAdditionalInstruction(String.valueOf(obj[9]));
			response.add(address);
		}
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	
}
