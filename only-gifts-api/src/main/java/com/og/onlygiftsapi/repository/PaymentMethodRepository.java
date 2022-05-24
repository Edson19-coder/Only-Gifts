package com.og.onlygiftsapi.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.og.onlygiftsapi.db.domain.request.PaymentMethodRequest;

@Repository
public interface PaymentMethodRepository {
	Boolean addPaymentMethod(PaymentMethodRequest request);
	Boolean editPaymentMethod(PaymentMethodRequest request);
	Boolean dropPaymentMethod(PaymentMethodRequest request);
	
	Object getPaymentMethod(PaymentMethodRequest request);
	List<?> getPaymentMethods(PaymentMethodRequest request);
}
