package com.og.onlygiftsapi.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.og.onlygiftsapi.db.domain.request.PurchaseItemRequest;
import com.og.onlygiftsapi.db.domain.request.PurchaseRequest;
import com.og.onlygiftsapi.db.domain.response.PurchaseAddResponse;
import com.og.onlygiftsapi.repository.PurchaseRepository;
import com.og.onlygiftsapi.service.PurchaseService;

@Service
public class PurchaseServiceImpl implements PurchaseService {

	@Autowired
	PurchaseRepository purchaseRepository;
	
	public ResponseEntity<?> addPurchase(PurchaseRequest request) {
		List<?> purchase = purchaseRepository.addPurchase(request); 
		PurchaseAddResponse response = new PurchaseAddResponse();
		for(Object o : purchase) {
			Object[] obj = (Object[]) o;
			System.out.println(String.valueOf(obj[0]));
		}
		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	public ResponseEntity<?> editPurchase(PurchaseRequest request) {
		Boolean response = purchaseRepository.editPurchase(request);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	public ResponseEntity<?> addPurchaseItem(PurchaseItemRequest request) {
		Boolean response = purchaseRepository.addPurchaseItem(request);
		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}
	
}
