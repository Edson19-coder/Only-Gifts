package com.og.onlygiftsapi.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.og.onlygiftsapi.db.domain.request.PurchaseItemRequest;
import com.og.onlygiftsapi.db.domain.request.PurchaseRequest;

@Repository
public interface PurchaseRepository {
	List<?> addPurchase(PurchaseRequest request);
	Boolean editPurchase(PurchaseRequest request);
	Boolean addPurchaseItem(PurchaseItemRequest request);
	
	List<?> getPurchase(PurchaseRequest request);
	List<?> getPurchases(PurchaseRequest request);
}
