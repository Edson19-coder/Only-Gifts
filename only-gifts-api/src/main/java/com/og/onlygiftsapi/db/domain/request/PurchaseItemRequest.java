package com.og.onlygiftsapi.db.domain.request;

import lombok.Data;

@Data
public class PurchaseItemRequest {
	private Integer purchaseId;
	private Integer productId;
	private Integer quantity;
	private String comment;
}
