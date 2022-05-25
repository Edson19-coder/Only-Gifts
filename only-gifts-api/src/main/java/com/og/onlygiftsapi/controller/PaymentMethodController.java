package com.og.onlygiftsapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.og.onlygiftsapi.db.domain.request.PaymentMethodRequest;
import com.og.onlygiftsapi.globals.Endpoint;
import com.og.onlygiftsapi.service.PaymentMethodService;

import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@Api("V1 Controlador de metodo de pago.")
public class PaymentMethodController {

	@Autowired
	PaymentMethodService paymentMethodService;
	
	@PostMapping(value = Endpoint.ADD_PAYMENT_METHOD, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> addPaymentMethod(@RequestBody PaymentMethodRequest request) {
		log.info("Add Payment Method");
		return paymentMethodService.addPaymentMethod(request);
	}
	
	@PostMapping(value = Endpoint.EDIT_PAYMENT_METHOD, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> editPaymentMethod(@RequestBody PaymentMethodRequest request) {
		log.info("Edit Payment Method");
		return paymentMethodService.editPaymentMethod(request);
	}
	
	@PostMapping(value = Endpoint.DROP_PAYMENT_METHOD, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> dropPaymentMethod(@RequestBody PaymentMethodRequest request) {
		log.info("Drop Payment Method");
		return paymentMethodService.dropPaymentMethod(request);
	}
	
	@PostMapping(value = Endpoint.GET_PAYMENT_METHOD, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> getPaymentMethod(@RequestBody PaymentMethodRequest request) {
		log.info("Get Payment Method");
		return paymentMethodService.getPaymentMethod(request);
	}
	
	@PostMapping(value = Endpoint.GET_PAYMENT_METHODS, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> getPaymentMethods(@RequestBody PaymentMethodRequest request) {
		log.info("Get Payment Methods");
		return paymentMethodService.getPaymentMethods(request);
	}
}
