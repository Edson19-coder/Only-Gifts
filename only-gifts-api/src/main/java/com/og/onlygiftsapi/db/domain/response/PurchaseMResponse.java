package com.og.onlygiftsapi.db.domain.response;

import lombok.Data;

@Data
public class PurchaseMResponse {
	private Integer purchaseId;
	private String creationDate;
	private Float totalAmount;
	private String status;
}
