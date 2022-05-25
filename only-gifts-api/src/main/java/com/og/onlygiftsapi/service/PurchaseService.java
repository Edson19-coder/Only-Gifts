package com.og.onlygiftsapi.service;

import org.springframework.http.ResponseEntity;

import com.og.onlygiftsapi.db.domain.request.PurchaseItemRequest;
import com.og.onlygiftsapi.db.domain.request.PurchaseRequest;
import com.og.onlygiftsapi.db.domain.request.SavePurchaseItemsRequestDTO;

public interface PurchaseService {
	ResponseEntity<?> addPurchase(PurchaseRequest request);
	ResponseEntity<?> editPurchase(PurchaseRequest request);
	ResponseEntity<?> addPurchaseItem(SavePurchaseItemsRequestDTO request);
	ResponseEntity<?> getPurchasesByUser(PurchaseRequest request);
	ResponseEntity<?> getPurchasesByManager();
	ResponseEntity<?> getPurchasesByManagerHistory();
	ResponseEntity<?> getPurchaseDetail(PurchaseRequest request);
}
