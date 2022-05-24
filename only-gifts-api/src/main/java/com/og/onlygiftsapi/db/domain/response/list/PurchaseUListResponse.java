package com.og.onlygiftsapi.db.domain.response.list;

import java.util.ArrayList;
import java.util.List;

import com.og.onlygiftsapi.db.domain.response.PurchaseUResponse;

public class PurchaseUListResponse {
	private List<PurchaseUResponse> purchase;
	
	public List<PurchaseUResponse> getPurchaseList() {
		if(purchase == null)
			purchase = new ArrayList<>();
		return this.purchase;
	}
	public void add(PurchaseUResponse response) {
		if(purchase == null)
			purchase = new ArrayList<>();
		purchase.add(response);
	}
}
