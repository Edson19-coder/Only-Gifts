package com.og.onlygiftsapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.og.onlygiftsapi.db.domain.request.AddressRequest;
import com.og.onlygiftsapi.globals.Endpoint;
import com.og.onlygiftsapi.service.AddressService;

import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@Api("V1 Controlador de direcciones.")
public class AddressController {
	
	@Autowired
	AddressService addressService;
	
	@PostMapping(value = Endpoint.ADD_ADDRESS, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> addAddress(@RequestBody AddressRequest request) {
		log.info("Add Address");
		return addressService.addAddress(request);
	}
	
	@PostMapping(value = Endpoint.EDIT_ADDRESS, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> editAddress(@RequestBody AddressRequest request) {
		log.info("Edit Address");
		return addressService.editAddress(request);
	}
	
	@PostMapping(value = Endpoint.DROP_ADDRESS, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> dropAddress(@RequestBody AddressRequest request) {
		log.info("Drop Address");
		return addressService.dropAddress(request);
	}
	
	@PostMapping(value = Endpoint.GET_ADDRESS, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> getAddress(@RequestBody AddressRequest request) {
		log.info("Get Address");
		return addressService.getAddress(request);
	}
	
	@PostMapping(value = Endpoint.GET_ADDRESSES, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> getAddresses(@RequestBody AddressRequest request) {
		log.info("Get Addresses");
		return addressService.getAddresses(request);
	}
}
