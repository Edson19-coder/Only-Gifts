package com.og.onlygiftsapi.db.domain.request;

import lombok.Data;

@Data
public class PaymentMethodRequest {
	private Integer paymentMethodsId;
	private Integer userId;
	private String method;
	private String cardHolder;
	private String cardNumber;
	private String cardNumberPublic;
	private String expirationMonth;
	private String expirationYear;
	private String securityNumber;
}
