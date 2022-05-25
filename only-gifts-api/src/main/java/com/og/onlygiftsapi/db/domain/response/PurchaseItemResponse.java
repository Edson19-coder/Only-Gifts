package com.og.onlygiftsapi.db.domain.response;

import lombok.Data;

@Data
public class PurchaseItemResponse {
	public Integer productId;
	public String name;
	public Float price;
	public Integer quantity;
	public String commnet;
}
