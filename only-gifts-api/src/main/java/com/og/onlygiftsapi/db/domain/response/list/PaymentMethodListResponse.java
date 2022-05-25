package com.og.onlygiftsapi.db.domain.response.list;

import java.util.ArrayList;
import java.util.List;

import com.og.onlygiftsapi.db.domain.response.PaymentMethodResponse;

public class PaymentMethodListResponse {
	private List<PaymentMethodResponse> paymentMethods;
	
	public List<PaymentMethodResponse> getPaymentMethodList() {
		if(paymentMethods == null)
			paymentMethods = new ArrayList<>();
		return this.paymentMethods;
	}
	public void add(PaymentMethodResponse response) {
		if(paymentMethods==null)
			paymentMethods = new ArrayList<>();
		paymentMethods.add(response);
	}
}
