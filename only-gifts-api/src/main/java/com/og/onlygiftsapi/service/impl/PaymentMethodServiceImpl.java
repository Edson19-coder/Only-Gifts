package com.og.onlygiftsapi.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.og.onlygiftsapi.db.domain.request.PaymentMethodRequest;
import com.og.onlygiftsapi.db.domain.response.PaymentMethodResponse;
import com.og.onlygiftsapi.db.domain.response.list.PaymentMethodListResponse;
import com.og.onlygiftsapi.exeptions.ResourceNotFoundException;
import com.og.onlygiftsapi.repository.PaymentMethodRepository;
import com.og.onlygiftsapi.service.PaymentMethodService;

@Service
public class PaymentMethodServiceImpl implements PaymentMethodService {

	@Autowired
	PaymentMethodRepository paymentMethodRepository;
	
	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder;
	
	public ResponseEntity<?> addPaymentMethod(PaymentMethodRequest request) {
		
		String cardNumberPublic = request.getCardNumber().substring(Math.max(0, request.getCardNumber().length() - 4));
		request.setCardNumberPublic(cardNumberPublic);
		
		request.setSecurityNumber(bCryptPasswordEncoder.encode(request.getSecurityNumber()));
		request.setCardNumber(bCryptPasswordEncoder.encode(request.getCardNumber()));
		
		Boolean response = paymentMethodRepository.addPaymentMethod(request);
		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	public ResponseEntity<?> editPaymentMethod(PaymentMethodRequest request) {
		request.setSecurityNumber(bCryptPasswordEncoder.encode(request.getSecurityNumber()));
		Boolean response = paymentMethodRepository.editPaymentMethod(request);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	public ResponseEntity<?> dropPaymentMethod(PaymentMethodRequest request) {
		Boolean response = paymentMethodRepository.dropPaymentMethod(request);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	public ResponseEntity<?> getPaymentMethod(PaymentMethodRequest request) {
		List<?> paymentMethods = paymentMethodRepository.getPaymentMethod(request);
		if(paymentMethods == null || paymentMethods.isEmpty()) {
			throw new ResourceNotFoundException("Payment Method", "payment method", request.getPaymentMethodsId());
		}
		PaymentMethodListResponse response = new PaymentMethodListResponse();
		for(Object o : paymentMethods) {
			Object[] obj = (Object[]) o;
			PaymentMethodResponse paymentMethod = new PaymentMethodResponse();
			paymentMethod.setPaymentMethodsId(Integer.valueOf(String.valueOf(obj[0])));
			paymentMethod.setMethod(String.valueOf(obj[1]));
			paymentMethod.setCardHolder(String.valueOf(obj[2]));
			paymentMethod.setCardNumber(String.valueOf(obj[3]));
			paymentMethod.setExpirationMonth(String.valueOf(obj[4]));
			paymentMethod.setExpirationYear(String.valueOf(obj[5]));
			response.add(paymentMethod);
		}
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	public ResponseEntity<?> getPaymentMethods(PaymentMethodRequest request) {
		List<?> paymentMethods = paymentMethodRepository.getPaymentMethods(request);
		if(paymentMethods == null || paymentMethods.isEmpty()) {
			throw new ResourceNotFoundException("Payment Method", "payment method", request.getPaymentMethodsId());
		}
		PaymentMethodListResponse response = new PaymentMethodListResponse();
		for(Object o : paymentMethods) {
			Object[] obj = (Object[]) o;
			PaymentMethodResponse paymentMethod = new PaymentMethodResponse();
			paymentMethod.setPaymentMethodsId(Integer.valueOf(String.valueOf(obj[0])));
			paymentMethod.setMethod(String.valueOf(obj[1]));
			paymentMethod.setCardHolder(String.valueOf(obj[2]));
			paymentMethod.setCardNumber(String.valueOf(obj[3]));
			paymentMethod.setExpirationMonth(String.valueOf(obj[4]));
			paymentMethod.setExpirationYear(String.valueOf(obj[5]));
			response.add(paymentMethod);
		}
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

}
