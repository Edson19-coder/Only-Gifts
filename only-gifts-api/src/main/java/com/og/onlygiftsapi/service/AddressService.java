package com.og.onlygiftsapi.service;

import org.springframework.http.ResponseEntity;

import com.og.onlygiftsapi.db.domain.request.AddressRequest;

public interface AddressService {
	ResponseEntity<?> addAddress(AddressRequest request);
	ResponseEntity<?> editAddress(AddressRequest request);
	ResponseEntity<?> dropAddress(AddressRequest request);
	
	ResponseEntity<?> getAddress(AddressRequest request);
	ResponseEntity<?> getAddresses(AddressRequest request);
}
