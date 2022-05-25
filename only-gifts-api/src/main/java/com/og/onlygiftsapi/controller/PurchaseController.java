package com.og.onlygiftsapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.og.onlygiftsapi.db.domain.request.PurchaseItemRequest;
import com.og.onlygiftsapi.db.domain.request.PurchaseRequest;
import com.og.onlygiftsapi.db.domain.request.SavePurchaseItemsRequestDTO;
import com.og.onlygiftsapi.globals.Endpoint;
import com.og.onlygiftsapi.service.PurchaseService;

import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@Api("V1 Controlador de compras.")
public class PurchaseController {

	@Autowired
	PurchaseService purchaseService;

	@PostMapping(value = Endpoint.ADD_PURCHASE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> addPurchase(@RequestBody PurchaseRequest request) {
		log.info("Add Purchase");
		return purchaseService.addPurchase(request);
	}
	
	@PostMapping(value = Endpoint.EDIT_PURCHASE, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> editPurchase(@RequestBody PurchaseRequest request) {
		log.info("Edit Purchase");
		return purchaseService.editPurchase(request);
	}
	
	@PostMapping(value = Endpoint.ADD_PURCHASE_ITEM, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> addPurchaseItem(@RequestBody SavePurchaseItemsRequestDTO request) {
		log.info("Add Purchase Item");
		return purchaseService.addPurchaseItem(request);
	}
	
	@PostMapping(value = Endpoint.GET_PURCHASE_USER, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> getPurchasesByUser(@RequestBody PurchaseRequest request) {
		log.info("Get Purchase User");
		return purchaseService.getPurchasesByUser(request);
	}
	
	@PostMapping(value = Endpoint.GET_PURCHASE_MANAGER, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> getPurchasesByManager() {
		log.info("Get Purchase Manager");
		return purchaseService.getPurchasesByManager();
	}
	
	@PostMapping(value = Endpoint.GET_PURCHASE_MANAGER_HISTORY, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> getPurchasesByManagerHistory() {
		log.info("Get Purchase Manager History");
		return purchaseService.getPurchasesByManagerHistory();
	}
	
	@PostMapping(value = Endpoint.GET_PURCHASE_DETAIL, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> getPurchasesDetail(@RequestBody PurchaseRequest request) {
		log.info("Get Purchase Manager");
		return purchaseService.getPurchaseDetail(request);
	}
}
