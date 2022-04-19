package com.og.onlygiftsapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.og.onlygiftsapi.db.domain.request.ShoppingCartItemAddRequest;
import com.og.onlygiftsapi.globals.Endpoint;
import com.og.onlygiftsapi.service.ShoppingCartService;

import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@Api("V1 Controlador de carrito.")
public class ShoppingCartController {

	@Autowired
	ShoppingCartService shoppingCartService; 
	
	@PostMapping(value = Endpoint.ADD_CART_ITEM, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> addCartItem(@RequestBody ShoppingCartItemAddRequest request) {
		log.info("Add Cart Item");
		return shoppingCartService.addShoppingCartItem(request);
	}
	
	@PostMapping(value = Endpoint.EDIT_CART_ITEM, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> editCartItem(@RequestBody ShoppingCartItemAddRequest request) {
		log.info("Edit Cart Item");
		return shoppingCartService.editShoppingCartItem(request);
	}
	
	@PostMapping(value = Endpoint.DROP_CART_ITEM, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> dropCartItem(@RequestBody ShoppingCartItemAddRequest request) {
		log.info("Drop Cart Item");
		return shoppingCartService.dropShoppingCartItem(request);
	}
	
	@PostMapping(value = Endpoint.DROP_SHOPPING_CART, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> dropShoppingCart(@RequestBody ShoppingCartItemAddRequest request) {
		log.info("Drop Shopping Cart");
		return shoppingCartService.dropShoppingCart(request);
	}
	
	@PostMapping(value = Endpoint.GET_SHOPPING_CART, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<?> getShoppingCart(@RequestBody ShoppingCartItemAddRequest request) {
		log.info("Get Shopping Cart by UserId: " + request.getUserId());
		return shoppingCartService.getShoppingCart(request);
	}
}
