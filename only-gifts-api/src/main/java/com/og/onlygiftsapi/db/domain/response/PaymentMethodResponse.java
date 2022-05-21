package com.og.onlygiftsapi.db.domain.response;

import lombok.Data;

@Data
public class PaymentMethodResponse {
	private Integer paymentMethodsId;
	private String method;
	private String cardHolder;
	private String cardNumber;
	private String expirationMonth;
	private String expirationYear;
}
