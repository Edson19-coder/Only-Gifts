package com.og.onlygiftsapi.db.domain.response.list;

import java.util.ArrayList;
import java.util.List;

import com.og.onlygiftsapi.db.domain.response.PurchaseMResponse;

public class PurchaseMListResponse {
	private List<PurchaseMResponse> purchase;
	
	public List<PurchaseMResponse> getPurchaseList() {
		if(purchase == null)
			purchase = new ArrayList<>();
		return this.purchase;
	}
	public void add(PurchaseMResponse response) {
		if(purchase == null)
			purchase = new ArrayList<>();
		purchase.add(response);
	}
}
