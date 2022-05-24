package com.og.onlygiftsapi.db.domain.request;

import java.util.List;

import lombok.Data;

@Data
public class SavePurchaseItemsRequestDTO {
	private List<PurchaseItemRequest> items;
}
