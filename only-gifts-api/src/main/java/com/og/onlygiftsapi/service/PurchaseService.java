package com.og.onlygiftsapi.service;

import org.springframework.http.ResponseEntity;

import com.og.onlygiftsapi.db.domain.request.PurchaseItemRequest;
import com.og.onlygiftsapi.db.domain.request.PurchaseRequest;

public interface PurchaseService {
	ResponseEntity<?> addPurchase(PurchaseRequest request);
	ResponseEntity<?> editPurchase(PurchaseRequest request);
	ResponseEntity<?> addPurchaseItem(PurchaseItemRequest request);
}
