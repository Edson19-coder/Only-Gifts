package com.og.onlygiftsapi.db.domain.request;

import lombok.Data;

@Data
public class PurchaseRequest {
	private Integer purchaseId;
	private Integer userId;
	private Integer addressId;
	private Integer paymentMethodId;
	private String totalAmount;
	private String status;
}
