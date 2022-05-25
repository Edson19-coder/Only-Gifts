package com.og.onlygiftsapi.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.og.onlygiftsapi.db.domain.request.PurchaseItemRequest;
import com.og.onlygiftsapi.db.domain.request.PurchaseRequest;
import com.og.onlygiftsapi.db.domain.request.SavePurchaseItemsRequestDTO;
import com.og.onlygiftsapi.db.domain.response.PurchaseAddResponse;
import com.og.onlygiftsapi.db.domain.response.PurchaseDetailResponse;
import com.og.onlygiftsapi.db.domain.response.PurchaseItemResponse;
import com.og.onlygiftsapi.db.domain.response.PurchaseMResponse;
import com.og.onlygiftsapi.db.domain.response.PurchaseUResponse;
import com.og.onlygiftsapi.db.domain.response.list.PurchaseMListResponse;
import com.og.onlygiftsapi.db.domain.response.list.PurchaseUListResponse;
import com.og.onlygiftsapi.exeptions.ResourceNotFoundException;
import com.og.onlygiftsapi.repository.PurchaseRepository;
import com.og.onlygiftsapi.service.PurchaseService;

@Service
public class PurchaseServiceImpl implements PurchaseService {

	@Autowired
	PurchaseRepository purchaseRepository;
	
	public ResponseEntity<?> addPurchase(PurchaseRequest request) {
		Integer response = purchaseRepository.addPurchase(request); 
		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	public ResponseEntity<?> editPurchase(PurchaseRequest request) {
		Boolean response = purchaseRepository.editPurchase(request);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	public ResponseEntity<?> addPurchaseItem(SavePurchaseItemsRequestDTO request) {
		List<PurchaseItemRequest> purchaseItems = request.getItems();
		for(PurchaseItemRequest purchaseItem : purchaseItems) {			
			purchaseRepository.addPurchaseItem(purchaseItem);
		}
		return new ResponseEntity<>(true, HttpStatus.CREATED);
	}

	public ResponseEntity<?> getPurchasesByUser(PurchaseRequest request) {
		List<?> purchases = purchaseRepository.getPurchasesByUser(request);
		if(purchases == null || purchases.isEmpty()) {
			throw new ResourceNotFoundException("Purchases", "user", request.getUserId());
		}
		PurchaseUListResponse response = new PurchaseUListResponse();
		for(Object o : purchases) {
			Object[] obj = (Object[]) o;
			PurchaseUResponse purchase = new PurchaseUResponse();
			purchase.setPurchaseId(Integer.valueOf(String.valueOf(obj[0])));
			purchase.setCreationDate(String.valueOf(obj[1]));
			purchase.setTotalAmount(Float.valueOf(String.valueOf(obj[2])));
			purchase.setStatus(String.valueOf(obj[3]));
			response.add(purchase);
		}
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	
	public ResponseEntity<?> getPurchasesByManager() {
		List<?> purchases = purchaseRepository.getPurchasesByManager();
		if(purchases == null || purchases.isEmpty()) {
			throw new ResourceNotFoundException("Purchases", "manager", "manager");
		}
		PurchaseMListResponse response = new PurchaseMListResponse();
		for(Object o : purchases) {
			Object[] obj = (Object[]) o;
			PurchaseMResponse purchase = new PurchaseMResponse();
			purchase.setPurchaseId(Integer.valueOf(String.valueOf(obj[0])));
			purchase.setCreationDate(String.valueOf(obj[1]));
			purchase.setTotalAmount(Float.valueOf(String.valueOf(obj[2])));
			purchase.setStatus(String.valueOf(obj[3]));
			response.add(purchase);
		}
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	
	public ResponseEntity<?> getPurchasesByManagerHistory() {
		List<?> purchases = purchaseRepository.getPurchasesByManagerHistory();
		if(purchases == null || purchases.isEmpty()) {
			throw new ResourceNotFoundException("Purchases", "manager", "manager");
		}
		PurchaseMListResponse response = new PurchaseMListResponse();
		for(Object o : purchases) {
			Object[] obj = (Object[]) o;
			PurchaseMResponse purchase = new PurchaseMResponse();
			purchase.setPurchaseId(Integer.valueOf(String.valueOf(obj[0])));
			purchase.setCreationDate(String.valueOf(obj[1]));
			purchase.setTotalAmount(Float.valueOf(String.valueOf(obj[2])));
			purchase.setStatus(String.valueOf(obj[3]));
			response.add(purchase);
		}
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	public ResponseEntity<?> getPurchaseDetail(PurchaseRequest request) {
		Object purchaseDetail = purchaseRepository.getPurchaseDetail(request);
		Object[] fields = (Object[]) purchaseDetail;
		PurchaseDetailResponse response = new PurchaseDetailResponse();
		response.setCountry(String.valueOf(fields[0]));
		response.setName(String.valueOf(fields[1]));
		response.setStreetNumber(String.valueOf(fields[2]));
		response.setPostalCode(Integer.valueOf(String.valueOf(fields[3])));
		response.setState(String.valueOf(fields[4]));
		response.setCity(String.valueOf(fields[5]));
		response.setSuburb(String.valueOf(fields[6]));
		response.setPhone(String.valueOf(fields[7]));
		response.setAdditionalInstruction(String.valueOf(fields[8]));
		response.setCardNumber(String.valueOf(fields[9]));
		response.setMethod(String.valueOf(fields[10]));
		response.setTotalAmount(Float.valueOf(String.valueOf(fields[11])));
		
		List<?> items = purchaseRepository.getPurchaseItems(request);
		if(items == null || items.isEmpty()) {
			throw new ResourceNotFoundException("Purchases", "Items", request.getPurchaseId());
		}
		for(Object o : items) {
			Object[] obj = (Object[]) o;
			PurchaseItemResponse purchaseItem = new PurchaseItemResponse();
			purchaseItem.setProductId(Integer.valueOf(String.valueOf(obj[0])));
			purchaseItem.setName(String.valueOf(obj[1]));
			purchaseItem.setPrice(Float.valueOf(String.valueOf(obj[2])));
			purchaseItem.setQuantity(Integer.valueOf(String.valueOf(obj[3])));
			purchaseItem.setCommnet(String.valueOf(obj[4]));
			response.add(purchaseItem);
		}
		
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	
}
