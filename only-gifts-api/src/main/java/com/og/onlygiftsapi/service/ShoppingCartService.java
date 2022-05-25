package com.og.onlygiftsapi.service;

import org.springframework.http.ResponseEntity;

import com.og.onlygiftsapi.db.domain.request.ShoppingCartItemAddRequest;

public interface ShoppingCartService {

	ResponseEntity<?> addShoppingCartItem(ShoppingCartItemAddRequest request);
	ResponseEntity<?> editShoppingCartItem(ShoppingCartItemAddRequest request);
	ResponseEntity<?> dropShoppingCartItem(ShoppingCartItemAddRequest request);
	ResponseEntity<?> dropShoppingCart(ShoppingCartItemAddRequest request);
	
	ResponseEntity<?> getShoppingCart(ShoppingCartItemAddRequest request);
}
