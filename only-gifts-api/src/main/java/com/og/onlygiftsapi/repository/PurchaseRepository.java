package com.og.onlygiftsapi.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.og.onlygiftsapi.db.domain.request.PurchaseItemRequest;
import com.og.onlygiftsapi.db.domain.request.PurchaseRequest;

@Repository
public interface PurchaseRepository {
	Integer addPurchase(PurchaseRequest request);
	Boolean editPurchase(PurchaseRequest request);
	Boolean addPurchaseItem(PurchaseItemRequest request);
	
	List<?> getPurchasesByUser(PurchaseRequest request);
	List<?> getPurchasesByManager();
	List<?> getPurchasesByManagerHistory();
	Object getPurchase(PurchaseRequest request);
	Object getPurchaseDetail(PurchaseRequest request);
	List<?> getPurchaseItems(PurchaseRequest request);
}
