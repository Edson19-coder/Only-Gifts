package com.og.onlygiftsapi.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.og.onlygiftsapi.db.domain.request.ShoppingCartItemAddRequest;
import com.og.onlygiftsapi.db.domain.response.ShoppingCartResponse;
import com.og.onlygiftsapi.db.domain.response.list.ShoppingCartListResponse;
import com.og.onlygiftsapi.exeptions.ResourceNotFoundException;
import com.og.onlygiftsapi.repository.ShoppingCartRepository;
import com.og.onlygiftsapi.service.ShoppingCartService;

@Service
public class ShoppingCartServiceImpl implements ShoppingCartService {

	@Autowired
	ShoppingCartRepository shoppingCartRepository;
	
	public ResponseEntity<?> addShoppingCartItem(ShoppingCartItemAddRequest request) {
		Boolean response = shoppingCartRepository.addShoppingCartItem(request);
		return new ResponseEntity<>(response, HttpStatus.CREATED);
	}

	public ResponseEntity<?> editShoppingCartItem(ShoppingCartItemAddRequest request) {
		Boolean response = shoppingCartRepository.editShoppingCartItem(request);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	public ResponseEntity<?> dropShoppingCartItem(ShoppingCartItemAddRequest request) {
		Boolean response = shoppingCartRepository.dropShoppingCartItem(request);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	public ResponseEntity<?> dropShoppingCart(ShoppingCartItemAddRequest request) {
		Boolean response = shoppingCartRepository.dropShoppingCart(request);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	
	public ResponseEntity<?> getShoppingCart(ShoppingCartItemAddRequest request) {
		List<?> cartItems = shoppingCartRepository.getShoppingCart(request);
		if(cartItems == null || cartItems.isEmpty()) {
			throw new ResourceNotFoundException("Cart", "user", request.getUserId());
		}
		ShoppingCartListResponse response = new ShoppingCartListResponse();
		for(Object o : cartItems) {
			Object[] obj = (Object[]) o;
			ShoppingCartResponse cartItem = new ShoppingCartResponse();
			cartItem.setShoppingCartItemId(Integer.valueOf(String.valueOf(obj[0])));
			cartItem.setProductId(Integer.valueOf(String.valueOf(obj[1])));
			cartItem.setImageUrl(String.valueOf(obj[2]));
			cartItem.setName(String.valueOf(obj[3]));
			cartItem.setQuantity(Integer.valueOf(String.valueOf(obj[4])));
			cartItem.setComment(String.valueOf(obj[5]));
			cartItem.setUnitary(Float.valueOf(String.valueOf(obj[6])));
			cartItem.setByQuantity(Float.valueOf(String.valueOf(obj[7])));
			cartItem.setCategory(String.valueOf(obj[8]));
			response.add(cartItem);
		}
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

}
