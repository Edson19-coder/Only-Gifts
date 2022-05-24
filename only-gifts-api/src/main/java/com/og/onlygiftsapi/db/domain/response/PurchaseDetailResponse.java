package com.og.onlygiftsapi.db.domain.response;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class PurchaseDetailResponse {
	private String country;
	private String name;
	private String streetNumber;
	private Integer postalCode;
	private String state;
	private String city;
	private String suburb;
	private String phone;
	private String additionalInstruction;
	private String cardNumber;
	private String method;
	private Float totalAmount;
	
	private List<PurchaseItemResponse> items;
	
	public void add(PurchaseItemResponse response) {
		if(items == null)
			items = new ArrayList<>();
		items.add(response);
	}
}
