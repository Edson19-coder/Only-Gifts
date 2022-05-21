package com.og.onlygiftsapi.service;

import org.springframework.http.ResponseEntity;

import com.og.onlygiftsapi.db.domain.request.PaymentMethodRequest;

public interface PaymentMethodService {
	ResponseEntity<?> addPaymentMethod(PaymentMethodRequest request);
	ResponseEntity<?> editPaymentMethod(PaymentMethodRequest request);
	ResponseEntity<?> dropPaymentMethod(PaymentMethodRequest request);

	ResponseEntity<?> getPaymentMethod(PaymentMethodRequest request);
	ResponseEntity<?> getPaymentMethods(PaymentMethodRequest request);
}
